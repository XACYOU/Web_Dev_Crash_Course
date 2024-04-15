let shopWomenBtn = document.querySelector("#shop-women-btn");
let shopMenBtn = document.querySelector("#shop-men-btn");
let profileIcon = document.querySelector("#profile-icon");
let dropdown = document.querySelector('.dropdown');
let cancelBtn = document.querySelector('#cancel-btn');
let moveToProd = document.querySelectorAll('.move-to-prod');

let currentUserIndex = JSON.parse(localStorage.getItem('currentUserIndex'));

console.log(currentUserIndex);

if (currentUserIndex){
    
}

shopWomenBtn.addEventListener("click", ()=> {
    window.location.href="../html/women_product.html"
})

shopMenBtn.addEventListener("click", ()=> {
    window.location.href="../html/men_home.html"
    
})
moveToProd.forEach ((ele)=> { 

    ele.addEventListener("click", ()=> {
        window.location.href="../html/women_product.html"
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