const app = Vue.createApp({
    data(){
        return {
            fibonacciNumber: '',
            result: '',
        };
    },
    methods: {
        fiboSum() {        
            let fibonacci = [];

            if (this.fibonacciNumber <= 0)
            return 0;
        
            fibonacci[0] = 0;
            fibonacci[1] = 1;
        
            let sumFibonacci = fibonacci[0] + fibonacci[1];
        
            for(let i = 2; i <= this.fibonacciNumber; i++)
            {
                fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
                sumFibonacci += fibonacci[i];
            }
        
            this.result = sumFibonacci;
        },
    },
}).mount("#app");