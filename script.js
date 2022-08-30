const button = document.querySelectorAll("button.addNew");
const cart = document.querySelector("div.cart table");
const empty = document.querySelector("div.cart h3.empty-word")
const reset = document.querySelector("button.reset");
const buy = document.querySelector("button.buy");
const items = [];
let Sno = 1;
let totalBill = 0;
button.forEach((btn)=>{
    btn.addEventListener("click",function(){
        if (empty.style.display !== "none"){
            const tr0 = document.createElement("tr");
            const th0 = document.createElement("th");
            const th1 = document.createElement("th");
            const th2 = document.createElement("th");
            const th3 = document.createElement("th");
            th0.innerText = "S.no";
            th1.innerText = "Item Name";
            th2.innerText = "Quantity";
            th3.innerText = "Price";
            tr0.append(th0);
            tr0.append(th1);
            tr0.append(th2);
            tr0.append(th3);
            cart.append(tr0);
            th0.style, th1.style, th2.style,th3.style = "padding:10px";
        }
        if(!items.includes(btn.value)){
            const tr = document.createElement("tr");
        const th = document.createElement("th");
        const td1 = document.createElement("td");
        const td2 = document.createElement("td");
        const td3 = document.createElement("td");
        empty.style = "display:none";
        th.append(Sno);
        td1.append(btn.value);
        // td2.innerHTML = `<input type="number" value="1" id="${btn.value}" style="width:50px; font-size:1.05rem;text-align:center">`;
        td2.innerHTML = 1;
        td2.setAttribute("id",`${btn.value}`)
        td3.innerText = btn.dataset.price;
        tr.append(th);
        tr.append(td1);
        tr.append(td2);
        tr.append(td3);
        cart.append(tr);
        Sno+=1;
        totalBill+=parseInt(btn.dataset.price) * parseInt(document.getElementById(btn.value).innerHTML);
        document.querySelector("div.cart h3 span.bill").innerHTML= totalBill;
        th.style, td1.style, td2.style = "padding:12px;";
        items.push(btn.value);
        }else{
            let quantity = parseInt(document.getElementById(btn.value).innerHTML);
             quantity+=1;
             document.getElementById(btn.value).innerHTML = quantity;
             totalBill+=parseInt(btn.dataset.price) ;
             console.log(btn.dataset.price);
             console.log(document.getElementById(btn.value).innerHTML);
             document.querySelector("div.cart h3 span.bill").innerHTML= totalBill;
        }
        
    })
})

cart.style = "margin-inline:auto;";

reset.addEventListener("click",function(){
    cart.innerHTML = "";
    empty.style = "display:block";
    Sno = 1;
    document.querySelector("div.cart h3 span.bill").innerHTML= 0;
    totalBill = 0;
    items.splice(0,items.length);
})

buy.addEventListener("click",function(){
    if(totalBill === 0){
        alert("There are no items in your cart!")
    }else{
        if (confirm("Are you sure?")) {
            alert("Your bill is Rs."+totalBill+"\n Thank you for shopping!")
            cart.innerHTML = "";
            document.querySelector("div.cart h3 span.bill").innerHTML= 0;
            totalBill = 0;
            empty.style = "display:block";
            Sno = 1;
            items.splice(0,items.length);
        }
    }
})