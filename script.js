var type = "";


function swapHydro(){
    const image = document.getElementById(`robot`);
    image.src = `Images/Robot_h.png`;
    type = "Hydro";
    document.getElementById('typeText').innerHTML = type;
    document.getElementById("defSystem").disabled = false;
    document.getElementById("scanner").disabled=false; 
    document.getElementById("defSystem").checked = false;
    document.getElementById("scanner").checked=false; 
}

function swapSolar(){
    const image = document.getElementById(`robot`);
    image.src = `Images/Robot_s.png`;
    type = "Solar";
    document.getElementById('typeText').innerHTML = type;
    document.getElementById("defSystem").disabled = false;
    document.getElementById("scanner").disabled=false; 
    document.getElementById("defSystem").checked = false;
    document.getElementById("scanner").checked = false;
}

function swapNuclear(){
    const image = document.getElementById(`robot`);
    image.src = `Images/Robot_n.png`;
    type = "Nuclear";
    document.getElementById('typeText').innerHTML = type;
    document.getElementById("defSystem").disabled = false;
    document.getElementById("scanner").disabled=false; 
    document.getElementById("defSystem").checked = false;
    document.getElementById("scanner").checked = false;
}

function scannerON(){
    const image = document.getElementById('robot');
    document.getElementById("defSystem").checked=false;
    if (document.getElementById("scanner").checked == true){
       if (type == "Hydro"){
        image.src = `Images/Robot_hs.png`;
       } else if (type == "Solar"){
        image.src = `Images/Robot_ss.png`;
       } else if (type == "Nuclear"){
        image.src = `Images/Robot_ns.png`;
       }
    } 
}

function defSystemON(){
    const image = document.getElementById('robot');
    document.getElementById("scanner").checked=false;

    if (document.getElementById("defSystem").checked == true){
       if (type == "Hydro"){
        image.src = `Images/Robot_hd.png`;
       } else if (type == "Solar"){
        image.src = `Images/Robot_sd.png`;
       } else if (type == "Nuclear"){
        image.src = `Images/Robot_nd.png`;
       }
    } 
}

function powerChange()
{
    var rSlider = document.getElementById("power");
    var output = document.getElementById("powerValue");
    output.innerHTML = rSlider.value;
    rSlider.oninput = function() {
    output.innerHTML = this.value;
    }
}

function speedChange()
{
    var rSlider = document.getElementById("speed");
    var output = document.getElementById("speedValue");
    output.innerHTML = rSlider.value;
    rSlider.oninput = function() {
    output.innerHTML = this.value;
    }
}

function integrityChange()
{
    var rSlider = document.getElementById("integrity");
    var output = document.getElementById("integrityValue");
    output.innerHTML = rSlider.value;
    rSlider.oninput = function() {
    output.innerHTML = this.value;
    }
}

function finalize(){
    document.getElementById("hydro").disabled = true;
    document.getElementById("solar").disabled = true;
    document.getElementById("nuclear").disabled = true;
    document.getElementById("scanner").disabled = true;
    document.getElementById("defSystem").disabled = true;
    document.getElementById("power").disabled = true;
    document.getElementById("speed").disabled = true;
    document.getElementById("integrity").disabled = true;
}

function findMaxPower(){
    if (type == "Hydro"){
        return 8;
    } else if (type == "Solar"){
        return 10;
    } else {
        return 12;
    }
    
}

function findMaxSpeed(){
    if (type == "Hydro"){
        return 12;
    } else if (type == "Solar"){
        return 10;
    } else {
        return 14;
    }
}

function findMaxSI(){
    if (type == "Hydro"){
        return 10;
    } else if (type == "Solar"){
        return 10;
    } else {
        return 4;
    }
}
