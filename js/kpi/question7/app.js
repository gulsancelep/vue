const app = Vue.createApp({
    data(){
        return {
            num: [],
            targetValue: '',
            result: '',
            aaa: [1,1,1]
        };
    },
    methods: {
        twoSum() {
            const numsObjs = {};

            for (let i = 0; i < this.num.length; i++) {
              const currentValue = this.num[i];
          
              if (this.targetValue - currentValue in numsObjs) {
                  console.log(this.result = [i, numsObjs[this.targetValue - currentValue]]);

                return this.result = [i, numsObjs[this.targetValue - currentValue]];
              }
              numsObjs[this.num[i]] = i;
            }
          
            return [-1, -1];
        },                
    },
}).mount("#app"); 