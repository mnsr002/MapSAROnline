//>>built
require({cache:{"url:widgets/Stream/FilterItem.html":'\x3cdiv\x3e\r\n  \x3cdiv data-dojo-attach-point\x3d"controlSection"\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv data-dojo-attach-point\x3d"filterSection" style\x3d"display:none"\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"attrFilterParams"\x3e\x3c/div\x3e\r\n    \x3cdiv class\x3d"jimu-btn" data-dojo-attach-point\x3d"applyAttrFilterBtn"\x3e\r\n      ${nls.applyAttrFilter}\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/declare dojo/_base/lang dojo/on dojo/json dojo/dom-style dojo/dom-construct dijit/_WidgetBase dijit/_TemplatedMixin dojo/text!./FilterItem.html jimu/dijit/CheckBox dijit/form/RadioButton jimu/dijit/FilterParameters jimu/filterUtils".split(" "),function(f,c,d,g,b,e,h,k,l,m,n,p,q){return f([h,k],{baseClass:"jimu-widget-stream-filterItem",templateString:l,streamLayer:null,config:null,type:null,uid:"",index:0,askForValues:!0,postCreate:function(){this.inherited(arguments);this._init()},
_init:function(){var a;"checkbox"===this.type?(this.control=new m({checked:!1,label:this.config.name,onChange:c.hitch(this,this._checkBoxChange)}),this.control.placeAt(this.controlSection)):"radio"===this.type&&(a=e.create("div",{},this.controlSection),this.control=new n({checked:!1,value:this.config.name,name:this.uid+"_attFilterItem",id:this.uid+"_attFilterItem_"+this.index}),this.own(d(this.control,"change",c.hitch(this,function(a){this._checkBoxChange(a)}))),this.control.placeAt(a),e.create("label",
{"class":"jimu-widget-normal",innerHTML:this.config.name,"for":this.uid+"_attFilterItem_"+this.index},a));this.attrParamsDijit=new p;this.attrParamsDijit.placeAt(this.attrFilterParams);this.attrParamsDijit.startup();a=g.parse(this.streamLayer._json);this.attrParamsDijit.build(this.streamLayer.url,a,this.config.filterInfo);(this.askForValues=(new q).isAskForValues(this.config.filterInfo))?this.own(d(this.applyAttrFilterBtn,"click",c.hitch(this,this._applyFilter))):b.set(this.applyAttrFilterBtn,"display",
"none")},unCheck:function(){"checkbox"===this.type?this.control.setValue(!1):"radio"===this.type&&this.control.set("checked",!1);b.set(this.filterSection,"display","none")},_applyFilter:function(){var a=this.attrParamsDijit.getFilterExpr();a&&"string"===typeof a&&(this.streamLayer.setDefinitionExpression(a),this.streamLayer.clear())},_checkBoxChange:function(a){a?this.askForValues?b.set(this.filterSection,"display",""):this._applyFilter():(b.set(this.filterSection,"display","none"),"checkbox"===this.type&&
this.streamLayer&&this.streamLayer.setDefinitionExpression(null))}})});