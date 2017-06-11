/***************************************************
 * 函数名称:isNumber()
 * 函数功能:判断是否为数字
 * 参数说明:num      -- 检测内容
 * 返 回 值:成功--1
 *          失败--0
 **************************************************/
function isNumber(num){
    var i,j,strTemp;
	strTemp="0123456789";
	if ( num.length== 0)
		return 0
	for (i=0;i<num.length;i++) {
		j=strTemp.indexOf(num.charAt(i)); 
		if (j==-1){
			//说明有字符不是数字
			return 0;
		}
	}
 //说明是数字
 return 1;
}

/***************************************************
 * 函数名称:isNumber()
 * 函数功能:判断是否为数字
 * 参数说明:num      -- 检测内容
 * 返 回 值:成功--1
 *          失败--0
 **************************************************/
function isMoney(num){
    var i,j,strTemp;
	strTemp="0123456789.";
	if ( num.length== 0)
		return 0
	for (i=0;i<num.length;i++) {
		j=strTemp.indexOf(num.charAt(i)); 
		if (j==-1){
			//说明有字符不是数字
			return 0;
		}
	}
 //说明是数字
 return 1;
}

/***************************************************
 * 函数名称:trimstr()
 * 函数功能:去除字符串中的空格
 * 参数说明:str      -- 检测内容
 **************************************************/
function trimstr(str){
  return str.replace(/(^\s*)|(\s*$)/g, "");
}

/***************************************************
 * 函数名称:isDate()
 * 函数功能:判断是否为日期格式20050928
 * 参数说明:temp      -- 检测内容
 * 返 回 值:成功--1
 *          失败--0
 **************************************************/
function isDate(temp){
    var year,month,date;
	year = temp.substring(0,2);
	month = temp.substring(4,6);
	date = temp.substring(6,8);
	if (year != "20" && year != "19"){
		return 0;
	}
	else if(month < 1 || month > 12){
		return 0;
	}
	else if(date <1 || date >31){
		return 0;
	}
	else{
		return 1;
	}
}


/***************************************************
 * 函数名称:CheckDoubleDate()
 * 函数功能:判断日期合法性
 * 参数说明:BeginDate      -- 开始日期
 *          EndDate		   -- 结束日期
 * 返 回 值:成功--true
 *          失败--false
 **************************************************/
function CheckDoubleDate(BeginDate,EndDate)
{
    var BackCode;
    if(BeginDate.length != EndDate.length && BeginDate.length!=0 && EndDate.length!=0)
    {
        alert('起始日期和结束日期格式不一致，请重新输入！');
        return false;
    }    
    BackCode = CheckSingleDate(BeginDate);
    if(BackCode == false)
    {
        alert('起始日期不合法');
        return false;
    }
    BackCode = CheckSingleDate(EndDate);
    if(BackCode == false)
    {
        alert('结束日期不合法');
        return false;
    }    
    if(BeginDate>EndDate && EndDate.length!=0)
    {
        alert('结束日期应大于或等于开始日期');
        return false;
    }
    
    if(document.formA.alarm_flag[1].checked)
    {
	    if(document.formA.alarm_date.value == '')
	    {
	        alert('您选择了需要提醒,提醒日期不能为空！');
	        return false;
	    }
    }

    if(document.formA.alarm_date.value > document.formA.camp_edtime.value)
    {
        alert('提醒日期不能大于结束日期！');
        return false;
    }
    backcode=CheckTextArea(document.formA.camp_record.value,200,"计划描述"); 
    if(backcode==false)
        return false;
       
    return true;
}

function CheckInputData(){
    backcode=CheckTextArea(document.formA.act_record.value,200,'活动记录');
    if(backcode==false)
        return false; 
    backcode=CheckTextArea(document.formA.act_desc.value,200,'活动主题');
    if(backcode==false)
        return false; 
}

/***************************************************
 * 函数名称:CheckTextArea()
 * 函数功能:检查textarea框的最大输入限制
 * 参数说明:content      -- 检测内容
 *          content_len  -- 最大长度
 *          field_name   -- 域名
 * 返 回 值:成功--true
 *          失败--false
 **************************************************/
function CheckTextArea(content,content_len,field_name)
{
    if(content.length>content_len)
    {
        alert(field_name+'域字数不能超过'+content_len+'字!');
        return false;
    }
    return true;
}

/***************************************************
 * 函数名称:CheckSingleDate()
 * 函数功能:检查日期是否符合格式
 * 参数说明:date		 -- 检测内容
 * 返 回 值:成功--true
 *          失败--false
 **************************************************/
function CheckSingleDate(date)
{
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
            if((tmpYear%4 ==0 && tmpYear%100 != 0) || tmpYear%400==0)
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
            if((tmpYear%4 ==0 && tmpYear%100 != 0) || tmpYear%400==0)
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

       /*************************************************************
        ** 函数名称：getCurrTime()                              *****
        ** 函数功能：按参数格式取当前时间                       *****
        ** 参    数：返回时间的格式，系统提供如下格式：         *****
        **           YYYYMMDD,yyyymmdd,YYYY-MM-DD,yyyy-mm-dd    *****
        **           YYYYMMDDHHMMSS,YYYY-MM-DD HH:MM:SS 等      *****
        ** 返    回：返回格式要求的时间                         *****
        ** 作    者：sunronghua                                 *****
        *************************************************************/
	function getCurrTime(format)
	{
	    var now   = new Date();          //取得系统时间
	    var year  = now.getYear();       //年
	    var month = now.getMonth() + 1;  //月,月份需要加一
	    var day   = now.getDate();       //日		
	    var week  = now.getDay();        //星期几
	    var hour  = now.getHours();      //小时
	    var min   = now.getMinutes();    //分钟
	    var sec   = now.getSeconds();    //秒
	    var longTime = now.getTime();    //long型当前时间
	    var currTime="";  
	
	    var tmp = new String(year);
		year = tmp;

	    //如果月份不足两位则补足两位
	    tmp = new String(month);
	    if(tmp.length < 2)
	    {
	        tmp = "0" + tmp;
	        month = tmp;
	    }
	    
	    //如果日期不足两位则补足两位
	    tmp = new String(day);
	    if(tmp.length < 2)
	    {
	        tmp = "0" + tmp;
	        day = tmp;
	    }
	    
	    //如果小时不足两位则补足两位
	    tmp = new String(hour);
	    if(tmp.length < 2)
	    {
	        tmp = "0" + tmp;
	        hour = tmp;
	    }
	    
	    //如果分钟不足两位则补足两位
	    tmp = new String(min);
	    if(tmp.length < 2)
	    {
	        tmp = "0" + tmp;
	        min = tmp;
	    }
	    
	    //如果秒不足两位则补足两位
	    tmp = new String(sec);
	    if(tmp.length < 2)
	    {
	        tmp = "0" + tmp;
	        sec = tmp;
	    }	
	    if(format == "YYYYMMDD" || format == "yyyymmdd")
	        currTime = year + month + day;
	    else if(format == "YYYY-MM-DD" || format == "yyyy-mm-dd")
                currTime = year + "-" + month + "-" + day;
            else if(format == "YYYY/MM/DD" || format == "yyyy/mm/dd")
                currTime = year + "/" + month + "/" + day;
            else if(format == "MMDDYYYY" || format == "mmddyyyy")
	        currTime = month + day + year;
	    else if(format == "MM-DD-YYYY" || format == "mm-dd-yyyy")
                currTime = month + "-" + day + "-" + year;
            else if(format == "MM/DD/YYYY" || format == "mm/dd/yyyy")
                currTime = month + "/" + day + "/" + year;
            else if(format == "YYYYMMDDHHMMSS" || format == "yyyymmddhhmmss")
	        currTime = year + month + day + hour + min + sec;
	    else if(format == "YYYY-MM-DD HH:MM:SS" || format == "yyyy-mm-dd hh:mm:ss")
	        currTime = year + "-" + month + "-" + day + " " + hour + ":" + min + ":" + sec;
	    else if(format == "HH:MM:SS" || format == "hh:mm:ss")
	        currTime = hour + ":" + min + ":" + sec;
	    else if(format == "long")
	        currTime = longTime;
        else
            currTime = "format error!";
            	    
        return currTime;
	}