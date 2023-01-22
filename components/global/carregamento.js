const exibirCarregamento = () => {
    const loading1s = document.createElement('ion-loading');
    loading1s.cssClass = 'my-custom-class';
    loading1s.message = 'Aguarde...';
    loading1s.duration = 100;
    document.body.appendChild(loading1s);
    loading1s.present();
}

const verificarModoDarkOuLight = () => {
    let modoTema = localStorage.getItem("modoTema");
    if (modoTema == 'dark') {
        document.body.className += 'dark';
    } else {
        document.body.className += '';
    }
}

window.onload = (e) => {
    exibirCarregamento();
    verificarModoDarkOuLight();
}