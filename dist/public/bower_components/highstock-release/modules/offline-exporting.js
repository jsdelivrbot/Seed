/*
 Highstock JS v2.1.10 (2015-12-07)
 Client side exporting module

 (c) 2015 Torstein Honsi / Oystein Moseng

 License: www.highcharts.com/license
*/
(function(c){typeof module==="object"&&module.exports?module.exports=c:c(Highcharts)})(function(c){c.CanVGRenderer={};c.Chart.prototype.exportChartLocal=function(w,x){var i=this,e=c.merge(i.options.exporting,w),p=navigator.userAgent.indexOf("WebKit")>-1&&navigator.userAgent.indexOf("Chrome")<0,l=e.scale||2,m,q=window.URL||window.webkitURL||window,h,r=0,n,f,s,b=function(){if(e.fallbackToExportServer===!1)throw"Fallback to export server disabled";i.exportChart(e)},t=function(a,g,d,c,k,b,e){var j=new Image;
if(!p)j.crossOrigin="Anonymous";j.onload=function(){var b=document.createElement("canvas"),i=b.getContext&&b.getContext("2d"),h;if(i){b.height=j.height*l;b.width=j.width*l;i.drawImage(j,0,0,b.width,b.height);try{h=b.toDataURL(),d(h,g)}catch(f){if(f.name==="SecurityError"||f.name==="SECURITY_ERR"||f.message==="SecurityError")c(a,g);else throw f;}}else k(a,g);e&&e(a,g)};j.onerror=function(){b(a,g);e&&e(a,g)};j.src=a},u=function(a){try{if(!p&&navigator.userAgent.toLowerCase().indexOf("firefox")<0)return q.createObjectURL(new Blob([a],
{type:"image/svg+xml;charset-utf-16"}))}catch(b){}return"data:image/svg+xml;charset=UTF-8,"+encodeURIComponent(a)},o=function(a,b){var d=document.createElement("a"),c=(e.filename||"chart")+"."+b,k;if(navigator.msSaveOrOpenBlob)navigator.msSaveOrOpenBlob(a,c);else if(d.download!==void 0)d.href=a,d.download=c,d.target="_blank",document.body.appendChild(d),d.click(),document.body.removeChild(d);else try{if(k=window.open(a,"chart"),k===void 0||k===null)throw 1;}catch(i){window.location.href=a}},v=function(){var a,
g,d=i.sanitizeSVG(m.innerHTML);if(e&&e.type==="image/svg+xml")try{navigator.msSaveOrOpenBlob?(g=new MSBlobBuilder,g.append(d),a=g.getBlob("image/svg+xml")):a=u(d),o(a,"svg")}catch(f){b()}else a=u(d),t(a,{},function(a){try{o(a,"png")}catch(c){b()}},function(){var a=document.createElement("canvas"),e=a.getContext("2d"),g=d.match(/^<svg[^>]*width\s*=\s*\"?(\d+)\"?[^>]*>/)[1]*l,f=d.match(/^<svg[^>]*height\s*=\s*\"?(\d+)\"?[^>]*>/)[1]*l,h=function(){e.drawSvg(d,0,0,g,f);try{o(navigator.msSaveOrOpenBlob?
a.msToBlob():a.toDataURL("image/png"),"png")}catch(c){b()}};a.width=g;a.height=f;window.canvg?h():(i.showLoading(),c.getScript(c.getOptions().global.canvasToolsURL,function(){i.hideLoading();h()}))},b,b,function(){try{q.revokeObjectURL(a)}catch(b){}})},y=function(a,b){++r;b.imageElement.setAttributeNS("http://www.w3.org/1999/xlink","href",a);r===h.length&&v()};c.wrap(c.Chart.prototype,"getChartHTML",function(a){m=this.container.cloneNode(!0);return a.apply(this,Array.prototype.slice.call(arguments,
1))});i.getSVGForExport(e,x);h=m.getElementsByTagName("image");try{h.length||v();for(f=0,s=h.length;f<s;++f)n=h[f],t(n.getAttributeNS("http://www.w3.org/1999/xlink","href"),{imageElement:n},y,b,b,b)}catch(z){b()}};c.getOptions().exporting.buttons.contextButton.menuItems=[{textKey:"printChart",onclick:function(){this.print()}},{separator:!0},{textKey:"downloadPNG",onclick:function(){this.exportChartLocal()}},{textKey:"downloadSVG",onclick:function(){this.exportChartLocal({type:"image/svg+xml"})}}]});
