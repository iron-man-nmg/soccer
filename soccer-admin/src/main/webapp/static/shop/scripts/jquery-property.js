function Select(id,config){
	this.config = config||{};
	this.id = typeof(id)=='string'?document.getElementById(id):id;
	this.items = this.id.getElementsByTagName("li");
	this.selectClass = "select";
	this.selected = new Array();
	var _this = this;
	this.selectOpt = function(value,opt){
		var exist = false;
		for(var i=0;i<_this.selected.length;i++){
			if(_this.selected[i]==value){
				exist = true ;
				if(opt=="remove"){ _this.selected.splice(i,1);}
				break;
			}
		}
		if(!exist && opt=="add"){_this.selected.push(value);}
	};
	//��ʼ������
	(function(_this){
		//�Ƿ���Ĭ�����õ�ѡ����
		if(_this.config.Default){
			var arr = _this.config.Default.split(",");
			for(var i=0;i<arr.length;i++)_this.selectOpt(arr[i],"add");
		}
		for(var i=0;i<_this.items.length;i++){
			//��defalut�����õ��������ʽ
			if( _this.selected.join(",").indexOf(_this.items[i].getAttribute('dataValue'))>-1 && _this.items[i].className==""){
				_this.items[i].className=_this.selectClass;
			}
			//�������ʽ�ж�����Ĭ��
			if(_this.items[i].className==_this.selectClass){
				_this.selectOpt(_this.items[i].getAttribute('dataValue'),"add");
			}
			//�ӵ㵥���¼�
			_this.items[i].onclick=function(){
				//�Ƿ�Ϊ��ѡ
				var radio = _this.config.Raido?_this.config.Raido:true;
				if(_this.config.Radio==null || _this.config.Radio){
					if(this.className!=_this.selectClass){
						var items = this.parentNode.getElementsByTagName("li");
						for(var i=0;i<items.length;i++){
							items[i].className="";
						}
						_this.selected.length = 0;
						_this.selected.push(this.getAttribute('dataValue'));
						this.className=_this.selectClass;
					}
				}else{
					var Max = _this.config.Max?_this.config.Max:1;
					if(this.className==_this.selectClass){
						this.className="";
						_this.selectOpt(this.getAttribute('dataValue'),"remove");
					}else{
						if(_this.selected.length>=Max){
							alert("���ֻ��ѡ��"+Max+"��");
						}else{
							this.className=_this.selectClass;
							_this.selectOpt(this.getAttribute('dataValue'),"add");
						}
					}
				}
				//ȥ���Ǹ����߿�
				this.firstChild.blur();
				//���ûص�����
				if(_this.config.OnClick)_this.config.OnClick.call(this,_this.selected);
				return false;
			}
		}
	})(_this);	
}