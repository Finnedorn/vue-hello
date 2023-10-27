const {createApp} = Vue;

const miaApp = createApp({
    data() {
        return {
            title: 'Il mio primo Esercizio con Vue',
            getColored: true,
            pusheenImg: "img/88364-brown-pusheen-rectangle-cat-free-png-hq.jpeg"
        }
    },
    methods: {
        //se la funzione avesse parametri dovrei specificarli pure nell'html
        classChanger() {
            this.getColored = !this.getColored;
        }
    }
});
//nota! ricordati ogni volata di linkare il macro div in cui lavorerai !!!!
miaApp.mount('#app');
