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
    p.innerHTML=`${count + 1}. ${inputFelidString}`
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

    const price = document.getElementById('total-price');
    const priceString = price.innerText;
    const priceNumber = parseFloat(priceString);

    const discount = document.getElementById("discount-price");
    const discountString = discount.innerText;
    const discountNumber = parseFloat(discountString);

    const mainBalance = document.getElementById("dis-after-price");
    const mainBalanceString = mainBalance.innerText;
    const mainBalanceNumber = parseFloat(mainBalanceString);

    const discountPrice = priceNumber/100 * 20;
        const disPrice = discountPrice.toFixed(2);
   
    if(inputCouponValue === 'SELL200'){
        discount.innerText = disPrice;
    }
    else{
        alert('Please Enter Valid Coupon')
    }
    
    const afterTotal = mainBalanceNumber - disPrice;
    const afterTotalTofixed = afterTotal.toFixed(2);

    if(inputCouponValue === 'SELL200'){
        mainBalance.innerText = afterTotalTofixed;
    }
})



const mainPrice = 'total-price';
const productHistory = 'product-history';

// Product 1
document.getElementById("product-1").addEventListener('click', function(){
    const getProduct1Price= getPrice('product-1-price', mainPrice);
    const productTitle = getTitle('product-1-title',productHistory);
    const disableBtn = disableButton('total-price');
    const disApplyButton = applyButton('total-price');
    const getProduct1Price2= getPrice('product-1-price', "dis-after-price");
    
})
// Product 2
document.getElementById("product-2").addEventListener('click', function(){
    const getProduct1Price= getPrice('product-2-price', mainPrice);
    const productTitle = getTitle('product-2-title',productHistory);
    const disableBtn = disableButton('total-price');
    const disApplyButton = applyButton('total-price');
    const getProduct1Price2= getPrice('product-2-price', "dis-after-price");
})
// Product 3
document.getElementById("product-3").addEventListener('click', function(){
    const getProduct1Price= getPrice('product-3-price', mainPrice);
    const productTitle = getTitle('product-3-title',productHistory);
    const disableBtn = disableButton('total-price');
    const disApplyButton = applyButton('total-price');
    const getProduct1Price2= getPrice('product-3-price', "dis-after-price");
})
// Product 4
document.getElementById("product-4").addEventListener('click', function(){
    const getProduct1Price= getPrice('product-4-price', mainPrice);
    const productTitle = getTitle('product-4-title',productHistory);
    const disableBtn = disableButton('total-price');
    const disApplyButton = applyButton('total-price');
    const getProduct1Price2= getPrice('product-4-price', "dis-after-price");
})
// Product 5
document.getElementById("product-5").addEventListener('click', function(){
    const getProduct1Price= getPrice('product-5-price', mainPrice);
    const productTitle = getTitle('product-5-title',productHistory);
    const disableBtn = disableButton('total-price');
    const disApplyButton = applyButton('total-price');
    const getProduct1Price2= getPrice('product-5-price', "dis-after-price");
})
// Product 6
document.getElementById("product-6").addEventListener('click', function(){
    const getProduct1Price= getPrice('product-6-price', mainPrice);
    const productTitle = getTitle('product-6-title',productHistory);
    const disableBtn = disableButton('total-price');
    const disApplyButton = applyButton('total-price');
    const getProduct1Price2= getPrice('product-6-price', "dis-after-price");
})
// Product 7
document.getElementById("product-7").addEventListener('click', function(){
    const getProduct1Price= getPrice('product-7-price', mainPrice);
    const productTitle = getTitle('product-7-title',productHistory);
    const disableBtn = disableButton('total-price');
    const disApplyButton = applyButton('total-price');
    const getProduct1Price2= getPrice('product-7-price', "dis-after-price");
})
// Product 8
document.getElementById("product-8").addEventListener('click', function(){
    const getProduct1Price= getPrice('product-8-price', mainPrice);
    const productTitle = getTitle('product-8-title',productHistory);
    const disableBtn = disableButton('total-price');
    const disApplyButton = applyButton('total-price');
    const getProduct1Price2= getPrice('product-8-price', "dis-after-price");
})
// Product 9
document.getElementById("product-9").addEventListener('click', function(){
    const getProduct1Price= getPrice('product-9-price', mainPrice);
    const productTitle = getTitle('product-9-title',productHistory);
    const disableBtn = disableButton('total-price');
    const disApplyButton = applyButton('total-price');
    const getProduct1Price2= getPrice('product-9-price', "dis-after-price");
})