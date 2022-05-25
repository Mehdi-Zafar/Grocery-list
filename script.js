const tableBody = document.querySelector("table");
const button = document.querySelector("button.addNew");
button.addEventListener("click", func2)
let sNo = 1;
const reset = document.querySelector("button.reset");

function func2(){
  let name = prompt("Enter name of person");
  if(name){
    if(document.querySelectorAll("tr").length !== 0){
      const number = document.querySelectorAll("tr th")[document.querySelectorAll("tr").length-1];
      console.log(number.innerText);
      sNo =parseInt(number.innerText) + 1;
    }
    const templateHTML = document.createElement("tr");
    const a = document.createElement("th");
    a.innerText = `${sNo}`;
    const b = document.createElement("td");
    b.innerHTML = `${name}`;
    const c = document.createElement("td");
    const d = document.createElement("button");
    d.addEventListener("click",
    function(){
      if(d.classList.contains('remove')){
        const row = d.parentElement.parentElement;
        document.querySelector("h2").innerHTML = `${name} removed!`;
        row.remove();
      }
      
    })
    d.innerHTML = `<i class="bi bi-dash-square"></i>`;
    d.classList.add('remove');
    d.setAttribute("title","remove item")
    c.append(d);
    templateHTML.append(a);
    templateHTML.append(b);
    templateHTML.append(c);

    tableBody.appendChild(templateHTML);
    document.querySelector("h2").innerHTML = `${name} added!`;


    reset.addEventListener("click",function(){
      for (let num = 0; num < document.querySelectorAll("tr").length; num++) {
        const row = d.parentElement.parentElement;
        document.querySelector("h2").innerText = `All items removed!`;
        row.remove();
        sNo = 1;
      }
    })
  } 
}