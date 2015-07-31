//>>built
define("dojo/_base/declare dojo/_base/lang dojo/_base/array esri/tasks/query esri/tasks/QueryTask ./FeatureLayerQueryResult".split(" "),function(f,m,k,n,p,l){return f(null,{queryUrl:"",idProperty:"id",data:null,_entityData:null,constructor:function(b){f.safeMixin(this,b);this.data=[];this._entityData=[];this.layer=b.layer;this.objectIds=b.objectIds;this.where=b.where;this.orderByFields=b.orderByFields;this.totalCount=b.totalCount;this.batchCount=b.batchCount||25;this.idProperty=this.layer.objectIdField;
this.layer&&this.layer.url&&(this.queryTask=new p(this.layer.url))},get:function(b){return this.data[b]},getIdentity:function(b){return b[this.idProperty]},query:function(b,g){var e=new n,a=g&&g.start||0,h=this.batchCount,d=null;"function"===typeof b?d=b(this._entityData):"[object Array]"===Object.prototype.toString.call(b)&&(d=b);if(this.objectIds)d=d?d:this.objectIds,e.objectIds=d.length>=a+this.batchCount?d.slice(a,a+h):d.slice(a);else if(d&&0<d.length?e.objectIds=d.length>=a+this.batchCount?d.slice(a,
a+h):d.slice(a):(e.start=a,e.num=h,e.where=this.where),(a=g.sort)&&0<a.length)a=k.map(a,function(a){return a.attribute+" "+(a.descending?"DESC":"ASC")}),e.orderByFields=a;e.returnGeometry=!1;e.outFields=["*"];var f=this.totalCount,a=null,a=!e.where;if(!(e.objectIds&&0<e.objectIds.length)&&a)return new l([]);a=this.queryTask?this.queryTask.execute(e):this.layer.queryFeatures(e);a.total=a.then(m.hitch(this,function(a){var c=0,b=this.layer.objectIdField;if(this.objectIds){if(!b)for(c=0;c<a.fields.length;c++)if("esriFieldTypeOID"===
a.fields[c].type){b=a.fields[c].name;break}for(var d={},c=0;c<a.features.length;c++)d[a.features[c].attributes[b]]=a.features[c];a.features=k.map(e.objectIds,function(a){return d[a]})}for(c=0;c<a.features.length;c++)a.features[c]&&(a.features[c]=a.features[c].attributes,this.data[a.features[c][b]]=a.features[c],this._entityData.push(a.features[c]));a=a.features;return f}),function(){console.log("FeatureLayerQueryStore queryFeatures failed.");return 0});return new l(a)}})});