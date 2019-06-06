(function(t){function e(e){for(var n,s,c=e[0],i=e[1],p=e[2],l=0,f=[];l<c.length;l++)s=c[l],o[s]&&f.push(o[s][0]),o[s]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n]);u&&u(e);while(f.length)f.shift()();return a.push.apply(a,p||[]),r()}function r(){for(var t,e=0;e<a.length;e++){for(var r=a[e],n=!0,c=1;c<r.length;c++){var i=r[c];0!==o[i]&&(n=!1)}n&&(a.splice(e--,1),t=s(s.s=r[0]))}return t}var n={},o={app:0},a=[];function s(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=t,s.c=n,s.d=function(t,e,r){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(r,n,function(e){return t[e]}.bind(null,n));return r},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=e,c=c.slice();for(var p=0;p<c.length;p++)e(c[p]);var u=i;a.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";var n=r("64a9"),o=r.n(n);o.a},"26e0":function(t,e,r){},"56d7":function(t,e,r){"use strict";r.r(e);r("cadf"),r("551c"),r("f751"),r("097d");var n=r("2b0e"),o=r("5c96"),a=(r("0fae"),function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("h1",[t._v("vue项目实现图片裁剪功能")]),r("el-row",[r("el-col",{attrs:{span:8,offset:8}},[r("h2",[t._v("使用cropperjs插件实现（一）")])])],1),r("el-row",[r("el-col",{attrs:{span:8,offset:8}},[r("cropper",{attrs:{data:t.slide}})],1)],1),r("el-row",[r("el-col",{attrs:{span:8,offset:8}},[r("h2",[t._v("使用cropperjs插件实现（二）")])])],1),r("el-row",[r("el-col",{attrs:{span:16,offset:4}},[r("cropper-one",{attrs:{data:t.slide1}})],1)],1),r("el-row",[r("el-col",{attrs:{span:8,offset:8}},[r("h2",[t._v("使用canvas实现")]),r("h3",[t._v("点击裁剪，鼠标在图片上绘制裁剪区域")])])],1),r("el-row",[r("el-col",{attrs:{span:16,offset:4}},[r("cropper-canvas",{attrs:{data:t.slideCanvas}})],1)],1)],1)}),s=[],c=function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.data.src?r("div",{staticClass:"rc-cropper"},[r("canvas",{ref:"canvas",attrs:{id:t.data.src}}),r("div",{staticClass:"rc-cropper__iconCrop"},[r("el-button",{attrs:{type:"success",size:"small",disabled:t.croppShow},on:{click:function(e){return t.initCropper()}}},[t._v("裁剪")]),t.cropper?r("el-button",{attrs:{type:"success",size:"small"},on:{click:function(e){return t.sureCropper()}}},[t._v("确认")]):t._e(),t.cropper?r("el-button",{attrs:{type:"danger",size:"small"},on:{click:function(e){return t.cancelCropper()}}},[t._v("取消")]):t._e()],1)]):t._e()},i=[],p=r("bab4"),u=r.n(p),l=(r("4604"),{name:"cropper",props:{data:{type:Object,required:!0,default:function(){}}},data:function(){return{cropper:null,croppShow:!1}},mounted:function(){this.drawImg()},methods:{drawImg:function(t){var e=this;this.$nextTick(function(){var r=document.getElementById(e.data.src);if(r){var n=r.parentElement;r.width=n.offsetWidth,r.height=2*n.offsetWidth/3;var o=r.getContext("2d");o.clearRect(0,0,r.width,r.height);var a=new Image;a.crossOrigin="Anonymous",a.src=t||e.data.src,a.onload=function(){o.drawImage(a,0,0,r.width,r.height)}}})},initCropper:function(){this.drawImg(),this.croppShow=!0;var t=new u.a(this.$refs.canvas,{checkCrossOrigin:!0,viewMode:2,aspectRatio:1.5});this.cropper=t},sureCropper:function(){var t=this;this.cropper.getCroppedCanvas().toBlob(function(e){var r=window.URL.createObjectURL(e);t.drawImg(r)},"image/jpeg"),this.cancelCropper()},cancelCropper:function(){this.cropper.destroy(),this.croppShow=!1,this.cropper=null}}}),f=l,d=(r("71ee"),r("2877")),h=Object(d["a"])(f,c,i,!1,null,null,null),v=h.exports,g=function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.data.src?r("div",{staticClass:"rc-cropper-one"},[r("el-col",{attrs:{span:12}},[r("canvas",{ref:"canvas",attrs:{id:t.data.src}}),r("div",{staticClass:"rc-cropper__iconCropOne"},[r("el-button",{attrs:{type:"success",size:"small",disabled:t.croppShow},on:{click:function(e){return t.initCropper()}}},[t._v("裁剪")]),t.cropper?r("el-button",{attrs:{type:"danger",size:"small"},on:{click:function(e){return t.cancelCropper()}}},[t._v("取消")]):t._e()],1)]),r("el-col",{attrs:{span:11,offset:1}},[r("img",{attrs:{src:t.cropImg,alt:"裁剪后图片"}})])],1):t._e()},m=[],w={name:"cropper",props:{data:{type:Object,required:!0,default:function(){}}},data:function(){return{cropper:null,croppShow:!1,cropImg:""}},mounted:function(){this.drawImg()},methods:{drawImg:function(t){var e=this;this.$nextTick(function(){var r=document.getElementById(e.data.src);if(r){var n=r.parentElement;r.width=n.offsetWidth,r.height=2*n.offsetWidth/3;var o=r.getContext("2d");o.clearRect(0,0,r.width,r.height);var a=new Image;a.crossOrigin="Anonymous",a.src=t||e.data.src,a.onload=function(){o.drawImage(a,0,0,r.width,r.height)}}})},initCropper:function(){var t=this;this.drawImg(),this.croppShow=!0;var e=new u.a(this.$refs.canvas,{checkCrossOrigin:!0,viewMode:2,aspectRatio:1.5,crop:function(){t.sureCropper()}});this.cropper=e},sureCropper:function(){var t=this;this.cropper.getCroppedCanvas().toBlob(function(e){var r=window.URL.createObjectURL(e);t.cropImg=r},"image/jpeg")},cancelCropper:function(){this.cropper.destroy(),this.croppShow=!1,this.cropper=null}}},b=w,C=(r("8ae0"),Object(d["a"])(b,g,m,!1,null,null,null)),_=C.exports,y=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"rc-cropper-canvas"},[r("el-col",{attrs:{span:12}},[r("canvas",{attrs:{id:t.data.img_url}}),r("el-button",{staticClass:"rc-crop__iconCropCanvas",attrs:{type:"danger",size:"small"},on:{click:function(e){return t.cropImg()}}},[t._v("裁剪")])],1),r("el-col",{attrs:{span:12}},[r("canvas",{attrs:{id:t.data.img_url+"after"}})])],1)},I=[],O={name:"cropper-canvas",props:{data:{type:Object,required:!0,default:function(){}}},mounted:function(){this.drawImg()},methods:{drawImg:function(){var t=this;this.$nextTick(function(){var e=document.getElementById(t.data.img_url);if(e){var r=e.parentElement;e.width=r.offsetWidth,e.height=2*r.offsetWidth/3;var n=e.getContext("2d");n.clearRect(0,0,e.width,e.height);var o=new Image;o.crossOrigin="Anonymous",o.src=t.data.src,o.onload=function(){n.drawImage(o,0,0,e.width,e.height)}}})},cropImg:function(){var t=this,e=document.getElementById(this.data.img_url),r=e.getContext("2d"),n=new Image;n.onload=function(){r.drawImage(n,0,0,e.width,e.height)},n.src=this.data.src;var o=!1,a=!1,s=0,c=0,i=0,p=0,u=0,l=0,f=0,d=0;e.onmousedown=function(t){r.beginPath(),r.setLineDash([6,6]),r.moveTo(f,d),r.lineTo(f+s,d),r.lineTo(f+s,d+c),r.lineTo(f,d+c),r.lineTo(f,d),r.strokeStyle="green",r.stroke(),r.isPointInPath(t.offsetX,t.offsetY)?(o=!0,u=t.offsetX,l=t.offsetY,i=f,p=d):(r.clearRect(0,0,e.width,e.height),r.drawImage(n,0,0,e.width,e.height),a=!0,i=t.offsetX,p=t.offsetY,f=t.offsetX,d=t.offsetY)},e.onmouseup=function(){a&&(a=!1,t.sureCrop(i,p,s,c)),o&&(o=!1,t.sureCrop(f,d,s,c))},e.onmousemove=function(t){a&&(r.clearRect(0,0,e.width,e.height),r.drawImage(n,0,0,e.width,e.height),s=t.offsetX-i,c=t.offsetY-p,r.beginPath(),r.strokeStyle="#FF0000",r.strokeRect(i,p,s,c),r.closePath()),o&&(r.clearRect(0,0,e.width,e.height),r.drawImage(n,0,0,e.width,e.height),r.beginPath(),f=i+t.offsetX-u,d=p+t.offsetY-l,r.strokeStyle="yellow",r.strokeRect(f,d,s,c),r.closePath())}},sureCrop:function(t,e,r,n){var o=document.getElementById(this.data.img_url+"after"),a=o.parentElement;o.width=a.offsetWidth,o.height=2*a.offsetWidth/3;var s=o.getContext("2d"),c=new Image;c.src=this.data.src,c.onload=function(){s.beginPath(),s.moveTo(t,e),s.lineTo(t+r,e),s.lineTo(t+r,e+n),s.lineTo(t,e+n),s.clip(),s.drawImage(c,0,0,o.width,o.height)},s.stroke()}}},j=O,k=(r("c8f3"),Object(d["a"])(j,y,I,!1,null,null,null)),x=k.exports,S={name:"app",components:{Cropper:v,CropperOne:_,CropperCanvas:x},data:function(){return{slide:{src:"https://avatars0.githubusercontent.com/u/26196557?s=460&v=40"},slide1:{src:"https://avatars3.githubusercontent.com/u/7911342?s=460&v=4"},slideCanvas:{img_url:"https://avatars1.githubusercontent.com/u/23690568?s=460&v=4",src:"https://avatars1.githubusercontent.com/u/23690568?s=460&v=4"}}}},R=S,T=(r("034f"),Object(d["a"])(R,a,s,!1,null,null,null)),P=T.exports;n["default"].config.productionTip=!1,n["default"].use(o["Button"]),n["default"].use(o["Row"]),n["default"].use(o["Col"]),new n["default"]({render:function(t){return t(P)}}).$mount("#app")},"64a9":function(t,e,r){},"71ee":function(t,e,r){"use strict";var n=r("26e0"),o=r.n(n);o.a},8839:function(t,e,r){},"8ae0":function(t,e,r){"use strict";var n=r("8839"),o=r.n(n);o.a},aaab:function(t,e,r){},c8f3:function(t,e,r){"use strict";var n=r("aaab"),o=r.n(n);o.a}});
//# sourceMappingURL=app.2c41ecf4.js.map