function add(adder) {
  let el=document.getElementById(adder);
  let r = confirm("Add this to your cart?");
  if (r == true) {
    if(el.style.display== 'table-row'){
      alert("You have already added that item to your cart.");
    }
    el.style.display = 'table-row';
  }
}

function del(deletor){
  let el=document.getElementById(deletor);
  let d=confirm("Delete this item?");
  if (d==true){
    el.style.display = "none";
  }
}

function increase(itemqty,itemprc,unitprc){
  var value = parseInt(document.getElementById(itemqty).value, 10);
  var unitprice= parseFloat(unitprc);
  value++;
  var displayedprc=value*unitprice
  document.getElementById(itemqty).value = value;
  document.getElementById(itemprc).value = displayedprc.toFixed(2);
 }

function decrease(itemqty,itemprc,unitprc){
  var value = parseInt(document.getElementById(itemqty).value, 10);
  var unitprice=parseFloat(unitprc);
  value--;
  var displayedprc=value*unitprice;
  document.getElementById(itemqty).value=value;
  document.getElementById(itemprc).value = displayedprc.toFixed(2);
  if (value<1){
    document.getElementById(itemqty).value=1;
    alert("Click on the delete button if you wish to remove this item.");
    document.getElementById(itemprc).value = unitprice.toFixed(2);
  }
}

function checkout(){
  let c1=document.getElementById("cartpic1").style.display;
  let c2=document.getElementById("cartpic2").style.display;
  let c3=document.getElementById("cartpic3").style.display;
  let c0=document.getElementById("cartpic").style.display;
  if (c0=="none" && c1=="none" && c2=="none" && c3=="none"){
    alert("There are no items in your cart.");
  } else {
    var l= confirm("Are you sure you want to check out?");
    if (l==true){
      alert("You will be brought to the checkout form.");
      document.getElementById('checkoutform').style.display='block';
      document.querySelector('.storeitems').style.display='none';
      document.querySelector('.close').style.display='none';
      window.location="#";
    }
}
}

function checkin(){
  var v=confirm("Your cart history will be erased. Are you sure you want to go back to Store?");
  if(v==true){
    document.getElementById('checkoutform').style.display='none';
    window.location="store.html";
  }
}

function showimg(image,imggallery,gallbg){
  var previmg=document.getElementById(image);
  var mainpic=document.getElementById(imggallery);
  mainpic.src=previmg.src;
}

function read(desc,tex){
  let des=document.getElementById(desc);
  if (des.style.display=="none"){
    des.style.display="block";
    document.querySelector(tex).innerText= "Collapse Text";
    document.querySelector(tex).style.borderBottomLeftRadius= "0px";
    document.querySelector(tex).style.borderBottomRightRadius= "0px";
    document.querySelector(tex).style.backgroundColor= "white";
    document.querySelector(tex).style.borderColor= "white";
    document.querySelector(tex).style.color= "purple";
} else {
    des.style.display="none";
    document.querySelector(tex).innerText= "Expand Text";
    document.querySelector(tex).style.borderBottomLeftRadius= "15px";
    document.querySelector(tex).style.borderBottomRightRadius= "15px";
    document.querySelector(tex).style.backgroundColor= "purple";
    document.querySelector(tex).style.borderColor= "purple";
    document.querySelector(tex).style.color= "white";
}
}
