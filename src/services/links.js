const linksSection = {
  getLinks: () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          {
            id: 1,
            phone: 3318078464,
            msg: 'Necesito la capacitacion',
            date: '12/04/2018',
            openingRate: 65
          },
          {
            id: 2,
            phone: 3318078464,
            msg: 'Necesito la capacitacion',
            date: '12/04/2018',
            openingRate: 20
          },
          {
            id: 3,
            phone: 3318078464,
            msg: 'Mandar captura de pantalla',
            date: '12/04/2018',
            openingRate: 20
          },
        ])
      }, 750)
    })
  }
}

module.exports = linksSection
