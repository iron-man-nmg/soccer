var myNum
function set(_n){
    var menu=document.getElementById("a" + _n);
	var menu1=document.getElementById("box" + _n);
	allClass()
	allNone()
	menu.className = "hover_class"
	menu1.style.display = "block"
	}
function getNum(){
	for(var i=1;i<5;i++){
		var menu=document.getElementById("a" + i);
		if(menu.className == "hover_class"){
			if(i==1){
				i=5
				}
			myNum=i-1;
			sat()
			}
		}
	}
function setNum(){
	for(var i=4;i>0;i--){
		var menu=document.getElementById("a" + i);
		if(menu.className == "hover_class"){
			if(i==4){
				i=0
				}
			myNum=i+1;
			sat()
			}
		}
	}
function sat(){
	var menu=document.getElementById("a" + myNum);
	var menu1=document.getElementById("box" + myNum);
	allClass()
	allNone()
	menu.className = "hover_class"
	menu1.style.display = "block"
	}
function allNone(){
	for(var i=1;i<5;i++){
		var menu = document.getElementById("box" + i);
		menu.style.display = "none"
		}
	}
function allClass(){
	for(var i=1;i<5;i++){
		var menu=document.getElementById("a" + i);
		menu.className = ""
		}
	}