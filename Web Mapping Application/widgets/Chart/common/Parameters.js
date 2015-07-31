//>>built
require({cache:{"url:widgets/Chart/common/Parameters.html":'\x3cdiv\x3e\r\n\t\x3cdiv data-dojo-attach-point\x3d"divAxisX" class\x3d"setting-item"\x3e\r\n\t\t\x3cinput data-dojo-attach-point\x3d"cbxAxisX" type\x3d"checkbox" /\x3e\r\n\t\t\x3clabel data-dojo-attach-point\x3d"labelAxisX"\x3e${nls.horizontalAxis}\x3c/label\x3e\r\n\t\x3c/div\x3e\r\n\t\x3cdiv data-dojo-attach-point\x3d"divAxisY" class\x3d"setting-item"\x3e\r\n\t\t\x3cinput data-dojo-attach-point\x3d"cbxAxisY" type\x3d"checkbox" /\x3e\r\n\t\t\x3clabel data-dojo-attach-point\x3d"labelAxisY"\x3e${nls.verticalAxis}\x3c/label\x3e\r\n\t\x3c/div\x3e\r\n\t\x3cdiv data-dojo-attach-point\x3d"divPieLabel" class\x3d"setting-item"\x3e\r\n\t\t\x3cinput data-dojo-attach-point\x3d"cbxPieLabel" type\x3d"checkbox" checked /\x3e\r\n\t\t\x3clabel data-dojo-attach-point\x3d"labelPie"\x3e${nls.dataLabels}\x3c/label\x3e\r\n\t\x3c/div\x3e\r\n\t\x3cdiv\x3e\r\n\t\t\x3cdiv class\x3d"color-tip"\x3e${nls.color}\x3c/div\x3e\r\n\t\t\x3cdiv data-dojo-attach-point\x3d"singleColorSection" class\x3d"single-color-section"\x3e\r\n\t\t\t\x3cdiv data-dojo-attach-point\x3d"colorDiv" class\x3d"single-color-div"\x3e\x3c/div\x3e\r\n\t\t\t\x3cdiv data-dojo-attach-point\x3d"paletteContainer" class\x3d"palette-container"\x3e\x3c/div\x3e\r\n\t\t\x3c/div\x3e\r\n\t\t\x3cdiv data-dojo-attach-point\x3d"multiColorSection" class\x3d"multi-color-section"\x3e\r\n\t\t\t\x3cdiv class\x3d"colorful-section"\x3e\r\n\t\t\t\t\x3cdiv data-dojo-attach-point\x3d"colorfulContainer"\x3e\x3c/div\x3e\r\n\t\t\t\x3c/div\x3e\r\n\t\t\t\x3cdiv class\x3d"monochromatic-section"\x3e\r\n\t\t\t\t\x3cdiv data-dojo-attach-point\x3d"monochromaticContainer"\x3e\x3c/div\x3e\r\n\t\t\t\x3c/div\x3e\r\n\t\t\x3c/div\x3e\r\n\t\x3c/div\x3e\r\n\t\x3cdiv class\x3d"shelter" data-dojo-attach-point\x3d"shelter"\x3e\x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/html dojo/_base/query dojo/_base/Color dojo/on dojo/Evented dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dojo/text!./Parameters.html dijit/ColorPalette jimu/utils".split(" "),function(l,c,f,b,h,k,d,m,n,p,q,r,s,e){return l([n,p,q,m],{baseClass:"jimu-widget-chart-parameters",templateString:r,colors:{c1:"#5d9cd3 #eb7b3a #a5a5a5 #febf29 #4673c2 #72ad4c".split(" "),c2:"#5d9cd3 #a5a5a5 #4673c2 #285f8f #636363 #274577".split(" "),
c3:"#eb7b3a #febf29 #72ad4c #9c4618 #987214 44682e".split(" "),c4:"#72ad4c #4673c2 #febf29 #44682e #274577 #987214".split(" "),g1:["#43729b","#c4d5ea"],g2:["#ac5928","#f5ccbf"],g3:["#787878","#d8d8d8"],g4:["#bb8b1b","#fee1be"],g5:["#30538d","#c0c9e3"],g6:["#517e36","#c9dbc2"],g7:["#c4d5ea","#43729b"],g8:["#f5ccbf","#ac5928"],g9:["#d8d8d8","#787878"],g10:["#fee1be","#bb8b1b"],g11:["#c0c9e3","#30538d"],g12:["#c9dbc2","#517e36"]},palette:null,defaultSingleColor:"#5d9cd3",multiColorValue:"c1",isInWidget:!1,
imagesUrl:"",type:"",singleColor:!1,nls:null,config:null,postCreate:function(){this.inherited(arguments);this._initSelf();this.isInWidget&&this._bindEvents();this.own(d(this.multiColorSection,"click",c.hitch(this,function(a){a=a.target||a.srcElement;if(b.hasClass(a,"multi-color")&&!b.hasClass(a,"selected")){var c=this.multiColorValue;this._selectMultiColorDiv(a);c!==a.colorValue&&this.isInWidget&&this._configChange()}})))},_initSelf:function(){this.config=c.clone(this.config);e.combineRadioCheckBoxWithLabel(this.cbxAxisX,
this.labelAxisX);e.combineRadioCheckBoxWithLabel(this.cbxAxisY,this.labelAxisY);e.combineRadioCheckBoxWithLabel(this.cbxPieLabel,this.labelPie);this._setSingleColorForColorDiv(this.defaultSingleColor);this.palette=new s({palette:"7x10",cellClass:"cursor:pointer",style:{width:"220px"},onChange:c.hitch(this,function(a){var b=this._getSingleColorFromColorDiv();this._setSingleColorForColorDiv(a);this.isInWidget&&b!==a&&this._configChange()})});this.palette.placeAt(this.paletteContainer);this.palette.startup();
f.forEach(["c1","c2","c3","c4"],c.hitch(this,function(a){b.create("div",{"class":"multi-color colorful "+a},this.colorfulContainer).colorValue=a}));f.forEach("g1 g2 g3 g4 g5 g6 g7 g8 g9 g10 g11 g12".split(" "),c.hitch(this,function(a){b.create("div",{"class":"multi-color monochromatic "+a},this.monochromaticContainer).colorValue=a}));this._setMultiColorValue("c1");"pie"===this.type?(this.singleColor=!1,b.setStyle(this.divAxisX,"display","none"),b.setStyle(this.divAxisY,"display","none")):b.setStyle(this.divPieLabel,
"display","none");this.reset();this.config&&this.setConfig(this.config)},_bindEvents:function(){"pie"===this.type?this.own(d(this.cbxPieLabel,"change",c.hitch(this,this._configChange))):(this.own(d(this.cbxAxisX,"change",c.hitch(this,this._configChange))),this.own(d(this.cbxAxisY,"change",c.hitch(this,this._configChange))))},setConfig:function(a){this.reset();this.cbxAxisX.checked=!1===a.horizontalAxis?!1:!0;this.cbxAxisY.checked=!1===a.verticalAxis?!1:!0;this.cbxPieLabel.checked=!1===a.label?!1:
!0;a=c.clone(a.colors||[]);(this.singleColor=1===a.length&&"pie"!==this.type)?this.showSingleColor(a[0]):this.showMultiColor(a)},getConfig:function(){var a={colors:[]};"pie"===this.type?(a.colors=this.colors[this._getMultiColorValue()],a.label=this.cbxPieLabel.checked):(a.horizontalAxis=this.cbxAxisX.checked,a.verticalAxis=this.cbxAxisY.checked,a.colors=this.singleColor?[this._getSingleColorFromColorDiv()]:this.colors[this._getMultiColorValue()]);return a},_setSingleColorForColorDiv:function(a){b.setStyle(this.colorDiv,
"backgroundColor",a);this.colorDiv.bgHex=a},_getSingleColorFromColorDiv:function(){return this.colorDiv.bgHex},_setMultiColorValue:function(a){(a=h("."+a,this.multiColorSection))&&0<a.length&&this._selectMultiColorDiv(a[0])},_selectMultiColorDiv:function(a){h(".multi-color",this.multiColorSection).removeClass("selected");b.addClass(a,"selected");this.multiColorValue=a.colorValue},_getMultiColorValue:function(){return this.multiColorValue},reset:function(){"pie"===this.type?this.cbxPieLabel.checked=
!0:(this.cbxAxisX.checked=!0,this.cbxAxisY.checked=!0);this.singleColor?this.showSingleColor():this.showMultiColor()},showSingleColor:function(a){"pie"===this.type?this.singleColor=!1:(this.singleColor=!0,b.setStyle(this.singleColorSection,"display","block"),b.setStyle(this.multiColorSection,"display","none"),a&&this._setSingleColorForColorDiv(a))},showMultiColor:function(a){this.singleColor=!1;b.setStyle(this.singleColorSection,"display","none");b.setStyle(this.multiColorSection,"display","block");
if(a&&0<a.length){var d=null,e=!1,g;for(g in this.colors)if(d=this.colors[g],e=!1,d.length===a.length&&(e=f.every(d,c.hitch(this,function(b,c){var d=new k(b),e=new k(a[c]);return d.toHex().toLowerCase()===e.toHex().toLowerCase()})))){this._setMultiColorValue(g);break}}},showShelter:function(){b.setStyle(this.shelter,"display","block")},hideShelter:function(){b.setStyle(this.shelter,"display","none")},_configChange:function(){var a=this.getConfig();this.emit("change",a)}})});