
/*wtsendtimeparams:15400928.22*/

function wt_send_timeparams(params,dest){
if (!wt_version){
return true;
}
var allParas=params.split(';');
params='';
for (var i in allParas){
if (typeof(allParas[i]) != 'string'){
continue;
}
var paras=allParas[i].split('=');
params+='&'+paras[0]+'='+wt_escape(paras[1]);
}
params+='&z='+new Date().getTime();
var old_activation=wt_deactivatePixel;
wt_deactivatePixel=false;
if (dest == 1){
wt_registerEvent (window, (wt_browserNameIE && wt_typeof (window.onbeforeunloaddisabled)) ? "beforeunloaddisabled" : "unloaddisabled" , function(){wt_quicksend('',params,'ce.pl')});
} else {
wt_quicksend('',params,'ce.pl');
wt_deactivatePixel=old_activation;
}
}
/*webtrekkmedia:15400930.15*/

webtrekk.mediaStVersion="202";function wt_sendinfo_media(wt_mi,mk,mt1,mt2,mg,bw,vol,mute){var wt_mg="";var params="";params+="&bw="+bw;params+="&vol="+vol;params+="&mut="+mute;if(typeof(mg)!="undefined"){mg=mg.split(";");for(var z=0;z<mg.length;z++){var tmp=mg[z].split("=");wt_mg+="&"+tmp[0]+"="+wt_stEscape(tmp[1]);}};if(webtrekk.cookie=="1"){params+=wt_get1stPartyCookie();};if(mk=="init"){wt_stQuicksend("st&mi="+wt_stEscape(wt_mi)+"&mk="+mk+"&mt1="+mt1+"&mt2="+mt2+wt_mg+params);}else{wt_stQuicksend("st&mi="+wt_stEscape(wt_mi)+"&mk="+mk+"&mt1="+mt1+params);}};function wt_stQuicksend(params,script){if(!webtrekk.trackDomain||!webtrekk.trackId||wt_deactivatePixel){return;};if(!script){script="wt.pl";};params+="&x="+new Date().getTime();var wt_url=(location.protocol=="httpdisabledsdisabled:"?"httpdisabledsdisabled:":"httpdisabled:")+"//"+webtrekk.trackDomain+"/"+webtrekk.trackId+"/"+script+"?p="+webtrekk.mediaStVersion+","+params;if(document.images){if(typeof(wt_i)=="undefined"){wt_i=new Array();};var ii=wt_i.length;wt_i[ii]=new Image();wt_i[ii].src=wt_url;wt_i[ii].onloaddisabled=function(){};}else{void("<img src=\'"+wt_url+"\' height=\'1\' width=\'1\'>");}};function wt_stEscape(u){if(typeof(encodeURIComponent)=="function"){return encodeURIComponent(u);};return escape(u);};function wt_get1stPartyCookie(){var params="";if(wt_typeof(webtrekk.customSid)&&webtrekk.customSid!=""){params+="&csid="+webtrekk.customSid;};if(wt_typeof(webtrekk.customEid)&&webtrekk.customEid!=""){params+="&ceid="+webtrekk.customEid;};return params+"&sid="+wt_getCookie("wt_sid")+"&l_v="+wt_getCookie("wt_l_v")+"&eid="+wt_getCookie("wt_eid");};
/*webtrekk-video:15886126.19*/

function videoTrackingEvent(filmName, eventBezeichnung, zeit, prozent, useCookie, searchterm, documentName, durationSec, withAdsString, layout, description, firstPublicationDate, videoKeyword)
{
 try
 {
  var webtrekkAction
  
  switch(eventBezeichnung)
  {
   case 'playClick':
    webtrekkAction = "init"
    zeit = 0 
    break
   case 'playStart':
    webtrekkAction = "play"
    break
   case 'pause':
    webtrekkAction = "pause"
    break
   case 'playComplete':
    webtrekkAction = "eof"
    break
   case '""':
    webtrekkAction = "pos"
    break
   default:
    break
  }
  if (webtrekkAction)
  {
   var url = window.location.pathname
   if (zeit == '""' || zeit < 0)
   {   
    zeit = 0
   }
   if (durationSec == '""' || durationSec < 0)
   {   
    durationSec = 0
   }
   var parString = "ck1=" + withAdsString + ";ck2=" + layout + ";ck3=" + url + ";ck4=" + description + ";ck8=" + withAdsString + "/" + videoKeyword + ";ck9=" + firstPublicationDate + ";mg1=" + description
   wt_sendinfo_media(documentName, webtrekkAction, zeit, durationSec, parString, "", "", "")
  }
  }
 catch (e)
 {
 }
} // videoTrackingEvent
/*nugadd:17177264.1*/

/*nuggad*/
adServerURL = 'http://ww251.smartadserver.com/track/comp.asp?keyword=NUGGVARS&site=10019';
adServerURL = encodeURIComponent(adServerURL);
var nuggcall = 'http://asv.nuggad.net/bk?nuggn=1569905102&nuggsid=1609338484&nuggl='+adServerURL;
void("<img name=\"nuggadPixel\" src=\"" + nuggcall + "\" width=\"1\" height=\"1\" /><br clear=\"all\" />");
/*nuggad*/
/*webtrekk:15400926.31*/

var wt_version=212;var wt_va=Array("wt_sampleValue","wt_sentFullPixel","wt_t1","wt_t2","wt_cookie_sid","wt_cookie_eid","wt_cookie_l_v","wt_cookie_one","wt_ep","wt_ccParams","wt_mcvalue","wt_isFlashCookie","wt_1st_party_checked","wt_1stPartySet");for(var i=0;i<wt_va.length;i++){eval("if(typeof("+wt_va[i]+")!='string') "+wt_va[i]+"='';");};var wt_browserName=navigator.appName,wt_browserName=(wt_indexOf(wt_browserName,"Microsoft")?wt_browserName:"MSIE"),wt_browserNameNS=(wt_browserName=="Netscape"),wt_browserNameIE=(wt_browserName=="MSIE");var wt_deactivatePixel=false;if(!webtrekk.contentId)webtrekk.contentId=wt_url2contentId(document.location.href);function wt_href(){return wt_location().href;};function wt_location(){var r=document.location;if(!document.layers&&document.getElementById){eval("try {r=top.document.location;}catch(e){r=document.location;};");}else{r=top.document.location;};return r;};function wt_getWebtrekkPath(){if(!document.layers&&document.getElementById){var stags=document.getElementsByTagName('script');for(var i=0;i<stags.length;i++){if(stags[i].src.match(/webtrekk[a-z|A-Z|0-9|_]*\.js/g)){return stags[i].src.replace(/webtrekk[a-z|A-Z|0-9|_]*\.js/g,'');}}}};function wt_length(a){return a!="undefined"?a.length:0;};function wt_getTimezone(){return Math.round((new Date().getTimezoneOffset()/60)*(-1));};function wt_url2contentId(url){if(!url)return "no_content";var tmp=new RegExp("//(.*)").exec(url);if(tmp.length<1)return "no_content";return tmp[1].split("?")[0].replace(/\./g,"_").replace (/\//g, ".").replace (/\.{2,};/g,".").toLowerCase();};function wt_include(s){if(!document.createElement)return false;var html_doc=document.getElementsByTagName('head').item(0);var js=document.createElement('script');js.setAttribute('language','javascript');js.setAttribute('type','text/javascript');js.setAttribute('src',s);html_doc.appendChild(js);return true;};function wt_indexOf(a,b,c){return a.indexOf(b,c?c:0);};function wt_typeof(v){return(typeof v!="undefined")?1:0;};function wt_registerEvent(obj,e,f){if(obj.addEventListener){obj.addEventListener(e,f,false);}else{if(obj.attachEvent){obj.attachEvent("on"+e,f);}}};function wt_maxlen(v,l){if(v&&v.length>l)return v.substring(0,l-1);return v;};function wt_escape(u){if(typeof(encodeURIComponent)=='function')return encodeURIComponent(u);return escape(u);};function wt_unescape(u){if(typeof(decodeURIComponent)=='function')return decodeURIComponent(u);return unescape(u);};function wt_decoder(u){var tmp=unescape(u);if(document.layers)return wt_escape(tmp);if(document.getElementById){eval("try {tmp=decodeURIComponent(u);}catch(e){};");}else{tmp=decodeURIComponent(u);};return wt_escape(tmp);};function wt_encoding(){var tmp="";if(typeof(encodeURIComponent)!='function')tmp+="&enc0=old";tmp+="&enc1=¸&enc2="
if(document.characterSet)tmp+=document.characterSet.toLowerCase();if(document.charset)tmp+=document.charset.toLowerCase();return tmp;};function wt_crypt(t){var org="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";var rep="NOPQRSTUVWXYZABCDEFGHIJKLM5678901234";t=t.replace(new RegExp("[A-Z]|[a-z]|[0-9]","gi"),function($1){var sp=new RegExp("[A-Z]","g");var pos=org.indexOf($1.toUpperCase());if(sp.test($1)){return rep.charAt(pos);}else{return rep.charAt(pos).toLowerCase();}});return t;};function wt_decrypt(x){if(x){return eval("try {wt_unescape(x.replace(/([0-9a-fA-F][0-9a-fA-F])/g,'%$1'));}catch(e){''};");}};function wt_encrypt(x){var str='';for(var i=0;i<x.length;i++){if(x.charCodeAt(i)<255){str+=x.charCodeAt(i).toString(16);}else{eval("try {str += encodeURIComponent(x[i]).replace(/%/g,'');}catch(e){};");}};return str;};function wt_checkSC(x){if(typeof(webtrekk.secureConfig)!='string'){return false;};var sc=webtrekk.secureConfig.split(';');for(var i=0;i<sc.length;i++){if(sc[i]==x)return true;};return false;};function wt_zeroPad(n,countZeros){var result=n+'';return "000000000000".substring(0,(countZeros-result.length))+result;};function wt_sid(){return '2'+wt_zeroPad(Math.floor(new Date().getTime()/1000),10)+wt_zeroPad(Math.floor(Math.random()*1000000),8);};function wt_getexpirydate(mins){var UTCstring;var Today=new Date();var nomilli=Date.parse(Today);Today.setTime(nomilli+mins*60*1000);UTCstring=Today.toUTCString();return UTCstring;};function wt_setCookie(name,value,duration){var d=location.hostname;var dReg="^[0-9]{1,3"+String.fromCharCode(125)+"\.[0-9]{1,3"+String.fromCharCode(125)+"\.[0-9]{1,3"+String.fromCharCode(125)+"\.[0-9]{1,3"+String.fromCharCode(125)+"$";if(d.search(dReg)==-1){d=location.hostname.split(".");d=d[d.length-2]+"."+d[d.length-1];};var c;if(duration)c=name+"="+escape(value)+";domain="+d+";path=/;expires="+wt_getexpirydate(duration);else c=name+"="+escape(value)+";path=/;domain="+d;document.cookie=c;};function wt_getCookie(cookiename){var cookiestring=""+document.cookie;var index1=cookiestring.indexOf(cookiename);if(index1==-1||cookiename=="")return "";var index2=cookiestring.indexOf(';',index1);if(index2==-1)index2=cookiestring.length;return unescape(cookiestring.substring(index1+cookiename.length+1,index2));};var wt_getSetFlashCookie={elmToReplace:null,install:function(elmToReplace,src,id,params){if(!this.checkVersion()){return;};this.elmToReplace=document.getElementById(elmToReplace);if(this.elmToReplace){var posY=document.body.scrollTop;if(posY=='undefined'){posY=document.documentElement.scrollTop;};var obj='<objectdisabled style="z-index:10000;position:absolute;left:1px;top:'+(posY+1)+'px;"'+((window.ActiveXObject)?' id="'+id+'" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" data="'+src+'"':'');obj+=' width=1';obj+=' height=1';obj+='>';var param='<param';param+=' name="movie"';param+=' value="'+src+'"';param+='>';param+='';var extraParams='';var extraAttributes='';for(var i in params){extraParams+='<param name="'+i+'" value="'+params[i]+'">';extraAttributes+=' '+i+'="'+params[i]+'"';};var embed='<embeddisabled style="z-index:10000;position:absolute;left:1px;top:'+(posY+1)+'px;" id="'+id+'" src="'+src+'" type="application/x-shockwave-flash" width="1" height="1"';var embedEnd=extraAttributes+'></embed>';var objEnd='</object>';this.elmToReplace.innerHTML=obj+param+extraParams+embed+embedEnd+objEnd;}},checkVersion:function(){this.flashIsInstalled=false;var flash;if(window.ActiveXObject){try{flash=new ActiveXObject(("ShockwaveFlash.ShockwaveFlash"));this.flashIsInstalled=true;}catch(e){}}else if(navigator.plugins&&navigator.mimeTypes.length>0){if(navigator.plugins["Shockwave Flash"]){this.flashIsInstalled=true;}};return this.flashIsInstalled;}};function wt_flashCookie_callback(val){if(!val){return;};val=val.replace(/\s/g,'');val=val.split(',');wt_cookie_sid=val[0];wt_cookie_eid=val[2];wt_sampleCookieString=false;if(val[4]=="0"){wt_deactivatePixel=true;wt_sampleCookieString="0|"+val[6];};if(val[4]=="1"){wt_deactivatePixel=false;wt_sampleCookieString="1|"+val[6];};if(val[1]=='true'){wt_cookie_one=true;}else{wt_cookie_one=false;};if(wt_sampleCookieString){wt_setCookie("wt_sr",wt_sampleCookieString,webtrekk.cookieEidTimeout*30*24*60);};wt_setCookie("wt_eid",wt_cookie_eid,webtrekk.cookieEidTimeout*30*24*60);wt_setCookie("wt_sid",wt_cookie_sid);wt_isFlashCookie="1";wt_1stPartySet="1";};function wt_flashCookie(fc_name,sid,sid_timeout,eid,eid_timeout,l_v,sampling,sampling_rate){if(!document.createElement){return false;};var html_doc=document.getElementsByTagName('body').item(0);if(document.all&&html_doc.document.readyState=="interactive"){}else{var div=document.createElement('div');div.setAttribute('id','wt_flashdiv');html_doc.appendChild(div);if(document.getElementById&&document.getElementById("wt_flashdiv")){wt_getSetFlashCookie.install("wt_flashdiv",wt_getWebtrekkPath()+"flash_pixel.swf","wt__fc",{flashvars:"action=getset&name="+fc_name+"&script=wt_flashCookie_callback&sid="+sid+"&sid_timeout="+sid_timeout+"&eid="+eid+"&eid_timeout="+eid_timeout+"&l_v="+l_v+"&sampling="+sampling+"&sampling_rate="+sampling_rate+"&path=/",name:fc_name,wmode:"transparent",quality:"low",bgcolor:"#ffffff"});}}};function wt_urlParam(url,param,def){var p=new Array();if(url.indexOf("?")>0)p=url.substring(url.indexOf("?")+1).replace(/&amp;/g,"&").split("&");for(var i=0;i<p.length;i++){if(p[i].indexOf(param+"=")==0){return wt_unescape(p[i].substring(param.length+1).replace(/\+/g,"%20"));}};return def;};function wt_allUrlParam(param,def){if(wt_typeof(webtrekk.mediaCodeFrames)&&webtrekk.mediaCodeFrames!=''){var lf=webtrekk.mediaCodeFrames.split(";");for(var i=0;i<lf.length;i++){var lFrame=eval(lf[i]);if(lFrame&&lFrame!=top&&lFrame.location){var def2=wt_urlParam(lFrame.location.href,param,def);if(def2!=def){return def2;}}};return def;}else{var topLocation="";eval("try {topLocation = top.location.href;}catch(e){topLocation=document.location.href;};");return wt_urlParam(topLocation,param,def);}};var wt_linktrack_p="";var wt_linktrack_namedlinks_only;if(webtrekk.linkTrack=="auto"){webtrekk.linkTrack="link";};if(webtrekk.linkTrack=="link"){wt_linktrack_namedlinks_only=false;}else{wt_linktrack_namedlinks_only=true;};if(webtrekk.linkTrack){wt_registerEvent(window,"loaddisabled",wt_ltinstall);};function wt_ltinstall(){for(c=0;c<document.links.length;c++){var name=document.links[c].getAttribute('name');if(wt_typeof(webtrekk.linkTrackAttribute)&&webtrekk.linkTrackAttribute!=""){var tmp="";eval("tmp = (document.links[c].getAttribute(webtrekk.linkTrackAttribute)?document.links[c].getAttribute(webtrekk.linkTrackAttribute):'')");if(tmp)name=tmp;};if(name||!wt_linktrack_namedlinks_only){wt_registerEvent(document.links[c],'mousedown',wt_linktrack);}}};function wt_linktrack(e){if((e.which&&e.which==1)||(e.button&&e.button==1)){var a=document.all?window.event.srcElement:this;for(var i=0;i<4;i++){if(a.tagName&&a.tagName.toLowerCase()!="a"&&a.tagName.toLowerCase()!="area"){a=a.parentElement}};a.lname=(a.name?a.name:"");wt_getCCParams(a);if(wt_typeof(webtrekk.linkTrackAttribute)&&webtrekk.linkTrackAttribute!=""){var tmp="";eval("tmp = (a.getAttribute(webtrekk.linkTrackAttribute)?a.getAttribute(webtrekk.linkTrackAttribute):'')");if(tmp)a.lname=tmp;};a.lpos=0;if(!wt_length(a.lpos)&&a.tagName){c=document.links;for(d=0;d<wt_length(c);d++){if(a==c[d]){a.lpos=d+1;break}}};if(a.lpos){if(webtrekk.linkTrack=="link"){var y=a.href.indexOf("//");var y=(y>=0?a.href.substr(y+2):a.href);if(wt_typeof(webtrekk.linkTrackPattern)){if(typeof(webtrekk.linkTrackReplace)!='string')webtrekk.linkTrackReplace="";y=y.replace(webtrekk.linkTrackPattern,webtrekk.linkTrackReplace);};wt_linktrack_p=(a.lname?(a.lname+"."):"")+y.split("?")[0].replace(/\//g,".");var p="";if(wt_typeof(webtrekk.linkTrackParams)){p=webtrekk.linkTrackParams.replace(/;/g,",").split(",");};for(var i=0;i<p.length;i++){var v=wt_urlParam(y,p[i],"");if(v)wt_linktrack_p+="."+p[i]+"."+v;}}else if(webtrekk.linkTrack=="standard"&&a.lname)wt_linktrack_p=a.lname;if(wt_linktrack_p&&a.target!=""&&a.target!="_self"){wt_unloaddisabled('noForm');}}}};function wt_getCCParams(a){var ccParams='';var p='';if(typeof(webtrekk.customClickParameter)=='object'){if(typeof(webtrekk.customClickParameter[a.name])=='string')ccParams=webtrekk.customClickParameter[a.name];if(typeof(webtrekk.customClickParameter[a.id])=='string')ccParams=webtrekk.customClickParameter[a.id];};if(ccParams){ccParams=ccParams.split(/;/);for(var z=0;z<ccParams.length;z++){if(wt_typeof(ccParams[z])){var wtep=ccParams[z].split(/=/);if(wt_checkSC('custom')){wtep[1]=wt_decrypt(wtep[1]);};wtep[1]=wt_escape(wtep[1]);p+='&'+wtep[0]+'='+wtep[1];}}};wt_ccParams=p;return;};var wt_gatherforms_p="";var wt_form=null;var wt_form_focus="";var wt_form_submit=false;if(webtrekk.form){wt_registerEvent(window,"loaddisabled",wt_ftinstall);};function wt_ftinstall(){wt_findform();if(!wt_form)return;for(var j=0;j<wt_form.elements.length;j++){var e=wt_form.elements[j];wt_registerEvent(e,"focus",wt_formfocus);};wt_registerEvent(wt_form,"submit",wt_formsubmit);};function wt_findform(){wt_form=null;var f=document.forms;for(var i=0;i<f.length;i++){var cf=f[i];if(wt_typeof(cf.elements["wt_form"])){wt_form=cf;return;}}};function wt_formsubmit(){wt_form_submit=true;};function wt_formfocus(e){var a=document.all?window.event.srcElement:e.target;if(!a.name||a.type=="submit"||a.type=="image")return;var f=wt_form.getAttribute('name')?wt_form.getAttribute('name'):webtrekk.contentId.split(";")[0];if(wt_typeof(webtrekk.formAttribute)&&webtrekk.formAttribute!=''){var tmp="";eval("tmp = (wt_form.getAttribute(webtrekk.formAttribute)?wt_form.getAttribute(webtrekk.formAttribute):'')");if(tmp)f=tmp;};wt_form_focus=a.name;};function wt_checkFormFocus(ffname){if(ffname==wt_form_focus)return 1;return 0;};function wt_getFormFieldValue(ff){var p=ff.name;if(wt_typeof(webtrekk.formFieldAttribute)&&webtrekk.formFieldAttribute!=''){p='';var tmp=false;eval("tmp = (ff.getAttribute(webtrekk.formFieldAttribute)?ff.getAttribute(webtrekk.formFieldAttribute):'')");if(tmp)p=tmp;};if(p)p=p.replace(/[\.|;]/g,"_");return p;};function wt_gatherForm(){var del=";";if(!wt_form)return;var f=wt_form;var p=wt_form.getAttribute('name')?wt_form.getAttribute('name'):webtrekk.contentId.split(";")[0];if(wt_typeof(webtrekk.formAttribute)&&webtrekk.formAttribute!=''){var tmp="";eval("tmp = (f.getAttribute(webtrekk.formAttribute)?f.getAttribute(webtrekk.formAttribute):'')");if(tmp)p=tmp;};var fl="";if(wt_typeof(f.elements["wt_fields"]))fl=f.elements["wt_fields"].value;if(!fl){for(var i=0;i<f.elements.length;i++){var e=f.elements[i];if(wt_getFormFieldValue(e))fl+=wt_getFormFieldValue(e)+del;};fl=fl.substring(0,fl.lastIndexOf(del))};var fields=fl.split(del);var fields_length=fields.length;var full_fields="";if(typeof(webtrekk.formFullContent)=='string'){full_fields=webtrekk.formFullContent.split(del);};var pa="";var emptyradios=new Array();for(var i=0;i<f.elements.length;i++){var e=f.elements[i],value,value2,use=false;if(fl){for(var j=0;j<fields_length;j++)if(wt_getFormFieldValue(e)==fields[j])use=true;}else{if(wt_getFormFieldValue(e))use=true;};if(use){value=null;if(e.type=='select-multiple'){for(var j=0;j<e.options.length;j++){var found=false;if(e.options[j].selected){found=true;pa+=";"+p+".select-multiple."+wt_getFormFieldValue(e).replace(/[\.|;]/g,"_")+"."+e.options[j].value.replace(/[\.|;]/g,"_");};if(!found)value="empty";}};if(e.type=='select-one'){if(e.selectedIndex!=-1){value=e.options[e.selectedIndex].value.replace(/[\.|;]/,"_");if(!value)value="empty";}};if(e.type=='checkbox'){if(!e.checked)value="empty";else value=e.value.replace(/[\.|;]/,"_");};if(e.type=='radio'){if(e.checked)value=e.value.replace(/[\.|;]/g,"_");emptyradios[emptyradios.length]=wt_getFormFieldValue(e);};if(e.type=="password"||e.type=="text"||e.type=="textarea"){value=(e.value?"filled_out":"empty");for(var k=0;k<full_fields.length;k++)if(full_fields[k]==wt_getFormFieldValue(e))value=wt_maxlen(e.value,30);if(!value)value="empty";};if(value){name=wt_getFormFieldValue(e).replace(/[\.|;]/g,"_");value2=";"+name+"."+e.type+"|";if(pa.indexOf(value2)==-1)pa+=value2+(typeof(webtrekk.formAnonymous)=="string"?"anon":value)+"|"+wt_checkFormFocus(e.name);}}};for(var i=0;i<emptyradios.length;i++){var n=";"+emptyradios[i].replace(/[\.|;]/g,"_")+".radio|";if(pa.indexOf(n)==-1)pa+=n+(typeof(webtrekk.formAnonymous)=="string"?"anon":"empty")+"|"+wt_checkFormFocus(e.name);};if(pa){pa=pa.substring(1);};return pa;};if(webtrekk.form||webtrekk.linkTrack){wt_registerEvent(window,(wt_browserNameIE&&wt_typeof(window.onbeforeunloaddisabled))?"beforeunloaddisabled":"unloaddisabled",wt_unloaddisabled);};function wt_unloaddisabled(sendForm){if(wt_form&&sendForm!='noForm')wt_gatherforms_p=wt_gatherForm();var p="";if(wt_linktrack_p)p+="&ct="+wt_escape(wt_maxlen(wt_linktrack_p,255));if(wt_gatherforms_p){p+="&fn="+(wt_form.getAttribute('name')?wt_form.getAttribute('name'):webtrekk.contentId.split(";")[0])+'|'+(wt_form_submit?"1":"0");p+="&ft="+wt_escape(wt_gatherforms_p);};if(p){if(typeof(wt_ep)=='string'&&wt_ep!=''){wt_ep=wt_ep.split(/;/);for(var z=0;z<wt_ep.length;z++){if(wt_typeof(wt_ep[z])){wtep=wt_ep[z].split(/=/);if(wt_checkSC('custom')){wtep[1]=wt_decrypt(wtep[1]);};wtep[1]=wt_escape(wtep[1]);p+='&'+wtep[0]+'='+wtep[1];}}};if(typeof(wt_ccParams)=='string'&&wt_ccParams!='')p+=wt_ccParams;wt_quicksend(wt_escape(webtrekk.contentId.split(";")[0])+",1,"+wt_baseparams(),p+wt_encoding());wt_linktrack_p="";wt_gatherforms_p="";}};function wt_isOwnDomain(l){var pt='';if(wt_typeof(webtrekk.domain)&&webtrekk.domain!=""){if(webtrekk.domain.toUpperCase().indexOf("REGEXP:")==0){pt=new RegExp(webtrekk.domain.substring(7),"i");if(pt.test(wt_getDomain(l))){return true;}}else{var domains=webtrekk.domain.split(';');var xHost=wt_getDomain(l);for(var i=0;i<domains.length;i++){if(xHost==domains[i]){return true;}}}}else{return false;};return false;};function wt_getDomain(l){if(typeof(l)!="string"){return '';};l=wt_unescape(l);var rx=new RegExp('http:/'+'/','i');l=l.replace(rx,'');var rx=new RegExp('^(?:[^\/]+:\/\/)?([^\/:]+)','g');l=l.match(rx);if(l[0]){return l[0].toLowerCase();};return '';};if(typeof(time_start)=="number"&&typeof(webtrekk.contentId)=="string"&&!document.layers){var time_stop=(new Date()).getTime();wt_registerEvent(window,"loaddisabled",wt_ttonloaddisabled);};function wt_ttonloaddisabled(){if(typeof(time_start)=="number"){wt_t1=time_stop-time_start;var time_stop2=new Date().getTime();wt_t2=time_stop2-time_start;wt_send();time_start="";wt_t1="";wt_t2="";}};if(webtrekk.mediaCode){var m=webtrekk.mediaCode.split(";");var v='';if(typeof(webtrekk.mediaCodeValue)=='string'){v=webtrekk.mediaCodeValue.split(";");};wt_mcvalue="";for(var i=0;i<m.length;i++){if(wt_mcvalue!="")wt_mcvalue+="|";if(wt_typeof(v[i])&&v[i]!=''){if(typeof(webtrekk.mediaCodeCookie)=='string'&&webtrekk.mediaCodeCookie!=''){if(wt_getCookie('wt_'+m[i].toLowerCase()+v[i].toLowerCase())==''){wt_mcvalue+=v[i];};var tmp_lt='';if(webtrekk.mediaCodeCookie=='eid'){tmp_lt=60*30*24*60;};wt_setCookie('wt_'+m[i].toLowerCase()+v[i].toLowerCase(),1,tmp_lt);}else{wt_mcvalue+=v[i];}}else{if(typeof(webtrekk.mediaCodeCookie)=='string'&&webtrekk.mediaCodeCookie!=''){if(wt_getCookie('wt_'+m[i].toLowerCase()+wt_allUrlParam(m[i],"").toLowerCase())==''){wt_mcvalue+=wt_allUrlParam(m[i],"");};var tmp_lt='';if(webtrekk.mediaCodeCookie=='eid'){tmp_lt=60*30*24*60;};wt_setCookie('wt_'+m[i].toLowerCase()+wt_allUrlParam(m[i],"").toLowerCase(),1,tmp_lt);}else{wt_mcvalue+=wt_allUrlParam(m[i],"");}}}};wt_tmp=wt_allUrlParam("wt_kw","");if(wt_tmp!="")webtrekk.keyword=wt_tmp;if(typeof(webtrekk.heatmap)!="undefined"&&webtrekk.heatmap=="1"){wt_registerEvent(window,"loaddisabled",wt_hminstall);};function wt_hminstall(){wt_registerEvent(document,"mousedown",wt_recordClick);};function wt_recordClick(e){if(typeof(wt_refpoint_id)!='string'){wt_refpoint_id='wt_refpoint';}else{if(wt_refpoint_id==''){wt_refpoint_id='wt_refpoint';}};var isOpera=(navigator.userAgent.indexOf('Opera')!=-1);var isIE=(!isOpera&&navigator.userAgent.indexOf('MSIE')!=-1);var pos={left:-1,top:-1};if(document.getElementById(wt_refpoint_id)){var obj=document.getElementById(wt_refpoint_id);if(wt_typeof(obj.offsetLeft)){while(obj){pos.left+=obj.offsetLeft;pos.top+=obj.offsetTop;obj=obj.offsetParent;}}};var posx=0;var posy=0;if(!e){var e=window.event;};if(e.pageX||e.pageY){posx=e.pageX;posy=e.pageY;}else if(e.clientX||e.clientY){posx=e.clientX;posy=e.clientY;if(isIE){if(document.body.scrollLeft>0||document.body.scrollTop>0){posx+=document.body.scrollLeft;posy+=document.body.scrollTop;}else if(document.documentElement.scrollLeft>0||document.documentElement.scrollTop>0){posx+=document.documentElement.scrollLeft;posy+=document.documentElement.scrollTop;}}};var width1=0;if(isIE){width1=document.body.clientWidth;}else{width1=self.innerWidth-16;};var sendPixel=true;if(posx>=width1||wt_sentFullPixel!=1){sendPixel=false;};if((pos.top>=0||pos.left>=0)&&posx>pos.left&&posy>pos.top){posx='-'+(posx-pos.left);posy='-'+(posy-pos.top);};if(sendPixel)wt_quicksend(wt_escape(webtrekk.contentId.split(";")[0])+","+posx+","+posy,'',"hm.pl");};var wt_heatmap_on=(wt_href().indexOf("wt_heatmap=1")>=0);function wt_heatmap0(){if(typeof(wt_heatmap)!="undefined"){window.setTimeout("wt_heatmap()",1000);}else{if(typeof(wt_heatmap_retry)=="undefined")wt_heatmap_retry=0;wt_heatmap_retry++;if(wt_heatmap_retry<60)window.setTimeout("wt_heatmap0()",1000);}};if(wt_href().indexOf("wt_heatmap=0")>=0){wt_heatmap_on=false;};if(wt_heatmap_on){if(typeof(webtrekk.reporturl)=="undefined"||webtrekk.reporturl==''){webtrekk.reporturl='report2.webtrekk.de/cgi-bin/wt';};if(wt_include(location.protocol+"//"+webtrekk.reporturl+"/heatmap.pl?wt_contentId="+wt_escape(webtrekk.contentId.split(";")[0])+"&x="+new Date().getTime()+wt_encoding()))if(navigator.userAgent.indexOf('MSIE 6')!=-1&&navigator.userAgent.indexOf('Windows NT 5.0')!=-1){alert("Click OK to start heatmap.");};wt_registerEvent(window,"loaddisabled",wt_heatmap0);};function wt_overlay0(){if(typeof(wt_overlay)!="undefined")wt_overlay();else{if(typeof(wt_overlay_retry)=="undefined")wt_overlay_retry=0;wt_overlay_retry++;if(wt_overlay_retry<60)window.setTimeout("wt_overlay0()",1000);}};var wt_overlay_on=(wt_href().indexOf("wt_overlay=1")>=0||document.cookie.indexOf("wt_overlay=1")>=0);if(wt_href().indexOf("wt_overlay=0")>=0){wt_overlay_on=false;document.cookie="wt_overlay=0; expires=Thu, 01-Jan-70 00:00:01 GMT;";};if(wt_overlay_on){document.cookie="wt_overlay=1";if(typeof(webtrekk.reporturl)=="undefined"||webtrekk.reporturl==''){webtrekk.reporturl='report2.webtrekk.de/cgi-bin/wt';};if(wt_include(location.protocol+"//"+webtrekk.reporturl+"/overlay.pl?wt_contentId="+wt_escape(webtrekk.contentId.split(";")[0])+"&x="+new Date().getTime()+wt_encoding()))wt_registerEvent(window,"loaddisabled",wt_overlay0);};if(wt_typeof(webtrekk.pixelSampling)&&webtrekk.pixelSampling!=''){if(wt_getCookie("wt_sample")){wt_setCookie("wt_sample","",-1000);wt_setCookie("wt_seid","",-1000);};wt_pixelSampling();};function wt_1stParty(){wt_cookie_one=false;wt_cookie_sid=wt_getCookie("wt_sid");wt_cookie_l_v=wt_getCookie("wt_l_v");wt_cookie_eid=wt_getCookie("wt_eid");if(!webtrekk.cookieEidTimeout){webtrekk.cookieEidTimeout=60;};if(!webtrekk.cookieSidTimeout){webtrekk.cookieSidTimeout=30;};var tmp=parseInt(wt_cookie_l_v);var tmp2=Math.floor(new Date().getTime()/1000);if(tmp>0&&(tmp+webtrekk.cookieSidTimeout*60)<tmp2){wt_cookie_sid="";};if(!wt_cookie_sid){wt_cookie_sid=wt_sid();wt_cookie_one=true;};if(!wt_cookie_eid){wt_cookie_eid=wt_cookie_sid;wt_setCookie("wt_eid",wt_cookie_eid,webtrekk.cookieEidTimeout*30*24*60);};wt_cookie_l_v=tmp2;wt_setCookie("wt_l_v",wt_cookie_l_v);wt_setCookie("wt_sid",wt_cookie_sid);};if(webtrekk.cookie=="1"){wt_1stParty();if(wt_typeof(webtrekk.cookieFlash)&&webtrekk.cookieFlash=="1"){if(!webtrekk.pixelSampling){webtrekk.pixelSampling="";};wt_flashCookie("wt_flashdiv",wt_cookie_sid,(webtrekk.cookieSidTimeout*60),wt_cookie_eid,(webtrekk.cookieEidTimeout*30*24*60),wt_cookie_l_v,wt_sampleValue,webtrekk.pixelSampling);wt_1stPartyCheck();}else{wt_1stPartySet="1";}};function wt_1stPartyCheck(){if(!wt_typeof(webtrekk.cookieFlashTimeout)||webtrekk.cookieFlashTimeout==''){webtrekk.cookieFlashTimeout=1000;};if(wt_isFlashCookie!="1"&&wt_1st_party_checked!="1"){wt_1st_party_checked="1";window.setTimeout("wt_1stPartyCheck()",webtrekk.cookieFlashTimeout);}else if(wt_1st_party_checked=="1"&&wt_isFlashCookie=="1"){return;}else{wt_1stPartySet="1";}};function wt_pixelSampling(){var wt_cookie_sampling=wt_getCookie("wt_sr");if(!wt_cookie_sampling||wt_indexOf(wt_cookie_sampling,"|"+webtrekk.pixelSampling)==-1){wt_cookie_sampling="0|"+webtrekk.pixelSampling;if(Math&&Math.random&&parseInt(Math.random()*webtrekk.pixelSampling)==0){wt_cookie_sampling="1|"+webtrekk.pixelSampling;};if(!webtrekk.cookieEidTimeout){webtrekk.cookieEidTimeout=60;};wt_setCookie("wt_sr",wt_cookie_sampling,webtrekk.cookieEidTimeout*30*24*60);wt_cookie_sampling=wt_getCookie("wt_sr");};wt_sampleValue="1";if(wt_indexOf(wt_cookie_sampling,"1|")==-1){wt_deactivatePixel=true;wt_sampleValue="0";}};function wt_sendinfo(p,mode,ep){if(wt_typeof(webtrekk.cookieFlash)&&webtrekk.cookieFlash=="1"&&webtrekk.cookie=="1"){if((typeof(time_start)!="number"&&(webtrekk.contentId!=""||p!=""))||document.layers){if(wt_1stPartySet=="1"){wt_send(p,mode,ep);}else{if(!wt_typeof(p)){p='';};if(!wt_typeof(mode)){mode='';};if(!wt_typeof(ep)){ep='';};window.setTimeout("wt_sendinfo('"+p+"','"+mode+"','"+ep+"')",20);}}}else{if((typeof(time_start)!="number"&&(webtrekk.contentId!=""||p!=""))||document.layers)wt_send(p,mode,ep);}};function wt_quicksend(baseparams,params,script){if(!webtrekk.trackDomain||!webtrekk.trackId||wt_deactivatePixel){return;};if(!script)script="wt.pl";if(webtrekk.cookie=="1"||wt_1stPartySet=="1"){params="&sid="+wt_cookie_sid+"&l_v="+wt_cookie_l_v+"&eid="+wt_cookie_eid+"&one="+(wt_cookie_one?"1":"0")+params;};if(webtrekk.cookie!="1"&&wt_1stPartySet!="1"&&(wt_typeof(webtrekk.cookieEidTimeout)||wt_typeof(webtrekk.cookieSidTimeout))){if(wt_typeof(webtrekk.cookieEidTimeout)&&webtrekk.cookieEidTimeout!=''){params="&cet="+webtrekk.cookieEidTimeout+params;};if(wt_typeof(webtrekk.cookieSidTimeout)&&webtrekk.cookieSidTimeout!=''){params="&cst="+webtrekk.cookieSidTimeout+params;}};if(webtrekk.pixelSampling>0){params+="&ps="+webtrekk.pixelSampling;};params="&tz="+wt_getTimezone()+params;var protocol=(location.protocol=="httpdisabledsdisabled:"?"httpdisabledsdisabled:":"httpdisabled:");if(webtrekk.forceHTTPS){protocol="httpdisabledsdisabled:";};var wt_url=protocol+"//"+webtrekk.trackDomain+"/"+webtrekk.trackId+"/"+script+"?p="+wt_version+","+baseparams+params;if(document.images){if(!wt_typeof(wt_i)){var wt_i=new Array();};var ii=wt_i.length;wt_i[ii]=new Image();wt_i[ii].src=wt_url;wt_i[ii].onloaddisabled=function(){};}else{void("<img src='"+wt_url+"' height='1' width='1'>");};if(script!='hm.pl'){wt_cookie_one=false;wt_sentFullPixel=1;}};function wt_baseparams(){var wt_c=screen.width+"x"+screen.height+","+(navigator.appName!='Netscape'?screen.colorDepth:screen.pixelDepth)+",";wt_c+=((navigator.cookieEnabled==true)?"1,":((navigator.cookieEnabled==false)?"0,":((document.cookie.indexOf("=")!=-1)?"1,":"0,")));wt_c+=new Date().getTime()+",";var wt_ref=0;if(webtrekk.framesetReferrer){wt_ref=wt_escape(webtrekk.framesetReferrer);}else{if(document.referrer.length>0){wt_ref=wt_decoder(document.referrer);}};if(wt_sentFullPixel==1){wt_c+="2";}else if(!wt_isOwnDomain(wt_ref)){wt_c+=wt_ref;}else if(wt_isOwnDomain(wt_ref)){wt_c+="1";}else{wt_c+=wt_ref;};var h=0;if(!document.layers&&document.getElementById){eval("try {h = top.window.innerHeight;}catch(e){};");}else{h=top.window.innerHeight;};if(!h)eval("try {h = top.document.body.clientHeight;}catch(e){};");if(!h)eval("try {h = top.document.documentElement.clientHeight;}catch(e){};");var w=0;if(!document.layers&&document.getElementById){eval("try {w = top.window.innerWidth;}catch(e){};");}else{w=top.window.innerWidth;};if(!w)eval("try {w = top.document.body.clientWidth;}catch(e){};");if(typeof(w)=='undefined')w=-1;if(typeof(h)=='undefined')h=-1;wt_c+=","+w+"x"+h;wt_c+=","+(navigator.javaEnabled()?"1":"0");return wt_c;};function wt_plugInArray(arr,val){if(typeof(arr)!='object')return false;for(var i=0;i<arr.length;i++){var reg=new RegExp(arr[i].toLowerCase(),'g');if(val.toLowerCase().search(reg)!=-1)return arr[i];};return false;};function wt_send(p,mode,ep){if(mode=="link"){wt_linktrack_p=p;webtrekk.linkTrack="manual";wt_ep=ep;wt_registerEvent(window,(wt_browserNameIE&&wt_typeof(window.onbeforeunloaddisabled))?"beforeunloaddisabled":"unloaddisabled",wt_unloaddisabled);return;};if(mode=="click"){wt_linktrack_p=p;wt_ep=ep;wt_unloaddisabled('noForm');return;};var wt_content=(p?p:webtrekk.contentId);if(!wt_content)wt_content="no_content";var wt_s_base=wt_escape(wt_content)+",1,";wt_s_base+=wt_baseparams();var wt_s=wt_encoding();var wt_la="";if(typeof(navigator.language)=="string"){wt_la=navigator.language;}else if(typeof(navigator.userLanguage)=="string"){wt_la=navigator.userLanguage;};if(typeof(webtrekk.plugins)!='string'||webtrekk.plugins==''){webtrekk.plugins=new Array('Adobe Acrobat','Windows Media Player','Shockwave Flash','RealPlayer','QuickTime','Java','Silverlight');}else{webtrekk.plugins=webtrekk.plugins.split(';');};var wt_len=navigator.plugins.length,wt_np="";if(wt_len>0){var wt_plugs=Array();var wt_np='';for(var i=0;i<wt_len;i++){if(navigator.plugins&&navigator.appName!='Microsoft Internet Explorer'){if(navigator.plugins[i].name=="Shockwave Flash"){wt_np=navigator.plugins[i].description;}else{wt_np=navigator.plugins[i].name;};var wt_plug=wt_plugInArray(webtrekk.plugins,wt_np);if(wt_plug&&!wt_plugInArray(wt_plugs,wt_plug)){wt_plugs.push(wt_plug);}}};wt_np=wt_plugs.join("|");};if(typeof(ep)=="string"&&ep!=""){ep=ep.split(/;/);for(var z=0;z<ep.length;z++){if(wt_typeof(ep[z])){wtep=ep[z].split(/=/);if(wt_checkSC('custom')){wtep[1]=wt_decrypt(wtep[1]);};wtep[1]=wt_escape(wtep[1]);wt_s+='&'+wtep[0]+'='+wtep[1];}}}else{var wt_cp='';if(typeof(webtrekk.customParameter)=='object'){for(var z=0;z<webtrekk.customParameter.length;z++){if(wt_typeof(webtrekk.customParameter[z])&&typeof(webtrekk.customParameter[z])=='string'&&webtrekk.customParameter[z]!=''){if(wt_checkSC('custom')){webtrekk.customParameter[z]=wt_decrypt(webtrekk.customParameter[z]);};wt_cp+='&cp'+z+'='+wt_escape(webtrekk.customParameter[z]);}}};var wt_csp='';if(typeof(webtrekk.customSessionParameter)=='object'){for(var z=0;z<webtrekk.customSessionParameter.length;z++){if(wt_typeof(webtrekk.customSessionParameter[z])&&typeof(webtrekk.customSessionParameter[z])=='string'&&webtrekk.customSessionParameter[z]!=''){if(wt_checkSC('custom')){webtrekk.customSessionParameter[z]=wt_decrypt(webtrekk.customSessionParameter[z]);};wt_csp+='&cs'+z+'='+wt_escape(webtrekk.customSessionParameter[z]);}}};var wt_ce='';if(typeof(webtrekk.customTimeParameter)=='object'){for(var z=0;z<webtrekk.customTimeParameter.length;z++){if(wt_typeof(webtrekk.customTimeParameter[z])&&typeof(webtrekk.customTimeParameter[z])=='string'&&webtrekk.customTimeParameter[z]!=''){if(wt_checkSC('custom')){webtrekk.customTimeParameter[z]=wt_decrypt(webtrekk.customTimeParameter[z]);};wt_ce+='&ce'+z+'='+wt_escape(webtrekk.customTimeParameter[z]);}}};var wt_cc='';if(typeof(webtrekk.customCampaignParameter)=='object'){for(var z=0;z<webtrekk.customCampaignParameter.length;z++){if(wt_typeof(webtrekk.customCampaignParameter[z])&&typeof(webtrekk.customCampaignParameter[z])=='string'&&webtrekk.customCampaignParameter[z]!=''){if(wt_checkSC('custom')){webtrekk.customCampaignParameter[z]=wt_decrypt(webtrekk.customCampaignParameter[z]);};wt_cc+='&cc'+z+'='+wt_escape(webtrekk.customCampaignParameter[z]);}}};var wt_cm='';if(typeof(webtrekk.customEcommerceParameter)=='object'){for(var z=0;z<webtrekk.customEcommerceParameter.length;z++){if(wt_typeof(webtrekk.customEcommerceParameter[z])&&typeof(webtrekk.customEcommerceParameter[z])=='string'&&webtrekk.customEcommerceParameter[z]!=''){if(wt_checkSC('custom')){webtrekk.customEcommerceParameter[z]=wt_decrypt(webtrekk.customEcommerceParameter[z]);};wt_cm+='&cm'+z+'='+wt_escape(webtrekk.customEcommerceParameter[z]);}}};if(webtrekk.orderValue){if(wt_checkSC('order')){wt_s+="&ov="+wt_escape(wt_decrypt(webtrekk.orderValue));}else{wt_s+="&ov="+wt_escape(webtrekk.orderValue);}};if(webtrekk.orderCurrency){if(wt_checkSC('order')){wt_s+="&cr="+wt_escape(wt_decrypt(webtrekk.orderCurrency));}else{wt_s+="&cr="+wt_escape(webtrekk.orderCurrency);}};if(webtrekk.orderId)wt_s+="&oi="+wt_escape(webtrekk.orderId);if(webtrekk.product){wt_s+="&ba="+wt_escape(webtrekk.product);if(webtrekk.productCost)wt_s+="&co="+wt_escape(webtrekk.productCost);if(webtrekk.productQuantity)wt_s+="&qn="+wt_escape(webtrekk.productQuantity);if(typeof(webtrekk.productCategory)=='object'){for(var bcId in webtrekk.productCategory){if(typeof(webtrekk.productCategory[bcId])=='string'&&webtrekk.productCategory[bcId]!=''){wt_s+="&ca"+bcId+"="+wt_escape(webtrekk.productCategory[bcId]);}}};if(typeof(webtrekk.productParameter)=='object'){for(var bp in webtrekk.productParameter){if(typeof(webtrekk.productParameter[bp])=='string'&&webtrekk.productParameter[bp]!=''){wt_s+="&cb"+bp+"="+wt_escape(webtrekk.productParameter[bp]);}}};if(webtrekk.productStatus)wt_s+="&st="+wt_escape(webtrekk.productStatus);};if(webtrekk.customerId)wt_s+="&cd="+wt_escape(webtrekk.customerId);if(wt_t1)wt_s+="&t1="+wt_escape(wt_t1);if(wt_t2)wt_s+="&t2="+wt_escape(wt_t2);if(wt_la)wt_s+="&la="+wt_escape(wt_la);if(typeof(webtrekk.contentGroup)=='object'){if(typeof(webtrekk.contentGroup[0])=='string'){if(webtrekk.contentGroup[0]!=''){wt_s+="&cg="+wt_escape(webtrekk.contentGroup[0]);}}else{for(var cgId in webtrekk.contentGroup){if(typeof(webtrekk.contentGroup[cgId])=='string'&&webtrekk.contentGroup[cgId]!=''){wt_s+="&cg"+cgId+"="+wt_escape(webtrekk.contentGroup[cgId]);}}}};if(wt_mcvalue)wt_s+="&mcv="+wt_escape(wt_mcvalue);if(wt_length(wt_mcvalue)){wt_s+="&mc="+webtrekk.mediaCode;wt_s+="&mcd="+wt_location().hostname;};if(webtrekk.parameter)wt_s+="&pa="+wt_escape(wt_maxlen(webtrekk.parameter,255));if(webtrekk.keyword)wt_s+="&kw="+wt_escape(wt_maxlen(webtrekk.keyword,255));if(webtrekk.internalSearch)wt_s+="&is="+wt_escape(wt_maxlen(webtrekk.internalSearch,255));if(wt_cp)wt_s+=wt_cp;if(wt_cc)wt_s+=wt_cc;if(wt_cm)wt_s+=wt_cm;if(wt_ce)wt_s+=wt_ce;if(wt_csp)wt_s+=wt_csp;if(wt_typeof(webtrekk.customSid)&&webtrekk.customSid!='')wt_s+="&csid="+webtrekk.customSid;if(wt_typeof(webtrekk.customEid)&&webtrekk.customEid!='')wt_s+="&ceid="+webtrekk.customEid;};if(webtrekk.cookie=="1"){if(wt_cookie_one)wt_s+="&np="+wt_escape(wt_np);}else{wt_s+="&np="+wt_escape(wt_np);};wt_quicksend(wt_s_base,wt_s);};if(webtrekk.sendinfo&&webtrekk.sendinfo=='1'){wt_sendinfo();};
/*webtrekkLinkTrackTeaserposition*/
function wt_linktrack(e){if((e.which&&e.which==1)||(e.button&&e.button==1)){var a=document.all?window.event.srcElement:this;for(var i=0;i<4;i++){if(a.tagName&&a.tagName.toLowerCase()!="a"&&a.tagName.toLowerCase()!="area"){a=a.parentElement}};a.lname=(a.name?a.name:"");wt_getCCParams(a);if(wt_typeof(webtrekk.linkTrackAttribute)&&webtrekk.linkTrackAttribute!=""){var tmp="";eval("tmp = (a.getAttribute(webtrekk.linkTrackAttribute)?a.getAttribute(webtrekk.linkTrackAttribute):'')");if(tmp)a.lname=tmp;};a.lpos=0;if(!wt_length(a.lpos)&&a.tagName){c=document.links;for(d=0;d<wt_length(c);d++){if(a==c[d]){a.lpos=d+1;break}}};if(a.lpos){if(webtrekk.linkTrack=="link"){var y=a.href.indexOf("//");var y=(y>=0?a.href.substr(y+2):a.href);if(wt_typeof(webtrekk.linkTrackPattern)){if(typeof(webtrekk.linkTrackReplace)!='string')webtrekk.linkTrackReplace="";y=y.replace(webtrekk.linkTrackPattern,webtrekk.linkTrackReplace);};wt_ep=(a.lname?("ck5="+a.lname+";"):false);wt_ep+=(a.href?("ck6="+a.href+";"):false);wt_ep+="ck7="+document.location.href;wt_linktrack_p=(a.lname?(a.lname+"."):"")+y.split("?")[0].replace(/\//g,".");var p="";if(wt_typeof(webtrekk.linkTrackParams)){p=webtrekk.linkTrackParams.replace(/;/g,",").split(",");};for(var i=0;i<p.length;i++){var v=wt_urlParam(y,p[i],"");if(v)wt_linktrack_p+="."+p[i]+"."+v;}}else if(webtrekk.linkTrack=="standard"&&a.lname)wt_linktrack_p=a.lname;if(wt_linktrack_p&&a.target!=""&&a.target!="_self"){wt_unloaddisabled('noForm');}}}}