Vue.component('header-crud', {
    props: ['titulo', 'subtitulo', 'urltela'],
    template: `<div>
        <div class="ion-margin">

            <div class="row">
        
                <div class="col-sm-10">
        
                    <ion-button color="light" id="popoverMenu">
                        <i class="ri-menu-line icone19px"></i>
                    </ion-button>
        
                    <ion-button color="light" onclick="abrirNotificacoes()">
                        <i class="ri-notification-line icone19px"></i>
                    </ion-button>
        
                    <ion-button color="light" onclick="location.reload()">
                        <i class="ri-refresh-line icone19px"></i>
                    </ion-button>
        
                    <ion-button color="light" onclick="javascript:history.go(-1)">
                        <i class="ri-arrow-left-s-line icone19px"></i>
                    </ion-button>
                    
                    <ion-button color="light" onclick="alterarModoTela()">
                        <i v-if="modoTema == 'dark'" class="ri-moon-line icone19px"></i>
                        <i v-if="modoTema != 'dark'" class="ri-sun-line icone19px"></i>
                    </ion-button>
        
                    <h1 class="tituloPagina">{{ titulo }}</h1>
                    <ion-text>
                        <p class="subTituloPagina">{{ subtitulo }}</p>
                    </ion-text>
        
                </div>
        
                <div class="col-sm-2 containerFlex">
                    <ion-button href="adicionar.html" class="minWith100" color="dark" expand="full">
                        Inserir
                        <ion-icon name="add-outline" slot="end"></ion-icon>
                    </ion-button>
                </div>
        
            </div>
        
        </div>
<ion-popover trigger="popoverMenu" dismiss-on-select="true">
    <ion-content>
        <ion-list>
            <ion-item v-for="menu in menus" :onclick="menu.link" button="true" detail="false"><p style="font-weight: 500;">{{ menu.nome }}</p></ion-item>
        </ion-list>
    </ion-content>
</ion-popover>

</div>`,
    data: function() {
        return {
            menus: '',
        }
    },
    methods: {
        fetchData() {
            axios.get(urlMenuEmpresas, {}).then((response) => {
                this.menus = response.data;
            });
        },
    },
    created: function() {
        this.fetchData();
    }
});

let componentHeaderCrud = new Vue({
    el: '#headerCrud',
});