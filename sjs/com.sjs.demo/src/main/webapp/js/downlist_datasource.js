/*
ҳ��Ӧ��ʾ��:
<head>
<script src="downlist_datasource.js"></script>
</head>
<select name="certification_type">
<option value="" selected>--��ѡ��--</option>
<script>
showdata(downlist_xxxx_array,selectedValue);//�ڶ���������ѡ
</script>
</select>

˵��:XXXXX=����Ӣ��
1.�Ա�gender						2.֤������certification				3.����״��marriage				4.�����̶�education
5.��ϵ���relationship				6.��ҵindustry						7.ְλposition					8.������λunit
9.����״��house						10.�Թ���car						11.�ʼĵ�post					12.BLOCK CODE block
13.���ÿ��ƹ㷽ʽpromotion			14.�Զ�������autopay				15.�������ÿ����hascard		16.���ÿ��˼�ԭ��undeliver
17.���ÿ��˼��᰸��ʽundelivercase	18.�ⲿ���ż�¼fraud				19.����״̬approve				20.���˽��check
21.ְ��rank							22.��������cardtype					23.��������cardcategory			24.��״̬cardstatus
25.����״̬packagestatus 			26.�����ʸ�״̬ saleCompetency 		27.����Ʒ������ checkWarnType	28.����״̬task						
29.����������״̬workFlow			30.�������������б�chectType		31.��Ա״̬�����б�  personStatus
32.���ȼ�priority 33��ϵ����relationType 34����condition 35ֵ����valueType 36CVV2/CVC2У�� 37 ����currType 38 ��Կ����keyType
39�û�����ϵͳsysFlag               40.����jspҳ�濨����У���������б�����Դ����				41.������
*/

/***********************
1.�Ա����������б�
***********************/
var downlist_gender_array=new Array(["M","��"],["F","Ů"],["9","����"]);

/*****************************
2.֤�����������б�          
*****************************/
var  downlist_certification_array=new Array(     
		     ["1","���ھ������֤"],
		     ["2","�⼮����"],
		     ["3","����֤"],
		     ["4","����֤��"]		   
		     );

/***********************
3.����״�����������б�
***********************/
var downlist_marriage_array=new Array(
		     ["1","δ��"],
		     ["2","�ѻ�"],
		     ["9","����"]		     
		     );

/***********************
4.�����̶������б�
***********************/
var downlist_education_array=new Array(
		     ["08","���м�����"],
		     ["07","���м���ר"],
		     ["05","��ר"],
		     ["04","����"],
		     ["03","˶ʿ"],
		     ["02","��ʿ������"]		     
		     );

/***********************
5.��ϵ��������б�
***********************/
var downlist_relationship_array=new Array(
		     ["01","��ż"],
		     ["02","��ĸ"],
		     ["03","��Ů"],
		     ["04","�ֵܽ���"],
		     ["11","����"],
		     ["12","ͬѧ"],		  
		     ["13","ͬ��"],
		     ["14","�ͻ�"],
		     ["00","δ��"],
		     ["99","����"]  
		     );


/***********************
6.��ҵ�����б�
***********************/
var downlist_industry_array=new Array(
		     ["C","����ҵ"],                         
		     ["E","����ҵ"],                         
		     ["J","���ڱ���"],                       
		     ["K","���ز�"],                    
		     ["P","����"],                         
		     ["O","����������������ҵ"],         
		     ["H","��������"],                     
		     ["I","����ס��ҵ"],                   
		     ["Q","����/��ᱣ�Ϻ���ḣ��ҵ"],    
		     ["M","��ѧ�о�/��������͵��ʿ���ҵ"],
		     ["F","��ͨ����/�ִ�������ҵ"],        
		     ["G","��Ϣ����/�������������ҵ"],  
		     ["R","�Ļ�/����������ҵ"],            
		     ["B","�ɿ�ҵ"],                       
		     ["A","ũ������"],                     
		     ["S94","������֯"],                     
		     ["9999","����"]                         	
		     );                          
		     

/***********************
7.ְλ��������б�
***********************/
var downlist_position_array=new Array(
		     ["1","��λ������"],
		     ["2","���Ÿ�����"],
		     ["3","���Ҹ�����"],
		     ["4","һ��Ա��"],
		     ["5","��ʱԱ��"]
		     );
    


/***********************
8.������λ��������б�
***********************/
var downlist_unit_array=new Array(
		     ["01","ȫ��"],
		     ["02","����"],
		     ["03","˽Ӫ"],
		     ["04","����/����"],
		     ["05","����"],
		     ["07","�ɷ���"],
		     ["09","����"]
		     );

/***********************
9.����״�������б�
***********************/
var downlist_house_array=new Array(
		     ["1","��λ����"],
		     ["2","�Թ��޴���"],
		     ["3","�Թ��д���"],
		     ["4","����"],
		     ["9","����"]
		     );


/***********************
10.�Թ���״�������б�
***********************/
var downlist_car_array=new Array(
		     ["1","�Թ��޴���"],
		     ["2","�Թ��д���"]
		     );
                                             
/***********************
11.�ʼĵ������б�
***********************/
var downlist_post_array=new Array(
		     ["1","ͬ����"],
		     ["2","ͬסլ"],
		     ["3","ͬ��λ"] 
		     );

/***********************
12.BLOCK CODE�����б�
***********************/
var downlist_block_array=new Array(
		     ["D","��Ƭע��"],
		     ["W","��δ��ע��"],
		     ["C","��Ƭ�鿨"],
		     ["P","��Ƭ���޷��Ƴ�"],
		     ["E","Ӣ������Сд�޷��ƿ�"],
		     ["J","��Ƭ���ڲ�����"]
		     );

/***********************
13.���ÿ��ƹ㷽ʽ�����б�
***********************/
var downlist_promotion_array=new Array(
		     ["1","�׼����֤��ԭ��"],
		     ["2","�׼�������ǩ��"],
		     ["3","�׷ù�����λ"],
		     ["9","����"] 
		         		     
		     );

/***********************
14.�Զ����������������б�
***********************/
var downlist_autopay_array=new Array(
		     ["M","��С�����"],
		     ["F","ȫ���"]     		     
		     );

/***********************
15.֮ǰ�������ÿ���������б�
***********************/
var downlist_hascard_array=new Array(
		     ["Y","��"],
		     ["N","��"]     		     
		     ); 

/***********************
16.���ÿ��˼�ԭ�������б�
***********************/
var downlist_undeliver_array=new Array(
		     ["01","��������"],
		     ["02","��ַ����"],  
		     ["03","���޴���"],
		     ["04","��Ǩ"],  
		     ["05","����"]
			 );

/***********************
17.���ÿ��˼��᰸��ʽ�����б�
***********************/
var downlist_undelivercase_array=new Array(
		     ["D","����ע��"],
		     ["S","��ȡ"],  
		     ["T","������ע��"],
		     ["U","ַ���ؼ�"],  
		     ["O","ԭַ�ؼ�"],  		     		     		     
		     ["C","������ע��"],  
		     ["W","��δ��ע��"]
			 );

/***********************
18.�ⲿ���ż�¼�����б�
***********************/
var downlist_fraud_array=new Array(
		     ["1","�޼�¼"],
		     ["2","��������"],  
		     ["3","����һ��"],
		     ["4","���ò���"]
			 );

/***********************
19.����״̬���������б�
***********************/
var downlist_approve_array=new Array(["0","������"],["1","�����"],["2","������"],["3","�����"]);


/***********************
20.���˽�����������б�
***********************/
var downlist_check_array=new Array(["1","����"],["2","ά��"],["3","����"],["4","�½�����"]);

/***********************
21.ְ�����������б�
***********************/
var downlist_rank_array=new Array(
		     ["804","ʵϰҵ��"],
		     ["803","��ʽҵ��"],
		     ["822","�߼�ҵ��"],
		     ["802","����ҵ��"],
		     ["805","ʵϰ����"],
		     ["801","��ʽ����"],
		     ["821","�߼�����"],
		     ["806","��������"]
		     );

/***********************
22.�������������б�
***********************/
var downlist_cardtype_array=new Array(["V","Visa"],["M","Master"],["C","�ֽ�"],["9","����"]);


/***********************
23.�������������б�
***********************/
var downlist_cardcategory_array=new Array(["A","�ܿ�"],["P","�׽�"],["G","��"],["C","�տ�"]);

/***********************
24.��״̬���������б�
***********************/
var downlist_cardstatus_array=new Array(["1","�ͼ�"],["2","����"]);


/***********************
25.����״̬���������б�
***********************/
var downlist_packagestatus_array=new Array(["1","�ѷ���"],["2","�ѽ���"]);
/***********************
26.�����ʸ������б�
***********************/
var downlist_saleCompetency_array=new Array(
		     ["0","�������ʸ�"],
		     ["1","�������ʸ�"],
		     ["2","�����ʸ񶳽�"]
		     );
/***********************
27.����Ʒ�����������б�
***********************/
var downlist_checkWarnType_array=new Array(
		     ["1","Эͬ�ͻ��ṩ������ϣ���������"],
		     ["2","���Ե�����˵��"],
		     ["3","�ṩ��ٸ�������"],
		     ["4","�Բ������ֶ�����ҵ��"],
		     ["5","�ƻ���˾����,ɢ��ڮ�ٹ�˾������"],
		     ["6","���Ա������������й¶����������"],
		     ["7","��д����ʵ���ƹ�ע��"],
		     ["8","����ְ��֮��,�Ƿ����ܸ�������Ļؿ�,������"],
		     ["9","�����޸���������Ϣ"],
		     ["10","αð����(����ٻ���Ч�����֤��,����֤��,����֤������)"],
		     ["11","ƭȡ������(ð�����ֿ����޸��ʵ���ַ,��ʧ������Ƭ��)"],
		     ["12","����"]
		     );
/***********************
27.������������б�
***********************/
var downlist_holidayType_array=new Array(
		     ["01","̽����ż��"],
		     ["02","̽����ĸ��"],
		     ["03","���"],
		     ["04","ɥ��"],
		     ["05","����"],
		     ["06","������"],
		     ["07","�����"],
		     ["08","�����"],
		     ["09","����"],
		     ["10","�¼�"],
		     ["11","���ݼ�"],
		     ["12","���⽱����"],
		     ["13","�ҳ����"],
		     ["14","ǿ���ݼ�"],
		     ["15","�����λ���Լ�"],	
		     ["16","������Ѫ��"],
		     ["17","�ٵ�/����"],			
			 ["18","����"]
		     );

/***********************
28.����״̬���������б�
***********************/
var downlist_task_array=new Array(["W","�ȴ�ִ��"],["R","ִ����"],["F","ִ�����"],["E","ִ��ʧ��"]);


/***********************
29.����������״̬�����б�  
***********************/
var downlist_workFlow_array=new Array(["0","�ϱ�������"],["1","ͬ��"],["2","�ܾ�"],["3","�˻�"],["4","�˻ش�����"]);
           
/***********************
30.�������������б�  
***********************/
var downlist_chectType_array=new Array(["1","��������"],["2","���⿼��"]);
  
/***********************
31.��Ա״̬�����б�  
***********************/
var downlist_personStatus_array=new Array(["1","��ְ"],["0","��ְ"]);
  
/**************************************************************************************
32.����jspҳ�����ȼ������б�����Դ����
**************************************************************************************/
var downlist_priority_array=new Array(
		     new Array("1","1��"),
		     new Array("2","2��"),
		     new Array("3","3��"),
			 new Array("4","4��"),
			 new Array("5","5��")
		     );
		     
/**************************************************************************************
33.����jspҳ���ϵ���������б�����Դ����
**************************************************************************************/
var downlist_relationType_array=new Array(
		     new Array("0","and"),
		     new Array("1","or")
		     );

/**************************************************************************************
34.����jspҳ�����������б�����Դ����
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
35.����jspҳ��ֵ���������б�����Դ����
**************************************************************************************/
var downlist_valueType_array=new Array(
		     new Array("1","�ַ�"),
		     new Array("2","����")
		     );

/**************************************************************************************
36.����jspҳ��CVV2/CVC2У�������б�����Դ����
**************************************************************************************/
var downlist_keyCheck_array=new Array(
		     new Array("0","��֤�ɹ�"),
		     new Array("1","��֤ʧ��"),
			 new Array("2","ϵͳ����")
		     );

/**************************************************************************************
37.����jspҳ����������б�����Դ����
**************************************************************************************/
var downlist_currType_array=new Array(
		     new Array("156","�����"),
		     new Array("840","��Ԫ")
		     );

/**************************************************************************************
38.����jspҳ����Կ���������б�����Դ����
**************************************************************************************/
var downlist_keyType_array=new Array(
		     new Array("706","CVV2"),
		     new Array("812","CVC2")
		     );

/**************************************************************************************
39.����jspҳ���û�����ϵͳ�����б�����Դ����
**************************************************************************************/
var downlist_sysFlag_array=new Array(
		     new Array("F","αð"),
		     new Array("R","�˹���Ȩ")
		     );

/**************************************************************************************
40.����jspҳ�濨����У���������б�����Դ����
**************************************************************************************/
var downlist_cardCheck_array=new Array(
		     new Array("0","ͨ��"),
		     new Array("1","��ͨ��")
		     );

/***********************
41.����״̬���������б�
***********************/
var downlist_billTask_array=new Array(
		     new Array("0","�ɹ�"),
		     new Array("1","������"),
			 new Array("2","������"),
			 new Array("9","ʧ��")
		     );
/***********************
41.������
***********************/
var downlist_innerOrOuter_array=new Array(
		     new Array("1","������Ա"),
		     new Array("2","������Ա/Ӫ��ϵ��"),
			 new Array("3","������Ա/����ϵ��"),
			 new Array("4","������Ա")
		     );
/***********************
42.P0543ģ�����
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
		     ["804","ʵϰҵ��",10],
		     ["803","��ʽҵ��",20],
		     ["822","�߼�ҵ��",30],
		     ["802","����ҵ��",40],
		     ["805","ʵϰ����",50],
		     ["801","��ʽ����",60],
		     ["821","�߼�����",70],
		     ["806","��������",80]
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
			str=str+"<option value='00'>��Ƹ</option>";
		}
		break;
	case "3":
		
		datasourceArraySub=downlist_rank_array_add_right.slice(0,k);
		for(i=datasourceArraySub.length-1;i>=0;i--){
				str=str+"<option value="+datasourceArraySub[i][0]+">"+datasourceArraySub[i][1]+"</option>";
		}
		str=str+"<option value='00'>��Ƹ</option>";
		break;
  	}
  	return str;
}