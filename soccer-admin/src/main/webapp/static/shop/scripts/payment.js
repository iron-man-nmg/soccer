/* add remove class */
function hasClass(element, className) {
var reg = new RegExp('(\\s|^)'+className+'(\\s|$)');
return element.className.match(reg);
}

function addClass(element, className) {
if (!this.hasClass(element, className))
{
element.className += " "+className;
}
}
function removeClass(element, className) {
if (hasClass(element, className)) {
var reg = new RegExp('(\\s|^)'+className+'(\\s|$)');
element.className = element.className.replace(reg,' ');
}
}
/* end add remove class */ 

window.onload = function()
{
	labels = document.getElementById('payment').getElementsByTagName('label');
	radios = document.getElementById('payment').getElementsByTagName('input');
	for(i=0,j=labels.length ; i<j ; i++)
	{
	  if (labels[i].className.indexOf("_gray") == -1)
	  {
		labels[i].onclick=function()
		{
			if(!hasClass(this,"checked")) {
				for(k=0,l=labels.length ; k<l ; k++)
				{
					removeClass(labels[k],"checked");
					radios[k].checked = false;
				}
				addClass(this,'checked');
				try{
				 document.getElementById(this.name).checked = true;
				} catch (e) {}
			}
		}
	  }
	}
}