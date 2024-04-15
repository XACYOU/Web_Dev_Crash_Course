let form=document.querySelector('#signin-form');
let email=document.querySelector('#email');
let password=document.querySelector('#password');

let storedData=JSON.parse(localStorage.getItem('data'));
let index;

console.log(storedData);


let dataCheck=() => {
    let credCheck=false;
    storedData.forEach((ele,i)=>{
        if(ele.email == obj.email && ele.password == obj.password){
            credCheck = true;
            index=i;
            return;
        }
    })

    if(credCheck){
        localStorage.setItem('currentUserIndex', JSON.stringify(index));
        window.location.href="./men_home.html";
    }else{
        alert('login failure');
    }
}

let obj;
form.addEventListener('submit', (e)=>{
    e.preventDefault();
    obj={
        email: email.value,
        password: password.value,
    }
    dataCheck();
})