package demo.exception;

/**
 * 
 * @author chenxinxin
 *
 */
public class MyExceptionResponse {

	private int code;
	public int getCode() {
		return code;
	}
	public void setCode(int code) {
		this.code = code;
	}
	public String getMsg() {
		return msg;
	}
	public void setMsg(String msg) {
		this.msg = msg;
	}
	private String msg;
}
