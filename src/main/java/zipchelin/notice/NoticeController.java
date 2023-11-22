package zipchelin.notice;

import java.io.IOException;
import java.util.List;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


@WebServlet("/notice")
public class NoticeController extends HttpServlet{
	NoticeDAO dao;
	
	public NoticeController() {
		dao=new NoticeDAO();
	}
	
	@Override
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doHandle(request, response);
	}

	@Override
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doHandle(request, response);
	}
	
	private void doHandle(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		/*
		 * String view="/WEB-INF/content/notice.jsp";
		 * request.getRequestDispatcher(view);
		 */
		
		RequestDispatcher dispatcher = request.getRequestDispatcher("/WEB-INF/views/content/notice.jsp");
		dispatcher.forward(request, response);
	}
	
}
