//>>built
require({cache:{"url:widgets/Coordinate/setting/Edit.html":'  \x3cdiv style\x3d"width:100%"\x3e\r\n    \x3cdiv class\x3d"output-wkid edit-module" data-dojo-attach-point\x3d"outputDiv"\x3e\r\n      \x3ctable cellspacing\x3d"0"\x3e\r\n        \x3ctbody\x3e\r\n          \x3ctr\x3e\r\n            \x3ctd\x3e\r\n              \x3cdiv class\x3d"wkid-header"\x3e\r\n                \x3cspan\x3e${nls.output}\x3c/span\x3e\r\n                \x3ca href\x3d"https://developers.arcgis.com/javascript/jshelp/ref_coordsystems.html" target\x3d"blank"\x3eWKID\x3c/a\x3e\r\n              \x3c/div\x3e\r\n            \x3c/td\x3e\r\n          \x3c/tr\x3e\r\n          \x3ctr\x3e\r\n            \x3ctd\x3e\r\n              \x3cinput type\x3d"text" data-dojo-type\x3d"dijit/form/ValidationTextBox" required\x3d"true"\r\n            placeHolder\x3d"WKID" data-dojo-attach-event\x3d"onChange:onWkidChange" \r\n            data-dojo-attach-point\x3d"wkid" data-dojo-props\x3d\'style:{width:"100%"}\' /\x3e\r\n            \x3c/td\x3e\r\n          \x3c/tr\x3e\r\n          \x3ctr\x3e\r\n            \x3ctd\x3e\r\n              \x3cspan class\x3d"wkid-label" data-dojo-attach-point\x3d"wkidLabel"\x3e${nls.cName}\x3c/span\x3e\r\n            \x3c/td\x3e\r\n          \x3c/tr\x3e\r\n        \x3c/tbody\x3e\r\n      \x3c/table\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d"display-units edit-module" data-dojo-attach-point\x3d"displayUnits"\x3e\r\n      \x3ctable cellspacing\x3d"0"\x3e\r\n        \x3ctbody\x3e\r\n          \x3ctr\x3e\r\n            \x3ctd class\x3d"display"\x3e\r\n              \x3cspan\x3e${nls.units}\x3c/span\x3e\r\n            \x3c/td\x3e\r\n            \x3ctd class\x3d"units"\x3e\r\n              \x3cselect data-dojo-attach-point\x3d"outputUnit" data-dojo-props\x3d\'style:{width:"462px"}\' data-dojo-type\x3d"dijit/form/Select"\x3e\r\n                \x3coption value\x3d""\x3e${nls.Default}\x3c/option\x3e\r\n                \x3coption type\x3d"separator"\x3e\x3c/option\x3e\r\n                \x3coption value\x3d"INCHES"\x3e${nls.Inches}\x3c/option\x3e\r\n                \x3coption value\x3d"FOOT"\x3e${nls.Foot}\x3c/option\x3e\r\n                \x3coption value\x3d"YARDS"\x3e${nls.Yards}\x3c/option\x3e\r\n                \x3coption value\x3d"MILES"\x3e${nls.Miles}\x3c/option\x3e\r\n                \x3coption value\x3d"NAUTICAL_MILES"\x3e${nls.Nautical_Miles}\x3c/option\x3e\r\n                \x3coption value\x3d"MILLIMETERS"\x3e${nls.Millimeters}\x3c/option\x3e\r\n                \x3coption value\x3d"CENTIMETERS"\x3e${nls.Centimeters}\x3c/option\x3e\r\n                \x3coption value\x3d"METER"\x3e$nls.Meter}\x3c/option\x3e\r\n                \x3coption value\x3d"KILOMETERS"\x3e${nls.Kilometers}\x3c/option\x3e\r\n                \x3coption value\x3d"DECIMETERS"\x3e${nls.Decimeters}\x3c/option\x3e\r\n                \x3coption type\x3d"separator"\x3e\x3c/option\x3e\r\n                \x3coption value\x3d"DECIMAL_DEGREES"\x3e${nls.Decimal_Degrees}\x3c/option\x3e\r\n                \x3coption value\x3d"DEGREE_MINUTE_SECONDS"\x3e${nls.Degree_Minutes_Seconds}\x3c/option\x3e\r\n                \x3coption type\x3d"separator"\x3e\x3c/option\x3e\r\n                \x3coption value\x3d"MGRS"\x3e${nls.MGRS}\x3c/option\x3e\r\n                \x3coption value\x3d"USNG"\x3e${nls.USNG}\x3c/option\x3e\r\n              \x3c/select\x3e\r\n            \x3c/td\x3e\r\n          \x3c/tr\x3e\r\n        \x3c/tbody\x3e\r\n      \x3c/table\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"enhanceVersionDiv"\x3e\r\n      \x3cdiv class\x3d"datum-wkid edit-module" data-dojo-attach-point\x3d"transformDiv"\x3e\r\n        \x3ctable cellspacing\x3d"0"\x3e\r\n          \x3ctbody\x3e\r\n            \x3ctr\x3e\r\n              \x3ctd\x3e\r\n                \x3cdiv class\x3d"wkid-header"\x3e\r\n                  \x3cspan\x3e${nls.datum}\x3c/span\x3e\r\n                  \x3ca href\x3d"http://resources.arcgis.com/en/help/arcgis-rest-api/index.html#//02r3000000r8000000" target\x3d"blank"\x3eTFWKID\x3c/a\x3e\r\n                \x3c/div\x3e\r\n              \x3c/td\x3e\r\n            \x3c/tr\x3e\r\n            \x3ctr\x3e\r\n              \x3ctd\x3e\r\n                \x3cinput type\x3d"text" data-dojo-type\x3d"dijit/form/ValidationTextBox" required\x3d"true" placeHolder\x3d"${nls.tWKIDPlaceHolder}" \r\n              data-dojo-attach-point\x3d"transformationWkid" data-dojo-attach-event\x3d"onChange:ontfWkidChange" data-dojo-props\x3d\'style:{width:"100%"}\' /\x3e\r\n              \x3c/td\x3e \r\n            \x3c/tr\x3e\r\n            \x3ctr\x3e\r\n              \x3ctd\x3e\r\n                \x3cspan class\x3d"wkid-label" data-dojo-attach-point\x3d"transformationLabel"\x3e${nls.tName}\x3c/span\x3e\r\n              \x3c/td\x3e\r\n            \x3c/tr\x3e\r\n          \x3c/tbody\x3e\r\n        \x3c/table\x3e\r\n        \x3cdiv class\x3d"check" data-dojo-attach-point\x3d"transformForward"\x3e\x3c/div\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d"older-version" data-dojo-attach-point\x3d"olderVersionDiv"\x3e${nls.olderVersion}\x3c/div\x3e\r\n  \x3c/div\x3e'}});
define("dojo/_base/declare dojo/_base/lang dojo/_base/html dojo/_base/array dijit/_WidgetsInTemplateMixin jimu/BaseWidgetSetting jimu/dijit/CheckBox dojo/text!./Edit.html jimu/SpatialReference/utils dijit/form/ValidationTextBox dijit/form/Select".split(" "),function(k,f,c,h,l,m,n,p,b){var g=[{value:"",label:"Default",selected:!0,disabled:!1},{value:"",label:"",selected:!0,disabled:!1},{value:"INCHES",label:"Inches",selected:!1,disabled:!1},{value:"FOOT",label:"Foot",selected:!1,disabled:!1},{value:"YARDS",
label:"Yards",selected:!1,disabled:!1},{value:"MILES",label:"Miles",selected:!1,disabled:!1},{value:"NAUTICAL_MILES",label:"Nautical_Miles",selected:!1,disabled:!1},{value:"MILLIMETERS",label:"Millimeters",selected:!1,disabled:!1},{value:"CENTIMETERS",label:"Centimeters",selected:!1,disabled:!1},{value:"METER",label:"Meter",selected:!1,disabled:!1},{value:"KILOMETERS",label:"Kilometers",selected:!1,disabled:!1},{value:"DECIMETERS",label:"Decimeters",selected:!1,disabled:!1},{value:"",label:"",selected:!0,
disabled:!1},{value:"DECIMAL_DEGREES",label:"Decimal_Degrees",selected:!1,disabled:!1},{value:"DEGREE_MINUTE_SECONDS",label:"Degree_Minutes_Seconds",selected:!1,disabled:!1},{value:"",label:"",selected:!0,disabled:!1},{value:"MGRS",label:"MGRS",selected:!1,disabled:!1},{value:"USNG",label:"USNG",selected:!1,disabled:!1}];return k([m,l],{baseClass:"jimu-coordinate-edit",templateString:p,currentWkid:null,version:null,enhanceVersion:10.1,_config:null,postCreate:function(){this.inherited(arguments);this.transformForward=
new n({label:this.nls.forward,checked:!1},this.transformForward);this.version<this.enhanceVersion?(c.setStyle(this.olderVersionDiv,"display","block"),c.setStyle(this.enhanceVersionDiv,"display","none")):(c.setStyle(this.olderVersionDiv,"display","none"),c.setStyle(this.enhanceVersionDiv,"display","block"));c.setStyle(this.transformDiv,"display","none");c.setStyle(this.transformForward.domNode,"display","none");this.wkid.set("missingMessage",this.nls.warning);this.transformationWkid.set("missingMessage",
this.nls.tfWarning)},setConfig:function(a){this._config=f.clone(a);b.loadResource().then(f.hitch(this,function(){a.wkid&&(this.wkid.set("value",parseInt(a.wkid,10)),this.currentWkid=parseInt(a.wkid,10),this._adjustUnitOption());a.label&&(this.wkidLabel.innerHTML=a.label);a.outputUnit&&this.outputUnit.set("value",a.outputUnit);a.transformationWkid&&this.transformationWkid.set("value",parseInt(a.transformationWkid,10));a.transformationLabel&&(this.transformationLabel.innerHTML=a.transformationLabel);
a.transformForward&&this.transformForward.setValue(a.transformForward)}),f.hitch(this,function(a){console.error(a)}))},getConfig:function(){var a={wkid:b.standardizeWkid(this.wkid.get("value")),label:this.wkidLabel.innerHTML,outputUnit:this.outputUnit.get("value"),transformationWkid:parseInt(this.transformationWkid.get("value"),10),transformationLabel:this.transformationLabel.innerHTML,transformForward:this.transformForward.getValue()};a.outputUnit=a.outputUnit||b.getCSUnit(a.wkid);var d={sameSRWithMap:b.isSameSR(a.wkid,
this.map.spatialReference.wkid),isGeographicCS:b.isGeographicCS(a.wkid),isGeographicUnit:b.isGeographicUnit(a.outputUnit),isProjectedCS:b.isProjectedCS(a.wkid),isProjectUnit:b.isProjectUnit(a.outputUnit),spheroidCS:b.isProjectedCS(a.wkid)?b.getGeoCSByProj(a.wkid):a.wkid,defaultUnit:b.getCSUnit(a.wkid),unitRate:b.getUnitRate(b.getCSUnit(a.wkid),a.outputUnit)};d.isGeographicUnit&&d.isProjectedCS&&(d.unitRate=1);a.options=d;return a},_removeGeoUnits:function(){h.forEach(b.getGeographicUnits(),f.hitch(this,
function(a){this.outputUnit.removeOption(a)}))},_removeProjUnits:function(){h.forEach(b.getProjectUnits(),f.hitch(this,function(a){this.outputUnit.removeOption(a)}))},_removeAllUnits:function(){for(var a=0,b=g.length;a<b;a++)this.outputUnit.removeOption(g[a].value)},_addAllUnits:function(){for(var a=0,b=g.length;a<b;a++){var c=f.clone(g[a]);c.label=this.nls[g[a].label];this.outputUnit.addOption(c)}},_adjustUnitOption:function(){if(this.currentWkid===this.map.spatialReference.wkid){if(b.isWebMercator(this.currentWkid))return;
4326===this.currentWkid?this._removeProjUnits():b.isGeographicCS(this.currentWkid)?this._removeProjUnits():b.isProjectedCS(this.currentWkid)&&(this._removeGeoUnits(),this.outputUnit.removeOption("USNG"),this.outputUnit.removeOption("MGRS"))}else b.isGeographicCS(this.currentWkid)&&this._removeProjUnits();this._config.outputUnit&&this.outputUnit.set("value",this._config.outputUnit)},_isDefaultSR:function(){var a=this.wkid.get("value");return b.isSameSR(a,this.map.spatialReference.wkid)},onWkidChange:function(a){var d=
"",e=parseInt(a,10);this.popup.disableButton(0);b.isValidWkid(e)?(d=b.getSRLabel(e),this.wkidLabel.innerHTML=d,b.isSameSpheroid(e,this.map.spatialReference.wkid)?(this.transformationWkid.set("value",""),c.setStyle(this.transformDiv,"display","none")):c.setStyle(this.transformDiv,"display","block"),this.popup.enableButton(0)):a&&(this.wkid.set("value",""),this.wkidLabel.innerHTML=this.nls.cName);this.currentWkid!==e&&this.transformationWkid.set("value","");this.currentWkid=e;this._removeAllUnits();
this._addAllUnits();this._adjustUnitOption();this.outputUnit.closeDropDown()},ontfWkidChange:function(a){if(a){var d="",e="";a=parseInt(a,10);b.isValidTfWkid(a)?(d=a,e=b.getTransformationLabel(a),this.transformationLabel.innerHTML=e,c.setStyle(this.transformForward.domNode,"display","block")):(this.transformationLabel.innerHTML=this.nls.tName,c.setStyle(this.transformForward.domNode,"display","none"));this.transformationWkid.set("value",d)}else this.transformationLabel.innerHTML=this.nls.tName,c.setStyle(this.transformForward.domNode,
"display","none")}})});