let appendData = document.querySelector("#append-data");
let prev = document.querySelector("#prev");
let next = document.querySelector("#next");
let department = document.querySelector("#department");
let gender = document.querySelector("#gender");
let salary = document.querySelector("#salary");
let pageCount = document.querySelector("#pageCount");
let pageNo = 1;
let current;
let filtered = false;
let filteredData;
let departmentValue="";
let genderValue="";
let salaryValue="";




department.addEventListener("change", async(e)=>{
    current = "department";
    filtered = true;
    departmentValue = e.target.value;
    if(departmentValue !== ""){
        let res = await fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees?page=${pageNo}&limit=10&filterBy=department&filterValue=${departmentValue}`);
        let data = await res.json();
        filteredData = data.data;
        showData(filteredData);
    }
})

gender.addEventListener("change", async(e)=>{
    current = "gender";
    filtered = true;
    genderValue = e.target.value;
    if(genderValue !== ""){

        let res = await fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees?page=${pageNo}&limit=10&filterBy=gender&filterValue=${genderValue}`);
        let data = await res.json();
        filteredData = data.data;
        showData(filteredData);
    }
})

salary.addEventListener("change", async(e)=>{
    salaryValue = e.target.value;
    if(filtered){
        filteredData = filteredData.sort((a,b)=>{
            if(salaryValue == "asc"){
                return a.salary - b.salary
            }else{
                return b.salary - a.salary
            }
        });

        showData(filteredData);
    }else{

        if(salaryValue !== ""){
    
            let res = await fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees?page=${pageNo}&limit=10&sort=salary&order=${salaryValue}`);
            let data = await res.json();
            
            showData(data.data);
        }
    }
})

prev.addEventListener("click", async() => {

    if(pageNo <= 1){
        prev.disabled= true;
        pageNo = 1;
    }else{
        next.disabled = false;
        pageNo--;
    }

    if(filtered){
        let filterValue = current == "department" ? departmentValue : genderValue;
        let res = await fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees?page=${pageNo}&limit=10&filterBy=${current}&filterValue=${filterValue}`);
        let data = await res.json();
        showData(data.data);    
    }else{
        let res = await fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees?page=${pageNo}&limit=10`);
        let data = await res.json();
        showData(data.data);
    }

})

next.addEventListener("click", async() => {
    if(pageNo == 9){
        next.disabled = true;
        pageNo = 10;
    }else{
        prev.disabled= false;
        pageNo++;
    }

    if(filtered){
        let filterValue = current == "department" ? departmentValue : genderValue;
        let res = await fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees?page=${pageNo}&limit=10&filterBy=${current}&filterValue=${filterValue}`);
        let data = await res.json();
        showData(data.data);    
    }else{
        let res = await fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees?page=${pageNo}&limit=10`);
        let data = await res.json();
        showData(data.data);
    }
})

let getData = async()=>{
    let res = await fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees?page=${pageNo}&limit=10`);
    let data = await res.json();
    showData(data.data);
}

let showData = (data)=>{

    appendData.innerHTML="";
    data.forEach(ele => {
        
        let tr = document.createElement("tr");

        let td1 = document.createElement("td");
        td1.textContent = ele.id;

        let td2 = document.createElement("td");
        td2.textContent = ele.name;

        let td3 = document.createElement("td");
        td3.textContent = ele.gender;

        let td4 = document.createElement("td");
        td4.textContent = ele.department;

        let td5 = document.createElement("td");
        td5.textContent = ele.salary;

        tr.append(td1, td2, td3, td4, td5);
        appendData.append(tr);
    });
    // console.log(data);
    pageCount.textContent = pageNo;;
}

getData();