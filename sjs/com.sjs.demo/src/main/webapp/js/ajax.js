
//给字符串添加trim方法，去字符串两端的空白
String.prototype.trim=function(){
	return this.replace(/(^\s+)|(\s+$)/g,'');
}

/**
 * 参数obj对象中属性说明:
 * url : ajax请求的url，必填。
 * method : ajax请求方式，可选。只支持post、get,默认为get。
 * asyn : 是否异步请求，变量类型boolean，可选。默认为true。
 * data : 可选，默认为空字符串。
 * 		data类型为string时,格式为 "key1=value1&key2=value2&key3=value3..."；
 * 		data类型为objct时,格式为不嵌套的JSON对象。
 * success : 请求成功后回调函数,可选。有一个参数为请求返回的文本。
 * error : 请求异常后回调函数 ,可选。有一个参数为返回的请求异常的HTTP状态码。
 * contentType:设置html请求头的content-type，默认为“application/x-www-form-urlencoded”，一般取默认值。
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
			alert("method只支持GET和POST");
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
			//拼接参数，并使用编码，java，servlet后台会自动解码
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

