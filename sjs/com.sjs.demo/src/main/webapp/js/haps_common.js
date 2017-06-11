/***************************************************
 * ��������:isNumber()
 * ��������:�ж��Ƿ�Ϊ����
 * ����˵��:num      -- �������
 * �� �� ֵ:�ɹ�--1
 *          ʧ��--0
 **************************************************/
function isNumber(num){
    var i,j,strTemp;
	strTemp="0123456789";
	if ( num.length== 0)
		return 0
	for (i=0;i<num.length;i++) {
		j=strTemp.indexOf(num.charAt(i)); 
		if (j==-1){
			//˵�����ַ���������
			return 0;
		}
	}
 //˵��������
 return 1;
}

/***************************************************
 * ��������:isNumber()
 * ��������:�ж��Ƿ�Ϊ����
 * ����˵��:num      -- �������
 * �� �� ֵ:�ɹ�--1
 *          ʧ��--0
 **************************************************/
function isMoney(num){
    var i,j,strTemp;
	strTemp="0123456789.";
	if ( num.length== 0)
		return 0
	for (i=0;i<num.length;i++) {
		j=strTemp.indexOf(num.charAt(i)); 
		if (j==-1){
			//˵�����ַ���������
			return 0;
		}
	}
 //˵��������
 return 1;
}

/***************************************************
 * ��������:trimstr()
 * ��������:ȥ���ַ����еĿո�
 * ����˵��:str      -- �������
 **************************************************/
function trimstr(str){
  return str.replace(/(^\s*)|(\s*$)/g, "");
}

/***************************************************
 * ��������:isDate()
 * ��������:�ж��Ƿ�Ϊ���ڸ�ʽ20050928
 * ����˵��:temp      -- �������
 * �� �� ֵ:�ɹ�--1
 *          ʧ��--0
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
 * ��������:CheckDoubleDate()
 * ��������:�ж����ںϷ���
 * ����˵��:BeginDate      -- ��ʼ����
 *          EndDate		   -- ��������
 * �� �� ֵ:�ɹ�--true
 *          ʧ��--false
 **************************************************/
function CheckDoubleDate(BeginDate,EndDate)
{
    var BackCode;
    if(BeginDate.length != EndDate.length && BeginDate.length!=0 && EndDate.length!=0)
    {
        alert('��ʼ���ںͽ������ڸ�ʽ��һ�£����������룡');
        return false;
    }    
    BackCode = CheckSingleDate(BeginDate);
    if(BackCode == false)
    {
        alert('��ʼ���ڲ��Ϸ�');
        return false;
    }
    BackCode = CheckSingleDate(EndDate);
    if(BackCode == false)
    {
        alert('�������ڲ��Ϸ�');
        return false;
    }    
    if(BeginDate>EndDate && EndDate.length!=0)
    {
        alert('��������Ӧ���ڻ���ڿ�ʼ����');
        return false;
    }
    
    if(document.formA.alarm_flag[1].checked)
    {
	    if(document.formA.alarm_date.value == '')
	    {
	        alert('��ѡ������Ҫ����,�������ڲ���Ϊ�գ�');
	        return false;
	    }
    }

    if(document.formA.alarm_date.value > document.formA.camp_edtime.value)
    {
        alert('�������ڲ��ܴ��ڽ������ڣ�');
        return false;
    }
    backcode=CheckTextArea(document.formA.camp_record.value,200,"�ƻ�����"); 
    if(backcode==false)
        return false;
       
    return true;
}

function CheckInputData(){
    backcode=CheckTextArea(document.formA.act_record.value,200,'���¼');
    if(backcode==false)
        return false; 
    backcode=CheckTextArea(document.formA.act_desc.value,200,'�����');
    if(backcode==false)
        return false; 
}

/***************************************************
 * ��������:CheckTextArea()
 * ��������:���textarea��������������
 * ����˵��:content      -- �������
 *          content_len  -- ��󳤶�
 *          field_name   -- ����
 * �� �� ֵ:�ɹ�--true
 *          ʧ��--false
 **************************************************/
function CheckTextArea(content,content_len,field_name)
{
    if(content.length>content_len)
    {
        alert(field_name+'���������ܳ���'+content_len+'��!');
        return false;
    }
    return true;
}

/***************************************************
 * ��������:CheckSingleDate()
 * ��������:��������Ƿ���ϸ�ʽ
 * ����˵��:date		 -- �������
 * �� �� ֵ:�ɹ�--true
 *          ʧ��--false
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

       /*************************************************************
        ** �������ƣ�getCurrTime()                              *****
        ** �������ܣ���������ʽȡ��ǰʱ��                       *****
        ** ��    ��������ʱ��ĸ�ʽ��ϵͳ�ṩ���¸�ʽ��         *****
        **           YYYYMMDD,yyyymmdd,YYYY-MM-DD,yyyy-mm-dd    *****
        **           YYYYMMDDHHMMSS,YYYY-MM-DD HH:MM:SS ��      *****
        ** ��    �أ����ظ�ʽҪ���ʱ��                         *****
        ** ��    �ߣ�sunronghua                                 *****
        *************************************************************/
	function getCurrTime(format)
	{
	    var now   = new Date();          //ȡ��ϵͳʱ��
	    var year  = now.getYear();       //��
	    var month = now.getMonth() + 1;  //��,�·���Ҫ��һ
	    var day   = now.getDate();       //��		
	    var week  = now.getDay();        //���ڼ�
	    var hour  = now.getHours();      //Сʱ
	    var min   = now.getMinutes();    //����
	    var sec   = now.getSeconds();    //��
	    var longTime = now.getTime();    //long�͵�ǰʱ��
	    var currTime="";  
	
	    var tmp = new String(year);
		year = tmp;

	    //����·ݲ�����λ������λ
	    tmp = new String(month);
	    if(tmp.length < 2)
	    {
	        tmp = "0" + tmp;
	        month = tmp;
	    }
	    
	    //������ڲ�����λ������λ
	    tmp = new String(day);
	    if(tmp.length < 2)
	    {
	        tmp = "0" + tmp;
	        day = tmp;
	    }
	    
	    //���Сʱ������λ������λ
	    tmp = new String(hour);
	    if(tmp.length < 2)
	    {
	        tmp = "0" + tmp;
	        hour = tmp;
	    }
	    
	    //������Ӳ�����λ������λ
	    tmp = new String(min);
	    if(tmp.length < 2)
	    {
	        tmp = "0" + tmp;
	        min = tmp;
	    }
	    
	    //����벻����λ������λ
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