let urlViewAtual = window.location.pathname.split('/')[5];
let urlTipoView = window.location.pathname.split('/')[4];

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

const requireItemCss = (fileLocal) => {
    var corescript = document.createElement('link');
    corescript.rel = 'stylesheet';
    corescript.href = fileLocal;
    var parent = document.getElementsByTagName('body').item(0);
    parent.appendChild(corescript);
    void(0);
}

const requireItemIcon = (fileLocal) => {
    var corescript = document.createElement('link');
    corescript.rel = 'shortcut icon';
    corescript.href = fileLocal;
    var parent = document.getElementsByTagName('body').item(0);
    parent.appendChild(corescript);
    void(0);
}
requireItemCss("../../../assets/@ionic/core/css/ionic.bundle.css?versao=1.0.9");
requireItemCss("https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css");
requireItemCss("../../../assets/css/css.css?versao=1.0.9");
requireItemIcon("../../../assets/img/logo.ico?versao=1.0.9");

requireItem("../../../assets/libs/Chart.min.js");
requireItemModule("../../../assets/@ionic/core/dist/ionic/ionic.esm.js");
requireItem("../../../assets/@ionic/core/dist/ionic/ionic.js");


/*requireItem("");
requireItem("");
requireItem("");
requireItem("");
requireItem("");
requireItem(""); */