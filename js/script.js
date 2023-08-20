function getPrice(input1,input2){
    // Collect Product Price
    const inputFelid = document.getElementById(input1);
    const inputFelidString = inputFelid.innerText;
    const input = parseFloat(inputFelidString);
    // previous  Price
    const price = document.getElementById(input2);
    const priceString = price.innerText;
    const priceNumber = parseFloat(priceString);
    // click after total price
    const totalPrice = priceNumber + input;
    price.innerText = totalPrice;
}

function getTitle(input3,input4){
    // title collect
    const inputFelid = document.getElementById(input3);
    const inputFelidString = inputFelid.innerText;

    const clickProduct = document.getElementById(input4);
    const p = document.createElement('p');
    p.innerHTML=`${inputFelidString}`
    clickProduct.appendChild(p);
    

    console.log(p);
}

const mainPrice = 'total-price';
document.getElementById("product-1").addEventListener('click', function(){
    const getProduct1Price= getPrice('product-1-price', mainPrice);
    const productTitle = getTitle('product-1-title','product-history')
})

document.getElementById("product-2").addEventListener('click', function(){
    const getProduct1Price= getPrice('product-2-price', mainPrice);
})