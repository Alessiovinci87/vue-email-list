new Vue({
    el: '#app',
    data: {
      emails: []
    },
    created() {
      const apiUrl = 'https://flynn.boolean.careers/exercises/api/random/mail';
  
      for (let i = 0; i < 10; i++) {
        axios.get(apiUrl)
          .then(response => {
            this.emails.push(response.data.response);
          })
          .catch(error => {
            console.error('Error fetching emails:', error);
          });
      }
    }
  });
  