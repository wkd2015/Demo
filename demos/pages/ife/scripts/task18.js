var btns = document.getElementById('num');
var content = document.getElementById('number');
var targetDiv = document.getElementById('show');
var events = {
    "leftIn": function(){
        var num = content.value;
        var numNode = document.createElement('div');
        numNode.innerText = num;
        targetDiv.insertBefore(numNode,targetDiv.childNodes[0]);
    },
    "rightIn": function(){
        var num = content.value;
        var numNode = document.createElement('div');
        numNode.innerText = num;
        targetDiv.appendChild(numNode);
    },
    "leftOut": function(){
        var target = targetDiv.childNodes[0];
        var targetVal = target.innerText;
        targetDiv.removeChild(target);
        alert(targetVal);
    },
    "rightOut": function() {
        var target = targetDiv.lastChild;
        var targetVal = target.innerText;
        targetDiv.removeChild(target);
        alert(targetVal);
    },
    "delete": function(target){
        targetDiv.removeChild(target);
    }
};
btns.addEventListener('click',function(event){
    var target = event.target;
    switch (target.id){
        case "leftIn":
            events.leftIn();
            break;
        case "rightIn":
            events.rightIn();
            break;
        case "leftOut":
            events.leftOut();
            break;
        case "rightOut":
            events.rightOut();
            break;
    }
},false);
targetDiv.addEventListener('click',function(event){
    var target = event.target;
    events.delete(target);
},false);