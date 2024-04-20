let sort = document.querySelector("#sort-pop");
let detail = document.querySelector("#detail");
let select = document.querySelector("#sort-pop");

let getData = (URL)=>{
    fetch(URL).then( res => res.json())
    .then( data => {
        displayData(data.data);
    })
};

let displayData = (data)=>{

    detail.innerHTML = "";
    data.forEach(ele => {
        let card = document.createElement("div");

        let name = document.createElement("p");
        name.id = "name";
        name.textContent = ele.country;
    
        let rank = document.createElement("p");
        rank.id = "rank";
        rank.innerHTML = `<b>Rank</b>-${ele.Rank}`;
    
        let pop = document.createElement("p");
        pop.id = "pop";
        pop.innerHTML = `<b>Population</b>- ${ele.population}`;
    
        card.append(name, rank, pop);
        detail.append(card);    
    });
};

sort.addEventListener("change", (e)=>{

    value=e.target.value;
    if(value !== ""){
        getData(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries?sort=population&order=${value}`);
    }

});
getData("https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries");
