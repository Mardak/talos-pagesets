(function(){window.__adSpots={};ad_cloud_smartphone=null;if(typeof document.getElementsByClassName=="undefined"){document.getElementsByClassName=function(B,C,s){var A=document,r=[],E;try{var w=A.evaluate(".//"+(s||"*")+'[contains(concat(" ", @class, " "), " '+B+' ")]',(C||A),null,XPathResult.ANY_TYPE,null);for(E=w.iterateNext();E;E=w.iterateNext()){r.push(E)}}catch(y){var D,z=(C||A).getElementsByTagName((s||"*"));for(var x=0,t=z.length;x<t;x++){E=z[x];if(E.className){D=E.className.split(/\s+/);for(var v=0,u=D.length;v<u;v++){if(D[v]==B){r[r.length]=E;break}}}}}return r.length>0?r:null}}function c(){var r=[];var w=document.cookie.indexOf("rsi_segs=");if(w>=0){w=document.cookie.indexOf("=",w)+1;if(w>0){var u=document.cookie.indexOf(";",w);if(u==-1){u=document.cookie.length}r=decodeURIComponent(document.cookie.substring(w,u)).split("|")}}var v="";var t=(20<r.length)?20:r.length;for(var s=0;s<t;s++){if(s!=0){v+="|"}v+=(r[s])}return v}function a(t,s){for(var r in s){t.setAttribute(r,s[r])}}function l(s,t){for(var r in t){s.style[r]=t[r]}}var f=function(H,v){var E=window.__adSpots[v];if(!H.type){return}var F=H.type;var w=document;if(H.target_media!="SMARTPHONE"){n(E.element);var C=E.container=="iframe"||F=="html"||F=="js";var s=document.createElement(C?"iframe":"div");var B=s;if(C){a(s,{frameBorder:"0",marginHeight:"0",marginWidth:"0",vspace:"0",hspace:"0",allowTransparency:"true",scrolling:"no",border:"0",framespacing:"0"})}if(H.width&&H.height&&!q(E,"autosize")){if(H.width!="auto"&&H.height!="auto"){s.style.width=H.width+"px";s.style.height=H.height+"px"}}E.element.appendChild(s);if(C&&F!="html"&&F!="js"){var y=s.contentDocument?s.contentDocument:s.contentWindow.document;void("<head></head><body></body>");y.close();w=y;B=y.body;l(B,{margin:"0",padding:"0",backgroupColor:"transparent"})}}var u=function(L,I,K){var J=w.createElement(L);a(J,I);l(J,K);return J};var D=function(I,J){if(I.target=="_mixi"){delete I.target;var K="mixi.util.requestExternalNavigateTo('"+I.href+"');";I.href="javascript:void(0);";I.onclick=K}return u("a",I,J)};var A=function(X,L,V){var T=q(X,"nocss");var O=X.color;var I=L.disposition;var R={cellspacing:"0",cellpadding:"0",vspace:"0",border:"0"};var Q=T?{}:{background:O[2]};if(I=="VERTICAL"){R.width=L.width}else{R.height=L.height}var S=u("table",R,Q);var J=u("tbody",{},{});var K=u("tr",{},{});if(V.src){var N=u("td",{},{});var Y=u("a",{href:V.href,target:V.target},{});var aa=u("img",{src:V.src},{},{border:"none"});Y.appendChild(aa);N.appendChild(Y);K.appendChild(N)}var N=u("td",{},{});var M=u("p",{},{});var U=u("p",{},{});var Z=w.createTextNode(decodeURIComponent(V.title));var P=w.createTextNode(decodeURIComponent(V.text));var W=u("a",{href:V.href,target:V.target},{});W.appendChild(Z);M.appendChild(W);U.appendChild(P);N.appendChild(M);N.appendChild(U);K.appendChild(N);J.appendChild(K);S.appendChild(J);return S};var z={swf:function(K,J,I){var L=deconcept.SWFObjectUtil.getPlayerVersion();var P=L&&L.major>=6?true:false;if(typeof(I.alter)!="undefined"&&!P){I.type=I.alter["type"];var M=I.alter["type"]=="img"?"src":"string";I[M]=I.alter[M];z[I.type](K,B,I)}else{var N=new SWFObject(I.src,"so_"+v,I.width,I.height,"6",null);N.addVariable("clickTAG",I.href);N.addVariable("targetTAG",I.target);N.addParam("allowScriptAccess","always");N.addParam("wmode","transparent");if(C){B.innerHTML=N.getSWFHTML()}else{var O=u("div",{},{});B.appendChild(O);void(O)}}},img:function(L,J,I){var K=D({href:I.href,target:I.target},{});var M=u("img",{src:I.src,alt:decodeURIComponent(I.alt),border:"0",width:I.width,height:I.height},{});K.appendChild(M);B.appendChild(K)},text:function(K,J,I){var N=I.ads.length;for(var L=0;L<N;L++){var M=A(K,I,I.ads[L]);B.appendChild(M)}},html:function(K,J,I){B.src="";B.src=I.iframeLocation},js:function(K,J,I){B.src="";B.src=I.iframeLocation},multiple:function(O,I,R){var N=q(O,"uselist");var M=u(N?"ul":"div",{},{});for(var K=0;K<R.ads.length;K++){var P=R.ads[K];var Q=w.createTextNode(decodeURIComponent(P.string));var J=D({href:P.href,target:P.target});J.appendChild(Q);var L=u(N?"li":"div",{},{});L.appendChild(J);M.appendChild(L)}B.appendChild(M)},giftext:function(K,J,I){var N=I.ads.length;for(var L=0;L<N;L++){var M=A(K,I,I.ads[L]);B.appendChild(M)}}};if(H.target_media=="SMARTPHONE"&&o()){if(!ad_cloud_smartphone){ad_cloud_smartphone=new AdCloudSmartphone()}var x=q(E,"fit");var G=q(E,"nolicense");var r=E.color;if(H.is_overlay==true){ad_cloud_smartphone.createAd(v,H,r,{fixed:H.is_fixed?H.is_fixed:false,is_fit:x,nolicense:G,position:H.position?H.position:"FOOTER",size:x?size.height:H.height+"px",size_overturn:x?size.over_turn:H.height+"px",ad_base_color:E.color[2]});if(E.rotationterm!=0){var t=setInterval(function(){if(!AdCloudSmartphone.is_showing_expand){clearInterval(t);m(e(document.getElementsByClassName("sid_"+v)[0])+AdCloudSmartphone.getAidParameter(v))}},E.rotationterm?E.rotationterm*1000:AdCloudSmartphone.ROTATION_TIME)}}else{ad_cloud_smartphone.createAd(v,H,r,{nolicense:G})}}else{if(H.target_media!="SMARTPHONE"){z[F](E,B,H)}}};function n(r){for(i=r.childNodes.length-1;i>=0;i--){r.removeChild(r.childNodes[i])}}function q(t,s){for(var r in t){if(r==s){return true}}return false}function p(s){var r=s.split("_");return{k:r[0],v:r[1]}}function m(s){__getInnerJsonP=function(){var t=document.createElement("script");t.type="text/javascript";t.charset="UTF-8";t.src=s;document.body.appendChild(t)};if(!!window.opera){var r=document.createElement("img");r.onerror=__getInnerJsonP;a(r,{width:0,height:0,src:s});document.body.appendChild(r)}else{__getInnerJsonP.apply()}}function k(s){var r="httpdisabled://ameba.d.ad-cloud.jp/ad/jsonp/?";r+="sid="+s+"&url="+escape(document.URL)+"&ref="+escape(document.referrer);if(q(window.__adSpots[s],"rehearsal")){r+="&rehearsal=1"}if(!!window.__adParams&&window.__adParams!=""){r+="&cparam="+window.__adParams}r+="&rnd="+Math.floor(Math.random()*1000);return r}function e(r){var v=r.className.split(" ");var t=p(v[1]).v;if(!window.__adSpots[t]){window.__adSpots[t]={};window.__adSpots[t].element=r;for(var s=1;s<v.length;s++){var u=p(v[s]);window.__adSpots[t][u.k]=u.k=="color"?u.v.split("-"):u.v}}return k(t)}function o(){return/iPhone/.test(navigator.userAgent)||/Android/.test(navigator.userAgent)?true:false}function d(){window.__adCallBack=f;var x=function(){var F=document.getElementsByTagName("meta");for(var E=0;E<F.length;E++){var J=F[E];if(!!J.getAttribute("name")&&J.getAttribute("name")=="ameba-ad-params"){window.__adParams=J.getAttribute("content")}}var G=c();if(!!G&&G!=""){if(!!window.__adParams&&window.__adParams!=""){window.__adParams+=("|"+G)}else{window.__adParams=G}}var I=document.getElementsByClassName("ad_frame");var z="";if(I){for(var E=0;E<I.length;E++){var D=I[E].className.split(/\s+/);var C=false;for(var A=D.length,B=0;B<A;B++){if(D[B]=="sp"&&window.JSON&&window.JSON.stringify){z+=D[1].split("_")[1]+"|";C=true;break}}if(!C){m(e(I[E]))}}}if(z!=""&&o()){var H="httpdisabled://spstatic.ameba.jp/js/cookie.html";z=z.substring(0,z.length-1);AdCloudSmartphone.createCookieSpace(H,document.URL,document.referrer,z)}};var w=function(){r++;if(r==y){x()}};var v=o()?["httpdisabled://spstatic.ameba.jp/js/swfobject.js","httpdisabled://spstatic.ameba.jp/js/s.js"]:["httpdisabled://spstatic.ameba.jp/js/swfobject.js"];var y=v.length;var r=0;for(var t=0,u=v.length;t<u;t++){var s=document.createElement("script");s.charset="utf-8";s.src=v[t];if(window.ActiveXObject){s.onreadystatechange=function(){if(s.readyState=="complete"||s.readyState=="loaddisableded"){w()}}}else{s.onloaddisabled=function(){w()}}document.body.appendChild(s)}}if(!!(window.attachEvent&&!window.opera)){(function(){if(document.body==null){document.onreadystatechange=function(){if(document.readyState=="complete"||document.readyState=="loaddisableded"){d()}};return}try{document.documentElement.doScroll("left")}catch(r){setTimeout(arguments.callee,50);return}d()})()}else{if(!!window.opera){var j=parseFloat(window.opera.version());var g=j<9?"loaddisabled":"DOMContentLoaded";var b=j<9.5?false:true;var h=j<9?window:j<9.5?document:window;h.addEventListener("DOMContentLoaded",d,b)}else{if(!!document.addEventListener){document.addEventListener("DOMContentLoaded",d,true)}else{window.onloaddisabled=d()}}}})();