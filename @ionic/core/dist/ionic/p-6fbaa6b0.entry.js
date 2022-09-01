/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import{r as t,e as i,h as o,H as r,i as e}from"./p-48f74811.js";import{g as n}from"./p-18d5f1a9.js";const s=class{constructor(o){t(this,o),this.ionInputModeChange=i(this,"ionInputModeChange",7),this.useInputMode=!1,this.isInHighlightBounds=t=>{const{highlightEl:i}=this;if(!i)return!1;const o=i.getBoundingClientRect();return!(t.clientX<o.left||t.clientX>o.right||t.clientY<o.top||t.clientY>o.bottom)},this.onFocusOut=t=>{const{relatedTarget:i}=t;(!i||"ION-PICKER-COLUMN-INTERNAL"!==i.tagName&&i!==this.inputEl)&&this.exitInputMode()},this.onFocusIn=t=>{const{target:i}=t;if("ION-PICKER-COLUMN-INTERNAL"===i.tagName&&!this.actionOnClick){const t=i;t.numericInput?this.enterInputMode(t,!1):this.exitInputMode()}},this.onClick=()=>{const{actionOnClick:t}=this;t&&(t(),this.actionOnClick=void 0)},this.onPointerDown=t=>{const{useInputMode:i,inputModeColumn:o,el:r}=this;if(this.isInHighlightBounds(t))if(i)this.actionOnClick="ION-PICKER-COLUMN-INTERNAL"===t.target.tagName?o&&o===t.target?()=>{this.enterInputMode()}:()=>{this.enterInputMode(t.target)}:()=>{this.exitInputMode()};else{const i=1===r.querySelectorAll("ion-picker-column-internal.picker-column-numeric-input").length?t.target:void 0;this.actionOnClick=()=>{this.enterInputMode(i)}}else this.actionOnClick=()=>{this.exitInputMode()}},this.enterInputMode=(t,i=!0)=>{const{inputEl:o,el:r}=this;o&&r.querySelector("ion-picker-column-internal.picker-column-numeric-input")&&(this.useInputMode=!0,this.inputModeColumn=t,i?(this.destroyKeypressListener&&(this.destroyKeypressListener(),this.destroyKeypressListener=void 0),o.focus()):(r.addEventListener("keypress",this.onKeyPress),this.destroyKeypressListener=()=>{r.removeEventListener("keypress",this.onKeyPress)}),this.emitInputModeChange())},this.exitInputMode=()=>{const{inputEl:t,useInputMode:i}=this;i&&t&&(this.useInputMode=!1,this.inputModeColumn=void 0,t.blur(),t.value="",this.destroyKeypressListener&&(this.destroyKeypressListener(),this.destroyKeypressListener=void 0),this.emitInputModeChange())},this.onKeyPress=t=>{const{inputEl:i}=this;if(!i)return;const o=parseInt(t.key,10);Number.isNaN(o)||(i.value+=t.key,this.onInputChange())},this.selectSingleColumn=()=>{const{inputEl:t,inputModeColumn:i,singleColumnSearchTimeout:o}=this;if(!t||!i)return;const r=i.items;if(o&&clearTimeout(o),this.singleColumnSearchTimeout=setTimeout((()=>{t.value="",this.singleColumnSearchTimeout=void 0}),1e3),t.value.length>=3){const i=t.value.substring(t.value.length-2);return t.value=i,void this.selectSingleColumn()}const e=r.find((({text:i})=>i.replace(/^0+/,"")===t.value));if(e)i.setValue(e.value);else if(2===t.value.length){const i=t.value.substring(t.value.length-1);t.value=i,this.selectSingleColumn()}},this.searchColumn=(t,i,o="start")=>{const r="start"===o?/^0+/:/0$/,e=t.items.find((({text:t})=>t.replace(r,"")===i));e&&t.setValue(e.value)},this.selectMultiColumn=()=>{const{inputEl:t,el:i}=this;if(!t)return;const o=Array.from(i.querySelectorAll("ion-picker-column-internal")).filter((t=>t.numericInput)),r=o[0],e=o[1];let n,s=t.value;switch(s.length){case 1:this.searchColumn(r,s);break;case 2:const i=t.value.substring(0,1);s="0"===i||"1"===i?t.value:i,this.searchColumn(r,s),1===s.length&&(n=t.value.substring(t.value.length-1),this.searchColumn(e,n,"end"));break;case 3:const o=t.value.substring(0,1);s="0"===o||"1"===o?t.value.substring(0,2):o,this.searchColumn(r,s),n=t.value.substring(1===s.length?1:2),this.searchColumn(e,n,"end");break;case 4:const a=t.value.substring(0,1);s="0"===a||"1"===a?t.value.substring(0,2):a,this.searchColumn(r,s);const c=t.value.substring(1===s.length?1:2,t.value.length);this.searchColumn(e,c,"end");break;default:const h=t.value.substring(t.value.length-4);t.value=h,this.selectMultiColumn()}},this.onInputChange=()=>{const{useInputMode:t,inputEl:i,inputModeColumn:o}=this;t&&i&&(o?this.selectSingleColumn():this.selectMultiColumn())},this.emitInputModeChange=()=>{const{useInputMode:t,inputModeColumn:i}=this;this.ionInputModeChange.emit({useInputMode:t,inputModeColumn:i})}}componentWillLoad(){n(this.el).addEventListener("focusin",this.onFocusIn),n(this.el).addEventListener("focusout",this.onFocusOut)}render(){return o(r,{onPointerDown:t=>this.onPointerDown(t),onClick:()=>this.onClick()},o("input",{"aria-hidden":"true",tabindex:-1,inputmode:"numeric",type:"number",ref:t=>this.inputEl=t,onInput:()=>this.onInputChange(),onBlur:()=>this.exitInputMode()}),o("div",{class:"picker-before"}),o("div",{class:"picker-after"}),o("div",{class:"picker-highlight",ref:t=>this.highlightEl=t}),o("slot",null))}get el(){return e(this)}};s.style={ios:":host{display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:200px;direction:ltr;z-index:0}:host .picker-before,:host .picker-after{position:absolute;width:100%;z-index:1;pointer-events:none}:host .picker-before{left:0;top:0;height:83px}:host-context([dir=rtl]){left:unset;right:unset;right:0}:host .picker-after{left:0;top:116px;height:84px}:host-context([dir=rtl]){left:unset;right:unset;right:0}:host .picker-highlight{border-radius:8px;left:0;right:0;top:50%;bottom:0;margin-left:auto;margin-right:auto;margin-top:0;margin-bottom:0;position:absolute;width:calc(100% - 16px);height:34px;-webkit-transform:translateY(-50%);transform:translateY(-50%);z-index:-1}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host .picker-highlight{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}:host input{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;margin:0;padding:0;border:0;outline:0;clip:rect(0 0 0 0);opacity:0;overflow:hidden;-webkit-appearance:none;-moz-appearance:none}:host ::slotted(ion-picker-column-internal:first-of-type){text-align:start}:host ::slotted(ion-picker-column-internal:last-of-type){text-align:end}:host .picker-before{background:-webkit-gradient(linear, left top, left bottom, color-stop(20%, var(--background, var(--ion-background-color, #fff))), to(rgba(var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255)), 0.8)));background:linear-gradient(to bottom, var(--background, var(--ion-background-color, #fff)) 20%, rgba(var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255)), 0.8) 100%)}:host .picker-after{background:-webkit-gradient(linear, left bottom, left top, color-stop(20%, var(--background, var(--ion-background-color, #fff))), to(rgba(var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255)), 0.8)));background:linear-gradient(to top, var(--background, var(--ion-background-color, #fff)) 20%, rgba(var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255)), 0.8) 100%)}:host .picker-highlight{background:var(--ion-color-step-150, #eeeeef)}",md:":host{display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:200px;direction:ltr;z-index:0}:host .picker-before,:host .picker-after{position:absolute;width:100%;z-index:1;pointer-events:none}:host .picker-before{left:0;top:0;height:83px}:host-context([dir=rtl]){left:unset;right:unset;right:0}:host .picker-after{left:0;top:116px;height:84px}:host-context([dir=rtl]){left:unset;right:unset;right:0}:host .picker-highlight{border-radius:8px;left:0;right:0;top:50%;bottom:0;margin-left:auto;margin-right:auto;margin-top:0;margin-bottom:0;position:absolute;width:calc(100% - 16px);height:34px;-webkit-transform:translateY(-50%);transform:translateY(-50%);z-index:-1}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host .picker-highlight{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}:host input{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;margin:0;padding:0;border:0;outline:0;clip:rect(0 0 0 0);opacity:0;overflow:hidden;-webkit-appearance:none;-moz-appearance:none}:host ::slotted(ion-picker-column-internal:first-of-type){text-align:start}:host ::slotted(ion-picker-column-internal:last-of-type){text-align:end}:host .picker-before{background:-webkit-gradient(linear, left top, left bottom, color-stop(20%, var(--background, var(--ion-background-color, #fff))), color-stop(90%, rgba(var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255)), 0)));background:linear-gradient(to bottom, var(--background, var(--ion-background-color, #fff)) 20%, rgba(var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255)), 0) 90%)}:host .picker-after{background:-webkit-gradient(linear, left bottom, left top, color-stop(30%, var(--background, var(--ion-background-color, #fff))), color-stop(90%, rgba(var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255)), 0)));background:linear-gradient(to top, var(--background, var(--ion-background-color, #fff)) 30%, rgba(var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255)), 0) 90%)}"};export{s as ion_picker_internal}