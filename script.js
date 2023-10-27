var type = "";


function swapHydro(){
    const image = document.getElementById(`robot`);
    image.src = `Images/Robot_h.png`;
    type = "Hydro";
    document.getElementById('typeText').innerHTML = type;
}

function swapSolar(){
    const image = document.getElementById(`robot`);
    image.src = `Images/Robot_s.png`;
    type = "Solar";
    document.getElementById('typeText').innerHTML = type;
}

function swapNuclear(){
    const image = document.getElementById(`robot`);
    image.src = `Images/Robot_n.png`;
    type = "Nuclear";
    document.getElementById('typeText').innerHTML = type;
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

// function powerChange()
// {
// var slider = document.getElementById("power");
// var output = document.getElementById("powerValue");
// output.innerHTML = slider.value;
// slider.oninput = function() {
//   output.innerHTML = this.value;
//}
// }




