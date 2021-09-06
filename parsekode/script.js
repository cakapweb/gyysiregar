function cdClear() {
    var wtarea = document.getElementById('codes');
    wtarea.value = '';
    wtarea.focus();
    document.getElementById('convert').disabled = false;
}
function cdConvert() {
    var ctarea = document.getElementById('codes'),
        cv = ctarea.value,
        opt1 = document.getElementById('opt1'),
        opt2 = document.getElementById('opt2'),
        opt3 = document.getElementById('opt3'),
        opt4 = document.getElementById('opt4'),
        opt5 = document.getElementById('opt5');
    cv = cv.replace(/\t/g, "    ");
    if (opt1.checked) cv = cv.replace(/&/g, "&amp;");
    if (opt2.checked) cv = cv.replace(/</g, "&lt;");
    if (opt3.checked) cv = cv.replace(/>/g, "&gt;");
    if (opt4.checked) cv = cv.replace(/"/g, "&quot;");
    if (opt5.checked) cv = cv.replace(/'/g, "&#039;");
    ctarea.value = cv;
    ctarea.focus();
    ctarea.select();
};
