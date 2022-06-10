

const appVue = new Vue({
    el: '#app',

    data: {
        testoH1: "Benvenuto all'inferno",
        message: "CHIEDI SCUSA!",
        classeTitolo: "text-danger  display-1",
        imgSrc: "https://picsum.photos/id/2/200/200"
    },

    methods: {
        randomImg(){
            let newImgId = Math.floor(Math.random() * 100) + 1;

            this.imgSrc = "'https://picsum.photos/id/ ${newImgId} /200/200'"
        },
        
        peccato: function() {
            console.log("hai inserito il tuo peccato");

            console.log("this.classeTitolo");

            this.classeTitolo = "text-dark  display-2";
            this.testoH1 = this.message;
        }
    },
});

