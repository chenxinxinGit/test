<%@ page language="java" contentType="text/html; charset=UTF-8"
   pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
</head>
<body>
<form name="form1" method="post">
<table>
<tr>
   <td>CA序列号:<input type="text" name="ID" id="ID" value="${CaforbinddenList.ID}" readonly="readonly"/></td>
     <td>创建人:<input type="text" name="createUser" id="createUser" value="${CaforbinddenList.createUser}" readonly="readonly"/></td>
     <td>生效时间:<input type="text"  name="forbiddenSince" id="forbiddenSince"  /></td>
</tr>
</table>
<input type="button" onclick="add()" value="确定"/>  <input type="button" value="关闭" onclick="exit()"/>
</form>
</body>
<script type="text/javascript">
function exit(){
	window.close();
}
    function add(){
  
    
    	var since = document.getElementById("forbiddenSince").value;
    	var id =  document.getElementById("ID").value;
    	if (since == "" ) {
			alert("失效时间不能为空");
			return;
		}
    	  document.form1.action="/addForbidden/";
		  document.form1.submit();
    }
</script>
</html>