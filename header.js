var hallobar=document.getElementById("hallobar");
var hallobutton=document.getElementById("hallobutton");

hallobutton.addEventListener("mouseover",  delay(hallobutton, hallobarapper,1));
hallobar.addEventListener("mouseover", hallobarapper);
hallobutton.addEventListener("mouseout", hallobardisapper);
hallobar.addEventListener("mouseout", hallobardisapper);

function hallobarapper(){
   document.getElementById("hallobar").classList.remove("relativehidden")
}
function hallobardisapper(){
    document.getElementById("hallobar").classList.add("relativehidden")
}


var aufwidersehenbar=document.getElementById("aufwidersehenbar");
var aufwidersehenbutton=document.getElementById("aufwidersehenbutton");

aufwidersehenbutton.addEventListener("mouseover",  delay(aufwidersehenbutton, aufwidersehenbarapper, 1));
aufwidersehenbar.addEventListener("mouseover", aufwidersehenbarapper);
aufwidersehenbutton.addEventListener("mouseout", aufwidersehenbardisapper);
aufwidersehenbar.addEventListener("mouseout", aufwidersehenbardisapper);

function aufwidersehenbarapper(){
   document.getElementById("aufwidersehenbar").classList.remove("relativehidden")
}
function aufwidersehenbardisapper(){
    document.getElementById("aufwidersehenbar").classList.add("relativehidden")
}

 
var aufwidersehenbar=document.getElementById("hallohallobar");
var hallohallobutton=document.getElementById("hallohallobutton");

hallohallobutton.addEventListener("mouseover", delay(hallohallobutton, hallohallobarapper,2));
hallohallobar.addEventListener("mouseover", hallohallobarapper);
hallohallobutton.addEventListener("mouseout", hallohallobardisapper);
hallohallobar.addEventListener("mouseout", hallohallobardisapper);
hallohallobar.addEventListener("mouseover", hallobarapper);
hallohallobar.addEventListener("mouseout", hallobardisapper);

function delay (elem, callback, layer) {
    var timeout = null;
    elem.onmouseover = function() {
        checkdealy(layer)
        // Set timeout to be a timer which will invoke callback after 1s
        timeout = setTimeout(callback, 500);
    };

    elem.onmouseout = function() {
        // Clear any timers set to timeout
        clearTimeout(timeout);
    }
};

function callback1(){
    alert("that was long")
}


function checkdealy(layer){
    if(layer===1){
        var layer1=document.getElementsByClassName("layer1")
        var true1=0
        var false1=0
        for(i=0;i<layer1.length;i++){
            if(layer1[i].classList.contains("relativehidden")){
                true1++
            }else{
                false1++
            }
        }
        if(true1===layer1.length){
            console.log("it was free")
        }else{
            console.log("no")
        }
    }
}



function hallohallobarapper(){
document.getElementById("hallohallobar").classList.remove("relativehidden")
}
function hallohallobardisapper(){
    document.getElementById("hallohallobar").classList.add("relativehidden")
}
 

var realtivebar=document.getElementById("realtivebar");
var realtivebutton=document.getElementById("realtivebutton");

realtivebutton.addEventListener("mouseover", realtivebarapper);
realtivebar.addEventListener("mouseover", realtivebarapper);
realtivebutton.addEventListener("mouseout", realtivebardisapper);
realtivebar.addEventListener("mouseout", realtivebardisapper);

function realtivebarapper(){
   document.getElementById("realtivebar").classList.remove("relativehidden")
}
function realtivebardisapper(){
    document.getElementById("realtivebar").classList.add("relativehidden")
}