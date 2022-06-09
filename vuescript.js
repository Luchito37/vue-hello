const photos = [
    "https://i.picsum.photos/id/613/200/300.jpg?hmac=0SxLnCBuV8ozZLRM2aLsgqfaFXvvICJP-8ELG_wt0gE",
    "https://i.picsum.photos/id/1067/200/300.jpg?hmac=9UpH9GvB6swkUWpIG1N53lIk9vdO4YcIwlH59M8er18",
    "https://i.picsum.photos/id/694/200/300.jpg?hmac=fAbYLUWtofDk7qWl4qOA_p9o2oSC3vylIK8clCV-ttk",
    "https://i.picsum.photos/id/429/200/300.jpg?hmac=6ShrHCg_ioSEwdK2j-TkxO08G50YITxb2h0Z42Y8piI",
    "https://i.picsum.photos/id/778/200/300.jpg?hmac=if-R94hzGN6KBh6JULJgfcPjBM5dqOSgwQqaBNTtFR4",
    "https://i.picsum.photos/id/372/200/300.jpg?hmac=Ng2Fl0_1eMGEpJhcZtvsqTvSOF7vxR0fxsPI6hPm_nk"
];

const appVue = new Vue({
    el: '#app',

    data: {
        testoH1: "Benvenuto all'inferno",
        message: "CHIEDI SCUSA!",
        classeTitolo: "text-danger  display-1",
        photos: photos,
        selected: null,
    },

    methods: {
        randomImg(imgs){
            return imgs[Math.floor(Math.random() * photos.length)];
        },
        
        peccato: function() {
            console.log("hai inserito il tuo peccato");

            console.log("this.classeTitolo");

            this.classeTitolo = "text-dark  display-2";
            this.testoH1 = this.message;
        }
    },
        created (){
            this.selected = this.randomImg(this.photos)
        },
});

