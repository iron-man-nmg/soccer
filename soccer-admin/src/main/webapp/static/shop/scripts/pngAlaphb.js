function Show(id){
        var obj=document.getElementById('c_'+id);
        if(obj.style.display=="none"){
                obj.style.display="";
				//??×ó2?μ￥Id·?è?Cookies
				var curShow = readCookie('curShow');
				if(curShow!='')
				{
					var arr_curShow = curShow.split(',');
					var found = false;
					for(i=0;i<arr_curShow.length-1;i++)
					{
						if(arr_curShow[i].toString()==id) {found=true;}
					}
					if(!found){writeCookie('curShow',curShow+','+id,6)}
				}
				else {
					writeCookie('curShow',id,6)
				}
				//??×ó2?μ￥Id·?è?Cookies End
        }else{
                obj.style.display="none";
				//??×ó2?μ￥Id′óCookies?Dò?3y
				var curShow = readCookie('curShow');
				if(curShow!='')
				{
					var arr_curShow = curShow.split(',');
					for(i=0;i<arr_curShow.length;i++)
					{
						if(arr_curShow[i].toString()==id) {arr_curShow=arr_curShow.del(i--);}
					}
					curShow = arr_curShow.join(',');
					//alert(curShow);
					writeCookie('curShow',curShow,6)
				}
				//??×ó2?μ￥Id′óCookies?Dò?3y End
        }

}

function readCookie(name)

{

  var cookieValue = "";

  var search = name + "=";

  if(document.cookie.length > 0)

  { 

    offset = document.cookie.indexOf(search);

    if (offset != -1)

    { 

      offset += search.length;

      end = document.cookie.indexOf(";", offset);

      if (end == -1) end = document.cookie.length;

      cookieValue = unescape(document.cookie.substring(offset, end))

    }

  }

  return cookieValue;

}

function writeCookie(name, value, hours)

{

  var expire = "";

  if(hours != null)

  {

    expire = new Date((new Date()).getTime() + hours * 3600000);

    expire = "; expires=" + expire.toGMTString();

  }

  document.cookie = name + "=" + escape(value) + expire;

}
Array.prototype.del=function(n) {  //n表示第几项，从0开始算起。
//prototype为对象原型，注意这里为对象增加自定义方法的方法。
  if(n<0)  //如果n<0，则不进行任何操作。  
    return this;
  else
    return this.slice(0,n).concat(this.slice(n+1,this.length));
}


window.onload = function a()
{
	var curShow = readCookie('curShow');
	var totalShow = 5;	//自己修改一共有多少个八级分类
	if(curShow!=''&&curShow!=null)
	{
		for(i=1;i<=totalShow;i++)
		{
			document.getElementById('c_'+i).display="none";
		}
		var arr_curShow;
		arr_curShow = curShow.split(',');
		for(i=0;i<=arr_curShow.length-1;i++)
		{
			if(arr_curShow[i]!=''){document.getElementById('c_'+arr_curShow[i]).style.display="";}
		}

	}
}

