Vue.component('app-notificacoes', {
    template: `<div>
    <div>

    <ion-header>
        <ion-toolbar>
            <ion-buttons slot="secondary">
                <ion-button onclick="fecharNotificacoes()">
                    <i class="ri-close-line icone19px"></i>
                </ion-button>
            </ion-buttons>
            <ion-title>Notificações</ion-title>
        </ion-toolbar>
    </ion-header>


    </div>
</div>`
})

let componentNotificacoesApp = new Vue({
    el: '#NotificacoesApp',
});