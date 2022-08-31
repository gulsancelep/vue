const app = Vue.createApp({
    data(){
        return {
            num: [],
            result: '',
        };
    },
    methods: {
        solution() {
            let binaryValue = (this.num >>> 0).toString(2);
            let lengthArr = [];
            let length = 1;
          
            for(let i = 0; i < binaryValue.length; i++){
              if(binaryValue[i] == 0){
                if(binaryValue[i + 1] == 1){
                  lengthArr.push(length);
                  
                  length = 0;
                }
          
                length++;
              }
            }
          
            this.result = lengthArr.length ? Math.max(...lengthArr) : 0;
        },                
    },
}).mount("#app");