package zipchelin.notice;

import java.sql.Date;

public class NoticeVO {
	private int noticeNum;
	private String noticeTitle;
	private String noticeCont;
	private Date noticeDate;
	private String adminId;
	
	public NoticeVO() {
		
	}

	public NoticeVO(int noticeNum, String noticeTitle, String noticeCont) {
		this.noticeNum = noticeNum;
		this.noticeTitle = noticeTitle;
		this.noticeCont = noticeCont;
	}

	public NoticeVO(int noticeNum, String noticeTitle, String noticeCont, Date noticeDate, String adminId) {
		this.noticeNum = noticeNum;
		this.noticeTitle = noticeTitle;
		this.noticeCont = noticeCont;
		this.noticeDate = noticeDate;
		this.adminId = adminId;
	}

	public int getNoticeNum() {
		return noticeNum;
	}

	public void setNoticeNum(int noticeNum) {
		this.noticeNum = noticeNum;
	}

	public String getNoticeTitle() {
		return noticeTitle;
	}

	public void setNoticeTitle(String noticeTitle) {
		this.noticeTitle = noticeTitle;
	}

	public String getNoticeCont() {
		return noticeCont;
	}

	public void setNoticeCont(String noticeCont) {
		this.noticeCont = noticeCont;
	}

	public Date getNoticeDate() {
		return noticeDate;
	}

	public void setNoticeDate(Date noticeDate) {
		this.noticeDate = noticeDate;
	}

	public String getAdminId() {
		return adminId;
	}

	public void setAdminId(String adminId) {
		this.adminId = adminId;
	}
	
	
}
