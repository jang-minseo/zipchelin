package zipchelin.notice;

import java.sql.Connection;
import java.sql.PreparedStatement;

import javax.naming.Context;
import javax.naming.InitialContext;
import javax.sql.DataSource;

public class NoticeDAO {
	private Connection conn;
	private PreparedStatement pstmt;
	private DataSource dataFactory;
	
	public NoticeDAO() {
		/*
		 * try { Context ctx=new InitialContext(); Context
		 * envContext=(Context)ctx.lookup("java:/comp/env");
		 * dataFactory=(DataSource)envContext.lookup("jdbc/oracle"); } catch (Exception
		 * e) { System.out.println("DB연결 오류"); }
		 */
	}
}
