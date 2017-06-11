	
/* 
	函数名称：isDate()
	函数功能：判断传入参数是否为一有效的日期
			如果是，则返回一个对应的日期对象
			如果否，则返回false
*/
function isDate(strDate){
	var regYear = "/\d{4}[-/]/g";	//year pattern
	var regMonth;			
	var regDay =  "/\d{1,2}/g";;
	var chrSeperator;
	var arr,str;
	if(strDate.length != 10)
		return false;
	if(strDate.indexOf("-") != 4)
			return false;
	//if(strDate.substring(7,8) !="-")
	//		return false;
	if ((arr = regYear.exec(strDate)) == null) 
		return false;
	var intYearlen = arr.lastIndex - arr.index - 1;
	if (arr.index != 0 || (intYearlen != 4 && intYearlen != 2))
		return false;
	str = arr[0];
	chrSeperator = str.charAt(str.length - 1);  // get the seperator ('-' or '/') 
	intYear = parseInt(str.substr(0, str.length - 1));	// get the year
	if (intYear < 1900 || intYear > 2099)  //Error Year
		return false;

	strDate = strDate.substr(arr.lastIndex);
	if (chrSeperator == "-")
		regMonth = "/\d{1,2}[-]/g";
	else
		regMonth = "/\d{1,2}[/]/g";
	if ((arr = regMonth.exec(strDate)) == null) 
		return false;
	if (arr.index != 0)
		return false;
	str = arr[0];
	if (str.charAt(0) == '0') {
		intMonth = parseInt(str.substr(1, str.length - 2)); // get the month
	} else {
		intMonth = parseInt(str.substr(0, str.length - 1)); // get the month
	}
	if (intMonth < 1 || intMonth > 12) //Error Month
		return false;

	strDate = strDate.substr(arr.lastIndex);

	if ((arr = regDay.exec(strDate)) == null) 
		return false;
	if (arr.index != 0 || arr.lastIndex != strDate.length)
		return false;
	str = arr[0];
	if (str.charAt(0) == '0') {
		intDay = parseInt(str.substr(1, str.length - 1)); // get the day
	} else {
		intDay = parseInt(str); // get the day
	}	
	if (intDay < 1 || intDay > 31)  //Error Day
		return false;

	datDate = new Date(intYear, intMonth - 1, intDay); //Test the Date
	if (isNaN(datDate))  //Error Date Format
		return false;
	if (datDate.getMonth() != intMonth - 1 || datDate.getDate() != intDay)  //invalid date such as '1999/02/29' and '1999/04/31'
		return false;
	
	return datDate;  //Return the Date in parsed format
}



/* 
	函数名称：isDateTime()
	函数功能：判断传入参数是否为一有效的日期
			如果是，则返回一个对应的日期对象
			如果否，则返回false
*/
function isDateTime(strDate,lentgh){
	var regYear = "/\d{4}[-/]/g";	//year pattern
	var regMonth;			
	var regDay =  "/\d{1,2}/g";;
	var chrSeperator;
	var arr,str;
	if(strDate.length != lentgh)
		return false;
	if(strDate.indexOf("-") != 4)
			return false;
	//if(strDate.substring(7,8) !="-")
	//		return false;
	if ((arr = regYear.exec(strDate)) == null) 
		return false;
	var intYearlen = arr.lastIndex - arr.index - 1;
	if (arr.index != 0 || (intYearlen != 4 && intYearlen != 2))
		return false;
	str = arr[0];
	chrSeperator = str.charAt(str.length - 1);  // get the seperator ('-' or '/') 
	intYear = parseInt(str.substr(0, str.length - 1));	// get the year
	if (intYear < 1900 || intYear > 2099)  //Error Year
		return false;

	strDate = strDate.substr(arr.lastIndex);
	if (chrSeperator == "-")
		regMonth = "/\d{1,2}[-]/g";
	else
		regMonth = "/\d{1,2}[/]/g";
	if ((arr = regMonth.exec(strDate)) == null) 
		return false;
	if (arr.index != 0)
		return false;
	str = arr[0];
	if (str.charAt(0) == '0') {
		intMonth = parseInt(str.substr(1, str.length - 2)); // get the month
	} else {
		intMonth = parseInt(str.substr(0, str.length - 1)); // get the month
	}
	if (intMonth < 1 || intMonth > 12) //Error Month
		return false;

	strDate = strDate.substr(arr.lastIndex);

	if ((arr = regDay.exec(strDate)) == null) 
		return false;
	if (arr.index != 0 || arr.lastIndex != strDate.length)
		return false;
	str = arr[0];
	if (str.charAt(0) == '0') {
		intDay = parseInt(str.substr(1, str.length - 1)); // get the day
	} else {
		intDay = parseInt(str); // get the day
	}	
	if (intDay < 1 || intDay > 31)  //Error Day
		return false;

	datDate = new Date(intYear, intMonth - 1, intDay); //Test the Date
	if (isNaN(datDate))  //Error Date Format
		return false;
	if (datDate.getMonth() != intMonth - 1 || datDate.getDate() != intDay)  //invalid date such as '1999/02/29' and '1999/04/31'
		return false;
	
	return datDate;  //Return the Date in parsed format
}

/*
	函数名称：compDate()
	函数功能：2个日期比较大小，endDate不大于startDate, 则返回true,否则返回false。
*/
function compDate(startDate,endDate)
{	
	if(startDate.substring(0,4) > endDate.substring(0,4)){
		return false;
	}
	else if(startDate.substring(0,4) == endDate.substring(0,4)){
		if(startDate.substring(5,7) > endDate.substring(5,7)){
			return false;
		}
		else if(startDate.substring(5,7) == endDate.substring(5,7)){
			if(startDate.substring(8,startDate.length) > endDate.substring(8,startDate.length)){
				return false;
			}
			else{
				return true;
			}
		}
		else{
			return true;
		}
	}
	else{
		return true;
	}
}

/*
	函数名称：isChinaID()
	函数功能：检查身份证号码的正确性，不为空，只接受15位或是18位，允许18位号码的末尾有"X"和"x".
			正确则返回：当前的号码，
			否则返回：FALSE
*/
function isChinaID(strItem)
{
	if (strItem == "" || strItem==null){
		return false;
	}
	if (typeof(strItem)!='string'){
		return false;
	}
	if (strItem.length == 15) {
	      return this.isLegalString(strItem,"0123456789");
	} else if (strItem.length == 18) {
	      var lastchar = strItem.substring(17,18);
	      return ( this.isLegalString(strItem.substring(0,17),"0123456789") && (this.isLegalString(lastchar,"0123456789Xx")) );
	} else {
		return false;
	}
}
function isLegalString(InString,RefString){
	if(InString.length==0) return (false);
	for (i=0; i < InString.length; i++)  
	{
		TempChar= InString.substring (i, i+1);
			if (RefString.indexOf (TempChar, 0)==-1)  
					return (false);
	}
	return true;
}

/*
	函数名称：isPhone()
	函数功能: 判断是否电话号码形式
*/
function isPhone(str){
	var intIndex;
	var intCharCount;
	for(intIndex = 0; intIndex < str.length; intIndex++){
		if(str.charCodeAt(intIndex) < 32)
			return false;
		if(str.charCodeAt(intIndex) == 34)
			return false;
		if(str.charCodeAt(intIndex) == 39)
			return false;
		if(str.charCodeAt(intIndex) > 126)
			return false;
	}
	return true;
}

/*
	函数名称：isMail()
	函数功能：判断是否正确的E-mail格式
*/
function isMail(obj){
	var mail = obj.value;
	if(mail == "" || mail == null)
		return;
	if( mail.match(/^\w{1,}@\w{1,}\.\w{1,}\.{0,1}\w{1,}$/g)==null)
	{
		alert("你输入的 "+mail+ " 不是一个有效的E-mail，请重新输入！\n\n正确格式：① xxxx@xxx.xxx\n          ② xxxx@xxx.xxx.xx");
		obj.value = "";
		obj.focus();
		return;
	}
}

/*
	函数名称: isNumber()
	函数功能: 判断是否数字
*/
function isNumber(value){
	if(!isNaN(value))
	{
		 return true;
  }
	else{
	   return false;
	}
}

/*
	函数名称：isNull()
	函数功能：数据验证：是否为空
*/
function isNull(value){
	if(value=="") return true;
	if(value.match("\\S")==null) return true;
	return false;
}

/*
	函数名称：trim
	函数功能: 去除字符串头部和尾部的空格
	传入参数：字符串变量
	传出结果：处理后的子串
*/
function trim(str){
	return str.replace(/(^\s*)|(\s*$)/g, "");
}

/*
	函数名称：autoResize()
	函数功能：实现iframe动态增长
*/
function autoResize(target)
{
	if(target == null || target == "")
		target = "WLT_SELCET";
	try
	{
		document.all[target].style.height=eval(target+".document.body.scrollHeight");
	}
	catch(e){}
}

/*
	函数名称：showDate()
	函数功能：将数据库中YYYYMMDD转换为YYYY-MM-DD
*/
function showDate(data)
{
	var newdate = "";
	if(data == "")
		newdate = "";
	else
	{
		newdate = data.substring(0,4) + "-" + data.substring(4,6) + "-" + data.substring(6,data.length);
	}
	return newdate;
}

/*
	函数名称：currentDate()
	函数功能：获取当前日期
*/
function currentDate()
{
			var today;
			var now = new Date();
			year = now.getYear().toString();
			month = (now.getMonth()+1).toString();
			day = now.getDate().toString();
			if(month.length==1)
				month = "0"+month;
			if(day.length==1)
				day = "0"+day;
			today=year+month+day;
			return today;
}

/*
	函数名称：onlyNum()
	函数功能：控制键盘按下时只对数字响应
*/
/*function  onlyNum()
{
	if(!((event.keyCode>=48&&event.keyCode<=57)||(event.keyCode>=96&&event.keyCode<=105)||(event.keyCode==8) || (event.keyCode==9)))
	{
		event.returnValue=false;
	}
}*/
function onlyNum(obj)
{
	var num=trim(obj.value);
	while(isNaN(num))
	{
		num = num.substring(0,num.length-1);
	}	
	obj.value = num;
}

/*
	函数名称：formatDate()
	函数功能：将传入参数输出格式化为YYYY-MM-DD
*/
function formatDate(a)
{
   	var date;
		date = a.substring(0,10);
		return date;
}

/*
	函数名称：isReadOnly()
	函数功能：将select控件设为只读
	传入参数：n为控件名称，v为对应值
*/
function isReadOnly(n,v)
{
	n.value = v;
}

/*
	函数名称：isNullToZero()
	函数功能：判断传入控件的值如果为空则置0
*/
function isNullToZero(a)
{
	if(trim(a.value) == "")
	{
		a.value = 0;
	}
}

/*
	函数名称：enterToTab()
	函数功能：将回车动作响应为tab
*/
function enterToTab()
{
	if(event.keyCode == 13)
	{
		event.keyCode = 9;
	}
}

/*
	函数名称：fetchTypeCheck()
	函数功能：检查取卡方式是否有效
*/
function fetchTypeCheck(a)
{
	var enterValue = a.value;
	var b=a.name;
	var ft = "";
	var startValue = "";
	var endValue = "";
	if(enterValue == "")
	{
		return false;
	}
	if(enterValue.length!=4)
	{
		alert("请输入4位有效取卡方式!");
		a.focus();
		return false;
	}
	if(document.all.fetch_type_section.value == "")
	{
		//alert("请先选择取卡方式范围！");
		//document.all.fetch_type.value = "";
		//document.all.fetch_type_section.focus();
		//return false;
		return true;
	}
	ft = document.all.fetch_type_section.options[document.all.fetch_type_section.selectedIndex].innerHTML;
	ft = ft.substring(ft.length-10,ft.length-1);
	startValue = ft.substring(0,4);
	endValue = ft.substring(5,ft.length);
	if(enterValue<startValue || enterValue>endValue || enterValue.length!=4)
	{
		alert("您输入的值超出有效范围，请重新输入！\n\n当前有效范围 " + startValue + "～" + endValue);
		a.value="";
		eval("document.all."+b+".focus()");
		return false;
	}
}

function isEnterValue(a)
{
	if(trim(a.value) == "")
		document.all.tempNum.value = parseInt(document.all.tempNum.value) - 1;
	else
		document.all.tempNum.value = parseInt(document.all.tempNum.value) + 1;
}

/*
	函数名称：dateCheck()
	函数功能：日期校验YYYY-MM-DD
*/
function dateCheck(a)
{
	if(a.value == "")
		return;
	if(!isDate(a.value))
	{
		alert("1");
		alert("您输入的日期 " + a.value + " 无效，请重新输入！\n\n正确日期格式：YYYY-MM-DD");
		a.value = "";
		a.focus();
		return;
	}
}
/*
	函数名称：dateCheck2()
	函数功能：日期校验YYYYMMDD
*/
function dateCheck2(a)
{
	if(a.value == "")
		return;
	var date = a.value.substring(0,4) + "-" + a.value.substring(4,6) + "-" + a.value.substring(6,8);

}
/*
	函数名称：dateCheck3()
	函数功能：日期校验YYYYMM
*/
function dateCheck3(a)
{
	if(a.value == "")
		return;
	var date = a.value.substring(0,4) + "-" + a.value.substring(4,6) + "-01";
	if(!isDate(date))
	{
		alert("3");
		alert("您输入的日期 " + a.value + " 无效，请重新输入！\n\n正确日期格式：YYYYMM");
		a.value = "";
		a.focus();
		return;
	}
}

/*
	函数名称：notNullCheck()
	函数功能：空值校验
*/
function notNullCheck(a)
{
	if(trim(a.value) == "")
	{
		alert("该项不能为空！");
		a.focus();
		return;
	}
}

/*
	函数名称：dateText()
	函数功能：生成一个日期文本控件
*/
function dateText(textName,textLen)
{
	document.write("<input name=" + textName + " type='text' size=" + textLen + " maxlength='8' onBlur='dateCheck2(this)' title='YYYYMMDD' onDblClick='newCalendar(),showCalendar(this)'>");
}

/*
	函数名称：yearAndMonth()
	函数功能：生成一个日期文本控件,限制为只可输入年月
*/
function yearAndMonth(textName,textLen)
{
	document.write("<input name=" + textName + " type='text' size=" + textLen + " maxlength='6' onBlur='dateCheck3(this)' title='YYYYMM' onDblClick='newCalendar(),showCalendar(this)'>");
}

/*
	函数名称：formatName()
	函数功能：格式化姓名，在单名中加入一空格，只做显示用
*/
function formatName(name)
{
   	var rName = name;
   	if(name.length == 2)
	{
		rName = name.substring(0,1) + "&nbsp;&nbsp;" + name.substring(1,2);
	}
	return rName;
}


function CheckSingleDate(date,length)
{
    if(isNumber(date)==false){
	  return false;
	}
    var tmpYear ='';
    var tmpMonth='';
    var tmpDay  ='';
    
    if(date.length==0)
        return true;
    if(date.length!=10 && date.length!=8 && date.length!=6)
        return false;
    
    //判断十位长度的日期合法性
    if(date.length==10)
    {
        tmpYear =date.substring(0,4);
        tmpMonth=date.substring(5,7);
        tmpDay  =date.substring(8,10);
        
        if(tmpYear < 1900 || tmpYear > 2100)
            return false;  
        if(tmpMonth < 1 || tmpMonth > 12)
            return false;
        if(tmpDay < 01 || tmpDay > 31)
            return false;
        if(tmpMonth==04 || tmpMonth==06 || tmpMonth==09 || tmpMonth==11)
        {
            if(tmpDay > 30 || tmpDay < 01)
                return false;
        }
        else if(tmpMonth==02)
        {
            if(tmpYear%4 ==0 && tmpYear%100 != 0)
            {
                if(tmpDay>=29)
                    return false;
            }
            else if(tmpDay>=28)
                return false;
        }
        return true;
    }
        
    //判断八位长度的日期合法性
    else if(date.length==8)
    {
        tmpYear =date.substring(0,4);
        tmpMonth=date.substring(4,6);
        tmpDay  =date.substring(6,8);
        if(tmpYear < 1900 || tmpYear > 2100)
            return false;  
        if(tmpMonth < 1 || tmpMonth > 12)
            return false;
        if(tmpDay < 01 || tmpDay > 31)
            return false;
        if(tmpMonth==04 || tmpMonth==06 || tmpMonth==09 || tmpMonth==11)
        {
            if(tmpDay > 30 || tmpDay < 01)
                return false;
        }
        else if(tmpMonth==02)
        {
            if(tmpYear%4 ==0 && tmpYear%100 != 0)
            {
                if(tmpDay>29)
                    return false;
            }
            else if(tmpDay>28)
                return false;
        }
        return true;
    }

    //判断六位长度的日期合法性
    else if(date.length==6)
    {
        tmpYear =date.substring(0,4);
        tmpMonth=date.substring(4,6);
        if(tmpYear < 1900 || tmpYear > 2100)
            return false;  
        if(tmpMonth < 1 || tmpMonth > 12)
            return false;
    }        
    
    return true;
}
/*
 *obj	提交按钮的对象
 *flag	查询还是导出TXT的标志*/
function submitCssForm(obj,flagObj,formObj)
{
		if(obj.name=="submitQuery")
		flagObj.value='00';
		else
		flagObj.value='01';
		formObj.submit()
}

/*
	函数名称：dateCheck4()
	函数功能：日期校验YYYYMMDDHHMISS
*/
function dateCheck4(vDate)
{
	if(vDate == "" || vDate.length!=14)
		return false;
	var date = vDate.substring(0,4) + "-" + vDate.substring(4,6) + "-" + vDate.substring(6,8);
	if(!isDate(date))
	{
		return false;
	}
	
	var hh = vDate.substring(8,10);
	if(isNaN(hh) || hh<0 || hh>23){
		return false;
	}
	
	var mi = vDate.substring(10,12);
	if(isNaN(mi) || mi<0 || mi>59){
		return false;
	}
	
	var ss = vDate.substring(12,14);
	if(isNaN(ss) || ss<0 || ss>59){
		return false;
	}
	
	return true;
}
