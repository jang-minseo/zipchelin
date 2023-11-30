package zipchelin.notice;

import java.sql.Date;

public class NoticeVO {
	private int notice_num;
	private String notice_title;
	private String notice_cont;
	private Date notice_date;
	private String admin_id;
	
	public NoticeVO() {
		
	}

	public NoticeVO(int notice_num, String notice_title, String notice_cont, Date notice_date, String admin_id) {
		this.notice_num = notice_num;
		this.notice_title = notice_title;
		this.notice_cont = notice_cont;
		this.notice_date = notice_date;
		this.admin_id = admin_id;
	}

	public int getNotice_num() {
		return notice_num;
	}

	public void setNotice_num(int notice_num) {
		this.notice_num = notice_num;
	}

	public String getNotice_title() {
		return notice_title;
	}

	public void setNotice_title(String notice_title) {
		this.notice_title = notice_title;
	}

	public String getNotice_cont() {
		return notice_cont;
	}

	public void setNotice_cont(String notice_cont) {
		this.notice_cont = notice_cont;
	}

	public Date getNotice_date() {
		return notice_date;
	}

	public void setNotice_date(Date notice_date) {
		this.notice_date = notice_date;
	}

	public String getAdmin_id() {
		return admin_id;
	}

	public void setAdmin_id(String admin_id) {
		this.admin_id = admin_id;
	}
	
	
}
