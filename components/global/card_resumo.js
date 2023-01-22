Vue.component('card-resumo', {
    props: ['nome', 'valor', 'icone', 'cor', 'href', 'corcard', 'hrefcard'],
    template: `
    <ion-card :color="corcard">
    <ion-item :href="hrefcard">
        <ion-label class="ion-margin">
            <h1 style="font-size: 25px; font-weight: 900; margin-top: 0;">{{ valor }}</h1>
            <h6 style="font-size: 20px; font-weight: 300; margin-top: 5px;">{{ nome }}</h6>
            <ion-fab vertical="top" horizontal="end" slot="fixed">
                <ion-button :color="cor" :href="href">
                    <i :class="icone"></i>
                </ion-button>
            </ion-fab>
        </ion-label>
    </ion-item>
</ion-card>
`
})

Vue.component('card-resumo-lite', {
    props: ['nome', 'valor', 'icone', 'cor', 'href', 'corcard', 'hrefcard'],
    template: `
    <ion-card :color="corcard">
    <div class="ion-margin" :href="hrefcard">
        <ion-label class="ion-margin">
            <h1 style="font-size: 25px; font-weight: 900; margin-top: 0;">{{ valor }}</h1>
            <h6 style="font-size: 20px; font-weight: 300; margin-top: 25px;">{{ nome }}</h6>
            <ion-fab vertical="top" horizontal="end" slot="fixed">
                <ion-button :color="cor" :href="href">
                    <i :class="icone"></i>
                </ion-button>
            </ion-fab>
        </ion-label>
    </div>
</ion-card>
`
})

let componentCardResumoApp = new Vue({
    el: '#componentCardResumo',
});