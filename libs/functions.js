const carregarConstantesAplicacao = () => {
    document.querySelector('title').textContent = nomeDoAplicativo;
}

carregarConstantesAplicacao();

const requireItem = (fileLocal) => {
    var corescript = document.createElement('script');
    corescript.type = 'text/javascript';
    corescript.src = fileLocal;
    var parent = document.getElementsByTagName('body').item(0);
    parent.appendChild(corescript);
    void(0);
}

const requireItemModule = (fileLocal) => {
    var corescript = document.createElement('script');
    corescript.type = 'module';
    corescript.src = fileLocal;
    var parent = document.getElementsByTagName('body').item(0);
    parent.appendChild(corescript);
    void(0);
}

const getElementClassValue = (element) => {
    return document.querySelector('.' + element).value;
}

const getElementIdValue = (element) => {
    return document.getElementById(element).value;
}

const getElementClass = (element) => {
    return document.querySelector('.' + element);
}

const getElementId = (element) => {
    return document.getElementById(element);
}

const setTimeoutFuncoes = (funcao, time) => {
    setTimeout(funcao, time);
}

const returnButtonConfirmar = () => {
    getElementClass('mensagemSucesso').innerHTML = 'Confirmar  <ion-icon name="checkmark-outline" slot="end"></ion-icon>';
    getElementClass('mensagemSucesso').color = "dark";
}

const messageSuccessCadastro = () => {
    setTimeoutFuncoes(returnButtonConfirmar, 3000);
    getElementClass('mensagemSucesso').innerHTML = 'InformaÃ§Ãµes inseridas  <ion-icon name="checkmark-done-outline" slot="end"></ion-icon>';
    getElementClass('mensagemSucesso').color = "success";
}

const messageErroCadastro = () => {
    setTimeoutFuncoes(returnButtonConfirmar, 3000);
    getElementClass('mensagemSucesso').innerHTML = 'Ocorreu algum erro <ion-icon name="alert-outline" slot="end"></ion-icon>';
    getElementClass('mensagemSucesso').color = "danger";
}

const messageSuccessAtualizar = () => {
    setTimeoutFuncoes(returnButtonConfirmar, 3000);
    getElementClass('mensagemSucesso').innerHTML = 'InformaÃ§Ãµes atualizadas <ion-icon name="checkmark-done-outline" slot="end"></ion-icon>';
    getElementClass('mensagemSucesso').color = "success";
}

const messageSuccessApagar = () => {
    setTimeoutFuncoes(returnButtonConfirmar, 3000);
    getElementClass('mensagemSucesso').innerHTML = 'InformaÃ§Ãµes excluÃ­das <ion-icon name="checkmark-done-outline" slot="end"></ion-icon>';
    getElementClass('mensagemSucesso').color = "success";
}

const redirectPage = (rota) => {
    window.location.href = rota;
}

const redirectPageBlank = (rota) => {
    window.open(rota, '_blank');
}

async function buscarEndereco() {

    let cep = document.querySelector(".cep").value;

    await axios.get('https://viacep.com.br/ws/' + cep + '/json/', {

    }).then(function(response) {
        document.querySelector(".cidade").value = response.data.localidade;
        document.querySelector(".endereco").value = response.data.logradouro;
        document.querySelector(".bairro").value = response.data.bairro;
        document.querySelector(".uf").value = response.data.uf;
    });

}

//requireItemModule('https://ionic-nine.vercel.app/@ionic/core/dist/ionic/ionic.esm.js');
//requireItem('https://ionic-nine.vercel.app/@ionic/core/dist/ionic/ionic.js');

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const idPage = urlParams.get('id');

const sleep = (milliseconds) => {
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}

const CopiarTexto = async(classeDoInput) => {

    let textoCopiar = getElementClassValue(classeDoInput);

    navigator.clipboard.writeText(textoCopiar).then(async() => {
        const toast = await document.createElement('ion-toast');
        toast.color = 'success';
        toast.icon = 'checkmark-outline';
        toast.message = 'Texto copiado com sucesso!';
        toast.duration = 60000;
        toast.buttons = [{
            text: 'Ok',
            role: 'cancel',
            handler: () => {
                console.log('Alerta fechado');
            }
        }];

        document.body.appendChild(toast);
        await toast.present();

    }, async(err) => {
        const toast = await document.createElement('ion-toast');
        toast.color = 'danger';
        toast.icon = 'alert-outline';
        toast.message = 'NÃ£o foi possÃ­vel copiar o texto do elemento selecionado!';
        toast.duration = 60000;
        toast.buttons = [{
            text: 'Ok',
            role: 'cancel',
            handler: () => {
                console.log('Alerta fechado');
            }
        }];

        document.body.appendChild(toast);
        await toast.present();

    });

}

const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {

        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);

        fileReader.onload = () => {
            resolve(fileReader.result);
        };

        fileReader.onerror = (error) => {
            reject(error);
        };
    });
};

// Upload de imagens base64 para carregamento offline.

const carregarImagem = async(id) => {
    const file = document.getElementById(id).files[0];
    const base64 = await convertBase64(file);
    document.getElementById('imgItem' + id).src = base64;
    document.getElementById('codigoItem' + id).value = base64;
}

const consultaPorId = async(url, id) => {
    const data = (await endConsultaPorId(url, id));
    return data;
}

const endConsultaPorId = async(url, id) => {
    return await axios.get(url + id).then(res => res.data.data).catch(error => '0');
}

const carregarGraficos = (url, tituloSelecao, colunaSeleciona, colunaValores, tipoDeChart, idDoElemento) => {
    let apiUrl = url;
    let months = []
    let cost = [];
    fetch(apiUrl).then(response => {
        return response.json();
    }).then(data => {
        for (let i = 0; i < data.length; i++) {
            months.push(tituloSelecao + data[i][colunaSeleciona]);
            cost.push(parseInt(data[i][colunaValores]));
        }
        dataset = adicionarDadosAoGrafico(colunaValores, cost, 'black', 'red');
        lerDadosDoGrafico(dataset, months, tipoDeChart, idDoElemento);
    }).catch(err => {
        console.log(err);
    });
}

const adicionarDadosAoGrafico = (title, Data, bgcolor, bordercolor) => {
    return [{
        label: title,
        data: Data,
        backgroundColor: [
            "#63b598", "#ce7d78", "#ea9e70", "#a48a9e", "#c6e1e8", "#648177", "#0d5ac1", "#f205e6", "#1c0365", "#14a9ad", "#4ca2f9", "#a4e43f", "#d298e2", "#6119d0", "#d2737d", "#c0a43c", "#f2510e", "#651be6", "#79806e", "#61da5e", "#cd2f00", "#9348af", "#01ac53", "#c5a4fb", "#996635", "#b11573", "#4bb473", "#75d89e", "#2f3f94", "#2f7b99", "#da967d", "#34891f", "#b0d87b", "#ca4751", "#7e50a8", "#c4d647", "#e0eeb8", "#11dec1", "#289812", "#566ca0", "#ffdbe1", "#2f1179", "#935b6d", "#916988", "#513d98", "#aead3a", "#9e6d71", "#4b5bdc", "#0cd36d", "#250662", "#cb5bea", "#228916", "#ac3e1b", "#df514a", "#539397", "#880977", "#f697c1", "#ba96ce", "#679c9d", "#c6c42c", "#5d2c52", "#48b41b", "#e1cf3b", "#5be4f0", "#57c4d8", "#a4d17a", "#225b8", "#be608b", "#96b00c", "#088baf", "#f158bf", "#e145ba", "#ee91e3", "#05d371", "#5426e0", "#4834d0", "#802234", "#6749e8", "#0971f0", "#8fb413", "#b2b4f0", "#c3c89d", "#c9a941", "#41d158", "#fb21a3", "#51aed9", "#5bb32d", "#807fb", "#21538e", "#89d534", "#d36647", "#7fb411", "#0023b8", "#3b8c2a", "#986b53", "#f50422", "#983f7a", "#ea24a3", "#79352c", "#521250", "#c79ed2", "#d6dd92", "#e33e52", "#b2be57", "#fa06ec", "#1bb699", "#6b2e5f", "#64820f", "#1c271", "#21538e", "#89d534", "#d36647", "#7fb411", "#0023b8", "#3b8c2a", "#986b53", "#f50422", "#983f7a", "#ea24a3", "#79352c", "#521250", "#c79ed2", "#d6dd92", "#e33e52", "#b2be57", "#fa06ec", "#1bb699", "#6b2e5f", "#64820f", "#1c271", "#9cb64a", "#996c48", "#9ab9b7", "#06e052", "#e3a481", "#0eb621", "#fc458e", "#b2db15", "#aa226d", "#792ed8", "#73872a", "#520d3a", "#cefcb8", "#a5b3d9", "#7d1d85", "#c4fd57", "#f1ae16", "#8fe22a", "#ef6e3c", "#243eeb", "#1dc18", "#dd93fd", "#3f8473", "#e7dbce", "#421f79", "#7a3d93", "#635f6d", "#93f2d7", "#9b5c2a", "#15b9ee", "#0f5997", "#409188", "#911e20", "#1350ce", "#10e5b1", "#fff4d7", "#cb2582", "#ce00be", "#32d5d6", "#17232", "#608572", "#c79bc2", "#00f87c", "#77772a", "#6995ba", "#fc6b57", "#f07815", "#8fd883", "#060e27", "#96e591", "#21d52e", "#d00043", "#b47162", "#1ec227", "#4f0f6f", "#1d1d58", "#947002", "#bde052", "#e08c56", "#28fcfd", "#bb09b", "#36486a", "#d02e29", "#1ae6db", "#3e464c", "#a84a8f", "#911e7e", "#3f16d9", "#0f525f", "#ac7c0a", "#b4c086", "#c9d730", "#30cc49", "#3d6751", "#fb4c03", "#640fc1", "#62c03e", "#d3493a", "#88aa0b", "#406df9", "#615af0", "#4be47", "#2a3434", "#4a543f", "#79bca0", "#a8b8d4", "#00efd4", "#7ad236", "#7260d8", "#1deaa7", "#06f43a", "#823c59", "#e3d94c", "#dc1c06", "#f53b2a", "#b46238", "#2dfff6", "#a82b89", "#1a8011", "#436a9f", "#1a806a", "#4cf09d", "#c188a2", "#67eb4b", "#b308d3", "#fc7e41", "#af3101", "#ff065", "#71b1f4", "#a2f8a5", "#e23dd0", "#d3486d", "#00f7f9", "#474893", "#3cec35", "#1c65cb", "#5d1d0c", "#2d7d2a", "#ff3420", "#5cdd87", "#a259a4", "#e4ac44", "#1bede6", "#8798a4", "#d7790f", "#b2c24f", "#de73c2", "#d70a9c", "#25b67", "#88e9b8", "#c2b0e2", "#86e98f", "#ae90e2", "#1a806b", "#436a9e", "#0ec0ff", "#f812b3", "#b17fc9", "#8d6c2f", "#d3277a", "#2ca1ae", "#9685eb", "#8a96c6", "#dba2e6", "#76fc1b", "#608fa4", "#20f6ba", "#07d7f6", "#dce77a", "#77ecca"
        ],
        borderColor: '#000000',
        borderWidth: 0.5
    }];
}

const lerDadosDoGrafico = (dataset, Labels, type, id) => {
    const ctx = document.getElementById(id).getContext('2d');
    const myChart = new Chart(ctx, {
        type: type,
        data: {
            labels: Labels,
            datasets: dataset
        },
    });
}

const toastNotificacao = (cor, icone, texto, tempo, textoBotao) => {

    const toast = document.createElement('ion-toast');

    toast.color = cor;
    toast.icon = icone;
    toast.message = texto;
    toast.duration = tempo;
    toast.buttons = [{
        text: textoBotao,
        handler: () => {
            return;
        }
    }];

    document.body.appendChild(toast);

    toast.present();

}

const exportarParaExcel = (elem, tabelaExport) => {
    let table = getElementClass(tabelaExport);
    let html = table.outerHTML;
    let url = 'data:application/vnd.ms-excel,' + escape(html); // Set your html table into url 
    elem.setAttribute("href", url);
    elem.setAttribute("download", "relatorio.xls"); // Choose the file name
    return false;
}

const falarTexto = () => {
    return new Promise(function(resolve, reject) {
        let id;
        id = setInterval(() => {
            if (speechSynthesis.getVoices().length !== 0) {
                resolve(speechSynthesis.getVoices());
                clearInterval(id);
            }
        }, 10);
    });
}

const lerTexto = (textoParaLer) => {
    falarTexto().then((voices) => {
        let msg = new SpeechSynthesisUtterance();
        msg.voice = voices[157];
        msg.default = false;
        msg.volume = 1;
        msg.rate = 0.85;
        msg.pitch = 1;
        msg.text = textoParaLer;
        msg.lang = 'pt-BR';
        speechSynthesis.speak(msg);
        let voicess = window.speechSynthesis.getVoices();
    });
}
