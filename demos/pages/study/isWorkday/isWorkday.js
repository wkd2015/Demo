// 节假日获取
// 结合调休计算休息日、工作日
/*获取当前农历*/
// function showCal() {
//     var D = new Date();
//     var yy = D.getFullYear();
//     var mm = D.getMonth() + 1;
//     var dd = D.getDate();
//     var ww = D.getDay();
//     var ss = parseInt(D.getTime() / 1000);
//     if (yy < 100) yy = "19" + yy;
//     return GetLunarDay(yy, mm, dd);
// }

//定义全局变量 
var CalendarData = new Array(100);
var madd = new Array(12);
var tgString = "甲乙丙丁戊己庚辛壬癸";
var dzString = "子丑寅卯辰巳午未申酉戌亥";
var numString = "一二三四五六七八九十";
var monString = "正二三四五六七八九十冬腊";
var weekString = "日一二三四五六";
var sx = "鼠牛虎兔龙蛇马羊猴鸡狗猪";
var cYear, cMonth, cDay, TheDate;
CalendarData = new Array(0xA4B, 0x5164B, 0x6A5, 0x6D4, 0x415B5, 0x2B6, 0x957, 0x2092F, 0x497, 0x60C96, 0xD4A, 0xEA5, 0x50DA9, 0x5AD, 0x2B6, 0x3126E, 0x92E, 0x7192D, 0xC95, 0xD4A, 0x61B4A, 0xB55, 0x56A, 0x4155B, 0x25D, 0x92D, 0x2192B, 0xA95, 0x71695, 0x6CA, 0xB55, 0x50AB5, 0x4DA, 0xA5B, 0x30A57, 0x52B, 0x8152A, 0xE95, 0x6AA, 0x615AA, 0xAB5, 0x4B6, 0x414AE, 0xA57, 0x526, 0x31D26, 0xD95, 0x70B55, 0x56A, 0x96D, 0x5095D, 0x4AD, 0xA4D, 0x41A4D, 0xD25, 0x81AA5, 0xB54, 0xB6A, 0x612DA, 0x95B, 0x49B, 0x41497, 0xA4B, 0xA164B, 0x6A5, 0x6D4, 0x615B4, 0xAB6, 0x957, 0x5092F, 0x497, 0x64B, 0x30D4A, 0xEA5, 0x80D65, 0x5AC, 0xAB6, 0x5126D, 0x92E, 0xC96, 0x41A95, 0xD4A, 0xDA5, 0x20B55, 0x56A, 0x7155B, 0x25D, 0x92D, 0x5192B, 0xA95, 0xB4A, 0x416AA, 0xAD5, 0x90AB5, 0x4BA, 0xA5B, 0x60A57, 0x52B, 0xA93, 0x40E95);
madd[0] = 0;
madd[1] = 31;
madd[2] = 59;
madd[3] = 90;
madd[4] = 120;
madd[5] = 151;
madd[6] = 181;
madd[7] = 212;
madd[8] = 243;
madd[9] = 273;
madd[10] = 304;
madd[11] = 334;

function GetBit(m, n) {
    return (m >> n) & 1;
}
//农历转换 
function e2c() {
    TheDate = (arguments.length != 3) ? new Date() : new Date(arguments[0], arguments[1], arguments[2]);
    var total, m, n, k;
    var isEnd = false;
    var tmp = TheDate.getYear();
    if (tmp < 1900) {
        tmp += 1900;
    }
    total = (tmp - 1921) * 365 + Math.floor((tmp - 1921) / 4) + madd[TheDate.getMonth()] + TheDate.getDate() - 38;

    if (TheDate.getYear() % 4 == 0 && TheDate.getMonth() > 1) {
        total++;
    }
    for (m = 0;; m++) {
        k = (CalendarData[m] < 0xfff) ? 11 : 12;
        for (n = k; n >= 0; n--) {
            if (total <= 29 + GetBit(CalendarData[m], n)) {
                isEnd = true;
                break;
            }
            total = total - 29 - GetBit(CalendarData[m], n);
        }
        if (isEnd) break;
    }
    cYear = 1921 + m;
    cMonth = k - n + 1;
    cDay = total;
    if (k == 12) {
        if (cMonth == Math.floor(CalendarData[m] / 0x10000) + 1) {
            cMonth = 1 - cMonth;
        }
        if (cMonth > Math.floor(CalendarData[m] / 0x10000) + 1) {
            cMonth--;
        }
    }
}

function GetcDateString() {
    var tmp = "";
    /*显示农历年：（ 如：甲午(马)年 ）*/
    /*tmp+=tgString.charAt((cYear-4)%10); 
    tmp+=dzString.charAt((cYear-4)%12); 
    tmp+="("; 
    tmp+=sx.charAt((cYear-4)%12); 
    tmp+=")年 ";*/
    if (cMonth < 1) {
        tmp += "(闰)";
        tmp += monString.charAt(-cMonth - 1);
    } else {
        tmp += monString.charAt(cMonth - 1);
    }
    tmp += "月";
    tmp += (cDay < 11) ? "初" : ((cDay < 20) ? "十" : ((cDay < 30) ? "廿" : "三十"));
    if (cDay % 10 != 0 || cDay == 10) {
        tmp += numString.charAt((cDay - 1) % 10);
    }
    return tmp;
}

function GetLunarDay(solarYear, solarMonth, solarDay) {
    //solarYear = solarYear<1900?(1900+solarYear):solarYear; 
    if (solarYear < 1921 || solarYear > 2020) {
        return "";
    } else {
        solarMonth = (parseInt(solarMonth) > 0) ? (solarMonth - 1) : 11;
        e2c(solarYear, solarMonth, solarDay);
        return GetcDateString();
    }
}

/*获取节假日*/
var curHolidays = []; //当前月份涉及到的节假日及调休日(前后月及当月)

function GetHoliday(year, month) {
    $.ajax({
        type: "get",
        url: "https://sp0.baidu.com/8aQDcjqpAAV3otqbppnN2DJv/api.php?query=" + encodeURIComponent(year + '年' + month + '月') + "&co=&resource_id=6018&t=" + new Date().getTime() + "&ie=utf8&oe=gbk&cformat=jsonp&tn=baidu&_=1503384260368",
        dataType: "jsonp",
        async: false,
        jsonp: "cb",
        jsonpCallback: "op_aladdin_callback",
        success: function (response) {
            curHolidays = [];
            for (var i = 0; i < response.data[0].holiday.length; i++) {
                for (var j = 0; j < response.data[0].holiday[i].list.length; j++) {
                    curHolidays.push(response.data[0].holiday[i].list[j]);
                }
            }
            console.log('1');
        },
        error: function () {
            console.log('Failed');
        }
    });
}

/*判断周末*/
function isWeekend(year, month, day) {
    var tempDate = new Date(year, month - 1, day);
    var isWeekend = (tempDate.getDay() == 6 || tempDate.getDay() == 0) ? true : false;
    return isWeekend;
}

/*计算工作日*/
function isWorkday(year, month, day) {
    //获取节假日
    $.ajax({
        type: "get",
        url: "https://sp0.baidu.com/8aQDcjqpAAV3otqbppnN2DJv/api.php?query=" + encodeURIComponent(year + '年' + month + '月') + "&co=&resource_id=6018&t=" + new Date().getTime() + "&ie=utf8&oe=gbk&cformat=jsonp&tn=baidu&_=1503384260368",
        dataType: "jsonp",
        async: false,
        jsonp: "cb",
        jsonpCallback: "op_aladdin_callback",
        success: function (response) {
            var curHolidays = [];
            var inputDate = year + '-' + month + '-' + day;
            var isWorkday = true;
            for (var i = 0; i < response.data[0].holiday.length; i++) {
                for (var j = 0; j < response.data[0].holiday[i].list.length; j++) {
                    curHolidays.push(response.data[0].holiday[i].list[j]);
                }
            }
            for (var i = 0; i < curHolidays.length; i++) {
                if (curHolidays[i].date == inputDate && curHolidays[i].status == '1') {
                    isWorkday = false;
                } else if (isWeekend(year, month, day) && !(curHolidays[i].date == inputDate && curHolidays[i].status == '2')) {
                    isWorkday = false;
                }
            }
            console.log(isWorkday);
        },
        error: function () {
            console.log('Failed');
        }
    });
}
var testDateList = ['2017-8-26', '2017-9-5', '2017-10-11', '2017-8-22', '2017-3-17', '2017-12-3', '2016-8-7', '2016-8-23', '2016-5-2'];
//字符串去重
function uniqueArr(arr) {
    arr.sort();
    var re = [arr[0]];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] !== re[re.length - 1]) {
            re.push(arr[i]);
        }
    }
    return re;
}
//数组去重
//将对象元素转换成字符串以作比较
function obj2key(obj, keys) {
    var n = keys.length,
        key = [];
    while (n--) {
        key.push(obj[keys[n]]);
    }
    return key.join('|');
}
//去重操作
function uniqeByKeys(array, keys) {
    var arr = [];
    var hash = {};
    for (var i = 0, j = array.length; i < j; i++) {
        var k = obj2key(array[i], keys);
        if (!(k in hash)) {
            hash[k] = true;
            arr.push(array[i]);
        }
    }
    return arr;
}

var WorkdaysList = [1];
var curHolidays = [];

function isWorkdays(datelist) {
    var curYear = (new Date()).getFullYear(); //当前年份的提交一次查询
    //需要查询的年月提取
    var queryList = uniqueArr($.map(datelist, function (value, index) {
        if (value.indexOf(curYear) != -1) {
            return curYear + '-5';
        } else {
            var yearMon = value.split('-');
            yearMon = yearMon[0] + '-' + yearMon[1];
            return yearMon;
        }
    }));
    console.log(queryList);
    function aa(k) {
        // var i = 0;
        //console.log('————————————————————————————————————————————————————————————————————');
        //console.log(WorkdaysList);
        //console.log(k);
        var tempYear = queryList[k].split('-')[0];
        var tempMon = queryList[k].split('-')[1];
        $.ajax({
            type: "get",
            url: "https://sp0.baidu.com/8aQDcjqpAAV3otqbppnN2DJv/api.php?query=" + encodeURIComponent(tempYear + '年' + tempMon + '月') + "&co=&resource_id=6018&t=" + new Date().getTime() + "&ie=utf8&oe=gbk&cformat=jsonp&tn=baidu&_=1503384260368",
            dataType: "jsonp",
            jsonp: "cb",
            jsonpCallback: "op_aladdin_callback",
            success: function (response) {
                //console.log(response);
                //var curHolidays = [];
                //var tempList = [];
                if (k >= queryList.length) {
                    return
                } else {
                    for (var i = 0; i < response.data[0].holiday.length; i++) {
                        for (var j = 0; j < response.data[0].holiday[i].list.length; j++) {
                            curHolidays.push(response.data[0].holiday[i].list[j]);
                        }
                    }
                    console.log(curHolidays);
                    //tempList = $.map(datelist, function (value, index) {
                    //    for (var j = 0; j < curHolidays.length; j++) {
                    //        if (curHolidays[j].date == value && curHolidays[j].status == '1') {
                    //            return {
                    //                date: value,
                    //                status: '1' //非工作日
                    //            };
                    //        } else if (isWeekend(value.split('-')[0], value.split('-')[1], value.split('-')[2]) &&
                    //            !(curHolidays[j].date == value && curHolidays[j].status == '2')) {
                    //            return {
                    //                date: value,
                    //                status: '1' //非工作日
                    //            };
                    //        } else {
                    //            return {
                    //                date: value,
                    //                status: '2'
                    //            };
                    //        }
                    //    }
                    //});
                    //WorkdaysList = WorkdaysList.concat(tempList);
                    aa(k + 1);
                }
            },
            error: function () {
                console.log('Failed');
            }
        });
    }
    // })(i), (function (i) {
    //     return i * 100
    // })(i));
    aa(0);
    // }
}

function getResult(datelist){ //map循环写法有问题，其中的for循环由于if判断中有return，导致只进行了一次循环就中断遍历，得到错误结果，需要更改
    var tempList = $.map(datelist, function (value, index) {
        for (var j = 0; j < curHolidays.length; j++) {
            console.log(j);
            console.log(curHolidays[j]);
            if (curHolidays[j].date == value && curHolidays[j].status == '1') {
                return {
                    date: value,
                    status: '1' //非工作日
                };
            } else if (isWeekend(value.split('-')[0], value.split('-')[1], value.split('-')[2]) &&
                !(curHolidays[j].date == value && curHolidays[j].status == '2')) {
                return {
                    date: value,
                    status: '1' //非工作日
                };
            } else {
                return {
                    date: value,
                    status: '2'
                };
            }
        }
    });
    return tempList;
}