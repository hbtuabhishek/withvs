//console.log(document.URL);
var headerTitle=document.getElementById('header-title');
console.log(headerTitle);
headerTitle.textContent='Product Details';
var header=document.getElementById('main-header');
header.style.borderBottom='solid 3px #000';

var items=document.getElementsByClassName('list-group-item');
items[1].style.fontWeight='bold';
items[0].style.backgroundColor='green';
for(var i=0;i<items.length;i++)
{
items[i].style.fontWeight='bold';
}