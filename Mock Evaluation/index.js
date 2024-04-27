let prodCont = document.querySelector("#prod-cont");
let category = document.querySelector("#category");
let sort = document.querySelector("#sort");
let search = document.querySelector("#search");
let prodData;

search.addEventListener("change", (e)=>{
    let value = e.target.value.toLowerCase();

    let searchData = prodData.filter(ele => value == ele.title.toLowerCase());
    showData(searchData);
    console.log(searchData);
})

sort.addEventListener("change", (e) => {
    let value = e.target.value;
    let filterData = prodData.sort((a,b)=> {
        if(value == "HTL"){
            return b.price-a.price;
        }else{
            return a.price-b.price;
        }
    });

    showData(filterData);
})

category.addEventListener("change",(e)=>{
    let value = e.target.value;

    let filterData = prodData.filter(ele => ele.category === value);
    showData(filterData);

})

let getData = async () => {

    let res = await fetch("https://fakestoreapi.com/products");
    let data = await res.json();
    prodData = data;
    showData(data);
};

let showData = (data) => {
    
    prodCont.innerHTML="";
    data.forEach(ele => {
        
        let prodCard = document.createElement("div");
        prodCard.id = "prod-card";

        let image = document.createElement("img");
        image.src = ele.image;

        let title = document.createElement("h2");
        title.textContent = ele.title;

        let price = document.createElement("p");
        price.innerHTML = `<b>Price:</b> ${ele.price}`

        prodCard.append(image, title, price);
        prodCont.append(prodCard);
    });
};

getData();