const app = Vue.createApp({
    data(){
        return {
            number1: '',
            result: '',
        };
    },
    methods: {
        fizzBuzz() {
            if(this.number1 % 3 == 0 && this.number1 % 5 == 0) {
                 this.result = 'FizzBuzz';
            } else if(this.number1 % 3 == 0) {
                this.result = 'Fizz';

            } else if(this.number1 % 5 == 0) {
                this.result = 'Buzz';

            } else {
                this.result = '3 yada 5\'e bölünmüyor...';
            }
        },
    },
}).mount("#app");