const loginSection = {
  login: ({ email, password}) => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (email === 'juan.reyes@mail.com' && password === '1234') {
            localStorage.setItem('LOGIN', true)
            resolve(true)
          } else {
            reject()
          }
        }, 1000)
      })
  },
  auth: () => {
    return new Promise((resolve) => {
      if (localStorage.getItem('LOGIN')) {
        resolve(true)
      } else {
        resolve(false)
      }
    })
  },
  logout() {
    return new Promise((resolve) => {
      localStorage.removeItem('LOGIN')
      resolve()
    })
  }
}

module.exports = loginSection
