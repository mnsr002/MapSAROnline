//>>built
define("dojo/_base/declare dojo/_base/lang dojo/_base/html dojo/on dijit/_WidgetBase dijit/_TemplatedMixin jimu/BaseWidgetFrame".split(" "),function(b,c,a,d,e,f,g){return b([g,e,f],{baseClass:"box-frame",width:"100%",titleHeight:30,content:null,collapsed:!1,templateString:'\x3cdiv\x3e\x3cdiv class\x3d"title" data-dojo-attach-point\x3d"titleNode"\x3e\x3cdiv class\x3d"title-label"data-dojo-attach-point\x3d"titleLabelNode"\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d"panel-content" data-dojo-attach-point\x3d"containerNode"\x3e\x3c/div\x3e\x3c/div\x3e',
startup:function(){this.inherited(arguments);a.setStyle(this.titleNode,{width:this.width,height:this.titleHeight+"px"});a.setStyle(this.containerNode,{top:this.titleHeight+"px"});a.setStyle(this.titleLabelNode,{lineHeight:this.titleHeight+"px"});this.label&&this.setTitleLabel(this.label);this.own(d(this.titleNode,"click",c.hitch(this,function(){this.collapsed?(this.collapsed=!1,a.removeClass(this.domNode,"collapsed")):(this.collapsed=!0,a.addClass(this.domNode,"collapsed"))})))},setTitleLabel:function(a){this.label=
a;this.titleLabelNode.innerHTML=a;this.titleLabelNode.title=a}})});