var _SoAD_E=isIE=(navigator.plugins&&navigator.mimeTypes&&navigator.mimeTypes.length)?0:1,_S1,_S2,_S3,_S4,_S5,_S6,_S7,_S8,_S9,_A=_B=_X=_Y=0,_C,_D,_E,_F,_G,_H,_V,_W,LF=RF=0,_T1,_T2,_T3,_T4,_T5,_I=(isIE)?1:0.75,_J=(isIE)?"px":"pt",_SoAD_h=_K="<script type='text/javascript'",_SoAD_t=_L="</script>",_SoAD_Load=_N=false,_SoAD_S=_SoAD_R=_O=_P=new Array(),crsr=(isIE?"cursor:hand":"cursor:pointer")+";border-bottom:1px solid #000000;color:#000000;font-size:12px '????';",_SoAD_d=_M=(document.compatMode=="CSS1Compat")?document.documentElement:document.body,_R="http://images.sohu.com/cs/jsfile/img/",_S=_R+"bg.jpg",_T=_R+"r2.jpg",_U=_R+"r1.jpg";var isIE6=isIE&&([/MSIE (\d)\.0/i.exec(navigator.userAgent)][0][1]==6);var isNor=(document.location.href.indexOf("2.sohu.com")>=0);if(typeof (document.pv)=="undefined"){document.pv=new Array();}function imp(a,b){var _a=new Image();_a.src=a+"?a="+b;document.pv.push(_a);}function IsBig(){return (_M.clientWidth-cWidth)>240;}function IsPan(){return (screen.width-cWidth)>240;}function IsDe(a){return !(typeof (a)=="undefined");}function GetID(a){if(document.getElementById&&document.getElementById(a)){return document.getElementById(a);}else{if(document.all&&document.all(a)){return document.all(a);}else{if(document.layers&&document.layers[a]){return document.layers[a];}}}}function AttachEvent(a,b,c){if(isIE){a.attachEvent("on"+b,c);}else{a.addEventListener(b,c,false);}}function _SoAD_Paraminit(){switch(document.compatMode){case "BackCompat":_M=document.body;break;case "CSS1Compat":_M=document.documentElement;break;default:_M=document.body;}}function _SoAD_init(){if(!_M){_SoAD_Paraminit();}if(_N){return;}_N=!_N;_O.sort(function(a,b){return (a.p>b.p)?1:((a.p==b.p)?0:-1);});DoSchedule();}function _SoAD_exec(o){if(eval("typeof("+o.t+"_main)")=="function"){eval(o.t+"_main(o)");}}function AddSchedule(o){if(o&&o instanceof ADM){switch(o.t){case "FULL":case "BEITOU":if(o.src.length>0){_O.push(o);}break;case "FLOAT":if(o.src||o.src2){_O.push(o);}break;case "LIUMEITI":if(o.src){_O.push(o);}break;case "COUPLET":if(o.src.length>0||o.src2.length>0){_O.push(o);}break;default:_O.push(o);}}if(!isIE){void(_K+">function _"+o.id+"_DoFSCommand(command,args){_SoAD_DoFSCommand(command,args);}"+_L);}if(!isIE&&(!IsPan()||o.ext)){void(_K+">function _"+o.id+"TG_DoFSCommand(command,args){_SoAD_DoFSCommand(command,args);}"+_L);}if(!isIE&&IsDe(o.src2)){void(_K+">function _"+o.id+"2_DoFSCommand(command,args){_SoAD_DoFSCommand(command,args);}"+_L);}if(!isIE&&IsDe(o.src2)&&(!IsPan()||o.ext)){void(_K+">function _"+o.id+"2TG_DoFSCommand(command,args){_SoAD_DoFSCommand(command,args);}"+_L);}}function ADM(a,b){this.t=a;this.p=b;this.s=0;this.style="position:absolute;";this.id=a;this.id2=a+"2";}function DoSchedule(){var p=-1;for(var i=0;i<_O.length;i++){switch(_O[i].s){case 0:if(p==-1){p=_O[i].p;}if(p==_O[i].p){_O[i].s=1;_SoAD_exec(_O[i]);break;}case 1:setTimeout("DoSchedule()",300);return;default:}}}function WriteAd(s){if(isIE){document.body.insertAdjacentHTML("afterBegin",s);}else{var a=document.createElement("div");document.body.appendChild(a);a.innerHTML=s;a=null;}}function _SoAD_Media(o,i,a,w,h,u){var s;if(/\.(swf)/i.test(a)){if(isIE){s="<object id='"+((o.noDiv)?"":"_")+i+"' width='"+w+"' height='"+h+"'"+((o.noDiv)?"style="+o.style:"");s+=" classid='clsid:D27CDB6E-AE6D-11cf-96B8-444553540000' ";s+="codebase='http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=";s+=IsDe(o.ver)?o.ver:"8,0,0,0";s+="'><param name='movie' value='"+a+"'>";if(IsDe(o.wmode)){s+="<param name='wmode' value='"+o.wmode+"'>";}if(IsDe(o.loop)){s+="<param name='loop' value='"+o.loop+"'>";}s+="<param name='quality' value='autohigh' LiveConnect='true'>";if(u!=""){s+="<param name='flashvars' value='clickthru="+escape(u)+"'>";}s+="<param name='allowScriptAccess' value='always'></object>";}else{s="<embed id='"+((o.noDiv)?"":"_")+i+"' name='_"+i+"' "+((o.noDiv)?"style="+o.style:"")+"src='"+a+"'"+" quality='autohigh'  allowScriptAccess='always'";s+="' width='"+w+"' height='"+h+"' ";if(IsDe(o.wmode)){s+=" wmode='"+o.wmode+"'";}if(IsDe(o.loop)){s+=" loop='"+o.loop+"'";}if(u!=""){s+=" flashvars='clickthru="+escape(u)+"'";}s+=" type='application/x-shockwave-flash' pluginspage='http://www.macromedia.com/shockwave/download/index.cgi?P1_Prod_Version=ShockwaveFlash' swLiveConnect='true'></embed>";}}else{if(/\.(jpe?g|png|gif)$/i.test(a)){if(u!=""){s="<a href='"+((u==null)?"":u)+"' target='_blank'><img src='"+a+"' border='0' width='"+w+"' height='"+h+"'></a>";}else{s="<img src='"+a+"' border='0' width='"+w+"' height='"+h+"'>";}}if(/\.(html?)/i.test(a)){s="<iframe id='"+((o.noDiv)?"":"_")+i+"' src='"+a+"' height='"+h+"' width='"+w+"' frameborder='no' scrolling='no' marginheight='0' marginwidth='0' border='0'></iframe>";}}return s;}function ADM_Check(o,a,e){var n,v;var f=IsDe(e)?e:((o.CookieHour)?o.CookieHour:24);var b=IsDe(a)?a:((o.CookieNum)?o.CookieNum:Number.MAX_VALUE);var c=IsDe(a)?"_"+o.id:o.id;n=(o.CookieName)?(c+o.CookieName):c;v=(o.CookieDomain)?new Cookie(document,n,f,"/",o.CookieDomain):new Cookie(document,n,f);v.load();if(v.w==null){v.w=0;}v.w++;if(v.w<=b){v.store();return false;}return true;}function _SoAD_DoFSCommand(a,b){var c=null;if(a&&(eval("typeof(_SoAD_"+a+")")!="function")){return;}if(_SoAD_DoFSCommand.caller){c=_SoAD_DoFSCommand.caller.toString();c=c.substring(9,c.indexOf("(")).replace("_DoFSCommand","");}if(c=="anonymous"||c=="FSCommand"){c=b;}if(!c&&isIE){return;}if(a=="quit"){return;}if(a&&a!=""&&eval("typeof(_SoAD_"+a+")")=="function"){eval("_SoAD_"+a+"('"+b+"')");}else{_SoAD_hide(c);}}function isOver(a){for(var b=0;b<_O.length;b++){if(_O[b].id==a){_O[b].s=2;return;}}}function _SoAD_hide(a){if(!GetID(a)){return;}GetID(a).style.display="none";if(a=="fullscreenad"){if(!isIE){GetID(a).style.display="none";}a="FULL";}for(var b=0;b<_O.length;b++){if(_O[b].id==a){if(IsDe(_O[b].ret)){clearTimeout(_O[b].ret);}_O[b].s=2;return;}}}function _SoAD_quit(a){if(!GetID(a)){return;}}function _SoAD_show(a){if(!GetID(a)){return;}if(a=="FLOAT"&&!IsPan()&&_A==0&&(GetID(a+"TG")!=null)){GetID(a+"TG").style.display="block";_E=setTimeout(function(){_SoAD_hide(a);_A=1;},8000);}if(a=="FLOAT2"&&!IsPan()&&_B==0&&(GetID(a+"TG")!=null)){GetID(a+"TG").style.display="block";_F=setTimeout(function(){_SoAD_hide(a);_B=1;},8000);}if(a=="COUPLET"&&!IsPan()&&_X==0&&(GetID(a+"TG")!=null)){GetID(a+"TG").style.display="block";_V=setTimeout(function(){_SoAD_hide(a);_X=1;},8000);}if(a=="COUPLET2"&&!IsPan()&&_Y==0&&(GetID(a+"TG")!=null)){GetID(a+"TG").style.display="block";_W=setTimeout(function(){_SoAD_hide(a);_Y=1;},8000);}GetID(a).style.display="block";}function _SoAD_play(a){if(GetID(a)){GetID("_"+a).Play();}}function _SoAD_replay(a){if(!GetID(a)){return;}if(a.indexOf(a)!=-1){for(var i=0;i<_O.length;i++){if(_O[i].id==a){var p,l;p=_M.scrollTop+_O[i].top;l=_M.scrollLeft+_O[i].left;if(_O[i].position=="absolute"){p=_O[i].top;l=_O[i].left;}p=parseInt(_I*p)+_J;l=parseInt(_I*l)+_J;if(IsDe(_O[i].ret)){clearTimeout(_O[i].ret);}if(_O[i].timeout!="MAX"){if(IsDe(_O[i].control)){_O[i].ret=setTimeout(_O[i].op,IsDe(_O[i].timeout)?parseInt(_O[i].timeout):8000);}else{_O[i].ret=setTimeout(function(){_SoAD_hide(a);},IsDe(_O[i].timeout)?parseInt(_O[i].timeout):8000);}}if(isIE){GetID(a).innerHTML=_O[i].code;}if(IsDe(_O[i].xls)){imp(_O[i].xls,"98&t="+Math.round(Math.random()*100));}}}}if(p){GetID(a).style.top=p;}if(l){GetID(a).style.left=l;}GetID("_"+a).style.display="block";GetID(a).style.display="block";}function _SoAD_FSCommand(I){if(isIE){return _K+" for='_"+I+"' event='FSCommand(command,args)'>var _s"+I+"='_"+I+"';_SoAD_DoFSCommand(command,((args&&args!=''&&eval(\"typeof(_SoAD_\"+command+\")\")==\"function\")?args:_s"+I+"));"+_L;}return "";}function FLOAT2_DoFSCommand(a,b){_SoAD_DoFSCommand(a,b);}function FULL_main(o){if(ADM_Check(o)){o.s=2;return;}var a=false;o.width=IsDe(o.width)?o.width:cWidth;o.height=IsDe(o.height)?o.height:480;o.insight=IsDe(o.insight)?o.insight:false;o.delay=IsDe(o.delay)?o.delay:0;if(o.StartTime.length==o.EndTime.length&&o.EndTime.length==o.src.length&&o.src.length==o.href.length){for(var i=0;i<o.src.length;i++){var s,e,n;s=new Date(o.StartTime[i]);e=new Date(o.EndTime[i]);n=new Date();if((s<=e)&&(n<e)&&(n>=s)){var b=GetID("fullscreenad");if(b!=null){if(o.insight){self.scroll(0,0);}b.style.display="block";o.src=o.src[i];o.href=o.href[i];b.innerHTML="<div id="+o.id+">"+_SoAD_Media(o,o.id,o.src,o.width,o.height,o.href)+"</div>";if(IsDe(o.xls)){imp(o.xls,99);}a=!a;setTimeout(function(){_SoAD_hide("fullscreenad");},IsDe(o.timeout)?o.timeout:7000);return;}else{o.s=2;return;}}}if(!a){_SoAD_hide("fullscreenad");}}}function POP_STRUCT(o){var i,h,l,t;o.delay=IsDe(o.delay)?o.delay:0;setTimeout(function(){isOver(o.id);},o.delay);i=(o.superad)?(screen.width-9):((IsDe(o.width)?o.width:350)-4);h=(o.superad)?(screen.height-56):((IsDe(o.height)?o.height:250)-4);l=screen.width+10;t=screen.height+10;return void("about:blank","","toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=no,width="+i+",height="+h+",top="+t+",left="+l);}function POP_WINDOW(o){var a="<html><head><meta http-equiv='content-type' content='text/html; charset=gb2312'><title>";a+=(o.title)?o.title:((o.superad)?("SOHU.com \u80cc\u6295\u5e7f\u544a"):("SOHU.com "+o.t+" Ad"));a+="</title>";a+=_K+">";a+=_L;a+="</head><body scroll=no style='margin:0;border:none'>";a+="<iframe id='iFrame' ";a+=" marginwidth=0 marginheight=0 hspace=0 vspace=0 frameborder=0 scrolling=no width=100% height=100% src='"+o.src+"'>wait</iframe>";a+="</body></html>";return a;}function BEITOU_main(o){o.superad=true;if(ADM_Check(o)){o.s=2;return;}var i=getSrcIdx(o.id,o.turns);o.src=o.src[i];if(IsDe(o.src)){var a=POP_STRUCT(o);if(a){if(isIE){a.blur();}else{voider.focus();}a.moveTo((IsDe(o.left)?o.left:0),(IsDe(o.top)?o.top:0));a.void(POP_WINDOW(o));}}else{o.s=2;}}function FLOAT_main(o){if(ADM_Check(o)){o.s=2;return;}var b=false;for(var i=0;i<_O.length;i++){if(_O[i].t=="COUPLET"){b=!b;}}if(!o.href){o.href="";}if(!o.href2){o.href2="";}o.wmode=IsDe(o.wmode)?o.wmode:"opaque";var _ca=o.wmode;tmp=(b)?0:20;o.width=IsDe(o.width)?o.width:100;o.height=IsDe(o.height)?o.height:100;o.top=IsDe(o.top)?o.top-_M.clientHeight:(-tmp-o.height-20);o.width2=IsDe(o.width2)?o.width2:100;o.height2=IsDe(o.height2)?o.height2:100;o.top2=IsDe(o.top2)?o.top2-_M.clientHeight:(-tmp-o.height2-20);o.delay=IsDe(o.delay)?o.delay:0;o.zindex=IsDe(o.zindex)?o.zindex:20;var d="",e="",f="",g="";if(o.replay){var c=o.replay.split(";");if(c.length>1){d=c[0].split(":")[0];e=c[0].split(":")[1];f=c[1].split(":")[0];g=c[1].split(":")[1];}else{d=c[0].split(":")[0];e=c[0].split(":")[1];f=c[0].split(":")[0];g=c[0].split(":")[1];}}if(!IsPan()&&IsDe(o.tag)){o.tag=(o.tag!="")?o.tag:(d=="LEFT"?_U:_T);}if(!IsPan()&&IsDe(o.tag2)){o.tag2=(o.tag2!="")?o.tag2:(d=="RIGHT"?_U:_T);}o.framestyle=(o.framestyle)?o.framestyle:o.style;o.framestyle2=(o.framestyle2)?o.framestyle2:o.style;o.txtButton=IsDe(o.txtButton)?o.txtButton:true;o.txtButton2=IsDe(o.txtButton2)?o.txtButton2:true;var s="";if(o.src&&o.src!=""){if(o.txtButton){s+=TxtShow(o,o.id,o.src,o.width,o.height,o.href,o.framestyle+";z-index:"+o.zindex+";","left",d,"float_replay('"+e+"','"+o.id+"','"+d+"')","close_float('"+o.id+"')");}else{s+="<div style=\""+o.framestyle+"z-index:"+o.zindex+";\" id="+o.id+">"+_SoAD_Media(o,o.id,o.src,o.width,o.height,o.href)+"</div>";}if(IsDe(o.xls)){imp(o.xls,99);}if(!IsPan()&&IsDe(o.tag)){if(d!="LEFT"){_E=setTimeout(function(){_SoAD_hide(o.id);_A=1;},8000);}o.wmode="transparent";if(d=="LEFT"){s1="float_replay('"+e+"','"+o.id+"','"+d+"')";}else{s1="_SoAD_show('"+o.id+"');clearTimeout(_G);_A=2;";}s+="<div onclick=\"javascript:"+s1+"\" style=\""+o.framestyle+"z-index:10;\" id="+o.id+"TG>"+_SoAD_Media(o,o.id+"TG",o.tag,20,o.height,"")+"</div>";o.wmode=_ca;}LF=1;}if(o.src2&&o.src2!=""){if(o.txtButton2){s+=TxtShow(o,o.id2,o.src2,o.width2,o.height2,o.href2,o.framestyle2+";z-index:"+o.zindex+";","right",f,"float_replay('"+g+"','"+o.id2+"','"+f+"')","close_float('"+o.id2+"')");}else{s+="<div style=\""+o.framestyle2+"z-index:"+o.zindex+";\" id="+o.id2+">"+_SoAD_Media(o,o.id2,o.src2,o.width2,o.height2,o.href2)+"</div>";}if(IsDe(o.xls2)){imp(o.xls2,99);}if(!IsPan()&&IsDe(o.tag2)){if(f!="RIGHT"){_F=setTimeout(function(){_SoAD_hide(o.id2);_B=1;},8000);}o.wmode="transparent";if(f=="RIGHT"){s1="float_replay('"+g+"','"+o.id2+"','"+f+"')";}else{s1="_SoAD_show('"+o.id2+"');clearTimeout(_H);_B=2;";}s+="<div onclick=\"javascript:"+s1+"\" style=\""+o.framestyle2+"z-index:10;\" id="+o.id2+"TG>"+_SoAD_Media(o,o.id2+"TG",o.tag2,20,o.height2,"")+"</div>";o.wmode=_ca;}RF=1;}if(!o.txtButton){s+=_SoAD_FSCommand(o.id);}if(!o.txtButton2){s+=_SoAD_FSCommand(o.id2);}if(s!=""){WriteAd(s);if(!IsPan()&&o.src&&IsDe(o.tag)){AttachEvent(GetID(o.id+"TG"),"mouseover",function(){_G=setTimeout(function(){if(_A!=2){_SoAD_show(o.id);_A=2;}},500);});AttachEvent(GetID(o.id+"TG"),"mouseout",function(){clearTimeout(_G);});}if(!IsPan()&&o.src2&&IsDe(o.tag2)){AttachEvent(GetID(o.id2+"TG"),"mouseover",function(){_H=setTimeout(function(){if(_B!=2){_SoAD_show(o.id2);_B=2;}},500);});AttachEvent(GetID(o.id2+"TG"),"mouseout",function(){clearTimeout(_H);});}_S1=GetID(o.id);_S2=GetID(o.id2);_S3=GetID(o.id+"TG");_S4=GetID(o.id2+"TG");var lf=(IsDe(o.left)?o.left:0);var lt=(IsDe(o.left2)?o.left2:-o.width2);FLOAT_position(o.top,lf,o.top2,lt,o.width);_P[_P.length]="FLOAT_position("+o.top+","+lf+","+o.top2+","+lt+","+o.width+")";if(isIE6){window.setInterval(function(){FLOAT_position(o.top,lf,o.top2,lt,o.width);},400);}else{FLOAT_position(o.top,lf,o.top2,lt,o.width);_P[_P.length]="FLOAT_position("+o.top+","+lf+","+o.top2+","+lt+","+o.width+")";}}setTimeout(function(){isOver(o.id);},o.delay);}function close_float(a){if(a=="FLOAT"){clearTimeout(_E);clearTimeout(_G);_A=3;}if(a=="FLOAT2"){clearTimeout(_F);clearTimeout(_H);_B=3;}_SoAD_hide(a);}function float_replay(a,b,c){_SoAD_hide(b);_SoAD_replay(a);if(!IsPan()&&(GetID(b+"TG")!=null)){_SoAD_hide(b+"TG");if(c=="LEFT"){clearTimeout(_G);clearTimeout(_E);_A=0;}if(c=="RIGHT"){clearTimeout(_H);clearTimeout(_F);_B=0;}}}window.onscroll=scroll;function scroll(){if(_S1!=null){if(!IsPan()&&(_A==1)){if(_M.scrollTop>120){_S1.style.display="block";}else{_S1.style.display="none";}}}if(_S2!=null){if(!IsPan()&&(_B==1)){if(_M.scrollTop>120){_S2.style.display="block";}else{_S2.style.display="none";}}}}function FLOAT_position(a,b,c,d,e){var f=parseInt((_M.clientWidth-cWidth-20)/2),g=(IsBig())?(f-e):b,_c=(IsBig())?-f:d;g=(isNor&&IsBig())?10:g;_c=(isNor&&IsBig())?-110:_c;if(_S1!=null){if(isIE6){_S1.style.top=parseInt(_I*(_M.scrollTop+_M.clientHeight+a))+_J;_S1.style.left=parseInt(_I*(_M.scrollLeft+g))+_J;}else{_S1.style.top=parseInt(_I*(_M.clientHeight+a))+_J;_S1.style.left=parseInt(_I*g)+_J;_S1.style.position="fixed";_S1.style._position="absolute";}}if(_S2!=null){if(isIE6){_S2.style.top=parseInt(_I*(_M.scrollTop+_M.clientHeight+c))+_J;_S2.style.left=parseInt(_I*(_M.scrollLeft+_M.clientWidth+_c))+_J;}else{_S2.style.top=parseInt(_I*(_M.clientHeight+c))+_J;_S2.style.left=parseInt(_I*(_M.clientWidth+_c))+_J;_S2.style.position="fixed";_S2.style._position="absolute";}}if(_S3!=null){if(isIE6){_S3.style.top=parseInt(_I*(_M.scrollTop+_M.clientHeight+a))+_J;_S3.style.left=parseInt(_I*(_M.scrollLeft+g))+_J;}else{_S3.style.top=parseInt(_I*(_M.clientHeight+a))+_J;_S3.style.left=parseInt(_I*g)+_J;_S3.style.position="fixed";_S3.style._position="absolute";}}if(_S4!=null){if(isIE6){_S4.style.top=parseInt(_I*(_M.scrollTop+_M.clientHeight+c))+_J;_S4.style.left=parseInt(_I*(_M.scrollLeft+_M.clientWidth+_c+80))+_J;}else{_S4.style.top=parseInt(_I*(_M.clientHeight+c))+_J;_S4.style.left=parseInt(_I*(_M.clientWidth+_c+80))+_J;_S4.style.position="fixed";_S4.style._position="absolute";}}}function LIUMEITI_main(o){o.timeout=IsDe(o.timeout)?o.timeout:10000;o.delay=IsDe(o.delay)?o.delay:0;o.zindex=IsDe(o.zindex)?o.zindex:30;o.txtButton=IsDe(o.txtButton)?o.txtButton:true;o.op="_SoAD_hide('"+o.id+"');";if(o.control){var a,b,c,d,e,f;a=o.control.split(";");b=a[0].split(":")[0];c=a[0].split(":")[1];d=a[1].split(":")[0];e=a[1].split(":")[1];if(a[1].split(":").length<3){o.op="_SoAD_DoFSCommand('"+b+"','"+c+"'); _SoAD_DoFSCommand('"+d+"','"+e+"');";}else{f=a[1].split(":")[2];o.op="_SoAD_DoFSCommand('"+b+"','"+c+"'); _SoAD_DoFSCommand('"+d+"','"+e+"'),_SoAD_DoFSCommand('"+d+"','"+f+"')";}if(o.timeout!="MAX"){o.ret=setTimeout(o.op,o.timeout);}else{setTimeout(function(){isOver(o.id);},o.delay);}}o.width=IsDe(o.width)?o.width:200;o.height=IsDe(o.height)?o.height:150;o.top=IsDe(o.top)?o.top:(_M.clientHeight-o.height)/2;o.left=IsDe(o.left)?_M.clientWidth/2+o.left:(_M.clientWidth-o.width)/2;if(ADM_Check(o)){o.s=2;o.style+="display:none;";var s="";if(o.txtButton){s=TxtShow(o,o.id,o.src,o.width,o.height,o.href,o.style+";z-index:"+o.zindex+";","right","","",o.op);}else{o.code=_SoAD_Media(o,o.id,o.src,o.width,o.height,o.href);s=(o.noDiv)?o.code:"<div  style="+((o.style)?o.style+";":"")+"z-index:"+o.zindex+" id="+o.id+">"+o.code+"</div>";s+=_SoAD_FSCommand(o.id);}WriteAd(s);if(o.control){if(a[1].split(":").length<3){_SoAD_show(e);}else{_SoAD_show(e);_SoAD_show(f);}}if(o.isfloat&&GetID(o.id)){if(isIE6){window.setInterval(function(){LMT_FLOAT(o.id,o.top,o.left);},400);}else{LMT_FLOAT(o.id,o.top,o.left);}}if(typeof (o.callback)=="function"){o.callback();}return;}if(o.src&&o.src!=""){if(o.position=="absolute"){o.style+="top:"+parseInt(_I*o.top)+_J;o.style+=";left:"+parseInt(_I*o.left)+_J;}else{o.style+="top:"+parseInt(_I*(_M.scrollTop+o.top))+_J;o.style+=";left:"+parseInt(_I*(_M.scrollLeft+o.left))+_J;}_P[_P.length]="onresizeADLMT('"+o.id+"',"+o.left+")";if(o.txtButton){s=TxtShow(o,o.id,o.src,o.width,o.height,o.href,o.style+";z-index:"+o.zindex+";","right","","",o.op);}else{o.code=_SoAD_Media(o,o.id,o.src,o.width,o.height,o.href);s=(o.noDiv)?o.code:"<div  style="+((o.style)?o.style+";":"")+"z-index:"+o.zindex+" id="+o.id+">"+o.code+"</div>";s+=_SoAD_FSCommand(o.id);}WriteAd(s);if(IsDe(o.xls)&&(o.style.indexOf("display:none;")==-1)){imp(o.xls,99);}if(!o.control){if(o.timeout!="MAX"){o.ret=setTimeout(function(){_SoAD_hide(o.id);},o.timeout);}else{setTimeout(function(){isOver(o.id);},o.delay);}}}if(o.isfloat&&GetID(o.id)){if(isIE6){window.setInterval(function(){LMT_FLOAT(o.id,o.top,o.left);},400);}else{LMT_FLOAT(o.id,o.top,o.left);}}if(typeof (o.callback)=="function"){o.callback();}}function onresizeADLMT(a,b){var c=GetID(a);if(c){c.style.left=_I*(_M.scrollLeft+((b<0)?_M.clientWidth:0)+b)+_J;}}function LMT_FLOAT(i,a,b){with(GetID(i)){if(isIE6){style.top=parseInt(_I*(_M.scrollTop+a))+_J;style.left=parseInt(_I*(_M.scrollLeft+b))+_J;}else{style.top=parseInt(_I*a)+_J;style.left=parseInt(_I*b)+_J;style.position="fixed";style._position="absolute";}}}function COUPLET_main(o){if(((isIE)&&(screen.width<1000))||((!isIE)&&(_M.scrollWidth<1000))){o.s=2;return;}if(ADM_Check(o)){o.s=2;return;}o.x=getSrcIdx(o.id,o.turns);o.ext=IsDe(o.ext)?o.ext:false;o.ext2=IsDe(o.ext2)?o.ext2:false;o.src=o.src[o.x];o.tag=IsDe(o.tag)?o.tag[o.x]:"";o.href=IsDe(o.href)?o.href[o.x]:"";if(!IsDe(o.x)){o.x=getSrcIdx(o.id2,o.turns);}o.src2=o.src2[o.x];o.tag2=IsDe(o.tag2)?o.tag2[o.x]:"";o.href2=IsDe(o.href2)?o.href2[o.x]:"";o.src=(IsPan())?o.src:o.tag;o.src2=(IsPan())?o.src2:o.tag2;o.width=IsDe(o.width)?o.width:((IsPan())?120:25);o.height=IsDe(o.height)?o.height:270;o.top=IsDe(o.top)?o.top:100;var c=parseInt((_M.clientWidth-cWidth)/2);o.left=(IsDe(o.left)?o.left:0);o.tl=(IsBig())?(c-o.width):o.left;o.tl=(o.ext||isNor)?o.left:o.tl;o.tl=(o.ext2)?c:o.tl;o.width2=IsDe(o.width2)?o.width2:((IsPan())?120:25);o.height2=IsDe(o.height2)?o.height2:270;o.top2=IsDe(o.top2)?o.top2:100;o.left2=(IsDe(o.left2)?o.left2:-o.width2);o.tr=(IsBig())?-c:o.left2;o.tr=(o.ext||isNor)?o.left2:o.tr;o.tr=(o.ext2)?(-c-o.width2):o.tr;o.tagw=IsDe(o.tagw)?o.tagw:25;o.tagw2=IsDe(o.tagw2)?o.tagw2:25;o.delay=IsDe(o.delay)?o.delay:0;o.zindex=IsDe(o.zindex)?o.zindex:20;o.zindex1=IsDe(o.zindex1)?o.zindex1:10;o.txtButton=IsDe(o.txtButton)?o.txtButton:true;o.txtButton2=IsDe(o.txtButton2)?o.txtButton2:true;o.wmode=IsDe(o.wmode)?o.wmode:"opaque";var d,e,f,g,_wmode=o.wmode;if(o.replay){var h=o.replay.split(";");if(h.length>1){d=h[0].split(":")[0];e=h[0].split(":")[1];f=h[1].split(":")[0];g=h[1].split(":")[1];}else{d=h[0].split(":")[0];e=h[0].split(":")[1];f=h[0].split(":")[0];g=h[0].split(":")[1];}}o.framestyle=(o.framestyle)?o.framestyle:o.style;o.framestyle2=(o.framestyle2)?o.framestyle2:o.style;var s="";if(o.src&&o.src!=""){style="top:"+parseInt(_I*o.top)+_J;style+=";left:"+parseInt(_I*o.tl)+_J;if(o.ext2){style+=";display:none;";}if(o.txtButton){s+=TxtShow(o,o.id,o.src,o.width,o.height,o.href,o.framestyle+style+";z-index:"+o.zindex+";","left",d,"couplet_replay('"+e+"');close_couplet('"+o.id+"')","close_couplet('"+o.id+"')");}else{s+="<div style=\""+o.framestyle+style+";z-index:"+o.zindex+";\" id="+o.id+">"+_SoAD_Media(o,o.id,o.src,o.width,o.height,o.href)+"</div>";}_P[_P.length]="onresizeADCP('"+o.id+"',"+o.left+","+o.width+",0)";if(o.ext2&&IsDe(o.tag)&&(o.tag!="")){if(d!="LEFT"&&(!o.ext2)){_C=setTimeout(function(){_SoAD_hide(o.id);},8000);}o.wmode="transparent";var _e8=(o.ext2)?("top:"+parseInt(_I*o.top)+_J+";left:"+parseInt(_I*(o.tl-25))+_J):style;s+=TxtShow(o,o.id+"TG",o.tag,o.tagw,o.height,o.href,o.framestyle+_e8+";z-index:"+o.zindex1+";","left","","","close_couplet_tag('"+o.id+"')");s+=_SoAD_FSCommand(o.id+"TG");o.wmode=_wmode;_P[_P.length]="onresizeADCP('"+o.id+"TG',"+o.left+","+o.tagw+",0)";}if(IsDe(o.xls)){imp(o.xls,99);}}if(o.src2&&o.src2!=""){style="top:"+parseInt(_I*o.top2)+_J;style+=";left:"+parseInt(_I*(_M.scrollLeft+_M.clientWidth+o.tr))+_J;if(o.ext2){style+=";display:none;";}if(o.txtButton2){s+=TxtShow(o,o.id2,o.src2,o.width2,o.height2,o.href2,o.framestyle2+style+";z-index:"+o.zindex+";","right",f,"couplet_replay('"+g+"');close_couplet('"+o.id+"')","close_couplet('"+o.id+"')");}else{s+="<div style=\""+o.framestyle2+style+";z-index:"+o.zindex+";\" id="+o.id2+">"+_SoAD_Media(o,o.id2,o.src2,o.width2,o.height2,o.href2)+"</div>";}_P[_P.length]="onresizeADCP('"+o.id2+"',"+o.left2+","+o.width2+",1)";if(o.ext2&&IsDe(o.tag2)&&(o.tag2!="")){if(f!="RIGHT"&&(!o.ext2)){_D=setTimeout(function(){_SoAD_hide(o.id2);},8000);}o.wmode="transparent";style=style.substring(0,style.lastIndexOf("left:"));if(!o.ext2){style+=";left:"+parseInt(_I*(_M.scrollLeft+_M.clientWidth+o.tr+o.width2-o.tagw2))+_J;}else{style+=";left:"+parseInt(_I*(_M.scrollLeft+_M.clientWidth+o.tr+o.width2))+_J;}s+=TxtShow(o,o.id2+"TG",o.tag2,o.tagw2,o.height2,o.href2,o.framestyle2+style+";z-index:"+o.zindex1+";","right","","","close_couplet_tag('"+o.id+"')");s+=_SoAD_FSCommand(o.id2+"TG");o.wmode=_wmode;_P[_P.length]="onresizeADCP('"+o.id2+"TG',"+(o.left2+o.width2-o.tagw2)+","+o.tagw2+",1)";}}if(!o.txtButton){s+=_SoAD_FSCommand(o.id);}if(!o.txtButton2){s+=_SoAD_FSCommand(o.id2);}WriteAd(s);_S5=GetID(o.id);_S6=GetID(o.id2);_S7=GetID(o.id+"TG");_S8=GetID(o.id2+"TG");if(o.isfloat){if(isIE6){window.setInterval(function(){COUPLET_FLOAT(o.top,o.left,o.top2,o.left2,o.width);},400);}else{COUPLET_FLOAT(o.top,o.left,o.top2,o.left2,o.width);}}setTimeout(function(){isOver(o.id);},o.delay);if(typeof (o.callback)=="function"){o.callback();}if(!IsPan()&&o.ext2){AttachEvent(GetID(o.id+"TG"),"mouseover",function(){if(!ADM_Check(o,1,24)){clearTimeout(_C);_SoAD_show(o.id);_SoAD_show(o.id2);_C=setTimeout(function(){_SoAD_hide(o.id);_SoAD_hide(o.id2);},5000);}});AttachEvent(GetID(o.id2+"TG"),"mouseover",function(){if(!ADM_Check(o,1,24)){clearTimeout(_D);_SoAD_show(o.id);_SoAD_show(o.id2);_D=setTimeout(function(){_SoAD_hide(o.id);_SoAD_hide(o.id2);},5000);}});}}function onresizeADCP(a,b,c,d){var e,f,g;e=GetID(a);f=parseInt((_M.clientWidth-cWidth)/2);g=(d==0)?((IsBig())?(f-c):b):((IsBig())?-f:b);if(e){e.style.left=_I*(_M.scrollLeft+((g<0)?_M.clientWidth:0)+g)+_J;}}function TxtShow(o,a,b,c,d,e,f,g,h,i,j){var k="";if(h=="RIGHT"&&g=="right"){k="<a style='"+crsr+"' onclick=\"javascript:"+i+";\">\u91cd\u64ad</a>|";}if(h=="LEFT"&&g=="left"){k="<a style='"+crsr+"' onclick=\"javascript:"+i+";\">\u91cd\u64ad</a>|";}o.code="<table style='margin:0;position:relative;top:0' border=0 cellpadding=0 cellspacing=0><tr><td height="+d+" valign=top align=left>";o.code+=_SoAD_Media(o,a,b,c,d,e);o.code+="</td></tr><tr><td width="+c+" height=20 style=text-align:"+g;o.code+=(IsDe(o.btnbg))?";bgcolor:"+o.btnbg:" background="+_S;o.code+=">"+k+"<a style='"+crsr+"' onclick=\"javascript:"+j+";\">\u5173\u95ed</a></td></tr></table>";if(isIE6){o.code+="<iframe style='width:"+c+"px;height:"+d+"px;filter:alpha(opacity=0);position:absolute;top:0;left:0;z-index:-1'></iframe>";}return "<DIV id='"+a+"' style='"+f+"'>"+o.code+"</DIV>";}function couplet_replay(a){_SoAD_replay(a);}function close_couplet_tag(a){if(GetID(a+"TG")){_SoAD_hide(a+"TG");}if(GetID(a+"2TG")){_SoAD_hide(a+"2TG");}}function close_couplet(a){clearTimeout(_C);clearTimeout(_D);clearTimeout(_V);clearTimeout(_W);if(GetID(a)){_SoAD_hide(a);}if(GetID(a+"2")){_SoAD_hide(a+"2");}}function show_couplet(a){if(GetID(a)){_SoAD_show(a);}if(GetID(a+"2")){_SoAD_show(a+"2");}}function COUPLET_FLOAT(a,b,c,d,e){var f,g,h;f=parseInt((_M.clientWidth-cWidth)/2);g=(IsBig())?(f-e):b;h=(IsBig())?-f:d;if(_S5!=null){if(isIE6){_S5.style.top=parseInt(_I*(_M.scrollTop+a))+_J;_S5.style.left=parseInt(_I*(_M.scrollLeft+g))+_J;}else{_S5.style.top=parseInt(_I*a)+_J;_S5.style.left=parseInt(_I*g)+_J;_S5.style.position="fixed";_S5.style._position="absolute";}}if(_S6!=null){if(isIE6){_S6.style.top=parseInt(_I*(_M.scrollTop+c))+_J;_S6.style.left=parseInt(_I*(_M.scrollLeft+_M.clientWidth+h))+_J;}else{_S6.style.top=parseInt(_I*c)+_J;_S6.style.left=parseInt(_I*(_M.clientWidth+h))+_J;_S6.style.position="fixed";_S6.style._position="absolute";}}if(_S7!=null){if(isIE6){_S7.style.top=parseInt(_I*(_M.scrollTop+a))+_J;_S7.style.left=parseInt(_I*(_M.scrollLeft+g))+_J;}else{_S7.style.top=parseInt(_I*a)+_J;_S7.style.left=parseInt(_I*g)+_J;_S7.style.position="fixed";_S7.style._position="absolute";}}if(_S8!=null){if(isIE6){_S8.style.top=parseInt(_I*(_M.scrollTop+c))+_J;_S8.style.left=parseInt(_I*(_M.scrollLeft+_M.clientWidth+h+95))+_J;}else{_S8.style.top=parseInt(_I*c)+_J;_S8.style.left=parseInt(_I*(_M.clientWidth+h+95))+_J;_S8.style.position="fixed";_S8.style._position="absolute";}}}function SOHULL_main(o){if(ADM_Check(o)){o.s=2;return;}if(o.src&&o.src!=""){o.style+="display:none;";var s=_SoAD_Media(o,o.id,o.src,0,0,"");WriteAd(s);if(IsDe(o.xls)){imp(o.xls,99);}o.s=2;}}function getSrcIdx(a,b){var c=new Cookie(document,a+"Index",24);c.load();c.x=(c.x==null)?parseInt(Math.random()*b):c.x;var d=parseInt(c.x);c.x++;c.x=(c.x>(b-1))?0:c.x;c.store();return d;}function getElementPos(_86){var ua=navigator.userAgent.toLowerCase();var el=document.getElementById(_86);if(el.parentNode===null||el.style.display=="none"){return false;}var _89=null;var pos=[];var box;if(el.getBoundingClientRect){box=el.getBoundingClientRect();var _8c=Math.max(document.documentElement.scrollTop,document.body.scrollTop);var _8d=Math.max(document.documentElement.scrollLeft,document.body.scrollLeft);return {x:box.left+_8d,y:box.top+_8c};}else{if(document.getBoxObjectFor){box=document.getBoxObjectFor(el);var _8e=(el.style.borderLeftWidth)?parseInt(el.style.borderLeftWidth):0;var _8f=(el.style.borderTopWidth)?parseInt(el.style.borderTopWidth):0;pos=[box.x-_8e,box.y-_8f];}else{pos=[el.offsetLeft,el.offsetTop];_89=el.offsetParent;if(_89!=el){while(_89){pos[0]+=_89.offsetLeft;pos[1]+=_89.offsetTop;_89=_89.offsetParent;}}if(ua.indexOf("opera")!=-1||(ua.indexOf("safari")!=-1&&el.style.position=="absolute")){pos[0]-=document.body.offsetLeft;pos[1]-=document.body.offsetTop;}}}if(el.parentNode){_89=el.parentNode;}else{_89=null;}while(_89&&_89.tagName!="BODY"&&_89.tagName!="HTML"){pos[0]-=_89.scrollLeft;pos[1]-=_89.scrollTop;if(_89.parentNode){_89=_89.parentNode;}else{_89=null;}}return {x:pos[0],y:pos[1]};}window.onresize=function(){for(var i=0;i<_P.length;i++){eval(_P[i]);}};setTimeout("_SoAD_init()",1000);