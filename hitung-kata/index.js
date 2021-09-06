var CreateCSS = document.createElement('style');
CreateCSS.innerHTML = `
textarea {
	height: 300px;
	display: block;
	padding: 20px;
	font: normal 13px 'Courier New', Monospace;
	border: 0;
	box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.05);
	border-radius: 5px 5px 0 0;
	resize: none
}

#wct_embed_result {
	color: #fff;
	background: #2980b9;
	text-align: center;
	padding: 20px 0 20px 0;
	margin: 30px;
	border-radius: 4px;
	font-weight: bold;
}

.darkMode #wct_embed_result {
	background: #2d2d30;
}
`;
document.body.append(CreateCSS);
var dataHasil = 0;
if (document.getElementById('hitungkata-start')) {
    document.getElementById('hitungkata-start').innerHTML = `
<div id="wct_embed_counts">
<textarea id="wct_embed_input_text" rows="12" placeholder="Copy and Paste some words here (CTRL + V)" ></textarea>
<br />
<div id="wct_embed_result">
<b>0</b> Kata<br />
<b>0</b> Karakter<br />
<b>0</b> Karakter Tanpa Spasi<br />
<b>0</b> Kata Unik<br />
<b>0</b> Kalimat<b>&nbsp;</b><br />
<b>0</b> Paragraf
</div>
`;
};
