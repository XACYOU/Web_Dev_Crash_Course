let form = document.querySelector('form');

let getData = async() => {

    try {
        let res = await fetch("http://localhost:3000/users");
        let data = await res.json();
        
        return data;
    
    } catch (err) {
        console.log(err);
    }
    
}

form.addEventListener('submit', async (e)=>{

    try {
        e.preventDefault();

        let data = await getData();
        let formEle = e.target;
        let isLoggedIn = false;
        let loggedInUserName;
    
        let email = formEle[0].value;
        let password = formEle[1].value;
    
        data.forEach((ele)=>{
            if(ele.email == email && ele.password == password){
                isLoggedIn = true;
                loggedInUserName = ele.name;
            }
        })
    
        if(isLoggedIn && loggedInUserName !=""){
            alert("Login successful!");
            localStorage.setItem("UserName", JSON.stringify(loggedInUserName));
            window.location.href = "../HTML/product.html";
        }else{
            alert("Incorrect Credentials! Please try again");
        }
        
    } catch (err) {
        console.log(err);
    }
});

