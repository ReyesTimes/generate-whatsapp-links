const mixinAuth = {
  methods: {
    auth() {
      if (localStorage.getItem('LOGIN')) {
        if (this.$route.name === 'login') {
          this.$router.push('/');
        }
      } else {
        if (this.$route.name !== 'login') {
          this.$router.push('/login');
        }
      }
    }
  }
}

module.exports = mixinAuth
