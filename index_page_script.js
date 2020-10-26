// const content = {
//     div: "",
//     label: "",
//     input: "",
//     br: "",
//     datalist: "",
//     options: ""
// }

// function createLabel(){
//     content.label = document.createElement("label");
//     content.label.id = "spawn-rate-label";
//     content.label.for = "spawn-rate";
//     content.label.classList.add("main-text-size");
//     content.label.textContent = "Частота появления"; 
// }

// function createInput(){
//     content.input = document.createElement("input");
//     content.input.id = "spawn-rate";
//     content.input.type = "range";
//     content.input.value = "5";
//     content.input.min = "1";
//     content.input.max = "10";
//     content.input.list = "spawn-rate-hash";
// }

// function createDiv(){
//     content.div = document.createElement("div");
// }

// function createBr(){
//     content.br = document.createElement("br");
//     content.br.id = "spawn-rate-br";
// }

// function createOptions(){
//     for(let i = 0; i < 3; i++){
//         let options = document.createElement("option");
//         options.classList.add("cell-options-3");
//         let scaleValue = 5 * i;
//         console.log(`${scaleValue}`);
//         if(i == 0) options.value = "1";
//         else options.value = `${scaleValue}`;
//         options.label = options.value;
//         content.datalist.append(options);
//     }
// }

// function createDataList(){
//     content.datalist = document.createElement("datalist");
//     content.datalist.id = "spawn-rate-hash";
//     createOptions();
// }

// function removeDiv(){
//     content.div.remove();
// }

// function appendContentIntoDiv(){
//     content.div.append(content.label);
//     content.div.append(content.br); 
//     content.div.append(content.input);
//     content.div.append(document.createElement("br"));
//     content.div.append(content.datalist);

// }

// function initContent(){
//     createDiv();
//     createLabel();
//     createInput();
//     createDataList();
//     createBr();
//     appendContentIntoDiv();
// }



// function isDivContentExists(){
//     let searchDiv = document.getElementById(content.div.id);
//     return !(searchDiv == null);
// }

// function spawnFrequencyVisibility(){
//     let container = document.getElementById("settings");
//     if(content.label == "") {
//         initContent();
//         container.append(content.div);
//         document.getElementById("spawn-rate").replaceWith(content.input);
//     }
//     if(isDivContentExists()) document.getElementById("spawn-rate-div").remove();
//     else container.append(content.div);
// }







let root = document.querySelector(":root");
root.style.setProperty("--spawn-rate-visibility", "hidden");


function setVisibilityTrue(){
    let div = document.querySelector(".spawn-rate-block");
    let style = getComputedStyle(div);
    if(style.visibility == "visible")
    root.style.setProperty("--spawn-rate-visibility", "hidden");
    // div.style.visibility = "hidden";
    else root.style.setProperty("--spawn-rate-visibility", "visible");
    //  div.style.visibility = "visible"; 
}

productsAfter = document.getElementById("products-after");
productsInterval = document.getElementById("products-interval");

console.log(productsAfter);
console.log(productsInterval);

productsAfter.addEventListener("oninput", setVisibilityTrue);
productsInterval.addEventListener("oninput", setVisibilityTrue);


