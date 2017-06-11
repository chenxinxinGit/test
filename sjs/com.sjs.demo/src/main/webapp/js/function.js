	
/* 
	�������ƣ�isDate()
	�������ܣ��жϴ�������Ƿ�Ϊһ��Ч������
			����ǣ��򷵻�һ����Ӧ�����ڶ���
			������򷵻�false
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
	�������ƣ�isDateTime()
	�������ܣ��жϴ�������Ƿ�Ϊһ��Ч������
			����ǣ��򷵻�һ����Ӧ�����ڶ���
			������򷵻�false
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
	�������ƣ�compDate()
	�������ܣ�2�����ڱȽϴ�С��endDate������startDate, �򷵻�true,���򷵻�false��
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
	�������ƣ�isChinaID()
	�������ܣ�������֤�������ȷ�ԣ���Ϊ�գ�ֻ����15λ����18λ������18λ�����ĩβ��"X"��"x".
			��ȷ�򷵻أ���ǰ�ĺ��룬
			���򷵻أ�FALSE
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
	�������ƣ�isPhone()
	��������: �ж��Ƿ�绰������ʽ
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
	�������ƣ�isMail()
	�������ܣ��ж��Ƿ���ȷ��E-mail��ʽ
*/
function isMail(obj){
	var mail = obj.value;
	if(mail == "" || mail == null)
		return;
	if( mail.match(/^\w{1,}@\w{1,}\.\w{1,}\.{0,1}\w{1,}$/g)==null)
	{
		alert("������� "+mail+ " ����һ����Ч��E-mail�����������룡\n\n��ȷ��ʽ���� xxxx@xxx.xxx\n          �� xxxx@xxx.xxx.xx");
		obj.value = "";
		obj.focus();
		return;
	}
}

/*
	��������: isNumber()
	��������: �ж��Ƿ�����
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
	�������ƣ�isNull()
	�������ܣ�������֤���Ƿ�Ϊ��
*/
function isNull(value){
	if(value=="") return true;
	if(value.match("\\S")==null) return true;
	return false;
}

/*
	�������ƣ�trim
	��������: ȥ���ַ���ͷ����β���Ŀո�
	����������ַ�������
	����������������Ӵ�
*/
function trim(str){
	return str.replace(/(^\s*)|(\s*$)/g, "");
}

/*
	�������ƣ�autoResize()
	�������ܣ�ʵ��iframe��̬����
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
	�������ƣ�showDate()
	�������ܣ������ݿ���YYYYMMDDת��ΪYYYY-MM-DD
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
	�������ƣ�currentDate()
	�������ܣ���ȡ��ǰ����
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
	�������ƣ�onlyNum()
	�������ܣ����Ƽ��̰���ʱֻ��������Ӧ
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
	�������ƣ�formatDate()
	�������ܣ���������������ʽ��ΪYYYY-MM-DD
*/
function formatDate(a)
{
   	var date;
		date = a.substring(0,10);
		return date;
}

/*
	�������ƣ�isReadOnly()
	�������ܣ���select�ؼ���Ϊֻ��
	���������nΪ�ؼ����ƣ�vΪ��Ӧֵ
*/
function isReadOnly(n,v)
{
	n.value = v;
}

/*
	�������ƣ�isNullToZero()
	�������ܣ��жϴ���ؼ���ֵ���Ϊ������0
*/
function isNullToZero(a)
{
	if(trim(a.value) == "")
	{
		a.value = 0;
	}
}

/*
	�������ƣ�enterToTab()
	�������ܣ����س�������ӦΪtab
*/
function enterToTab()
{
	if(event.keyCode == 13)
	{
		event.keyCode = 9;
	}
}

/*
	�������ƣ�fetchTypeCheck()
	�������ܣ����ȡ����ʽ�Ƿ���Ч
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
		alert("������4λ��Чȡ����ʽ!");
		a.focus();
		return false;
	}
	if(document.all.fetch_type_section.value == "")
	{
		//alert("����ѡ��ȡ����ʽ��Χ��");
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
		alert("�������ֵ������Ч��Χ�����������룡\n\n��ǰ��Ч��Χ " + startValue + "��" + endValue);
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
	�������ƣ�dateCheck()
	�������ܣ�����У��YYYY-MM-DD
*/
function dateCheck(a)
{
	if(a.value == "")
		return;
	if(!isDate(a.value))
	{
		alert("1");
		alert("����������� " + a.value + " ��Ч�����������룡\n\n��ȷ���ڸ�ʽ��YYYY-MM-DD");
		a.value = "";
		a.focus();
		return;
	}
}
/*
	�������ƣ�dateCheck2()
	�������ܣ�����У��YYYYMMDD
*/
function dateCheck2(a)
{
	if(a.value == "")
		return;
	var date = a.value.substring(0,4) + "-" + a.value.substring(4,6) + "-" + a.value.substring(6,8);

}
/*
	�������ƣ�dateCheck3()
	�������ܣ�����У��YYYYMM
*/
function dateCheck3(a)
{
	if(a.value == "")
		return;
	var date = a.value.substring(0,4) + "-" + a.value.substring(4,6) + "-01";
	if(!isDate(date))
	{
		alert("3");
		alert("����������� " + a.value + " ��Ч�����������룡\n\n��ȷ���ڸ�ʽ��YYYYMM");
		a.value = "";
		a.focus();
		return;
	}
}

/*
	�������ƣ�notNullCheck()
	�������ܣ���ֵУ��
*/
function notNullCheck(a)
{
	if(trim(a.value) == "")
	{
		alert("�����Ϊ�գ�");
		a.focus();
		return;
	}
}

/*
	�������ƣ�dateText()
	�������ܣ�����һ�������ı��ؼ�
*/
function dateText(textName,textLen)
{
	document.write("<input name=" + textName + " type='text' size=" + textLen + " maxlength='8' onBlur='dateCheck2(this)' title='YYYYMMDD' onDblClick='newCalendar(),showCalendar(this)'>");
}

/*
	�������ƣ�yearAndMonth()
	�������ܣ�����һ�������ı��ؼ�,����Ϊֻ����������
*/
function yearAndMonth(textName,textLen)
{
	document.write("<input name=" + textName + " type='text' size=" + textLen + " maxlength='6' onBlur='dateCheck3(this)' title='YYYYMM' onDblClick='newCalendar(),showCalendar(this)'>");
}

/*
	�������ƣ�formatName()
	�������ܣ���ʽ���������ڵ����м���һ�ո�ֻ����ʾ��
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
    
    //�ж�ʮλ���ȵ����ںϷ���
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
        
    //�жϰ�λ���ȵ����ںϷ���
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

    //�ж���λ���ȵ����ںϷ���
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
 *obj	�ύ��ť�Ķ���
 *flag	��ѯ���ǵ���TXT�ı�־*/
function submitCssForm(obj,flagObj,formObj)
{
		if(obj.name=="submitQuery")
		flagObj.value='00';
		else
		flagObj.value='01';
		formObj.submit()
}

/*
	�������ƣ�dateCheck4()
	�������ܣ�����У��YYYYMMDDHHMISS
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
