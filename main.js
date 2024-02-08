let nameOutput = "";
let priceOutput = "";


function addProduct() {
    let textInput = document.getElementById("productName");
    let numberInput = document.getElementById("productPrice");
    let textOutput = document.getElementById("productNameOutput");
    let numberOutput = document.getElementById("productPriceOutput");
    let image = document.getElementById("linkedImage");
    let imageOutput = document.getElementById("linkedImageOutput");
    let categoryValue = document.getElementById("itemsCategory");
    let categoryOutput = document.getElementById("productCategoryOutput");



    if (textInput.value && numberInput.value && image.value && categoryValue) {

        nameOutput += textInput.value;
        textOutput.innerHTML = nameOutput;

        priceOutput += numberInput.value;
        numberOutput.innerHTML = priceOutput;

        imageOutput.innerHTML = `<div><img src="${image.value}" alt="a pic"> </div>`;
        console.log(image.value);

        categoryOutput.innerHTML = categoryValue.value;
        console.log(categoryOutput);


        textInput.value = "";
        numberInput.value = "";
        image.value = "";


    }
    else {
        alert("please fill all inputs");
    }


}

function erase() {
    let textOutput = document.getElementById("productNameOutput");
    let numberOutput = document.getElementById("productPriceOutput");
    let imageOutput = document.getElementById("linkedImageOutput");
    let categoryOutput = document.getElementById("productCategoryOutput");
    textOutput.innerHTML = "";
    numberOutput.innerHTML = "";
    imageOutput.innerHTML = "";
    categoryOutput.innerHTML = "";
}


