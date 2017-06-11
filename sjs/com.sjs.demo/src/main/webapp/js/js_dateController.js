//0618
function newCalendar()
{
	var t;
}

var text;
var flag = 0;
var cx=0;
var cy=0;
var val=0;
var running=false;
var stx,sty;
function locate()
{   cx=window.event.x;
    cy=window.event.y;
    
}
document.onmousemove=locate;
function mousemove(){
 var x,y;
    x=cx-stx;
    y=cy-sty;
	if(x<0) {x=0;}
	if(y<0) {y=0;}
    with(calendar.style)
    {
    left=x.toString()+"px";
    top=y.toString()+"px";
    }
}
function mousedown(){
  with(calendar.style)
    {
	stx=cx-parseInt(left.substring(0,left.charAt('p')+1));
    sty=cy-parseInt(top.substring(0,top.charAt('p')+1));
	}
  if(!running){
   val=setInterval("mousemove()",10);
   running=true;
  }
  else{
  clearInterval(val);
  running=false;
  }
 }
 function mouseup(){
 if(running){
    clearInterval(val);
	running=false;
  }
 }
function MakeCal(date,intCount) {
	var z1, z2,blntoday
	var today = new Date();
	if (date == null) {
		var szMonth = today.getMonth();
		var szYear = today.getFullYear();
		var szDate = today.getDate();
	} 
	else {
		z1 = date.indexOf("/");
		z2 = date.indexOf("/", 3);
		var szMonth = Number(date.slice(0,z1)) - 1;
		var szYear = Number(date.slice(z2 + 1, z2+ 5));
		if(szMonth < 0){
			szMonth = 11;
			szYear = szYear - 1;
		}
		else if(szMonth > 11){
			szMonth = 0;
			szYear = szYear + 1;
		}
		var szDate = Number(date.slice(z1 + 1,z2));
	}
	var x, intTemp, szId, max, todayx, startx;
	var szStart = new Date(szYear, szMonth, 1);
	var intDay = szStart.getDay();
	var blSet = false;
	var szCal;
	szStart.setMonth(szMonth - 1);
	var PrevMonth = szStart.getMonth();
	var PrevYear = szStart.getFullYear();
	szStart = new Date(szYear, szMonth, 1);
	szStart.setMonth(szMonth + 1);
	var NextMonth = szStart.getMonth();
	var NextYear = szStart.getFullYear();
	szStart = new Date(szYear, szMonth, 1);
	szCal = "" ;
	szCal = szCal + "<table id=tblBor width=100% border=0 bgcolor=#D6C7DA style=\"border-style:solid;border-width:1px;border-color:black\" cellspacing=0 cellpadding=0 align='center'><tr><td>";
	szCal = szCal + "<table id=tblCal width=100% border=0 bgcolor=#F3FAFF style=\"cursor:default;\" cellspacing=0 cellpadding=3 >";
	if (szStart.getMonth() == (szMonth))
		szCal = szCal + "<tr bgcolor=#000090 onmouseup=\"mouseup();\" onmousedown=\"mousedown()\"><td style=\"line-height: 15px\" colspan=6 align=center id=title style=\"cursor:default;\"><div style=\"display:none;\" id=\"whoactive\">"+MakeString(szStart.getMonth())+"10</div>" +"<font color=#FFFFFF>"+ MakeStringT(szMonth)+"</Font>" + " " +"<Font Color =#FFFFFF>"+ szYear + "年"+"</font>"+"</td><td><input type=button value=&times style=\"border:1;font-family: 黑体; font-weight: bold; width: 12; height: 11\" onclick=\"calendar.style.visibility='hidden'\"></td></tr>";
	else
		szCal = szCal + "<tr bgcolor=#000090 onmouseup=\"mouseup();\" onmousedown=\"mousedown()\"><td style=\"line-height: 15px\" colspan=6 align=center id=title style=\"cursor:default;\"><div style=\"display:none;\" id=\"whoactive\">"+MakeString(szStart.getMonth())+"10</div>" +"<font color=#FFFFFF>"+ MakeStringT(szMonth)+"</Font>" + " " +"<Font Color =#FFFFFF>"+ szYear + "年"+"</font>"+"</td><td><input type=button value=&times style=\"border:1;font-family: 黑体; font-weight: bold;width: 12; height: 11\" onclick=\"calendar.style.visibility='hidden'\"></td></tr>";
	szCal = szCal + "<tr id=rowTitle style=\"cursor:default;\"><td><font color=#53A46B>日</font></td><td><font color=#0A13C0>一</font></td><td><font color=#0A13C0>二</font></td><td><font color=#0A13C0>三</font></td><td><font color=#0A13C0>四</font></td><td><font color=#0A13C0>五</font></td><td><font color=#53A46B>六</font></td></tr>";
	for (x=1; x<43; x++) {
		if (x % 7 == 1) {
			szCal = szCal + "<tr>"
		}
		szStart = new Date(szYear, szMonth, 1);
		intTemp = (-(intDay - x));
		szStart.setDate(intTemp);
		szId = MakeString(szStart.getMonth()) + x;
		if (!blSet) {
			if (szStart.getMonth() == (szMonth + 1)) {
				blSet = true;
				max = x;
			}
			if (szStart.getFullYear() == (szYear + 1)) {
				blSet = true;
				max = x;
			}
		}

		blntoday = 0;
		if (szStart.getDate() == today.getDate()) {
			if (szStart.getMonth() == today.getMonth()) {
				if (szStart.getYear() == today.getYear()) {
					todayx = x;
					blntoday = 1;
				}
			}
		}
		szCal = szCal + "<td ";
		if(intCount == 0){
			if (szStart.getMonth() == (szMonth)) {
				if (szStart.getDate() == today.getDate()) {
					szCal = szCal + "onclick=\"setVal('" + (szStart.getMonth() + 1 ) + "/" + szStart.getDate() + "/" + szStart.getFullYear() + "','0');\"";
				}
				else
				{
					szCal = szCal + "onclick=\"setVal('" + (szStart.getMonth() + 1 ) + "/" + szStart.getDate() + "/" + szStart.getFullYear() + "','0');whoactive.innerHTML=this.id;\"";
				}
			} 
			else {
				szCal = szCal + "onclick=\"MakeCal('" + (szStart.getMonth() + 1 ) + "/" + szStart.getDate() + "/" + szStart.getFullYear() + "','0')\"";
			}
		}
		if(intCount == 1){
			if (szStart.getMonth() == (szMonth)) {
				if (szStart.getDate() == today.getDate()) {
					szCal = szCal + "onclick=\"setVal('" + (szStart.getMonth() + 1 ) + "/" + szStart.getDate() + "/" + szStart.getFullYear() + "','1')\"";
				}
				else
				{
					szCal = szCal + "onclick=\"setVal('" + (szStart.getMonth() + 1 ) + "/" + szStart.getDate() + "/" + szStart.getFullYear() + "','1');whoactive.innerHTML=this.id;\"";
				}
			} 
			else {
				szCal = szCal + "onclick=\"MakeCal('" + (szStart.getMonth() + 1 ) + "/" + szStart.getDate() + "/" + szStart.getFullYear() + "','1')\"";
			}
		}
		if (blntoday == 1)
			szCal = szCal + " id=" + szId + "><center><font color = Yellow>" + szStart.getDate() + "</font></td>";
		else
			szCal = szCal + " id=" + szId + "><center>" + szStart.getDate() + "</td>";
			
		if (x % 7 == 0) {
			szCal = szCal + "</tr>"
		}
	}
	szCal = szCal + "</tr>";
	szCal = szCal + "</table></td></tr>";
	szCal = szCal + "<tr align=center><td><table border=0 bgcolor=#C0CAFE width=100% cellspacing=0 cellpadding=3>";
	szCal = szCal + "<tr>";
	if(intCount == 0){
		szCal = szCal + "<td align=center style=\"cursor:hand;\"><a onclick=\"MakeCal('" + (PrevMonth + 2) + "/1/" + (PrevYear - 1) + "','0')\"><font face=webdings>7</font></a></td>";
		szCal = szCal + "<td align=center style=\"cursor:hand;\"><a onclick=\"MakeCal('" + (PrevMonth + 1) + "/1/" + PrevYear + "','0')\"><font face=webdings>3</font></a></td>";
		szCal = szCal + "<td align=center style=\"cursor:hand;\"><a onclick=\"MakeCal('" + (NextMonth + 1) + "/1/" + NextYear + "','0')\"><font face=webdings>4</font></a></td>";
		szCal = szCal + "<td align=center style=\"cursor:hand;\"><a onclick=\"MakeCal('" + NextMonth + "/1/" + (NextYear + 1) + "','0')\"><font face=webdings>8</font></a></td>";
	}
	if(intCount == 1){
		szCal = szCal + "<td align=center style=\"cursor:hand;\"><a onclick=\"MakeCal('" + (PrevMonth + 2) + "/1/" + (PrevYear - 1) + "','1')\"><font face=webdings>7</font></a></td>";
		szCal = szCal + "<td align=center style=\"cursor:hand;\"><a onclick=\"MakeCal('" + (PrevMonth + 1) + "/1/" + PrevYear + "','1')\"><font face=webdings>3</font></a></td>";
		szCal = szCal + "<td align=center style=\"cursor:hand;\"><a onclick=\"MakeCal('" + (NextMonth + 1) + "/1/" + NextYear + "','1')\"><font face=webdings>4</font></a></td>";
		szCal = szCal + "<td align=center style=\"cursor:hand;\"><a onclick=\"MakeCal('" + NextMonth + "/1/" + (NextYear + 1) + "','1')\"><font face=webdings>8</font></a></td>";
	}
	szCal = szCal + "</tr></table>";
	szCal = szCal + "</td></tr></table>";
	calendar.innerHTML = szCal;
	for (x=intDay; x>0; x--) {
		eval(MakeString(PrevMonth) + x + ".style.color = \"909090\"")
	}
	for (x=max; x<43; x++) {
		eval(MakeString(NextMonth) + x + ".style.color = \"909090\"")
	}
	if (szMonth == today.getMonth()) {
		if (szYear == today.getFullYear()) {
			eval(MakeString(szMonth) + todayx + ".style.backgroundColor = \"#7F7F7F\"");
			eval(MakeString(szMonth) + todayx + ".style.Color = \"yellow\"");
		}
	}
	tblCal.style.color = "#00009F";
	tblCal.style.fontFamily = "arial";
	tblCal.style.cursor = "hand";
	tblCal.style.fontSize = "10";
	rowTitle.style.backgroundColor = "#C0CAFE";
	//event.cancelBubble = true;
}

function MakeString(intMonth) {
	var Month
	switch (intMonth) {
		case 0 :
			Month = "JANUARY";
			break;
		case 1 :
			Month = "FEBUARY";
			break;
		case 2 :
			Month = "MARCH";
			break;
		case 3 :
			Month = "APRIL";
			break;
		case 4 :
			Month = "MAY";
			break;
		case 5 :
			Month = "JUNE";
			break;
		case 6 :
			Month = "JULY";
			break;
		case 7 :
			Month = "AUGUST";
			break;
		case 8  :
			Month = "SEPTEMBER";
			break;
		case 9 :
			Month = "OCTOBER";
			break;
		case 10 :
			Month = "NOVEMBER";
			break;
		case 11 :
			Month = "DECEMBER";
	}
	return (Month);
}

function MakeStringT(intMonth) {
	var Month
	switch (intMonth) {
		case 0 :
			Month = "一月";
			break;
		case 1 :
			Month = "二月";
			break;
		case 2 :
			Month = "三月";
			break;
		case 3 :
			Month = "四月";
			break;
		case 4 :
			Month = "五月";
			break;
		case 5 :
			Month = "六月";
			break;
		case 6 :
			Month = "七月";
			break;
		case 7 :
			Month = "八月";
			break;
		case 8  :
			Month = "九月";
			break;
		case 9 :
			Month = "十月";
			break;
		case 10 :
			Month = "十一月";
			break;
		case 11 :
			Month = "十二月";
	}
	return (Month);
}

function keepCal() {
	event.cancelBubble = true;
}

function public_get_txtDate() {
    return txtDate;
}

function public_get_value() {
    return txtDate.value;
}
function getCal(intCount){
	
    today=new Date();
    nowyear=today.getYear();
    nowmonth=today.getMonth()+1;
    nowday=today.getDate();
	currdate = nowmonth+'/'+nowday+'/'+nowyear;
	MakeCal(currdate, 0)
	intFlag = 1;
	//calendar.style.left = iLeft;
	//calendar.style.top = iTop;
	calendar.style.visibility = 'visible';
	//event.cancelBubble = true;
}
function setVal(date, intCount){
    z1 = date.indexOf("/");
	z2 = date.indexOf("/", 3);
	var szMonth = date.slice(0,z1);
	if (szMonth.length<2)
	    szMonth="0"+szMonth;
	var szYear = date.slice(z2 + 1, z2+ 5);
/*
	if(szMonth < 0){
		szMonth = 11;
		szYear = szYear - 1;
	}
	else if(szMonth > 11){
		szMonth = 0;
		szYear = szYear + 1;
	}
*/
	var szDate = date.slice(z1 + 1,z2);
	if (szDate.length<2)
	    szDate = "0"+szDate;
	text.value=szYear+szMonth+szDate;
	calendar.style.display='none'
}
function hideCal(){
	calendar.style.visibility = 'hidden';
}
function show_calendar()
{
  calendar.style.visibility='hidden'
  //calendar.style.visibility='display'
}
function showCalendar(get_time)
{
    if(event.clientX+163> document.body.clientWidth)
		calendar.style.left=event.clientX+document.body.scrollLeft-150;
  	else calendar.style.left=event.clientX+document.body.scrollLeft;
  	if(event.clientY+200 > document.body.clientHeight)
  		calendar.style.top=event.clientY+document.body.scrollTop;
  	else calendar.style.top=event.clientY+document.body.scrollTop;
    //calendar.style.left=event.clientX;
    //calendar.style.top=event.clientY;
    calendar.style.visibility='visible'; 
    MM_showHideLayers('calendar','','show')
	calendar.style.display='list-item'; 
	text=get_time;
	flag=1;
    return false;
}
//document.onclick = hideCal;
function MM_findObj(n, d) { //v4.0
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && document.getElementById) x=document.getElementById(n); return x;
}

function MM_showHideLayers() { //v3.0
  var i,p,v,obj,args=MM_showHideLayers.arguments;
  for (i=0; i<(args.length-2); i+=3) if ((obj=MM_findObj(args[i]))!=null) { v=args[i+2];
    if (obj.style) { obj=obj.style; v=(v=='show')?'visible':(v='hide')?'hidden':v; }
    obj.visibility=v; }
}
function hide_cal()
{ 
  if (flag==1)
  {
    flag=0;
  	if(!calendar.focus())
    	calendar.style.display='none'
  }
  return false;
}

	document.write("<DIV id=calendar name=calendar onmouseover=keepCal() style=\"display:none;position:absolute; left:0px; top:100px; width:150px; height:225px; z-index:1; visibility: hidden; overflow: visible\">");
	document.write(" <script language=javascript>getCal(0);</script>");
	document.write("</DIV>");
	
/*销售管理系统的 时间段 通用验证函数
*功能：tim1和time2可以不填写，也可以填写，但填写时两个必需都填写并time1不能大于time2
*******************************************/
function dateRegionValidator(formName,time1,time2,message)
{
	if(formName==null || formName=="")
		formName="all";
	time1Value=eval("document."+formName+"."+time1+".value");
	time2Value=eval("document."+formName+"."+time2+".value");

	if((time1Value!=0||time2Value!=0)	&&(time1Value==0||time2Value==0))
	{
		if(time1Value==0)
		{
			alert("请填写开始时间！");
			return false;
		}else{
			alert("请填写结束时间！");
			return false;
		}
	} 
	if(time1Value!=0 && time2Value!=0)
	{
		var temparray=new Array(time1Value.substr(0,4),time1Value.substr(4,2),time1Value.substr(6,2));
		begin_time=new Date(temparray[0],temparray[1]-1,temparray[2]);
		var temparray=new Array(time2Value.substr(0,4),time2Value.substr(4,2),time2Value.substr(6,2));
		end_time=new Date(temparray[0],temparray[1]-1,temparray[2]);
		if(begin_time>end_time)
		{
			alert("开始时间不能大于结束开始时间！");
			return false;
		}
	}
	return true;
}
/*销售管理系统的 时间 验证函数
*功能：录入时间与当前时间对比，以确认有效性，falg=0录入时间必需小于等于当前时间，falg=1录入时间必需大于等于当前时间
*******************************************/
function dateWithSysdateValidator(formName,timeName,flag,message)
{
	if(formName==null || formName=="")
		formName="all";
	
	timeValue=eval("document."+formName+"."+timeName+".value");
	var temparray=new Array(timeValue.substr(0,4),timeValue.substr(4,2),timeValue.substr(6,2));
	input_time=new Date(temparray[0],temparray[1]-1,temparray[2]);
	current_time=new Date();
	if(flag==0 && input_time>current_time)
		{
			alert(message+"不能大于当前时间！");
			return false;
		}
	if(flag==1 && input_time<current_time)
		{
			alert(message+"不能小于当前时间！");
			return false;
		}
	return true;
}
	