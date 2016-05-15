/**
 * Created by wkdwk on 2016/05/15/0015.
 */
var btn = document.getElementById('btn');
var apid = document.getElementById('api-display');
var apii = document.getElementById('api-input');
function showDisplay() {
    apid.innerText = parseInt(apii.value);
}
btn.onclick = showDisplay;
apii.onkeyup = function (e) {
    if (e.keyCode == 13) {
        showDisplay();
    }
};