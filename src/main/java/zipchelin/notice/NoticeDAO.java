package zipchelin.notice;

import java.sql.Connection;
import java.sql.Date;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import javax.naming.Context;
import javax.naming.InitialContext;
import javax.sql.DataSource;

public class NoticeDAO {
	private Connection conn;
	private PreparedStatement pstmt;
	private DataSource dataFactory;
	
	public NoticeDAO() {
		try {
			Context ctx=new InitialContext();
			Context envContext=(Context)ctx.lookup("java:/comp/env");
			dataFactory=(DataSource)envContext.lookup("jdbc/oracle"); 
		} catch (Exception e) {
			System.out.println("DB연결 오류"); 
		}
	}
	
	//글 목록 조회(페이징) 메서드
	public List<NoticeVO> selectAllNotices(Map<String, Integer> pagingMap){
		List<NoticeVO> noticeList=new ArrayList<NoticeVO>();
		int section=pagingMap.get("section");
		int pageNum=pagingMap.get("pageNum");
		try {
			conn=dataFactory.getConnection();
			String query="SELECT * FROM (SELECT ROWNUM AS recNum, notice_num, notice_title, notice_cont, notice_date"+
					" FROM (SELECT * FROM notice_tbl ORDER BY notice_date DESC))"+
					" WHERE recNum BETWEEN (?-1)*100+(?-1)*10+1 AND (?-1)*100+?*10";
			pstmt=conn.prepareStatement(query);
			pstmt.setInt(1, section);	//section :페이징 1~10번 한 묶음
			pstmt.setInt(2, pageNum);	//pageNum : 페이징 번호
			pstmt.setInt(3, section);
			pstmt.setInt(4, pageNum);
			ResultSet rs=pstmt.executeQuery();
			while(rs.next()) {
				int noticeNo=rs.getInt("notice_num");
				String title=rs.getString("notice_title");
				String content=rs.getString("notice_cont");
				Date writeDate=rs.getDate("notice_date");
				NoticeVO noticeVO=new NoticeVO();
				noticeVO.setNotice_num(noticeNo);
				noticeVO.setNotice_title(title);
				noticeVO.setNotice_cont(content);
				noticeVO.setNotice_date(writeDate);
				noticeList.add(noticeVO);
			}
			rs.close();
			pstmt.close();
			conn.close();
		} catch (Exception e) {
			System.out.println("글 목록 조회(페이징) 중 에러!!");
			e.printStackTrace();
		}
		
		return noticeList;
	}
	
	//전체 글 목록 수
	public int selectToNotices() {
		int totCount=0;
		try {
			conn=dataFactory.getConnection();
			String query="select count(*) from notice_tbl";	//전체 자료 수
			pstmt=conn.prepareStatement(query);
			ResultSet rs=pstmt.executeQuery();
			if(rs.next()) {
				totCount=rs.getInt(1); //count 수
			}
			rs.close();
			pstmt.close();
			conn.close();
		} catch (Exception e) {
			System.out.println("전체 글 목록 수 처리 중 에러!!");
			e.printStackTrace();
		}
		return totCount;
	}
}
