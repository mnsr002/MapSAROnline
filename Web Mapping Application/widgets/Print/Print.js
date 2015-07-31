//>>built
require({cache:{"url:widgets/Print/templates/Print.html":'\x3cdiv class\x3d"gis_PrintDijit"\x3e\r\n    \x3cdiv class\x3d"formContainer"\x3e\r\n        \x3cdiv data-dojo-type\x3d"dijit/form/Form" data-dojo-attach-point\x3d"printSettingsFormDijit"\x3e\r\n            \x3ctable cellspacing\x3d"5" style\x3d"width:100%;"\x3e\r\n                \x3ctr\x3e\r\n                    \x3ctd style\x3d"width:65px;"\x3e\r\n                        ${nls.title}:\r\n                    \x3c/td\x3e\r\n                    \x3ctd\x3e\r\n                        \x3cinput type\x3d"text" data-dojo-attach-point\x3d"titleNode" data-dojo-type\x3d"dijit/form/ValidationTextBox" data-dojo-props\x3d"name:\'title\',trim:true,required:true,style:\'width:100%;\'" /\x3e\r\n                    \x3c/td\x3e\r\n                \x3c/tr\x3e\r\n                \x3ctr style\x3d"display: none"\x3e\r\n                    \x3ctd\x3e\r\n                        ${nls.layout}:\r\n                    \x3c/td\x3e\r\n                    \x3ctd\x3e\r\n                        \x3cinput type\x3d"select" data-dojo-type\x3d"dijit/form/Select" data-dojo-props\x3d"name:\'layout\',style:\'width:100%;\'"\r\n                        data-dojo-attach-point\x3d"layoutDijit" /\x3e\r\n                    \x3c/td\x3e\r\n                \x3c/tr\x3e\r\n                \x3ctr style\x3d"display: none"\x3e\r\n                    \x3ctd\x3e\r\n                        ${nls.format}:\r\n                    \x3c/td\x3e\r\n                    \x3ctd\x3e\r\n                        \x3cinput type\x3d"select" data-dojo-type\x3d"dijit/form/Select" data-dojo-props\x3d"name:\'format\',style:\'width:100%;\'"\r\n                        data-dojo-attach-point\x3d"formatDijit" /\x3e\r\n                    \x3c/td\x3e\r\n                \x3c/tr\x3e\r\n            \x3c/table\x3e\r\n        \x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d"buttonActionBar jimu-align-trailing"\x3e\r\n        \x3cdiv data-dojo-type\x3d"dijit/form/DropDownButton" data-dojo-attach-point\x3d"advancedButtonDijit" data-dojo-props\x3d"iconClass:\'settingsIcon\',showLabel:true" style\x3d"display: none"\x3e\r\n            \x3cspan\x3e\r\n                ${nls.settings}\r\n            \x3c/span\x3e\r\n            \x3cdiv data-dojo-type\x3d"dijit/TooltipDialog" class\x3d"gis_PrintDijit"\x3e\r\n                \x3cdiv style\x3d"width:250px;"\x3e\r\n                    \x3cdiv style\x3d"font-weight:bold;"\x3e\r\n                        ${nls.mapScaleExtent}:\r\n                    \x3c/div\x3e\r\n                    \x3cdiv data-dojo-type\x3d"dijit/form/Form" data-dojo-attach-point\x3d"preserveFormDijit"\x3e\r\n                        \x3ctable cellspacing\x3d"5"\x3e\r\n                            \x3ctr\x3e\r\n                                \x3ctd style\x3d"vertical-align:middle;"\x3e\r\n                                    ${nls.preserve}:\r\n                                \x3c/td\x3e\r\n                                \x3ctd\x3e\r\n                                    \x3cinput type\x3d"radio" data-dojo-type\x3d"dijit/form/RadioButton" data-dojo-props\x3d"name:\'preserveScale\',checked:true,value:\'true\'"\r\n                                    /\x3e\r\n                                    ${nls.mapScale}\x26nbsp;\x26nbsp;\r\n                                    \x3cinput type\x3d"radio" data-dojo-type\x3d"dijit/form/RadioButton" data-dojo-props\x3d"name:\'preserveScale\',value:\'false\'"\r\n                                    /\x3e\r\n                                    ${nls.mapExtent}\r\n                                \x3c/td\x3e\r\n                                \x3ctr\x3e\r\n                                    \x3ctd\x3e\r\n                                        ${nls.forceScale}:\r\n                                    \x3c/td\x3e\r\n                                    \x3ctd\x3e\r\n                                        \x3cinput type\x3d"radio" data-dojo-type\x3d"dijit/form/RadioButton" data-dojo-props\x3d"name:\'preserveScale\',value:\'force\',checked:false"/\x3e \x3cinput type\x3d"text" data-dojo-type\x3d"dijit/form/NumberTextBox" data-dojo-props\x3d"name:\'forcedScale\',required:false,style:\'width:100px;\'" data-dojo-attach-point\x3d"forceScaleNTB"/\x3e \x3ca href\x3d"#" data-dojo-attach-event\x3d"click:getCurrentMapScale"\x3e${nls.getCurrentScale}\x3c/a\x3e\r\n                                    \x3c/td\x3e\r\n                                \x3c/tr\x3e\r\n                            \x3c/tr\x3e\r\n                        \x3c/table\x3e\r\n                    \x3c/div\x3e\r\n                    \x3cdiv style\x3d"font-weight:bold;"\x3e\r\n                        ${nls.mapMetadata}:\r\n                    \x3c/div\x3e\r\n                    \x3cdiv data-dojo-type\x3d"dijit/form/Form" data-dojo-attach-point\x3d"layoutMetadataDijit"\x3e\r\n                        \x3ctable cellspacing\x3d"5" style\x3d"width:100%;"\x3e\r\n                            \x3ctr\x3e\r\n                                \x3ctd\x3e\r\n                                    ${nls.author}:\r\n                                \x3c/td\x3e\r\n                                \x3ctd\x3e\r\n                                    \x3cinput type\x3d"text" data-dojo-attach-point\x3d"authorNode" data-dojo-type\x3d"dijit/form/ValidationTextBox" data-dojo-props\x3d"name:\'author\',trim:true,required:false,style:\'width:100%;\'" data-dojo-attach-point\x3d"authorTB"\r\n                                    /\x3e\r\n                                \x3c/td\x3e\r\n                            \x3c/tr\x3e\r\n                            \x3ctr\x3e\r\n                                \x3ctd\x3e\r\n                                    ${nls.copyright}:\r\n                                \x3c/td\x3e\r\n                                \x3ctd\x3e\r\n                                    \x3cinput type\x3d"text" data-dojo-attach-point\x3d"copyrightNode" data-dojo-type\x3d"dijit/form/ValidationTextBox" data-dojo-props\x3d"name:\'copyright\',trim:true,required:false,style:\'width:100%;\'" /\x3e\r\n                                \x3c/td\x3e\r\n                            \x3c/tr\x3e\r\n                        \x3c/table\x3e\r\n                    \x3c/div\x3e\r\n                    \x3cdiv data-dojo-type\x3d"dijit/form/Form" data-dojo-attach-point\x3d"layoutFormDijit"\x3e\r\n                        \x3ctable cellspacing\x3d"5"\x3e\r\n                            \x3ctr\x3e\r\n                                \x3ctd\x3e\r\n                                    ${nls.lncludeLegend}:\r\n                                \x3c/td\x3e\r\n                                \x3ctd\x3e\r\n                                    \x3cinput type\x3d"checkbox" data-dojo-type\x3d"dijit/form/CheckBox" data-dojo-props\x3d"name:\'legend\',value:true,checked:true"\r\n                                    /\x3e\r\n                                \x3c/td\x3e\r\n                            \x3c/tr\x3e\r\n                        \x3c/table\x3e\r\n                    \x3c/div\x3e\r\n                    \x3cdiv style\x3d"font-weight:bold;"\x3e\r\n                        ${nls.mapOnlyOptions}:\r\n                    \x3c/div\x3e\r\n                    \x3cdiv data-dojo-type\x3d"dijit/form/Form" data-dojo-attach-point\x3d"mapOnlyFormDijit"\x3e\r\n                        \x3ctable cellspacing\x3d"5"\x3e\r\n                            \x3ctr\x3e\r\n                                \x3ctd\x3e\r\n                                    ${nls.width}:\r\n                                \x3c/td\x3e\r\n                                \x3ctd\x3e\r\n                                    \x3cinput type\x3d"text" data-dojo-type\x3d"dijit/form/NumberTextBox" data-dojo-props\x3d"name:\'width\',required:true,value:670,style:\'width:100px;\'"\r\n                                    /\x3e\r\n                                \x3c/td\x3e\r\n                            \x3c/tr\x3e\r\n                            \x3ctr\x3e\r\n                                \x3ctd\x3e\r\n                                    ${nls.height}:\r\n                                \x3c/td\x3e\r\n                                \x3ctd\x3e\r\n                                    \x3cinput type\x3d"text" data-dojo-type\x3d"dijit/form/NumberTextBox" data-dojo-props\x3d"name:\'height\',required:true,value:500,style:\'width:100px;\'"\r\n                                    /\x3e\r\n                                \x3c/td\x3e\r\n                            \x3c/tr\x3e\r\n                        \x3c/table\x3e\r\n                    \x3c/div\x3e\r\n                    \x3cdiv style\x3d"font-weight:bold;"\x3e\r\n                        ${nls.printQualityOptions}:\r\n                    \x3c/div\x3e\r\n                    \x3cdiv data-dojo-type\x3d"dijit/form/Form" data-dojo-attach-point\x3d"mapQualityFormDijit"\x3e\r\n                        \x3ctable cellspacing\x3d"5"\x3e\r\n                            \x3ctr\x3e\r\n                                \x3ctd\x3e\r\n                                    ${nls.dpi}:\r\n                                \x3c/td\x3e\r\n                                \x3ctd\x3e\r\n                                    \x3cinput type\x3d"text" data-dojo-type\x3d"dijit/form/NumberTextBox" data-dojo-props\x3d"name:\'dpi\',required:true,value:96,style:\'width:100px;\'"\r\n                                    /\x3e\r\n                                \x3c/td\x3e\r\n                            \x3c/tr\x3e\r\n                        \x3c/table\x3e\r\n                    \x3c/div\x3e\r\n                \x3c/div\x3e\r\n            \x3c/div\x3e\r\n        \x3c/div\x3e\r\n        \x3cdiv data-dojo-type\x3d"dijit/form/Button" data-dojo-props\x3d"busyLabel:\'printing\',iconClass:\'printIcon\'"\r\n        data-dojo-attach-event\x3d"onClick:print" data-dojo-attach-point\x3d"printButtonDijit"\x3e\r\n            ${nls.print}\r\n        \x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3c!-- \x3chr calss\x3d"spacer"\x3e --\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"printResultsNode" class\x3d"resultsContainer"\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"clearActionBarNode" class\x3d"buttonActionBar"\r\n    style\x3d"display:none;padding:0;"\x3e\r\n        \x3cdiv data-dojo-type\x3d"dijit/form/Button" data-dojo-props\x3d"iconClass:\'clearIcon\'"\r\n        data-dojo-attach-event\x3d"onClick:clearResults"\x3e\r\n            ${nls.clearList}\r\n        \x3c/div\x3e\r\n    \x3c/div\x3e\r\n\x3c/div\x3e\r\n',
"url:widgets/Print/templates/PrintResult.html":'\x3cdiv class\x3d"printResult" data-dojo-attach-point\x3d"resultNode" data-dojo-attach-event\x3d"onclick:_openPrint"\x3e\r\n  \x3ctable class\x3d"printResultTable"\x3e\r\n    \x3ctr\x3e\r\n      \x3ctd width\x3d"25px"\x3e\r\n        \x3cspan class\x3d"bold"\x3e${count}.\x3c/span\x3e\r\n      \x3c/td\x3e\r\n      \x3ctd width\x3d"30px"\x3e\r\n        \x3cimg src\x3d"${icon}"\x3e\r\n      \x3c/td\x3e\r\n      \x3ctd data-dojo-attach-point\x3d"nameNode"\x3e\r\n        \x3cdiv data-dojo-attach-point\x3d"progressBar" data-dojo-type\x3d"dijit/ProgressBar" data-dojo-props\x3d\'value:Infinity,label:"${nls.creatingPrint}"\'\x3e\x3c/div\x3e\r\n        \x3cspan data-dojo-attach-point\x3d"successNode" class\x3d"bold" style\x3d"display:none;"\x3e${docName}\x3c/span\x3e\r\n        \x3cdiv data-dojo-attach-point\x3d"errNode" style\x3d"display:none;"\x3e\r\n          \x3cspan class\x3d"bold"\x3e${nls.printError}\x3c/span\x3e\r\n          \x3cdiv class\x3d"jimu-icon jimu-icon-error jimu-float-trailing"\x3e\x3c/div\x3e\r\n        \x3c/div\x3e\r\n      \x3c/td\x3e\r\n    \x3c/tr\x3e\r\n  \x3c/table\x3e\r\n\x3c/div\x3e\r\n'}});
define("dojo/_base/declare dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin esri/tasks/PrintTask esri/tasks/PrintParameters esri/tasks/PrintTemplate esri/request dojo/_base/lang dojo/_base/array dojo/_base/html dojo/dom-style dojo/dom-construct dojo/dom-class dojo/json jimu/portalUrlUtils dojo/text!./templates/Print.html dojo/text!./templates/PrintResult.html dojo/aspect jimu/dijit/LoadingShelter jimu/dijit/Message dijit/form/Form dijit/form/Select dijit/form/ValidationTextBox dijit/form/NumberTextBox dijit/form/Button dijit/form/CheckBox dijit/ProgressBar dijit/form/DropDownButton dijit/TooltipDialog dijit/form/RadioButton esri/IdentityManager dojo/store/Memory".split(" "),
function(m,n,p,q,t,u,v,w,c,h,e,f,x,r,y,k,l,z,s,A,B){l=m([n,p,q],{widgetsInTemplate:!0,templateString:l,map:null,count:1,results:[],authorText:null,copyrightText:null,defaultTitle:null,defaultFormat:null,defaultLayout:null,baseClass:"gis_PrintDijit",pdfIcon:require.toUrl("./widgets/Print/images/pdf.png"),imageIcon:require.toUrl("./widgets/Print/images/image.png"),printTaskURL:null,printTask:null,async:!1,postCreate:function(){this.inherited(arguments);var a="json";this.printTask=new t(this.printTaskURL,
{async:this.async});this.printparams=new u;this.printparams.map=this.map;this.printparams.outSpatialReference=this.map.spatialReference;this.shelter=new A({hidden:!0});this.shelter.placeAt(this.domNode);this.shelter.startup();this.shelter.show();this.titleNode.set("value",this.defaultTitle);this.authorNode.set("value",this.defaultAuthor);this.copyrightNode.set("value",this.defaultCopyright);var b=k.setHttpProtocol(this.printTaskURL),d=k.getNewPrintUrl(this.appConfig.portalUrl);if(b===d||/sharing\/tools\/newPrint$/.test(b))a=
"text";this._getPrintTaskInfo(a);this.printTask._getPrintDefinition&&s.after(this.printTask,"_getPrintDefinition",c.hitch(this,"printDefInspector"),!1);this.printTask._createOperationalLayers&&s.after(this.printTask,"_createOperationalLayers",c.hitch(this,"_excludeInvalidLegend"))},_getPrintTaskInfo:function(a){w({url:this.printTaskURL,content:{f:"json"},callbackParamName:"callback",handleAs:a||"json",timeout:6E4}).then(c.hitch(this,"_handlePrintInfo"),c.hitch(this,"_handleError")).always(c.hitch(this,
function(){this.shelter.hide()}))},_excludeInvalidLegend:function(a){if(this.printTask.allLayerslegend){for(var b=this.printTask.allLayerslegend,d=[],c=0;c<b.length;c++){var g=this.map.getLayer(b[c].id);g&&(g.declaredClass&&"esri.layers.GraphicsLayer"!==g.declaredClass)&&(!g.renderer||g.renderer&&!g.renderer.hasVisualVariables())&&d.push(b[c])}this.printTask.allLayerslegend=d}return a},printDefInspector:function(a){"force"===this.preserve.preserveScale&&(a.mapOptions.scale=this.preserve.forcedScale);
return a},_handleError:function(a){console.log("print widget load error: ",a);new B({message:a.message||a})},_handlePrintInfo:function(a){var b=null;try{if(b="string"===typeof a?y.parse(a):a,b.error&&b.error.code){this._getPrintTaskInfo("json");return}}catch(c){b=k.setHttpProtocol(this.printTaskURL);a=k.getNewPrintUrl(this.appConfig.portalUrl);b===a||/sharing\/tools\/newPrint$/.test(b)?(f.set(this.layoutDijit.domNode.parentNode.parentNode,"display","none"),f.set(this.formatDijit.domNode.parentNode.parentNode,
"display","none"),f.set(this.advancedButtonDijit.domNode,"display","none")):this._handleError(c);return}f.set(this.layoutDijit.domNode.parentNode.parentNode,"display","");f.set(this.formatDijit.domNode.parentNode.parentNode,"display","");f.set(this.advancedButtonDijit.domNode,"display","");a=h.filter(b.parameters,function(a){return"Layout_Template"===a.name});if(0===a.length)console.log('print service parameters name for templates must be "Layout_Template"');else{var e=h.map(a[0].choiceList,function(a){return{label:a,
value:a}});e.sort(function(a,b){return a.label>b.label?1:b.label>a.label?-1:0});this.layoutDijit.addOption(e);this.defaultLayout?this.layoutDijit.set("value",this.defaultLayout):this.layoutDijit.set("value",a[0].defaultValue);b=h.filter(b.parameters,function(a){return"Format"===a.name});0===b.length?console.log('print service parameters name for format must be "Format"'):(a=h.map(b[0].choiceList,function(a){return{label:a,value:a}}),a.sort(function(a,b){return a.label>b.label?1:b.label>a.label?-1:
0}),this.formatDijit.addOption(a),this.defaultFormat?this.formatDijit.set("value",this.defaultFormat):this.formatDijit.set("value",b[0].defaultValue))}},print:function(){if(this.printSettingsFormDijit.isValid()){var a=this.printSettingsFormDijit.get("value");c.mixin(a,this.layoutMetadataDijit.get("value"));this.preserve=this.preserveFormDijit.get("value");c.mixin(a,this.preserve);this.layoutForm=this.layoutFormDijit.get("value");var b=this.mapQualityFormDijit.get("value"),d=this.mapOnlyFormDijit.get("value");
c.mixin(d,b);b=new v;b.format=a.format;b.layout=a.layout;b.preserveScale="true"===a.preserveScale||"force"===a.preserveScale;b.label=a.title;b.exportOptions=d;b.layoutOptions={authorText:a.author,copyrightText:a.copyright,legendLayers:0<this.layoutForm.legend.length&&this.layoutForm.legend[0]?null:[],titleText:a.title};this.printparams.template=b;this.printparams.extraParameters={printFlag:!0};d=this.printTask.execute(this.printparams);(new C({count:this.count.toString(),icon:"PDF"===a.format?this.pdfIcon:
this.imageIcon,docName:a.title,title:a.format+", "+a.layout,fileHandle:d,nls:this.nls})).placeAt(this.printResultsNode,"last").startup();f.set(this.clearActionBarNode,"display","block");this.count++}else this.printSettingsFormDijit.validate()},clearResults:function(){x.empty(this.printResultsNode);f.set(this.clearActionBarNode,"display","none");this.count=1},updateAuthor:function(a){(a=a||"")&&this.authorTB.set("value",a)},getCurrentMapScale:function(){this.forceScaleNTB.set("value",this.map.getScale())}});
var C=m([n,p,q],{widgetsInTemplate:!0,templateString:z,url:null,postCreate:function(){this.inherited(arguments);this.fileHandle.then(c.hitch(this,"_onPrintComplete"),c.hitch(this,"_onPrintError"))},_onPrintComplete:function(a){a.url?(this.url=a.url,e.setStyle(this.progressBar.domNode,"display","none"),e.setStyle(this.successNode,"display","inline-block"),r.add(this.resultNode,"printResultHover")):this._onPrintError(this.nls.printError)},_onPrintError:function(a){console.log(a);e.setStyle(this.progressBar.domNode,
"display","none");e.setStyle(this.errNode,"display","block");r.add(this.resultNode,"printResultError");e.setAttr(this.domNode,"title",a.details||a.message||"")},_openPrint:function(){null!==this.url&&window.open(this.url)}});return l});