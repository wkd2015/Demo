/*判断周末*/
function isWeekend(year, month, day) {
    var tempDate = new Date(year, month - 1, day);
    var isWeekend = (tempDate.getDay() == 6 || tempDate.getDay() == 0) ? true : false;
    return isWeekend;
}

function isWorkday(datelist) {
    var result = [];
    $.ajaxSettings.async = false;
    $.getJSON("result.json",
        function (data) {
            result = $.map(datelist, function (value, key) {
                var tempObj = {
                    date: value,
                    status: '2'
                };
                var year = value.split('-')[0];
                if (data.hasOwnProperty(year)) {
                    for (var i = 0; i < data[year].length; i++) {
                        if (data[year][i].date == value && data[year][i].status == '1') {
                            tempObj = {
                                "date": value,
                                "status": "1"
                            }
                        } else if (isWeekend(value.split('-')[0], value.split('-')[1], value.split('-')[2]) &&
                            !(data[year][i].date == value && data[year][i].status == '2')) {
                            tempObj = {
                                "date": value,
                                "status": "1"
                            }
                        }
                    }
                }
                return tempObj;
            });
            // console.log(result);
            // return result;
        }
    );
    // console.log(result);
    return result;
}