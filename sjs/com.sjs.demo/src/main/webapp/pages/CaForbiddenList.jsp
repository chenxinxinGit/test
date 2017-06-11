<%@ page language="java" contentType="text/html; charset=GBK"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<script type="text/javascript" src="/js/ajax.js"> </script>
<link rel="stylesheet" type="text/css"  
    href="/js/easyui.css">  
<link rel="stylesheet" type="text/css" href="/js/icon.css">  
<link rel="stylesheet" type="text/css" href="/js/demo.css">  
<script type="text/javascript" src="/js/jquery.min.js"></script>  
<script type="text/javascript" src="/js/jquery.easyui.min.js"></script>  
<script type="text/javascript" src="/js/easyui-lang-zh_CN.js"></script>  
<style type="text/css">  
#fm {  
    margin: 0;  
    padding: 10px 30px;  
}  
  
.ftitle {  
    font-size: 14px;  
    font-weight: bold;  
    color: #666;  
    padding: 5px 0;  
    margin-bottom: 10px;  
    border-bottom: 1px solid #ccc;  
}  
  
.fitem {  
    margin-bottom: 5px;  
}  
  
.fitem label {  
    display: inline-block;  
    width: 80px;  
}  
</style>  
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
</head>
<body>
<script type="text/javascript">  

    
    var pagesize=1;
    function caForbiddenSearch(id){
    	 var str=window.showModalDialog("/cainfo/"+id,"","dialogWidth=550px;dialogHeight=400px"); 
    }
    function caForbiddenDelete(id){
    	  document.form1.action="/addForbidden/"+id;
    	  document.form1.submit();
    }
</script>  

<form name="form1" method="post">
<table>

  <tr>
     <td>CA序列号</td>
     <td>黑名单生效时间</td>
     <td>创建时间</td>
     <td>创建人ID</td>
     <td>最后修改时间</td>
     <td>最后修改人ID</td>
     <td>状态</td>
     <td>操作</td>
  </tr>
  	<c:if test="${caForbiddenList != null}">
  		<c:forEach var="info" items="${caForbiddenList}" varStatus="vStatus">
  	<tr>
  	  <td><c:out value="${info.ID}" /></td>
  	  <td><c:out value="${info.forbiddenSince}" /></td>
  	  <td><c:out value="${info.createTime}" /></td>
  	  <td><c:out value="${info.createUser}" /></td>
  	<td><c:out value="${info.lastUpdateTime}" /></td>
  	<td><c:out value="${info.lastUpdateuser}" /></td>
  	<td><c:out value="${info.rowState}" /></td>
  	  <td><input type="button" onclick="caForbiddenSearch('<c:out value='${info.ID}'/>')" value="查看"/> <input type="button" onclick="caForbiddenDelete('<c:out value='${info.ID}'/>')" value="删除"/></td>
  	</tr>
  	</c:forEach>

 </c:if>  
  
</table>
    <div class="easyui-panel">
		<div class="easyui-pagination" data-options="total:114"></div>
	</div>
     <a href="/addForbidden/get?size=1&page=0">首页</a><a href="/addForbidden/get?size=1&page=<c:out value='${page-1}'/>">上一页</a><a href="/addForbidden/get?size=1&page=<c:out value='${page+1}'/>">下一页</a>
 
</form>
</body>
</html>