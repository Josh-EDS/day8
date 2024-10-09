const app = new Vue({
    el: '#app',
    data: {
      petName: 'Kaissy (my dog)',
      number1: 8,
      number2: 3,
      sentence1: 'this is a capitalized sentence.',
      sentence2: 'this sentence will be reversed.',
      sentence3: 'make this one special!'
    },
    computed: {
      halfNumber1() {
        return this.number1 / 2;
      }
    },
    methods: {
      pow3(num) {
        return Math.pow(num, 3);
      }
    },
    filters: {
      capitalize(value) {
        if (!value) return '';
        return value.charAt(0).toUpperCase() + value.slice(1);
      },
      reverse(value) {
        if (!value) return '';
        return value.split('').reverse().join('');
      }
    }
  });
  