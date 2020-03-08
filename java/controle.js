//var shopnbrchar = shopnbrtag.textContent;
//var shopnbr=Number(shopnbrchar);
//shopnbrtag.textContent=shopnbr+1;

function addtocart(title) {
    var shopnbrtag = document.getElementById('shopcartnbr');


    shopnbrtag.textContent = Number(shopnbrtag.textContent) + 1;

    if (shopnbrtag.classList.contains('badge-primary')) {
        shopnbrtag.classList.remove('badge-primary');

        shopnbrtag.classList.add('badge-warning');
    }
    var modalbody = document.getElementById('modalbody');
    modalbody.textContent = title + "a ete ajouter a votre panier";
}
filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) AddClass(x[i], "show");
  }
}

function AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}
