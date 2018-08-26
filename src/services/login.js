export default ({ email, password}) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email === 'juan.reyes@mail.com' && password === '1234') {
          resolve(true);
        } else {
          reject();
        }
      }, 1000)
    });
}
