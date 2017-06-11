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

import org.hibernate.annotations.DynamicUpdate;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
/**
 * 
 * @author chenxinxin
 *20170520
 */
@Entity
@Table(name="D_CA_INFO")
@ApiModel(value = "CA信息表")
@DynamicUpdate(true)
public class CaInfo extends pageContent implements Serializable{
	
	private static final long  serialVersionUID=1L;
	/**
	 * CA唯一序列号
	 */
	@Id
	@ApiModelProperty(value = "CA唯一序列号", dataType = "java.lang.String", required = true)
	@Column(name="ID")
	private String ID;
	/**
	 * 用户登录名
	 */
	@Column(name="USERNAME")
	@ApiModelProperty(value = "用户登录名", dataType = "java.lang.String", required = true)
	private String userName;
	/**
	 * 生效时间
	 */
	@Column(name="VALID_SINCE")
	@ApiModelProperty(value = "生效时间", dataType = "java.util.Date", required = true)
	private Date validSince;
	/**
	 * 失效时间
	 */
	@Column(name="EXPIRE_SINCE")
	@ApiModelProperty(value = "失效时间", dataType = "java.util.Date", required = true)
	private Date expireSince;
	/**
	 * 备注
	 */
	@Column(name="REMARK")
	@ApiModelProperty(value = "备注", dataType = "java.lang.String", required = false)
	private String remark;
	/**
	 * 创建时间
	 */
	@Column(name="CREATE_TIME")
	@ApiModelProperty(value = "创建时间", dataType = "java.util.Date", required = false)
	private Date createTime;
	/**
	 * 创建人ID
	 */
	@Column(name="CREATE_USER")
	@ApiModelProperty(value = "创建人ID", dataType = "java.lang.String", required = true)
	private String createUser;
	/**
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
	private String lastUpdateUser;
	/**
	 * 状态
	 */
	@Column(name="ROWSTATE")
	@ApiModelProperty(value = "状态", dataType = "java.lang.Integer", required = true)
	private Integer rowState;
	
	/**
	 * 数据版本
	 */
	@Column(name="VERSION")
	@ApiModelProperty(value = "数据版本", dataType = "java.lang.Integer", required = false)
	private int version ;

	public String getID() {
		return ID;
	}

	public void setID(String iD) {
		ID = iD;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public Date getValidSince() {
		return validSince;
	}

	public void setValidSince(Date validSince) {
		this.validSince = validSince;
	}

	public Date getExpireSince() {
		return expireSince;
	}

	public void setExpireSince(Date expireSince) {
		this.expireSince = expireSince;
	}

	public String getRemark() {
		return remark;
	}

	public void setRemark(String remark) {
		this.remark = remark;
	}

	public Date getCreateTime() {
		return createTime;
	}

	public void setCreateTime(Date createTime) {
		this.createTime = createTime;
	}

	public String getCreateUser() {
		return createUser;
	}

	public void setCreateUser(String createUser) {
		this.createUser = createUser;
	}

	public Date getLastUpdateTime() {
		return lastUpdateTime;
	}

	public void setLastUpdateTime(Date lastUpdateTime) {
		this.lastUpdateTime = lastUpdateTime;
	}

	public String getLastUpdateUser() {
		return lastUpdateUser;
	}

	public void setLastUpdateUser(String lastUpdateUser) {
		this.lastUpdateUser = lastUpdateUser;
	}

	public Integer getRowState() {
		return rowState;
	}

	public void setRowState(Integer rowState) {
		this.rowState = rowState;
	}

	public int getVersion() {
		return version;
	}

	public void setVersion(int version) {
		this.version = version;
	}


	
}
