const aboutController = (req, res) => {
  res.render('about', {
    title: 'About Ehsan Gazar',
    message:
      'Fugiat nisi magna cillum ipsum. Ex tempor excepteur quis laboris sunt aliqua pariatur irure tempor. Commodo Lorem tempor sint dolore commodo laborum Lorem enim sunt consectetur reprehenderit amet. Consectetur pariatur eu aliquip ex voluptate nisi adipisicing nisi in aute id et sit. Consequat magna culpa cupidatat reprehenderit nisi qui aute veniam fugiat veniam irure. Voluptate officia minim laboris minim proident ullamco fugiat non cupidatat eiusmod reprehenderit ad veniam sit. Nisi sint do excepteur anim nulla nulla aliquip dolore consectetur minim pariatur.',
    imgSrc: 'assets/img/profile.jpg',
  })
}

module.exports = aboutController
