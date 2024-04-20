let userCont = document.querySelector("#user-cont");
let btn = document.querySelector("#container button");

let getData = (URL)=>{
    fetch(URL).then(res => res.json())
    .then((data)=>{
        displayData(data.data);
    })
}

let displayData = (data)=>{
    data.forEach((ele)=>{
        let userCard = document.createElement("div");
        userCard.id = "user-card";

        let name = document.createElement("p");
        name.id = "name";
        name.innerText = `${ele.first_name} ${ele.last_name}`

        let email = document.createElement("p");
        email.innerText = ele.email;

        let avatar = document.createElement("img");
        avatar.src = ele.avatar;

        userCard.append(avatar, name, email);
        userCont.append(userCard);
    })
}

btn.addEventListener("click",()=>{
    getData("https://reqres.in/api/users");
});
