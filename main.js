Vue.createApp({
  data() {
    return {
      submited: false,
      ratings: ["1", "2", "3", "4", "5"],
      selected: undefined,
    };
  },
  methods: {

      handleSubmit() {
        console.log(this.selected)
          this.submited = true
      }
  }
}).mount('#app');
