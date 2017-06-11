<%@ page language="java" contentType="text/html; charset=GBK"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<script type="text/javascript" src="./js/ajax.js"> </script>
<script language="javascript" src="./JS/js_dateController.js"></script>
<script language="javascript" src="./JS/downlist_datasource.js"></script>
<script language="javascript" src="./JS/haps_common.js"></script>
<script language="javascript" src="./JS/tds_show_hint.js"></script>
<script language="javascript" src="./JS/js/function.js"></script>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
</head>
<body>
<form name="form" action="post">
<table>
  <tr> 
     <td>CA序列号:<input type="text" value="${info.ID}" readonly="readonly"/></td>
     <td>用户登录名:<input type="text" value="${info.userName}" readonly="readonly"/></td>
     <td>生效时间:
     <input maxlength="8" size="18"  name="validSince" id="validSince" value="<c:out value='${info.validSince}'/>" title="YYYYMMDD" onBlur="dateCheck2(this)">
  </td>
     <td>失效时间:<input name="expireSince" id="expireSince" type="text" value="${info.expireSince}" readonly="readonly"/></td>
  <td>创建时间:<input type="text" value="${info.createTime}" readonly="readonly"/></td>
  </tr>
  <tr>
     <td>创建人ID:<input type="text" value="${info.createUser}" readonly="readonly"/></td>
     <td>最后修改时间:<input name="lastUpdateTime" id="lastUpdateTime" type="text" value="${info.lastUpdateTime}" readonly="readonly"/></td>
     <td>最后修改人ID:<input type="text" value="${info.lastUpdateUser}" readonly="readonly"/></td>
     <td>状态:<input type="text" <c:if  test="${info.rowState=='1'}"> value="有效"</c:if> <c:if  test="${info.rowState!='1'}"> value="有效"</c:if> readonly="readonly"/></td>       
     <td>备注:<input type="text" value="${info.remark}" readonly="readonly"/></td>
  </tr>
</table>
<input type="button" value="关闭" onclick="exit()"/>
</form>
</body>
<script type="text/javascript">

function exit(){
	window.close();
}
 
 </script>
</html>