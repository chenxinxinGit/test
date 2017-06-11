package demo.entity;

import java.io.Serializable;
import java.sql.Timestamp;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;

/**
 * 
 * @author chenxinxin
 * 20170520
 */
@Entity
@Table(name="D_CA_FORBIDDEN")
@ApiModel(value = "CA黑名单")
public class CaForbindden extends pageContent implements Serializable{
	
	private static final long  serialVersionUID=1L;

	/**
	 * 主键ID
	 */
	@Id
	@ApiModelProperty(value = "主键IDCA唯一标识", dataType = "java.lang.String", required = true)
	@Column(name="ID")
	private String ID;
	/**
	 * 黑名单生效时间
	 */
	@Column(name="FORBIDDEN_SINCE")
	@ApiModelProperty(value = "黑名单生效时间", dataType = "java.util.Date", required = true)
	private Date forbiddenSince;
	/**
	 * 创建时间
	 */
	@Column(name="CREATE_TIME")
	@ApiModelProperty(value = "创建时间", dataType = "java.util.Date", required = false)
	private Date createTime ;
	/**
	 * 创建人ID
	 */
	@Column(name="CREATE_USER")
	@ApiModelProperty(value = "创建人ID", dataType = "java.lang.String", required = true)
	private String createUser;
	/**s
	 * 最后修改时间
	 */
	@Column(name="LAST_UPDATE_TIME")
	@ApiModelProperty(value = "最后修改时间", dataType = "java.util.Date", required = false)
	private Date lastUpdateTime;
	/**
	 * 最后修改人ID
	 */
	@Column(name="LAST_UPDATE_USER")
	@ApiModelProperty(value = "最后修改人ID", dataType = "java.lang.String", required = true)
	private String  lastUpdateuser;
	/**
	 * 状态 1：有效 0：无效
	 */
	@Column(name="ROWSTATE")
	@ApiModelProperty(value = "rowState", dataType = "java.lang.Integer", required = true)
	private Integer rowState;
	/**
	 * 版本号
	 */
	@Column(name="VERSION")
	@ApiModelProperty(value = "版本号", dataType = "java.lang.Integer", required = false)
	private Integer version ;
	public String getID() {
		return ID;
	}
	public void setID(String iD) {
		ID = iD;
	}
	public String getForbiddenSince() {
		return new SimpleDateFormat("yyyy-MM-dd hh:mm:ss").format(this.forbiddenSince);
	}
	public void setForbiddenSince(String forbiddenSince) {
		SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd hh:mm:ss");
		try {
			this.forbiddenSince = format.parse(forbiddenSince);
		} catch (ParseException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

	}
	public String getCreateTime() {
		return new SimpleDateFormat("yyyy-MM-dd hh:mm:ss").format(this.createTime);
	}
	public void setCreateTime(String createTime) {
		SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd hh:mm:ss");
		try {
			this.createTime = format.parse(createTime);
		} catch (ParseException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	public String getCreateUser() {
		return createUser;
	}
	public void setCreateUser(String createUser) {
		this.createUser = createUser;
	}
	public String getLastUpdateTime() {
		return new SimpleDateFormat("yyyy-MM-dd hh:mm:ss").format(this.lastUpdateTime);		
	}
	public void setLastUpdateTime(String lastUpdateTime) {
		SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd hh:mm:ss");
		try {
			this.lastUpdateTime = format.parse(lastUpdateTime);
		} catch (ParseException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	public String getLastUpdateuser() {
		return lastUpdateuser;
	}
	public void setLastUpdateuser(String lastUpdateuser) {
		this.lastUpdateuser = lastUpdateuser;
	}
	public Integer getRowState() {
		return rowState;
	}
	public void setRowState(Integer rowState) {
		this.rowState = rowState;
	}
	public Integer getVersion() {
		return version;
	}
	public void setVersion(Integer version) {
		this.version = version;
	}
	
	
	
}
