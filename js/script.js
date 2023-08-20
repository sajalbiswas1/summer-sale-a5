function getInputFelid(input1,input2){
    const inputFelid = document.getElementById(input1);
    const inputFelidString = inputFelid.innerText;
    const input = parseFloat(inputFelidString);

    const price = document.getElementById(input2);
    const priceString = price.innerText;
    const priceNumber = parseFloat(priceString);

    const totalPrice = priceNumber + input;
    price.innerText = totalPrice;
    // console.log(totalPrice, input);
    // return input;
}

const mainPrice = 'total-price';
document.getElementById("product-1").addEventListener('click', function(){
    const getProduct1Price= getInputFelid('product-1-price', mainPrice);
})

document.getElementById("product-2").addEventListener('click', function(){
    const getProduct1Price= getInputFelid('product-2-price', mainPrice);
})