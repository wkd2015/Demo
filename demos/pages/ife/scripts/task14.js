var aqiData = [
    ["北京", 90],
    ["上海", 50],
    ["福州", 10],
    ["广州", 50],
    ["成都", 90],
    ["西安", 100]
];

var html = "";
(function() {
    for (var i = 0; i < aqiData.length; i++) {
        if (aqiData[i][1] > 60) {
            html += '<li>' + aqiData[i][0] + '</li>';
        }
    }
    console.log(html);
    document.getElementById('aqi-list').innerHTML = html;
})();
