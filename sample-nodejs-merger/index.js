const {
  readCSV,
  readDirectory,
  readSourcesNames,
  generateCSV,
} = require('./src/utils/fileHandler')
const asyncForEach = require('./src/utils/asyncForEach')
const CatalogModel = require('./src/models/CatalogModel')

const readFileStep = async () => {
  const fileNames = await readDirectory('./input')
  const sources = readSourcesNames(fileNames)
  const data = []
  await asyncForEach(sources, async (sourceName) => {
    data[sourceName] = []
    data[sourceName].catalog = await readCSV(`./input/catalog${sourceName}.csv`)
    data[sourceName].suppliers = await readCSV(
      `./input/suppliers${sourceName}.csv`
    )
    data[sourceName].barcodes = await readCSV(
      `./input/barcodes${sourceName}.csv`
    )
  })
  return data
}

const processMergeStep = async (data) => {
  const catalogObj = new CatalogModel()
  await asyncForEach(Object.keys(data), async (catalogSourceName) => {
    await catalogObj.addProducts(data[catalogSourceName])
  })
  return catalogObj
}

const runApp = async () => {
  // 1. Read CSV Files
  const data = await readFileStep()

  // 2. Process Files and Merge Products
  const mergedResult = await processMergeStep(data)

  // 3. Generate output file
  generateCSV(mergedResult.products)
}

runApp()
