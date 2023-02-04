const modalRelatorios = async() => {

    const actionSheet = document.createElement('ion-action-sheet');

    actionSheet.header = 'Relatórios';
    actionSheet.cssClass = 'my-custom-class';
    actionSheet.buttons = [{
            text: 'Pedidos',
            handler: () => {
                window.location.assign("../relatorio_pedidos/index.html");
            },
        },

        {
            text: 'Fechar',
            icon: 'close',
            role: 'cancel',
            handler: () => {
                return;
            }
        }

    ];

    document.body.appendChild(actionSheet);
    await actionSheet.present();
    const { role, data } = await actionSheet.onDidDismiss();
}