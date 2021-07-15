const asyncForEach = require('../utils/asyncForEach')

class CatalogModel {
  constructor() {
    this.products = []
  }

  async checkExtintance(productData) {
    let check = false
    await asyncForEach(this.products, async (product) => {
      await asyncForEach(product.Barcodes, (barcode) => {
        if (productData.Barcodes.includes(barcode)) {
          check = true
        }
      })
    })
    return check
  }

  async addProduct(productData) {
    if (!(await this.checkExtintance(productData))) {
      this.products.push(productData)
    }
  }

  async addProducts(catalogData) {
    await asyncForEach(catalogData.catalog, async (catalogRow) => {
      const productData = {}
      productData.SKU = catalogRow.SKU
      productData.Description = catalogRow.Description

      productData.Barcodes = []
      await asyncForEach(catalogData.barcodes, async (barcodeRow) => {
        if (barcodeRow.SKU === catalogRow.SKU) {
          productData.Barcodes.push(barcodeRow.Barcode)
        }
        productData.SupplierID = barcodeRow.SupplierID
      })
      productData.SupplierName = catalogData.suppliers.find((supplierRow) => {
        return (supplierRow.ID = productData.SupplierID)
      }).Name

      await this.addProduct(productData)
    })
    return this.products
  }
}

module.exports = CatalogModel
