var CreateCSS = document.createElement('style');
CreateCSS.innerHTML = `
#alexaChecker {
    background-color: #f5f5f5;
    padding: 10px;
    text-align: center;
    border-radius: 10px;
    margin: auto;
}
#inputDomain {
    width: 100%;
    height: 30px;
    outline: none;
    padding-left: 5px;
    border-radius: 5px 5px 5px 5px;
}
#chekAlexa {
    cursor: pointer;
    font-size: 17px;
    margin: 10px 0;
    font-weight: bold;
    background-color: #007bff;
    color: white;
    border-radius:5px 5px 5px 5px
}
.darkMode #alexaChecker {
    background: #2d2d30;
}
`;
document.body.append(CreateCSS);
var dataHasil = 0;
if (document.getElementById('alexachecker-start')) {
    document.getElementById('alexachecker-start').innerHTML = `
    <div id="alexaChecker">
 <div><input id='inputDomain' placeholder='Masukkan Domain Web Kamu..' /></div>
 <div><button id='chekAlexa'>Chek Peringkat!</button></div>
 <div>Peringkat Alexa Web : <span id='outputAlexa'>-</span></div>
 </div>
`;
    document.getElementById('chekAlexa').addEventListener('click', function () {
        var dataUrl = document.getElementById('inputDomain').value;
        if (dataUrl.indexOf("http://") >= 0 || dataUrl.indexOf("https://") >= 0) {
            dataUrl = dataUrl;
        } else {
            dataUrl = "http://" + dataUrl
        }
        document.getElementById('outputAlexa').innerText = 'Mengambil Data...';
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "https://apialexa.maskoding.com/", true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                if (xhr.status == 200) {
                    var db = JSON.parse(xhr.responseText);
                    document.getElementById('outputAlexa').innerText = db.data;
                };
            };
        };
        xhr.onerror = function () {
            console.log("error")
        };
        xhr.send(JSON.stringify({
            "data": dataUrl,
        }));
    });
};
