const homepageController = (req, res) => {
  res.send(`
    <div>
      <h1>Ehsan Gazar</h1>
      <img src="/assets/img/profile.jpg" />
    </div>  
  `)
}

module.exports = homepageController
