let newData=[];
let productCartStored=JSON.parse(localStorage.getItem("products"));
let prodCont=document.querySelector("#prod-cont");
let sortFilter=document.querySelector("#sort-filter");
let categoryFilter=document.querySelector("#category-filter");
let dispPrice=document.querySelector("#disp-price");

let saveData=()=>{
    localStorage.setItem("cart", JSON.stringify(newData));
}

let oLoad=()=>{
    let stored=JSON.parse(localStorage.getItem("cart"));
    if(stored?.length){
        newData=stored;
    }
}

oLoad();

let displayProduct = (data)=>{
    prodCont.innerHTML=""

    data.forEach((ele)=>{
        let existingItem = newData.find((item) => item.id == ele.id)

        if(existingItem){
            existingItem.quantity++;
        }else{
            newData.push({...ele, quantity: 1});
        }
    })

    newData.forEach((ele)=>{
    
        let prodCard=document.createElement("div");
        prodCard.id="prod-card";
    
        let prodImg=document.createElement("img");
        prodImg.id="prod-img";
        prodImg.src=ele.imageURL
    
        let prodTitle=document.createElement("p");
        prodTitle.id="prod-title";
        prodTitle.innerText=ele.productTitle;
    
        let catPri=document.createElement("div");
        catPri.id="cat-pri";
    
        let prodCategory=document.createElement("p");
        prodCategory.id="prod-category";
        prodCategory.innerText=`${ele.category}`;
    
        let prodPrice=document.createElement("p");
        prodPrice.id="prod-price";
        prodPrice.innerText=`$${ele.quantity*ele.productPrice}`;

        let quantity=document.createElement("div");
        quantity.id="quantity";

        let quantityIncBtn=document.createElement("button");
        quantityIncBtn.innerText=`Inc (+)`;
        quantityIncBtn.id="quantity-inc-btn";

        let quantityDisplay=document.createElement("p");
        quantityDisplay.innerText=`${ele.quantity}`;

        let quantityDecBtn=document.createElement("button");
        quantityDecBtn.innerText=`Dec (-)`;
        quantityDecBtn.id="quantity-dec-btn";
    
        let removeBtn=document.createElement("button");
        removeBtn.id="prod-cart-btn";
        removeBtn.innerText="Remove From Bag";
    
        quantity.append(quantityDecBtn,quantityDisplay,quantityIncBtn )
        catPri.append(prodPrice,prodCategory);
        prodCard.append(prodImg,prodTitle,catPri,quantity,removeBtn);
        prodCont.append(prodCard)

        oLoad();

        quantityDecBtn.addEventListener("click",()=>{
            if(ele.quantity>0){
                ele.quantity--;
                quantityDisplay.innerText=`${ele.quantity}`;
                saveData();
            }
        })

        quantityIncBtn.addEventListener("click",()=>{
            if(ele.quantity<25){
                ele.quantity++;
                quantityDisplay.innerText=`${ele.quantity}`;
                saveData();
            }
        })
    
        removeBtn.addEventListener("click",()=>{
            newData=newData.filter((e)=>{
                return ele.id!=e.id
            })
            displayProduct(newData);
            saveData();
        })
    });

}

// if(newData){
//     displayProduct(newData);
// }els
displayProduct(productCartStored || []);

// ----------------------------------------

let shopWomenBtn = document.querySelector("#shop-women-btn");
let shopMenBtn = document.querySelector("#shop-men-btn");
let profileIcon = document.querySelector("#profile-icon");
let dropdown = document.querySelector('.dropdown');
let cancelBtn = document.querySelector('#cancel-btn');
let moveToProd = document.querySelectorAll('.move-to-prod');
let totalPrice=0;
let totalQuantity = 0;

newData.forEach((ele)=>{
    totalPrice += ele.productPrice * ele.quantity;
})

console.log(totalPrice);

// dispPrice.innerText=`${}`


shopWomenBtn.addEventListener("click", ()=> {
    window.location.href="../html/women_home.html"
})

shopMenBtn.addEventListener("click", ()=> {
    window.location.href="../html/women_home.html"
    
})
moveToProd.forEach ((ele)=> { 

    ele.addEventListener("click", ()=> {
        window.location.href="../html/men_product.html"
    });
})

profileIcon.addEventListener('click',()=> {
    if(dropdown.style.display == 'block'){
        dropdown.style.display ='none';
    }else{
        dropdown.style.display ='block';
    }
    profileIcon.style.border = '1px solid white';
});

profileIcon.addEventListener('hover', ()=> {
    if(dropdown.style.display == 'block'){
        dropdown.style.display ='none';
    }else{
        dropdown.style.display ='block';
    }
});    

cancelBtn.addEventListener('click', ()=> {
    dropdown.style.display = 'none';
    profileIcon.style.border = 'none';
});
