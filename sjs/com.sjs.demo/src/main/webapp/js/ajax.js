
//���ַ������trim������ȥ�ַ������˵Ŀհ�
String.prototype.trim=function(){
	return this.replace(/(^\s+)|(\s+$)/g,'');
}

/**
 * ����obj����������˵��:
 * url : ajax�����url�����
 * method : ajax����ʽ����ѡ��ֻ֧��post��get,Ĭ��Ϊget��
 * asyn : �Ƿ��첽���󣬱�������boolean����ѡ��Ĭ��Ϊtrue��
 * data : ��ѡ��Ĭ��Ϊ���ַ�����
 * 		data����Ϊstringʱ,��ʽΪ "key1=value1&key2=value2&key3=value3..."��
 * 		data����Ϊobjctʱ,��ʽΪ��Ƕ�׵�JSON����
 * success : ����ɹ���ص�����,��ѡ����һ������Ϊ���󷵻ص��ı���
 * error : �����쳣��ص����� ,��ѡ����һ������Ϊ���ص������쳣��HTTP״̬�롣
 * contentType:����html����ͷ��content-type��Ĭ��Ϊ��application/x-www-form-urlencoded����һ��ȡĬ��ֵ��
 * @author ex_kjkfb_liuzx
 */
function doAjax(obj){
	var xmlHttp;
	var sUrl;
	var sMethod = "GET";
	var bAsyn=true;
	var oData="";
	if(window.XMLHttpRequest)
		xmlHttp=new XMLHttpRequest();
	else
		xmlHttp=new ActiveXObject("Microsoft.XMLHTTP");
	
	xmlHttp.onreadystatechange=function(){
		if(xmlHttp.readyState==4 ){
			if(xmlHttp.status==200){
				if(typeof obj.success=="function"){
					var fSuccess=obj.success;
					var respTxt=xmlHttp.responseText;
					fSuccess(respTxt.trim());
				}
			}else{
				if(typeof obj.error=="function"){
					var fError=obj.error;
					fError(xmlHttp.status);
				}
			}
		}
	}
	
	if(typeof obj.method=="string"){
		sMethod = obj.method.toUpperCase();
		if (sMethod != "GET" && sMethod != "POST") {
			alert("methodֻ֧��GET��POST");
			return;
		}
	}

	if(typeof obj.url=="string"){
		sUrl=obj.url;
	}
	if( typeof obj.asyn =="boolean"){
		bAsyn=obj.asyn
	}
	
	
	
	if(typeof obj.data=="string"){
		oData=obj.data;
	}else if(typeof obj.data=="object"){
		var beforeExist=false;
		for (var v in obj.data){
			if(beforeExist)
				oData+="&";
			//ƴ�Ӳ�������ʹ�ñ��룬java��servlet��̨���Զ�����
			oData+=(v+"="+encodeURIComponent(obj.data[v]));
			beforeExist=true;
		}
	}
	if(sMethod=="GET")
		sUrl+=("?"+oData);
	xmlHttp.open(sMethod,sUrl,bAsyn);

	var sContentType="application/x-www-form-urlencoded;charset=UTF-8";
	if(typeof obj.contentType=="string" && obj.contentType!=""){
		sContentType=obj.contentType;
	}
	xmlHttp.setRequestHeader("content-type",sContentType);
	if(sMethod=="POST"){
		xmlHttp.send(oData);
	}else {
		xmlHttp.send();
	}
}

