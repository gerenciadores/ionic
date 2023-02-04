const modalAjuda = async() => {

    const actionSheet = document.createElement('ion-action-sheet');

    actionSheet.header = 'Ajuda';
    actionSheet.cssClass = 'my-custom-class';
    actionSheet.buttons = [{
            text: 'Cliente',
            handler: () => {
                modalVideo('https://www.youtube.com/embed/gEH3FIDdpqs');
            },
        },
        {
            text: 'Técnico',
            handler: () => {
                modalVideo('https://www.youtube.com/embed/kA_C7vNSOuE');
            },

        },
        {
            text: 'Administrador',
            handler: () => {
                modalVideo('https://www.youtube.com/embed/rwuWRvKc8ic');
            },

        },
        
        {
            text: 'Aplicativo cliente',
            handler: () => {
                modalVideo('https://apis.gerenciadores.com.br/i3/downloads/cliente.apk');
            },

        },
        
        {
            text: 'Aplicativo técnico',
            handler: () => {
                modalVideo('https://apis.gerenciadores.com.br/i3/downloads/tecnico.apk');
            },

        },
        {
            text: 'Fechar',
            icon: 'close',
            role: 'cancel',
            handler: () => {
                console.log('Cancel clicked');
            }
        }

    ];
    document.body.appendChild(actionSheet);
    await actionSheet.present();
    const { role, data } = await actionSheet.onDidDismiss();
}