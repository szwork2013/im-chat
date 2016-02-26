## login 用户登录
### request 
```
{
	"username":"用户名",
	"password":"密码",
}
```

### response
```
{
	"code":"错误码，每一个响应都有，正常为0000",
	"msg":"错误信息，每一个响应都有，没错误则为空",
	"data":{
		"usertype":"1医生 0病人",
		"id_user":"",
		"tx_name":"",
		"dt_birth":"",
		"cd_gender":"",
		"tx_ic":"",
		"tx_img":"",
		"tx_location":"",
		"tx_signature":"",
		"tx_username":"",
		"tx_qr":"",
		"tx_contact":"",
		"tx_qq":"",
		"tx_wechat":"",
		"dttm_created":"",
		"id_created_by":"",
		"dttm_updated":"",
		"id_updated_by":"",
		"tx_hospital":"医生才有值",
		"tx_title":"医生才有值",
		"id_doctor2":"医生才有值",
		"dt_delivery":"病人才有值",
		"tx_name2":"病人才有值",
		"tx_contact2":"病人才有值",
		"in_credit":"病人才有值",
	}
}
```

---
## qrypatients 查询病人信息列表，分页
### request 
```
{
	"did":"doctor id",
	"page":"1 数字，表示第几页",
	"number":"20 数字，表示每页多少条数据",
}
```

### response 
```
{
	...
	"data":{
		"total":"数字，总记录数",
		"list":[{
			"tx_name":"病人的姓名，优先显示备注名",
			"dt_birth":"",
			"tx_ic":"",
			"tx_img":"头像url",
			"tx_location":"",
			"tx_contact":"",
			"tx_qq":"",
			"tx_wechat":"",
			"tx_qr":"",
			"dt_delivery":"",
			"tx_name2":"紧急联系人姓名",
			"tx_contact2":"紧急联系人电话",
			"tx_patientname":"关系表，备注名，没有就显示姓名",
			"bl_top":"关系表，是否顶置",
			"id_test":"***主键***",
			"id_patient":"",
			"dt_input":"测量时间",
			"am_m_weight":"病人体重",
			"am_u_height":""病人宫高,	
			"am_a_perimeter":"病人腹围",
			"am_m_bs":"病人血糖",
			"am_m_hp":"病人血压，高压",
			"am_m_lp":"病人血压，低压",
			"am_h_score":"病人分数，系统会有算法计算，范围1-10",
			"bl_viewed":"是否已阅",
		}]
	}
}
```

---
## qrypatientchart 查询病人图表信息
### request 
```
{
	"testid":"qrypatients 接口返回的主键",
}
```

### response 
```
{
	...
	"data":{
		list:[{
			"id_data":"",
			"id_patient":"",
			"dt_captured":"",
			"tm_start":"",
			"tm_end":"",
			"id_test":"",
			"am_f_cardio":"胎心数据",
			"bl_f_move":"胎动数据",
			"am_m_chamber":"宫腔压力数据",
			"am_m_pulse":"孕妇脉搏",
			"am_m_oxygen":"孕妇血氧浓度",
		}]
	}
}
```

---
## chkpatientchart 阅读病人图表信息
### request 
```
{
	"testid":"qrypatients 接口返回的主键",
}
```

### response 
```
{
	...
	"data":{}
}
```

---
## qryaddress 通讯录查询
### request 
```
{
	"did":"doctor id",
	"filter:"all 全部;unread 未处理",
	"sortby:"abc 首字母;date 时间逆序; emer 紧急程度",
}
```

### response 
```
{
	...
	"data":{
		list:[{

		}]
	}
}
```

---
## qrydoctor 病人查询对应的医生
### request 
```
{
	"pid":"patient id",
}
```

### response 
```
{
	...
	"data":{
		"id_user":"",
		"tx_name":"",
		"dt_birth":"",
		"cd_gender":"",
		"tx_ic":"",
		"tx_img":"",
		"tx_location":"",
		"tx_signature":"",
		"tx_username":"",
		"tx_qr":"",
		"tx_contact":"",
		"tx_qq":"",
		"tx_wechat":"",
		"dttm_created":"",
		"id_created_by":"",
		"dttm_updated":"",
		"id_updated_by":"",
		"tx_hospital":"医生才有值",
		"tx_title":"医生才有值",
		"id_doctor2":"医生才有值",
		"tx_name":"医生：备用医生姓名",
	}
}
```
---


## qrymeinfo 点击【我】的时候需要查询的额外数据
### request 
```
{
	"did":"doctor id",
	"pid":"patient id",
}
```

### response 
```
{
	...
	"data":{
		"tx_name":"医生：备用医生姓名",
		"in_patient":"医生：监测人数",
		"in_unread":"病人：未阅监测数",
		"in_read":"病人：已阅监测数",
	}
}
```
