var ClickMonkey=(function(){var B="httpdisabled://nsclick.baidu.com/h.gif?pid=113&v="+pageId,$="bd_clickmonkey",C=function(C){var _=(new Date()).getTime(),D=window[$+_]=new Image(),A="";for(var E in C)A+=("&"+E+"="+C[E]);D.src=B+"&r="+_+A;D.onloaddisabled=D.onerror=function(){D=null}},E="",A=function($,C){C=C||[];E=$.monkey||$.getAttribute("monkey")||E;if($.parentNode&&$.parentNode.tagName.toUpperCase()!="BODY")C=A($.parentNode,C);if($.previousSibling){var _=1,B=$.previousSibling;do{if(B.nodeType==1&&B.nodeName==$.nodeName)_++;B=B.previousSibling}while(B)}if($.nodeType==1)C.push($.nodeName.toLowerCase()+(_>1?_:""));return C},D=function(_,C,B,$){if(_.addEventListener){_.addEventListener(C,B,$);return true}else if(_.attachEvent){var A=_.attachEvent("on"+C,B);return A}},F=function($){return encodeURIComponent($)};D(document.body,"mousedown",function($){var $=window.event||$,_=$.srcElement||$.target;if(_.tagName.toUpperCase()!="A")if(_.parentNode.tagName.toUpperCase()=="A")_=_.parentNode;else if(!(_.tagName.toUpperCase()=="INPUT"&&(_.type.toLowerCase()=="checkbox"||_.type.toLowerCase()=="radio"))&&!(_.tagName.toUpperCase()=="AREA"))return;E="";var D=A(_).join("-"),B={xp:D},G=_.getAttribute("href",2);if(G&&!(/^javascript|#/.test(G)))B.objurl=F(G);else B.objurl="none";if(_.innerHTML&&!(/^\s*</i.test(_.innerHTML))&&!(/>\s*$/i.test(_.innerHTML)))B.title=F(_.innerHTML);else B.title="none";if(E)B.monkey=E;C(B)});var _=function(_,$,A){var B={xp:"_"+_+"_"};if($)B.objurl=F($);else B.objurl="none";if(A)B.title=F(A);else B.title="none";C(B)};return{log:_}})()