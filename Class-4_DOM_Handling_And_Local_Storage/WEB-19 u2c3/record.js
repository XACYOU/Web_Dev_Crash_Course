// fill in javascript code here
let tbody = document.querySelector('tbody');

let Name = document.querySelector('#name');
Name.required=true;

let EmpID = document.querySelector('#employeeID');
EmpID.required=true;

let Department = document.querySelector('#department');
Department.required=true;

let Exp = document.querySelector('#exp');
Exp.required=true;

let Email = document.querySelector('#email');
Email.required=true;

let Mbl = document.querySelector('#mbl');
Mbl.required=true;

let select=document.querySelector("#sortDepartment>select");

let btn= document.querySelector('form');

let data=[];

let handleSubmit = (e)=>{
    e.preventDefault();
    let role;

    if(Exp.value>5){
        role = "Senior";
    }else if(Exp.value>=2 && Exp.value<=5){
        role = "Junior";
    }else if(Exp.value<=1){
        role = "Fresher";
    }

    let obj={
        name:Name.value,
        empID:EmpID.value,
        department:Department.value,
        exp:Exp.value,
        email:Email.value,
        mbl:Mbl.value,
        role:role,
    }
    
    data.push(obj);
    saveData(data);
    loadData(data);
}

let saveData = (data)=>{
    localStorage.setItem('data', JSON.stringify(data));
}

let loadData = ()=>{
    let storedData = JSON.parse(localStorage.getItem('data'));

    if(storedData){
        data= storedData;
        showData(data);
    }
}

let handleDelete = (i)=>{
    data.splice(i,1);
    saveData(data);
    loadData();
}

let handlechange = ()=>{
    let value=select.value;

    let newData=data.filter((ele)=>{
        if(value==""){
            return ele;
        }else{
            return ele.department == value;
        }
    })
    if(newData.length>0){
        showData(newData);
    }
}

let showData = (data)=>{
    tbody.innerHTML="";

    data.forEach((ele,i)=>{

        let tr= document.createElement('tr');
        let td1= document.createElement('td');
        td1.innerText= ele.name;
        let td2= document.createElement('td');
        td2.innerText= ele.empID;
        let td3= document.createElement('td');
        td3.innerText= ele.department;
        let td4= document.createElement('td');
        td4.innerText= ele.exp;
        let td5= document.createElement('td');
        td5.innerText= ele.email;
        let td6= document.createElement('td');
        td6.innerText= ele.mbl;
        let td7= document.createElement('td');
        td7.innerText= ele.role;                                
        let td8= document.createElement('td');
        let delete_btn=document.createElement('button');
        delete_btn.innerText="DELETE";
        delete_btn.id="delete";
        delete_btn.addEventListener('click', () => handleDelete(i));
        td8.append(delete_btn);

        tr.append(td1, td2, td3, td4, td5, td6, td7, td8);
        tbody.append(tr);
    })
};

btn.addEventListener('submit', (e)=> handleSubmit(e));
select.addEventListener('change', ()=> handlechange());

loadData();