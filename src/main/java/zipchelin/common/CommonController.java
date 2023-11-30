package zipchelin.common;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/common/*")
public class CommonController extends HttpServlet{
	
	@Override
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doHandle(request, response);
	}

	@Override
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doHandle(request, response);
	}
	
	private void doHandle(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String nextPage="";
		request.setCharacterEncoding("utf-8");
		response.setContentType("text/html;charset=utf-8");
		String action=request.getPathInfo();	//요청명을 가져옴
		try {
			if(action==null || action.equals("/index.do")) {				
				nextPage="/WEB-INF/index.jsp";
			}else if(action.equals("/login.do")) {
				nextPage="/WEB-INF/views/main/user/login.jsp";			
			}else if(action.equals("/join.do")) {
				nextPage="/WEB-INF/views/main/user/sign_up.jsp";				
				
			}
			
		}catch (Exception e) {
			System.out.println("요청 처리 중 에러!!");
			e.printStackTrace();
		}
		RequestDispatcher dispatcher = request.getRequestDispatcher(nextPage);
		dispatcher.forward(request, response);
	}
}
