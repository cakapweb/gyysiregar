var CreateCSS = document.createElement('style');
CreateCSS.innerHTML = `
code {
	font-family: Consolas, Monaco, 'Andale Mono', 'Courier New', Courier, Monospace;
	color: #2a5ead;
	font-size: 13px;
	padding: 2px 4px;
}
.darkMode #codes {
	font-family: Consolas, Monaco, 'Andale Mono', 'Courier New', Courier, Monospace;
    background: #2d2d30;
  	color: #d9d9d9;
}
#codes {
	font-family: Consolas, Monaco, 'Andale Mono', 'Courier New', Courier, Monospace;
	font: 13px;
	border: 1px solid #e9e9e9;
	width: 100%;
	height: 300px;
	display: block;
    border-radius: 5px 5px 0 0;
	background-color: #d9d9d9;
	color: #2d2d30;
	padding: 15px;
  	resize: none
}
.button-group {
	margin: 0 auto 0;
	text-align: left;
}
.button-group button,
.button-group button[disabled]:active {
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
#opt1,
#opt2,
#opt3,
#opt4,
#opt5 {
	display: inline-block;
	margin-right: 10px;
}
`;
document.body.append(CreateCSS);
var dataHasil = 0;
if (document.getElementById('parsekode-start')) {
    document.getElementById('parsekode-start').innerHTML = `
<textarea id="codes" placeholder="paste the code you want to convert / parse here" spellcheck="false"></textarea><br />
<div class="button-group"><button id="convert" onclick="cdConvert();this.disabled = true;">Parse Now</button>      <button onclick="cdClear();">Clear</button></div>
<br />
<input checked="true" id="opt1" type="checkbox" />Konversi &amp; menjadi &amp;amp;<br />
<input checked="true" id="opt2" type="checkbox" />Konversi &lt; menjadi &amp;lt;<br />
<input checked="true" id="opt3" type="checkbox" />Konversi &gt; menjadi &amp;gt;<br />
<input checked="true" id="opt4" type="checkbox" />Konversi " menjadi &amp;quot;<br />
<input checked="true" id="opt5" type="checkbox" />Konversi ' menjadi &amp;#039;<br />
`;
};
