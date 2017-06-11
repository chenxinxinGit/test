package demo.entity;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Entity;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;

/**
 * 
 * @author chenxinxin
 *
 */
@ApiModel(value = "分页信息")
public class pageContent implements Serializable{


	private static final long  serialVersionUID=1L;
	/**
	 * 页数
	 */
	@ApiModelProperty(value = "page", dataType = "java.lang.String", required = true)
	private String page;  
	private Date date;
	public Date getDate() {
		return date;
	}
	public void setDate(Date date) {
		this.date = date;
	}
	/**
	 * 显示的条数
	 */
	@ApiModelProperty(value = "rows", dataType = "java.lang.String", required = true)
    private String rows;  
    public String getPage() {
		return page;
	}
	public void setPage(String page) {
		this.page = page;
	}
	public String getRows() {
		return rows;
	}
	public void setRows(String rows) {
		this.rows = rows;
	}
	public String getSort() {
		return sort;
	}
	public void setSort(String sort) {
		this.sort = sort;
	}
	public String getOrder() {
		return order;
	}
	public void setOrder(String order) {
		this.order = order;
	}
	/**
     * 排序方式
     */
	@ApiModelProperty(value = "sort", dataType = "java.lang.String", required = true)
    private String sort;  
    /**
     * 排序的列
     */
	@ApiModelProperty(value = "order", dataType = "java.lang.String", required = true)
    private String order;  
  
   
}
