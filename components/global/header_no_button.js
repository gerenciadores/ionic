Vue.component('header-no-button', {
    props: ['titulo', 'subtitulo'],
    template: `<div>
    <div class="ion-margin">

    <div class="row">

        <div class="col-sm-10">

            <h1 class="tituloPagina">{{ titulo }}</h1>
            <ion-text>
                <p class="subTituloPagina">{{ subtitulo }}</p>
            </ion-text>

        </div>

        <div class="col-sm-2 containerFlex"></div>

    </div>

</div>
</div>`
})

let componentHeaderNoButton = new Vue({
    el: '#headerNoButton',
});