/*
页面应用示例:
<head>
<script src="downlist_datasource.js"></script>
</head>
<select name="certification_type">
<option value="" selected>--请选择--</option>
<script>
showdata(downlist_xxxx_array,selectedValue);//第二个参数可选
</script>
</select>

说明:XXXXX=下面英文
1.性别gender						2.证件类型certification				3.婚姻状况marriage				4.教育程度education
5.关系类别relationship				6.行业industry						7.职位position					8.工作单位unit
9.房产状况house						10.自购车car						11.邮寄地post					12.BLOCK CODE block
13.信用卡推广方式promotion			14.自动还款额度autopay				15.已有信用卡标记hascard		16.信用卡退件原因undeliver
17.信用卡退件结案方式undelivercase	18.外部征信记录fraud				19.审批状态approve				20.考核结果check
21.职级rank							22.卡种类型cardtype					23.卡别类型cardcategory			24.卡状态cardstatus
25.包裹状态packagestatus 			26.销售资格状态 saleCompetency 		27.不良品质种类 checkWarnType	28.任务状态task						
29.工作流处理状态workFlow			30.考核类型下拉列表chectType		31.人员状态下拉列表  personStatus
32.优先级priority 33关系类型relationType 34条件condition 35值类型valueType 36CVV2/CVC2校验 37 币种currType 38 密钥类型keyType
39用户所在系统sysFlag               40.用于jsp页面卡类型校验结果下拉列表数据源定义				41.内外勤
*/

/***********************
1.性别类型下拉列表
***********************/
var downlist_gender_array=new Array(["M","男"],["F","女"],["9","不详"]);

/*****************************
2.证件类型下拉列表          
*****************************/
var  downlist_certification_array=new Array(     
		     ["1","境内居民身份证"],
		     ["2","外籍护照"],
		     ["3","军官证"],
		     ["4","其他证件"]		   
		     );

/***********************
3.婚姻状况类型下拉列表
***********************/
var downlist_marriage_array=new Array(
		     ["1","未婚"],
		     ["2","已婚"],
		     ["9","其它"]		     
		     );

/***********************
4.教育程度下拉列表
***********************/
var downlist_education_array=new Array(
		     ["08","初中及以下"],
		     ["07","高中及中专"],
		     ["05","大专"],
		     ["04","本科"],
		     ["03","硕士"],
		     ["02","博士及以上"]		     
		     );

/***********************
5.关系类别下拉列表
***********************/
var downlist_relationship_array=new Array(
		     ["01","配偶"],
		     ["02","父母"],
		     ["03","子女"],
		     ["04","兄弟姐妹"],
		     ["11","亲戚"],
		     ["12","同学"],		  
		     ["13","同事"],
		     ["14","客户"],
		     ["00","未填"],
		     ["99","其它"]  
		     );


/***********************
6.行业下拉列表
***********************/
var downlist_industry_array=new Array(
		     ["C","制造业"],                         
		     ["E","建筑业"],                         
		     ["J","金融保险"],                       
		     ["K","房地产"],                    
		     ["P","教育"],                         
		     ["O","居民服务和其它服务业"],         
		     ["H","批发零售"],                     
		     ["I","餐饮住宿业"],                   
		     ["Q","卫生/社会保障和社会福利业"],    
		     ["M","科学研究/技术服务和地质勘查业"],
		     ["F","交通运输/仓储和邮政业"],        
		     ["G","信息传输/计算机服务和软件业"],  
		     ["R","文化/体育和娱乐业"],            
		     ["B","采矿业"],                       
		     ["A","农林鱼牧"],                     
		     ["S94","国家组织"],                     
		     ["9999","其它"]                         	
		     );                          
		     

/***********************
7.职位类别下拉列表
***********************/
var downlist_position_array=new Array(
		     ["1","单位负责人"],
		     ["2","部门负责人"],
		     ["3","科室负责人"],
		     ["4","一般员工"],
		     ["5","临时员工"]
		     );
    


/***********************
8.工作单位类别下拉列表
***********************/
var downlist_unit_array=new Array(
		     ["01","全民"],
		     ["02","集体"],
		     ["03","私营"],
		     ["04","合资/合作"],
		     ["05","外资"],
		     ["07","股份制"],
		     ["09","其它"]
		     );

/***********************
9.房产状况下拉列表
***********************/
var downlist_house_array=new Array(
		     ["1","单位分配"],
		     ["2","自购无贷款"],
		     ["3","自购有贷款"],
		     ["4","租用"],
		     ["9","其它"]
		     );


/***********************
10.自购车状况下拉列表
***********************/
var downlist_car_array=new Array(
		     ["1","自购无贷款"],
		     ["2","自购有贷款"]
		     );
                                             
/***********************
11.邮寄地下拉列表
***********************/
var downlist_post_array=new Array(
		     ["1","同户籍"],
		     ["2","同住宅"],
		     ["3","同单位"] 
		     );

/***********************
12.BLOCK CODE下拉列表
***********************/
var downlist_block_array=new Array(
		     ["D","卡片注销"],
		     ["W","卡未回注销"],
		     ["C","卡片碎卡"],
		     ["P","相片卡无法制出"],
		     ["E","英文姓名小写无法制卡"],
		     ["J","卡片到期不续用"]
		     );

/***********************
13.信用卡推广方式下拉列表
***********************/
var downlist_promotion_array=new Array(
		     ["1","亲见身份证明原件"],
		     ["2","亲见申请人签名"],
		     ["3","亲访工作单位"],
		     ["9","其它"] 
		         		     
		     );

/***********************
14.自动还款额度设置下拉列表
***********************/
var downlist_autopay_array=new Array(
		     ["M","最小还款额"],
		     ["F","全额还款"]     		     
		     );

/***********************
15.之前已有信用卡标记下拉列表
***********************/
var downlist_hascard_array=new Array(
		     ["Y","有"],
		     ["N","无"]     		     
		     ); 

/***********************
16.信用卡退件原因下拉列表
***********************/
var downlist_undeliver_array=new Array(
		     ["01","招领逾期"],
		     ["02","地址有误"],  
		     ["03","查无此人"],
		     ["04","搬迁"],  
		     ["05","拒收"]
			 );

/***********************
17.信用卡退件结案方式下拉列表
***********************/
var downlist_undelivercase_array=new Array(
		     ["D","卡回注销"],
		     ["S","自取"],  
		     ["T","三个月注销"],
		     ["U","址更重寄"],  
		     ["O","原址重寄"],  		     		     		     
		     ["C","两个月注销"],  
		     ["W","卡未回注销"]
			 );

/***********************
18.外部征信记录下拉列表
***********************/
var downlist_fraud_array=new Array(
		     ["1","无记录"],
		     ["2","信用良好"],  
		     ["3","信用一般"],
		     ["4","信用不良"]
			 );

/***********************
19.审批状态类型下拉列表
***********************/
var downlist_approve_array=new Array(["0","待初审"],["1","待审核"],["2","待审批"],["3","已完成"]);


/***********************
20.考核结果类型下拉列表
***********************/
var downlist_check_array=new Array(["1","晋升"],["2","维持"],["3","降级"],["4","新进定级"]);

/***********************
21.职级类型下拉列表
***********************/
var downlist_rank_array=new Array(
		     ["804","实习业代"],
		     ["803","正式业代"],
		     ["822","高级业代"],
		     ["802","资深业代"],
		     ["805","实习主任"],
		     ["801","正式主任"],
		     ["821","高级主任"],
		     ["806","资深主任"]
		     );

/***********************
22.卡种类型下拉列表
***********************/
var downlist_cardtype_array=new Array(["V","Visa"],["M","Master"],["C","现金卡"],["9","其它"]);


/***********************
23.卡别类型下拉列表
***********************/
var downlist_cardcategory_array=new Array(["A","总卡"],["P","白金卡"],["G","金卡"],["C","普卡"]);

/***********************
24.卡状态类型下拉列表
***********************/
var downlist_cardstatus_array=new Array(["1","送件"],["2","发卡"]);


/***********************
25.包裹状态类型下拉列表
***********************/
var downlist_packagestatus_array=new Array(["1","已发送"],["2","已接收"]);
/***********************
26.销售资格下拉列表
***********************/
var downlist_saleCompetency_array=new Array(
		     ["0","无销售资格"],
		     ["1","有销售资格"],
		     ["2","销售资格冻结"]
		     );
/***********************
27.不良品质种类下拉列表
***********************/
var downlist_checkWarnType_array=new Array(
		     ["1","协同客户提供虚假资料，隐瞒真相"],
		     ["2","误导性的宣导说明"],
		     ["3","提供虚假个人资料"],
		     ["4","以不正当手段争抢业务"],
		     ["5","破坏公司形象,散布诋毁公司的言论"],
		     ["6","擅自保留或向第三人泄露申请人资料"],
		     ["7","填写不真实的推广注记"],
		     ["8","利用职务之便,非法收受各种名义的回扣,手续费"],
		     ["9","擅自修改申请人信息"],
		     ["10","伪冒申请(用虚假或无效的身份证件,工作证明,财力证明进件)"],
		     ["11","骗取联名卡(冒充主持卡人修改帐单地址,挂失补发卡片等)"],
		     ["12","其他"]
		     );
/***********************
27.请假类型下拉列表
***********************/
var downlist_holidayType_array=new Array(
		     ["01","探望配偶假"],
		     ["02","探望父母假"],
		     ["03","婚假"],
		     ["04","丧假"],
		     ["05","产假"],
		     ["06","看护假"],
		     ["07","哺乳假"],
		     ["08","民族假"],
		     ["09","病假"],
		     ["10","事假"],
		     ["11","年休假"],
		     ["12","特殊奖励假"],
		     ["13","家长会假"],
		     ["14","强制休假"],
		     ["15","特殊岗位考试假"],	
		     ["16","义务献血假"],
		     ["17","迟到/早退"],			
			 ["18","旷工"]
		     );

/***********************
28.任务状态类型下拉列表
***********************/
var downlist_task_array=new Array(["W","等待执行"],["R","执行中"],["F","执行完毕"],["E","执行失败"]);


/***********************
29.工作流处理状态下拉列表  
***********************/
var downlist_workFlow_array=new Array(["0","上报待处理"],["1","同意"],["2","拒绝"],["3","退回"],["4","退回待处理"]);
           
/***********************
30.考核类型下拉列表  
***********************/
var downlist_chectType_array=new Array(["1","正常考核"],["2","特殊考核"]);
  
/***********************
31.人员状态下拉列表  
***********************/
var downlist_personStatus_array=new Array(["1","在职"],["0","离职"]);
  
/**************************************************************************************
32.用于jsp页面优先级下拉列表数据源定义
**************************************************************************************/
var downlist_priority_array=new Array(
		     new Array("1","1级"),
		     new Array("2","2级"),
		     new Array("3","3级"),
			 new Array("4","4级"),
			 new Array("5","5级")
		     );
		     
/**************************************************************************************
33.用于jsp页面关系类型下拉列表数据源定义
**************************************************************************************/
var downlist_relationType_array=new Array(
		     new Array("0","and"),
		     new Array("1","or")
		     );

/**************************************************************************************
34.用于jsp页面条件下拉列表数据源定义
**************************************************************************************/
var downlist_condition_array=new Array(
		     new Array("3",">"),
		     new Array("4",">="),
		     new Array("1","="),
			 new Array("2","!="),
			 new Array("5","<"),
			 new Array("6","<=")
		     );
		     
/**************************************************************************************
35.用于jsp页面值类型下拉列表数据源定义
**************************************************************************************/
var downlist_valueType_array=new Array(
		     new Array("1","字符"),
		     new Array("2","数字")
		     );

/**************************************************************************************
36.用于jsp页面CVV2/CVC2校验下拉列表数据源定义
**************************************************************************************/
var downlist_keyCheck_array=new Array(
		     new Array("0","验证成功"),
		     new Array("1","验证失败"),
			 new Array("2","系统错误")
		     );

/**************************************************************************************
37.用于jsp页面币种下拉列表数据源定义
**************************************************************************************/
var downlist_currType_array=new Array(
		     new Array("156","人民币"),
		     new Array("840","美元")
		     );

/**************************************************************************************
38.用于jsp页面密钥类型下拉列表数据源定义
**************************************************************************************/
var downlist_keyType_array=new Array(
		     new Array("706","CVV2"),
		     new Array("812","CVC2")
		     );

/**************************************************************************************
39.用于jsp页面用户所在系统下拉列表数据源定义
**************************************************************************************/
var downlist_sysFlag_array=new Array(
		     new Array("F","伪冒"),
		     new Array("R","人工授权")
		     );

/**************************************************************************************
40.用于jsp页面卡类型校验结果下拉列表数据源定义
**************************************************************************************/
var downlist_cardCheck_array=new Array(
		     new Array("0","通过"),
		     new Array("1","不通过")
		     );

/***********************
41.任务状态类型下拉列表
***********************/
var downlist_billTask_array=new Array(
		     new Array("0","成功"),
		     new Array("1","待处理"),
			 new Array("2","处理中"),
			 new Array("9","失败")
		     );
/***********************
41.内外勤
***********************/
var downlist_innerOrOuter_array=new Array(
		     new Array("1","内勤人员"),
		     new Array("2","销售人员/营销系列"),
			 new Array("3","销售人员/区拓系列"),
			 new Array("4","销售人员")
		     );
/***********************
42.P0543模版编码
***********************/
var downlist_templetID_array=new Array(
		     new Array("S01","S01"),
		     new Array("S02","S02"),
			 new Array("E01","E01"),
			 new Array("E02","E02"),
			 new Array("Y01","Y01"),
			 new Array("Y02","Y02")
		     ); 
		     

function showdata(datasourceArray,selectedValue)
{
	if(selectedValue==null){
		for(i=0;i<datasourceArray.length;i++){
				document.write("<option value="+datasourceArray[i][0]+">"+datasourceArray[i][1]+"</option>");
		}
	}
	else{

		for(i=0;i<datasourceArray.length;i++){	
	  		if(selectedValue==datasourceArray[i][0])
	  			document.write("<option value="+datasourceArray[i][0]+" selected >"+datasourceArray[i][1]+"</option>");
	  		else
	  			document.write("<option value="+datasourceArray[i][0]+">"+datasourceArray[i][1]+"</option>");
	  	}
  	}
}


function showdata_cps(datasourceArray,selectedValue)
{
	if(selectedValue==null){
		for(i=0;i<datasourceArray.length;i++){
				document.write("<option value="+datasourceArray[i][0]+">"+datasourceArray[i][0]+" "+datasourceArray[i][1]+"</option>");
		}
	}
	else{

		for(i=0;i<datasourceArray.length;i++){	
	  		if(selectedValue==datasourceArray[i][0])
	  			document.write("<option value="+datasourceArray[i][0]+" selected >"+datasourceArray[i][0]+" "+datasourceArray[i][1]+"</option>");
	  		else
	  			document.write("<option value="+datasourceArray[i][0]+">"+datasourceArray[i][0]+" "+datasourceArray[i][1]+"</option>");

	  		
	  	}
  	}
}

function showdataChineseName(datasourceArray,selectedValue)
{
		var returnValue = "";
		returnValue = selectedValue;
		for(i=0;i<datasourceArray.length;i++)
		{	
	  		if(selectedValue==datasourceArray[i][0])
	  			returnValue = datasourceArray[i][1];
	  	}
	  	document.write(returnValue);
}
function showUpOrDowndata(datasourceArray,selectedValue,UpOrDown)
{
	var downlist_rank_array_add_right=new Array(
		     ["804","实习业代",10],
		     ["803","正式业代",20],
		     ["822","高级业代",30],
		     ["802","资深业代",40],
		     ["805","实习主任",50],
		     ["801","正式主任",60],
		     ["821","高级主任",70],
		     ["806","资深主任",80]
		     );
	var k=0;
	for(i=0;i<downlist_rank_array_add_right.length;i++){
				if(selectedValue==datasourceArray[i][0])
					k=i;
		}
	
	str="";
	switch(UpOrDown)
	{
	case "1":
		datasourceArraySub=downlist_rank_array_add_right.slice(k+1);
		for(i=0;i<datasourceArraySub.length;i++){
				str=str+"<option value="+datasourceArraySub[i][0]+">"+datasourceArraySub[i][1]+"</option>";
		}
		break;
	case "2":
		for(i=0;i<datasourceArray.length;i++){
				if(selectedValue==datasourceArray[i][0])
				{
					str=str+"<option value="+datasourceArray[i][0]+">"+datasourceArray[i][1]+"</option>";
				}
		}
		if(str=="")
		{
			str=str+"<option value='00'>解聘</option>";
		}
		break;
	case "3":
		
		datasourceArraySub=downlist_rank_array_add_right.slice(0,k);
		for(i=datasourceArraySub.length-1;i>=0;i--){
				str=str+"<option value="+datasourceArraySub[i][0]+">"+datasourceArraySub[i][1]+"</option>";
		}
		str=str+"<option value='00'>解聘</option>";
		break;
  	}
  	return str;
}