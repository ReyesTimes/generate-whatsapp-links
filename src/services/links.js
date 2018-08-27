const linksSection = {
  getLinks: ( currentPage = 1 ) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          {
            id: 1,
            phone: 3318078464,
            msg: 'Buenos%20dias%0A%0A%0ANecesitaamos%20nuevos%20elementos%0A%0Afavor%20de%20ahorrar%20agua',
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
          {
            id: 4,
            phone: 3318078464,
            msg: 'Standup meeting',
            date: '12/04/2018',
            openingRate: 20
          },
          {
            id: 5,
            phone: 3318078464,
            msg: 'Doce dias',
            date: '12/04/2018',
            openingRate: 20
          },
        ])
      }, 750)
    })
  }
}

module.exports = linksSection
