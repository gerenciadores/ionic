window.setTimeout('window.print()',3000);

window.onafterprint = () => {
   console.log("Impressão finalizada");
}