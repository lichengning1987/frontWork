// JavaScript Document
KISSY.add("treel",function(S){
		var DOM=S.DOM,Event=S.Event;
		function treeFn(fgm){
			this.box=DOM.query(fgm.box);
			this.otree_row=fgm.row,this.otree_child=fgm.child,this.otree_label=fgm.label;
			this.otree_po=fgm.name;
			this.otree_po1=fgm.name1;
			this.otree_po2=fgm.name2;
			this.otree_po3=fgm.name3;
			this.ob_jchild=fgm.lchild;
			this.ob_nodename=fgm.nodeName;
			this.ob_lrow=fgm.lrow;
			this.otree_icon,this.otree_icon1;
			this.init();		
		}
		treeFn.prototype={
			   _createEletag:function(){
					var _this=this;
					S.each(_this.box,function(item){
					/*生成减号*/
						_this.otree_rowNode=DOM.query(_this.otree_row,item);
						S.each(_this.otree_rowNode,function(item){
							_this.otree_labelNode=DOM.query(_this.otree_label,item);
							S.each(_this.otree_labelNode,function(item){
								_this.otree_icon=DOM.create("<div>")
								DOM.addClass(_this.otree_icon,_this.otree_po);
								DOM.addClass(_this.otree_icon,_this.otree_po1);
								DOM.insertBefore(_this.otree_icon,item)
							})	
						})
						/*生成点号*/
						_this.otree_childNode=DOM.query(_this.otree_child,item);
						S.each(_this.otree_childNode,function(item){
							_this.otree_labelNode=DOM.query(_this.otree_label,item);
							S.each(_this.otree_labelNode,function(item){
								_this.otree_icon1=DOM.create("<div>")
								DOM.addClass(_this.otree_icon1,_this.otree_po);
								DOM.addClass(_this.otree_icon1,_this.otree_po2);
								DOM.insertBefore(_this.otree_icon1,item)
								
							})										
						})
					})	
			},
			/*区域显示与隐藏*/
			_EventFn:function(){
				var _this=this;
				S.each(_this.box,function(item){
					_this.ob_jchildNode=DOM.query(_this.ob_jchild,item);
					_this.ob_lrowNode=DOM.query(_this.ob_lrow,item);
					_this.otree_childNodes=DOM.query(_this.otree_child,item)
					/*根节点隐藏*/
					S.each(_this.ob_lrowNode,function(item){
						_this.ob_jian=DOM.query(_this.ob_nodename,item)
						_this.caozuo(_this.ob_jchildNode,_this.ob_jian,item);						
					})
					/*孩子节点隐藏*/
					S.each(_this.ob_jchildNode,function(item){
						_this.ob_jian1=DOM.query(_this.ob_nodename,item)
					    _this.caozuo(_this.otree_childNodes,_this.ob_jian1,item);
							
					});		
				})	
			},
			caozuo:function(obj,obj1,item){
				var  _this=this;
				Event.on(obj1,"click",itemChange)
				function itemChange(ev){
					_this.index=S.indexOf(ev.target,obj1);
					console.log(_this.index)
					_this.dbattr=DOM.css(obj[_this.index],'display')
					if(_this.dbattr == "none"){
							DOM.removeClass(obj1[_this.index],_this.otree_po3);
							DOM.css(obj[_this.index],'display','block');
							return false;		
					}
					DOM.css(obj[_this.index],'display','none');
					DOM.addClass(obj1[_this.index],_this.otree_po3);	
				}    	
				
			},
			init:function(){
				 var _this=this;
				 _this._createEletag();
				 _this._EventFn();
					
			}		
		}	
		
		S.treeFn=treeFn;
   })