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
    p.classList.add('mb-3')
    const count = clickProduct.childElementCount;
    p.innerHTML=`${count + 1} ${inputFelidString}`
    clickProduct.appendChild(p);
}

function disableButton(number){
    const price = document.getElementById(number);
    const priceString = price.innerText;
    const priceNumber = parseFloat(priceString);
    const makePurchase = document.getElementById("make-Purchase");
    if(priceNumber > 0){
        makePurchase.removeAttribute('disabled')

    }
}

function applyButton(number1){
    const price = document.getElementById(number1);
    const priceString = price.innerText;
    const priceNumber = parseFloat(priceString);
    const makePurchase = document.getElementById("btn-apply");
    if(priceNumber > 199){
        makePurchase.removeAttribute('disabled');

    }
}



document.getElementById('btn-apply').addEventListener('click', function(){
    const inputCoupon = document.getElementById('coupon-input');
    const inputCouponValue = inputCoupon.value;
    if(inputCouponValue === 'SELL200'){
        alert('20% discount')
    }
    else{
        alert('Please Enter Valid Coupon')
    }
})



const mainPrice = 'total-price';
const productHistory = 'product-history';
document.getElementById("product-1").addEventListener('click', function(){
    const getProduct1Price= getPrice('product-1-price', mainPrice);
    const productTitle = getTitle('product-1-title',productHistory);
    const disableBtn = disableButton('total-price');
    const disApplyButton = applyButton('total-price');
})

document.getElementById("product-2").addEventListener('click', function(){
    const getProduct1Price= getPrice('product-2-price', mainPrice);
    const productTitle = getTitle('product-2-title',productHistory);
})