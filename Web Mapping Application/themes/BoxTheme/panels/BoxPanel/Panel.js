//>>built
define(["dojo/_base/declare","jimu/BaseWidgetPanel","jimu/BaseWidgetFrame","./BoxFrame"],function(a,b,c,d){return a([b],{baseClass:"jimu-widget-panel box-panel",startup:function(){this.inherited(arguments);this.started=!0},createFrame:function(a){return this.config.widgets&&1===this.config.widgets.length||!this.config.widgets?new c:new d({label:a.label,widgetManager:this.widgetManager})}})});