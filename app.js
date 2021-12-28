const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      text: '',
      name: '',
      confirmedName: ''
    };
  },

  computed: {
    fullname() {
      return this.name ? `${this.name} Hasegawa` : '';
    }
  },

  watch: {
    name(value) {
      console.log(`name was changed to: ${value}!`);
    }
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
    },
    resetText() {
      this.text = ''
    }
  }
});

app.mount('#events');
