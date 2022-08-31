const app = Vue.createApp({
    data(){
        return {
            palindromeText: '',
            result: '',
        };
    },
    methods: {
        isPalindrom() {
            if(!this.palindromeText){
                this.result = 'False';
            }
            
            var testArrayOne = this.palindromeText.toLowerCase().split("");

            testArrayOne.reverse();
            
            if(testArrayOne.toString() == this.palindromeText.toLowerCase().split("").toString()){
                this.result = 'True';
            }else{
                this.result = 'False';
            }
        },
    },
}).mount("#app");