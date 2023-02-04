Vue.component('menu-app', {
    props: ['rota'],
    template: `<div>
    <div class="menuPc">

    <div class="esquerda" style="box-shadow: 0 6px 24px rgba(0, 0, 0, .1); min-height: 100vh; height: 100%;">
    
    <div class="centro">
        <h1 style="text-transform: uppercase;">{{ apelidoApp }}</h1>
    </div>

        <div class="ion-margin">
            
            <div style="padding: 2%;" v-for="menu in menus" :data-nome="menu.nome" onmouseenter="alertaNomeRota(this.dataset.nome)">
                <div class="rotaItemMenuPc itemMenuPcAtivar" :onclick="menu.link" style="cursor: pointer; display: flex; flex-direction: row; align-items: center;" v-if="rota == menu.rota">
                    &nbsp&nbsp&nbsp&nbsp <i :class="menu.icone + ' iconeMenu'"></i>&nbsp&nbsp<h6 class="itemMenuPc">
                     {{ menu.nome }}
                    </h6>
                </div>
                 <div class="rotaItemMenuPc itemMenuPcAtivar" :onclick="menu.link" style="cursor: pointer; display: flex; flex-direction: row; align-items: center;" v-else-if="rota.split('_')[0].includes(menu.rota) == true">
                    &nbsp&nbsp&nbsp&nbsp <i :class="menu.icone + ' iconeMenu'"></i>&nbsp&nbsp <h6 class="itemMenuPc ">
                     {{ menu.nome }}
                    </h6>
                </div>
                 <div class="rotaItemMenuPc" v-else :onclick="menu.link" style="cursor: pointer; display: flex; flex-direction: row; align-items: center;">
                     &nbsp&nbsp&nbsp&nbsp <i :class="menu.icone + ' iconeMenu'"></i>&nbsp&nbsp<h6 class="itemMenuPc">
                    {{ menu.nome }}
                    </h6>
                 </div>
               
            </div>
            
        </div>

    </div>
</div>
<div>`,
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

let componentMenu = new Vue({
    el: '#menuApp',
});

const alertaNomeRota = (nome) => {
   toastNotificacao('light', 'link-outline', nome, 500, 'Ok'); 
}

const verificarRota = (rota) => {
    localStorage.setItem("rotaAtiva", rota);
}

const abrirNotificacoes = () => {
    getElementId('colunaSistema').style.display = "none";
    getElementId('colunaMenu').style.display = "none";
    getElementClass('notificacoes').style.display = "block";
    getElementClass('notificacoes').classList.add("animacaoCarregamento");
}

const fecharNotificacoes = () => {
    getElementId('colunaSistema').style.display = "";
    getElementId('colunaMenu').style.display = "";
    getElementClass('notificacoes').style.display = "none";
    getElementClass('notificacoes').classList.remove("animacaoCarregamento");
}

requireItem('../../../assets/components/empresas/modal_relatorios.js?versao=1.0.10');
requireItem('../../../assets/components/empresas/modal_ajuda.js?versao=1.0.10');

if (urlViewAtual != 'sem_permissao') {
    console.log(urlViewAtual)
    axios.get(urlVerificarPermissoes, {}).then((response) => {
        if (response.data[0].total <= 0) {
            redirectPage("../sem_permissao/index.html");
        }
    }).catch((error) => {
        redirectPage("../entrar/index.html");
    });
} 