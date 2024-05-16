let topDiv = document.querySelector('#top');
let userName = document.createElement('p');
let ProductContainer = document.querySelector('#prod-cont');

let storedName = JSON.parse(localStorage.getItem('UserName'));
userName.textContent = storedName;

topDiv.append(userName);

let getData = async() => {
    try {
        let res = await fetch("http://localhost:3000/products");
        let data = await res.json();
    
        displayData(data);

    } catch (err) {
        console.log(err);
    }
}

let displayData = (data) => {
    ProductContainer.innerHTML = "";

    data.forEach(ele => {
        let prodDiv = document.createElement('div');
        prodDiv.id = "prod-div";

        let image = document.createElement('img');
        image.src = ele.src;

        let title = document.createElement('h2');
        title.textContent = ele.title;

        let prRa = document.createElement('div');
        prRa.id = "pr-ra";

        let price = document.createElement('p');
        price.textContent = `Price-${ele.price}`;

        let rating = document.createElement('p');
        rating.textContent = `Rating:-${ele.ratings}`;

        let adDel = document.createElement('div');
        adDel.id = "ad-del";

        let addBtn = document.createElement('button');
        addBtn.textContent = `Add To Cart`
        addBtn.addEventListener('click', () => handleAdd(ele));

        let delBtn = document.createElement('button');
        delBtn.textContent = `Delete from Cart`
        delBtn.addEventListener('click', () => handleDelete(ele.id));
        
        prRa.append(price, rating);
        adDel.append(addBtn, delBtn)
        prodDiv.append(image, title, prRa, adDel);
        ProductContainer.append(prodDiv);
    });

    let handleDelete = async (ID) => {
        
        await fetch(`http://localhost:3000/allUsersCart/Saurabh/${ID}`,{
            method:"DELETE",
        });    

    };

    let handleAdd= async(ele)=>{

        try {
            let res = await fetch(`http://localhost:3000/allUsersCart`);
            let cartData = await res.json();
    
            if(!cartData[storedName]){
                cartData[storedName] = [];
            }
            cartData[storedName].push(ele);
    
            await fetch(`http://localhost:3000/allUsersCart`,{
                method:"POST",
                headers:{
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(cartData)
            });    

        } catch (err) {
            console.log(err);
        }                
    }
}


getData();