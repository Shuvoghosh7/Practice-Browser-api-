const displayLoaclstorageProduct = ()=>{
    const products = getProduct()
    for(const product in products){
        displayProduct(product)
    }
}
const addToProduct= () =>{
    const productName = document.getElementById('product-name').value
    const productPrice = document.getElementById('product-price').value
    displayProduct(productName,productPrice)

    addProductTocart(productName,productPrice)
    console.log(productName,productPrice)
    document.getElementById('product-name').value=''
    document.getElementById('product-price').value=''
}

const displayProduct = (pName,pPrice)=>{
    const ul= document.getElementById('list-product')
    const li = document.createElement('li')
    li.innerHTML=`Name:${pName}, Price:${pPrice}`
    ul.appendChild(li)
}

const getProduct =()=>{
const cart = localStorage.getItem('cart')
let cartObject;
if(cart){
    cartObject=JSON.parse(cart)
}else{
    cartObject={}
}
return cartObject
}

const addProductTocart = (pname, pPrice)=>{
    const cart = getProduct()
    cart[pname]=pPrice
    const cartStringfy = JSON.stringify(cart)
    localStorage.setItem('cart',cartStringfy)
}
displayLoaclstorageProduct()