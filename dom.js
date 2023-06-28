//console.log(document.URL);
//var headerTitle=document.getElementById('header-title');
//console.log(headerTitle);
//headerTitle.textContent='Product Details';
//var header=document.getElementById('main-header');
//header.style.borderBottom='solid 3px #000';

//GETELEMENTBYID

//var items=document.getElementsByClassName('list-group-item');
//items[1].style.fontWeight='bold';
//items[0].style.backgroundColor='green';
//for(var i=0;i<items.length;i++)
//{
//items[i].style.fontWeight='bold';
//}

//GETELEMENTBYCLASSNAME

//var items=document.getElementsByClassName('list-group-item');
//for(var i=0;i<items.length;i++)
//{
//items[i].style.fontWeight='bold';
//}
//items[2].style.backgroundColor='green';

//GETELEMENTBYTAGNAME
//var li=document.getElementsByTagName('li');
//li[1].style.fontWeight='bold';
//li[4].style.backgroundColor='green';
//for(var i=0;i<li.length;i++)
//{
//li[i].style.fontWeight='bold';
//}

//QUERYSELECTOR

var seconditem=document.querySelector('.list-group-item:nth-child(2)');
seconditem.style.backgroundColor ='green';
var thirditem=document.querySelector('.list-group-item:nth-child(3)');
thirditem.style.visibility ='hidden';

//QUERYSELECTORALL

