Vue.component('div-alert', {
    props: ['dsc', 'cor'],
    template: `
    <div>
        <ion-card :color="cor">
            <div class="ion-margin">
                <p>{{ dsc }}</p>
            </div>
        </ion-card>
</div>
`
})

let componentDivAlert = new Vue({
    el: '#componentDivAlert',
});