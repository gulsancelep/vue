const app = Vue.createApp({
    data(){
        return {
            happyNumber: '',
            result: '',
        };
    },

    methods: {    
        numSquareSum(n)
        {
            var squareSum = 0;
            while (n!= 0)
            {
                squareSum += (n % 10) * (n % 10);
                n = parseInt(n/10);
            }
            return squareSum;
        },
        
        isHappy()
        {
            var slow, fast;
        
            slow = fast = this.happyNumber;
            do
            {
                slow = this.numSquareSum(slow);
        
                fast = this.numSquareSum(this.numSquareSum(fast));
        
            }
            while (slow != fast);
        
            this.result = (slow == 1);
        }
                    
    },
}).mount("#app"); 