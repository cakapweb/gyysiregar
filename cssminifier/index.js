var CreateCSS = document.createElement('style');
CreateCSS.innerHTML = `
.darkMode #cssminifier {
	background: #2d2d30;
}
#cssminifier {
	background: #ecf0f1;
	position: relative;
	display: block;
	clear: both;
	border-radius: 5px;
	padding: 20px;
	border: 1px solid rgba(0, 0, 0, 0.05)
}
#cssminifier textarea {
	width: 100%;
	height: 240px;
	margin: 0 auto;
	display: block;
	background-color: #fff;
	padding: 20px;
	font: normal 13px 'Courier New', Monospace;
	border: 0;
	box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.05);
	border-radius: 5px 5px 0 0;
	resize: none
}
textarea:focus {
	background-color: #FFF;
	color: #303030
}
#cssminifier .box {
	margin: 10px auto 30px;
	color: rgba(255, 2255, 255, .6);
}
#cssminifier .box p {
	margin: 0 0 2px
}
#cssminifier button {
	cursor: pointer;
}
#cssminifier .col {
	width: 48%;
	margin: 0 auto 30px
}
#cssminifier .left {
	float: left;
	margin-left: 1%
}
#cssminifier .right {
	float: right;
	margin-right: 1%
}
.darkMode #cssminifier .button-group {
	background: #2d2d30;
}
#cssminifier .button-group {
	background: #007bff;
	text-align: center;
	padding: 20px 20px 40px 20px;
	margin: 0;
	border-radius: 0 0 5px 5px
}
#cssminifier button,
#cssminifier button[disabled]:active {
	background: rgba(255, 255, 255, 0.2);
	text-align: center;
	color: #fefefe;
	display: inline-block;
	padding: 6px 12px;
	font-size: 14px;
	font-weight: 400;
	line-height: 1.471;
	border-radius: 4px;
	margin: 0 5px;
	border: 0;
	transition: all .1s
}
#cssminifier button:hover,
#cssminifier button:active {
	background: #fff;
	color: #007bff
}
#cssminifier button[disabled],
#cssminifier button[disabled]:active {
	background: #fff;
}
#cssminifier .opt1,
#cssminifier .opt2,
#cssminifier .opt3,
#cssminifier .opt4,
#cssminifier .opt5 {
	display: inline-block;
	margin: 0 0 0 10px;
	vertical-align: middle;
	border: none;
	outline: none
}
#cssminifier br {
	display: none
}
`;
document.body.append(CreateCSS);
var dataHasil = 0;
if (document.getElementById('cssminifier-start')) {
    document.getElementById('cssminifier-start').innerHTML = `
<div id="cssminifier">
  <textarea autofocus="" id="cssField" placeholder=""></textarea>
  <div class="button-group">
    <div class="box">
      <input class="opt1" id="stripAllComment" type="checkbox" />
      <label>Strip all comments</label>
      <input class="opt2" id="superCompact" type="checkbox" />
      <label>Super compact</label>
      <input class="opt3" id="betterIndentation" type="checkbox" />
      <label>Keep indentation</label>
      <input checked="" class="opt4" id="keepLastComma" type="checkbox" />
      <label>Remove the last semicolon</label>
    </div>
    <button onclick="compressCSS(&quot;cssField&quot;);">Compress CSS</button>
    <p></p>
    <button onclick="clearField(&quot;cssField&quot;);">Clear Field</button>
    <button onclick="selectAll(&quot;cssField&quot;);">Select All</button>
  </div>
  </div>
`;
};
