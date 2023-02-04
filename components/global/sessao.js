const sessaoUsuario = () => {
    axios.get(urlSessao, {}).then(function(response) {
        let statusSessao = response.data;
        if(urlViewAtual != 'entrar'){
           if (statusSessao == 1) {
            // console.log('logado');
            } else {
            redirectPage('../entrar/');
            }  
        }
    });
}

sessaoUsuario();