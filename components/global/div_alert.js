Vue.component('div-alert', {
    props: ['dsc', 'cor'],
    template: `
    <div>
        <ion-card :color="cor">
            <div class="ion-margin">
                <h6>{{ dsc }}</h6>
            </div>
        </ion-card>
</div>
`
})

let componentDivAlert = new Vue({
    el: '#componentDivAlert',
});