const appVue = new Vue({
    el: '#app',

    data: {
        testoH1: "Benvenuto all'inferno",
        message: "CHIEDI SCUSA!",
        classeTitolo: "text-danger  display-1",
    },

    methods: {
        peccato: function() {
            console.log("hai inserito il tuo peccato");

            console.log("this.classeTitolo");

            this.classeTitolo = "text-dark  display-2";
            this.testoH1 = this.message;
        }
    }
})