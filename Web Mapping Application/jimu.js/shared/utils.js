//>>built
define(["./basePortalUrlUtils"],function(l){function g(a,b){function c(f,b){var e,c,d,h,g="widgetOnScreen"===f;if(a[f]){if(a[f].groups)for(e=0;e<a[f].groups.length;e++)if(d=a[f].groups[e],b(d,{index:e,isWidget:!1,groupId:d.id,isThemeWidget:!1,isOnScreen:g}),a[f].groups[e].widgets)for(c=0;c<a[f].groups[e].widgets.length;c++)h=a[f].groups[e].widgets[c],b(h,{index:c,isWidget:!0,groupId:d.id,isThemeWidget:h.uri&&-1<h.uri.indexOf("themes/"+a.theme.name),isOnScreen:g});if(a[f].widgets)for(e=0;e<a[f].widgets.length;e++)h=
a[f].widgets[e],b(a[f].widgets[e],{index:e,isWidget:!0,groupId:f,isThemeWidget:h.uri&&-1<h.uri.indexOf("themes/"+a.theme.name),isOnScreen:g})}}c("widgetOnScreen",b);c("widgetPool",b)}var d={},k="inPanel hasLocale hasStyle hasConfig hasUIFile hasSettingPage hasSettingUIFile hasSettingLocale hasSettingStyle keepConfigAfterMapSwithched isController hasVersionManager isThemeWidget supportMultiInstance".split(" ");d.visitElement=g;d.getConfigElementById=function(a,b){var c;if("map"===b)return a.map;g(a,
function(a){if(a.id===b)return c=a,!0});return c};d.getConfigElementByLabel=function(a,b){var c;if("map"===b)return a.map;g(a,function(a){if(a.label||a.name===b)return c=a,!0});return c};d.getConfigElementsByName=function(a,b){var c=[];if("map"===b)return[a.map];g(a,function(a){a.name===b&&c.push(a)});return c};d.getWidgetNameFromUri=function(a){a=a.split("/");a.pop();return a.pop()};d.getAmdFolderFromUri=function(a){a=a.split("/");a.pop();return a.join("/")+"/"};d.widgetProperties=k;d.processWidgetProperties=
function(a){"undefined"===typeof a.properties.isController&&(a.properties.isController=!1);"undefined"===typeof a.properties.isThemeWidget&&(a.properties.isThemeWidget=!1);"undefined"===typeof a.properties.hasVersionManager&&(a.properties.hasVersionManager=!1);k.forEach(function(b){"undefined"===typeof a.properties[b]&&(a.properties[b]=!0)})};d.isHostedService=function(a){var b=l.getServerByUrl(a)+"/[^/]+/[^/]+/rest/services";return RegExp(b,"gi").test(a)};return d});