let shopWomenBtn = document.querySelector("#shop-women-btn");
let shopMenBtn = document.querySelector("#shop-men-btn");
let profileIcon = document.querySelector("#profile-icon");
let dropdown = document.querySelector('.dropdown');
let cancelBtn = document.querySelector('#cancel-btn');

shopWomenBtn.addEventListener("click", ()=> {
    window.location.href="../html/women_home.html"
    
})

shopMenBtn.addEventListener("click", ()=> {
    window.location.href="../html/women_home.html"
    
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