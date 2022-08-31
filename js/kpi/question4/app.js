const app = Vue.createApp({
    data(){
        return {
            reverseText: '',
            result: '',
        };
    },
    methods: {
        reverseString() {        
            for (var i = this.reverseText.length - 1; i >= 0; i--) { 
                this.result += this.reverseText[i]; 
            }
        },
    },
}).mount("#app");