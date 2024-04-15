let form=document.querySelector('#signup-form');
let email=document.querySelector('#email');
let firstName=document.querySelector('#first-name');
let lastName=document.querySelector('#last-name');
let password=document.querySelector('#password');
let dob=document.querySelector('#dob');

let saveData=()=>{
    localStorage.setItem('data', JSON.stringify(data));
}

let loadData=()=>{
    let storedData=JSON.parse(localStorage.getItem('data'));
    if(storedData){
        data=storedData;
    }

    console.log(storedData)
}

let data=[];
loadData();

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    let obj={
        email: email.value,
        firstName: firstName.value,
        lastName: lastName.value,
        password: password.value,
        dob: dob.value
    }
    data.push(obj);
    saveData();
    window.location.href="./sign_In.html";
})