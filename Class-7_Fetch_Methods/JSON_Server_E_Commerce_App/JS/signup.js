let form = document.querySelector('form');

let addData = (obj) => {
    
    console.log(obj);
    fetch("http://localhost:3000/users",{
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(obj)
    })
    .then((res)=>{
        alert("Signup successful");
        window.location.href = "../HTML/login.html";
    })
}

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    let obj={};
    let formEle = e.target;

    let name = formEle[0].value;
    let email = formEle[1].value;
    let password = formEle[2].value;

    obj = {
        id:Math.random().toString(),
        name,
        email,
        password
    }

    addData(obj);
});

