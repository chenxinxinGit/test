<%@ page language="java" contentType="text/html; charset=GBK"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<script type="text/javascript" src="./js/ajax.js"> </script>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
</head>
<body>
<script type="text/javascript">
var pagesize=1;
function caInfoSearch(id){
	 var str=window.showModalDialog("/cainfo/"+id+"","","dialogWidth=550px;dialogHeight=400px"); 
}
function addForbidden(id){
	alert(id);
	 var str=window.showModalDialog("/addForbidden/"+id+"","","dialogWidth=550px;dialogHeight=400px"); 
}

</script>
<form name="form" action="post">
<table>

	
  <tr>
     <td>CA序列号</td>
     <td>用户登录名</td>
     <td>生效时间</td>
     <td>失效时间</td>

     <td>操作</td>
  </tr>
  	<c:if test="${infoList != null}">
  		<c:forEach var="info" items="${infoList}" varStatus="vStatus">
  	<tr>
  	  <td><c:out value="${info.ID}" /></td>
  	  <td><c:out value="${info.userName}" /></td>
  	  <td><c:out value="${info.validSince}" /></td>
  	  <td><c:out value="${info.expireSince}" /></td>
  	
  	  <td><input type="button" onclick="caInfoSearch('<c:out value='${info.ID}'/>')" value="查看"/>&nbsp;&nbsp;&nbsp;<input type="button" onclick="addForbidden('<c:out value='${info.ID}'/>')" value="加入黑名单"/></td>
  	</tr>
  	</c:forEach>
 
     <a href="/cainfo/get?size=1&page=0">首页</a><a href="/cainfo/get?size=1&page=<c:out value='${page-1}'/>">上一页</a><a href="/cainfo/get?size=1&page=<c:out value='${page+1}'/>">下一页</a>
  </c:if>  
  
</table>
</form>

</body>
</html>