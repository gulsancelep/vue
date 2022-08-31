const app = Vue.createApp({
    data(){
        return {
            inputText: '',
            result: '',
            characterCount: {},
            maxKey: ''
        };
    },
    methods: {
        maxCharacter() {
            for(var i = 0; i < this.inputText.length; i++)
            {
                var key = this.inputText[i];

                if(!this.characterCount[key]){
                this.characterCount[key] = 0;
                }

                this.characterCount[key]++;

                if(this.maxKey == '' || this.characterCount[key] > this.characterCount[this.maxKey]){
                    this.maxKey = key;
                }
            }

            this.result = this.maxKey;
        },
    },
}).mount("#app");