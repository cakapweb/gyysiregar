var CreateCSS = document.createElement('style');
CreateCSS.innerHTML = `
.container {
}
.browser {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
      -ms-flex-direction: column;
          flex-direction: column;
}
.browser .mantap{
  background-color: #d9d9d9;
  border-radius: 5px 5px 0 0;
  height: 2.5em;
}
button, button[disabled]:active {
    background-color: #464646;
    font: bold 11px Tahoma,Verdana,Arial,sans-serif;
    color: #FFF;
    border: medium none;
    border-radius: 3px;
    cursor: pointer;
    padding: 5px 10px;
}
.browser .mantap .controls {
  line-height: 1.25em;
  padding: 0.625em 0;
}
.browser .mantap .controls .btn {
    border: medium none;
    border-radius: 100%;
    display: block;
    float: left;
    height: auto;
    margin-left: 0.5em;
    outline: medium none;
    width: 0px;
    padding: 7px;
}
.browser .mantap .controls .btn.close {
  background-color: #e74c3c;
}
.browser .mantap .controls .btn.minimize {
  background-color: #f1c40f;
}
.browser .mantap .controls .btn.fullscreen {
  background-color: #2ecc71;
}
.browser .viewport {
  background-color: #f5f5f5;
  border-radius: 0 0 5px 5px;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
      -ms-flex: 1;
          flex: 1;
}
.tombol-konversi {
cursor: pointer;
    text-align: center;
    display: inline-block;
    color: #fff;
    font-size: 12px;
    margin: 0;
    padding: 12px;
    background-color: #0091ea;
    box-shadow: 0 2px 5px 0 rgba(0,0,0,0.26);
    border-radius: 3px;
    border: 0;
    width: auto;
}
.pageform {
    padding-right: 12px;
    padding-bottom: 0px;
    padding-top: 0px;
    padding-left: 12px;
}
.darkMode .container .browser .viewport {
    background: #2d2d30;
}
`;
document.body.append(CreateCSS);
var dataHasil = 0;
if (document.getElementById('encrypjs-start')) {
    document.getElementById('encrypjs-start').innerHTML = `
<div class="container">
  <div class="browser">
    <div class="mantap">
      <div class="controls">
        <button class="btn close"></button>
        <button class="btn minimize"></button>
        <button class="btn fullscreen"></button>
      </div>
    </div>
    <div class="viewport">
      <p style="text-align: center;padding:1px;">
      <form name="pageform" class="pageform" style="padding-top:0px" onsubmit="return doencrypt(this);">
        <textarea class="cakap-textarea" id="cakap-textarea" cols="38" name="code" rows="11" placeholder="/* Paste atau Tempel scriptnya disini... */" spellcheck="false" wrap="virtual"></textarea>
        <span id="encrypted1"></span>
        <center>
          <input class="tombol-konversi" onclick="doencrypt(pageform);" type="submit" value="Encrypt">
          <input class="tombol-konversi" onclick="javascript:eraseText();" type="button" value="Delete">
          <input class="tombol-konversi" name="sac" onclick="sandc(pageform);" type="button" value="Select All">
          <br /> -- <u>Created by</u> : <a href="#" target="_blank">Cakap Web</a> --
        </center>
        <p style="text-align: center;padding-top:1px;">
          <textarea class="cakap-textarea" id="cakap-hasil" cols="38" readonly="readonly" name="ecode" rows="11" placeholder="/* --- Hasil Encrypt--- */" spellcheck="false" wrap="virtual"></textarea>
        </p>
`;
};
