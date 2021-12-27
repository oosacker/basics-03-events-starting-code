const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      text: '',
      name: '',
      confirmedName: ''
    };
  },
  methods: {
    increment() {
      this.counter++;
    },
    decrement() {
      this.counter--;
    },
    setName(event, name) {
      this.name = event.target.value + ' ' + name;
    },
    setConfirmedName() {
      this.confirmedName = this.name;
    },
    submit() {
      console.log('submit form!!')
    }
  }
});

app.mount('#events');
