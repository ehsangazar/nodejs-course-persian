const homepageController = (req, res) => {
  res.render('index', {
    title: 'Hey Ehsan Gazar',
    message:
      'Labore in id eu occaecat. Est veniam non ad laborum do id nulla minim labore culpa nisi cillum non commodo. Quis duis officia elit dolor. Minim elit irure ullamco proident minim ut in consectetur.',
    imgSrc: 'assets/img/profile.jpg',
  })
}

module.exports = homepageController
