if(!document.all){
	
		HTMLElement.prototype.__defineGetter__("children", 
			 function () { 
				 var returnValue = new Object(); 
				 var number = 0; 
				 for (var i=0; i<this.childNodes.length; i++) { 
					 if (this.childNodes[i].nodeType == 1) { 
						 returnValue[number] = this.childNodes[i]; 
						 number++; 
					 } 
				 } 
				 returnValue.length = number; 
				 return returnValue; 
			 } 
		 );
	
	}
	function randomInt(num1){
		return Math.floor(Math.random()*num1);
	};
	//����ÿ��t����ִ��һ��
	Function.prototype.runEach = function(t){
		var A = this;
		var B = Array.prototype.slice.call(arguments,1);
		var f = function(){
			A.apply(null,B);
		};
		return setInterval(f, t);
	};
	//������t������ʱ��ִ��
	Function.prototype.runAfter = function(t){
		var A = this;
		var B = Array.prototype.slice.call(arguments,1);
		var f = function(){
			A.apply(null, B);
		};
		return setTimeout(f,t);
	};
	var picCount=document.getElementById("homePushName").children.length;
	var canRoll=true;
	var rollId=randomInt(picCount);
	var timeTag=0;
	function doRoll(){
		//�Ƿ���ϼ�ʱ���������������ֱ�ӽ�����һ�εȴ�,����״ֵ̬
		if(canRoll){
			timeTag+=10;
			if(timeTag>2500){
				timeTag=0;
				rollId=(rollId>picCount-2)?0:(rollId+1);
			}
		}
		//��ʾ��ǰ��ͼƬ
		for(var i=0;i<picCount;i++){
			
			if(document.getElementById("homePushShow"+i).style.display != ((i==rollId)?"block":"none")){
				document.getElementById("homePushShow"+i).style.display = ((i==rollId)?"block":"none");
			};
			if(document.getElementById("homeAd"+i).className!=((i==rollId)?"now":"")){
				document.getElementById("homeAd"+i).className=(i==rollId)?"now":"";
			};
		}
	}
	for(var i=0;i<picCount;i++){
		document.getElementById("homeAd"+i).onmouseover=function(){
			canRoll=false;
			rollId=parseInt(this.id.replace("homeAd",""));
			timeTag=0;
		}
		document.getElementById("homeAd"+i).onmouseout=function(){
			canRoll=true;
			timeTag=0;
		}
	}
 	doRoll.runEach(20);