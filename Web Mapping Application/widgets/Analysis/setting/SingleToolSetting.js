//>>built
require({cache:{"url:widgets/Analysis/setting/SingleToolSetting.html":'\x3cdiv\x3e\r\n  \x3cdiv class\x3d"control-section jimu-leading-margin3"\x3e\r\n    \x3clabel class\x3d"jimu-widget-normal"\x3e${nls.toolLabel}\x26nbsp;:\x3c/label\x3e\r\n    \x3cinput data-dojo-attach-point\x3d"labelEditor" data-dojo-type\x3d"dijit/form/ValidationTextBox"\r\n           data-dojo-props\x3d\'required:true,trim:true\'/\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"control-section jimu-leading-margin3"\x3e\r\n    \x3cdiv class\x3d"control-option" data-dojo-attach-point\x3d"helpTipOption"\x3e\r\n      \x3cdiv data-dojo-attach-point\x3d"helptipChk" data-dojo-type\x3d"jimu/dijit/CheckBox"\r\n         data-dojo-props\x3d\'checked:true, label:"${nls.showHelpTip}"\'\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d"control-option" data-dojo-attach-point\x3d"mapExtentOption"\x3e\r\n      \x3cdiv data-dojo-attach-point\x3d"mapExtentChk" data-dojo-type\x3d"jimu/dijit/CheckBox"\r\n         data-dojo-props\x3d\'checked:true, label:"${nls.showCurrentMapExtent}"\'\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d"control-option" data-dojo-attach-point\x3d"creditsOption"\x3e\r\n      \x3cdiv data-dojo-attach-point\x3d"creditsChk" data-dojo-type\x3d"jimu/dijit/CheckBox"\r\n         data-dojo-props\x3d\'checked:true, label:"${nls.showCredits}"\'\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d"control-option" data-dojo-attach-point\x3d"resultOption"\x3e\r\n      \x3cdiv data-dojo-attach-point\x3d"resultChk" data-dojo-type\x3d"jimu/dijit/CheckBox"\r\n         data-dojo-props\x3d\'checked:true, label:"${nls.saveAsFeatureService}"\'\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d"control-option" data-dojo-attach-point\x3d"readyToUseLayersOption"\x3e\r\n      \x3cdiv data-dojo-attach-point\x3d"readyToUseLayersChk" data-dojo-type\x3d"jimu/dijit/CheckBox"\r\n         data-dojo-props\x3d\'checked:true, label:"${nls.showReadyToUseLayers}"\'\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e\r\n'}});
define("dojo/_base/declare dojo/text!./SingleToolSetting.html dojo/dom-style dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dijit/form/ValidationTextBox jimu/dijit/CheckBox".split(" "),function(b,c,d,e,f,g){return b([e,f,g],{baseClass:"jimu-widget-analysis-singleToolSetting",templateString:c,toolLabel:null,nls:null,config:null,rowData:null,postCreate:function(){this.inherited(arguments);this.labelEditor.set("value",this.toolLabel);"extractData"===this.rowData.title&&d.set(this.resultOption,
"display","none")},getConfig:function(){var a={showHelp:this.helptipChk.getValue(),showCredits:this.creditsChk.getValue(),showChooseExtent:this.mapExtentChk.getValue(),showReadyToUseLayers:this.readyToUseLayersChk.getValue()};"extractData"!==this.rowData.title&&(a.returnFeatureCollection=!this.resultChk.getValue());this.labelEditor.validate()?a.toolLabel=this.labelEditor.get("value"):a.toolLabel=this.toolLabel||"undefined";return a},setConfig:function(a){this.config=a;this.labelEditor.set("value",
a.toolLabel);this.helptipChk.setValue(a.showHelp);this.creditsChk.setValue(a.showCredits);this.mapExtentChk.setValue(a.showChooseExtent);this.readyToUseLayersChk.setValue(a.showReadyToUseLayers);"returnFeatureCollection"in a&&this.resultChk.setValue(!a.returnFeatureCollection)}})});