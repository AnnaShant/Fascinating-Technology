var mas = ["img/fotogallery/9X.jpg","img/fotogallery/5X.jpg","img/fotogallery/1X.jpg","img/fotogallery/8X.jpg"] // массив картинок
var to = -1;  // Счетчик, указывающий на текущую картинки

function right_arrow() // Открытие следующей картинки(движение вправо)
{ 
 var obj = document.getElementById("a");
  if (to < mas.length-1)  to++ 
   else
     to = 0;
     obj.src = mas[to];	 
}

function left_arrow() // Открытие предыдущей картинки(движение влево)
{     
 var obj = document.getElementById("a");
if (to > 0) to--;
  else
    to = mas.length-1;
    obj.src = mas[to];	  			 
}


    /* предзагрузка */
    var imgs = thumbs.getElementsByTagName('img');
    for (var i = 0; i < imgs.length; i++) {
      var url = imgs[i].parentNode.href;
      var img = document.createElement('img');
      img.src = url;
    }