<%@ page language="java" contentType="text/html; charset=utf-8"%>  
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">  
<html>  
<head>  
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">  
<meta name="keywords" content="jquery,ui,easy,easyui,web">  
<meta name="description"  
    content="easyui help you build your web page easily!">  
<title>用户管理</title>  
<script type="text/javascript" src="/js/ajax.js"> </script>
  
<script type="text/javascript">
function idDesc(){
	alert("idDesc");
	var applyDate = {};
	applyDate.page = 1;
	applyDate.rows = 2;
	applyDate.sort = "ID";
	applyDate.order = "desc";
	doAjax({
		url : "/addForbidden/",
		method : "get",
		data : applyDate,
		success : function(date){
			document.getElementById("username").value=date;
		},
		error : function (date){
			alert("http错误："+date);
		}
	});
}
function idAsc(){
	alert("idDesc");
	var applyDate = {};
	applyDate.page = 1;
	applyDate.rows = 2;
	applyDate.sort = "ID";
	applyDate.order = "asc";
	doAjax({
		url : "/addForbidden/",
		method : "get",
		data : applyDate,
		success : function(date){
		
			document.getElementById("username").value=date;
		},
		error : function (date){
			alert("http错误："+date);
		}
	});
}
</script>
</head>  
<body>  
   <input type="button" value="ID升序" onclick="idAsc()"/>
   <input type="button" value="ID降序" onclick="idDesc()"/>
   <textarea name="username" id="username" rows="20"  cols="60" readonly/>
</body>  
</html> 