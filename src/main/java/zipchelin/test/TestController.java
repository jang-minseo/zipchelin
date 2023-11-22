package zipchelin.test;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/test/*")
public class TestController extends HttpServlet {

	public void init(ServletConfig config) throws ServletException {
		System.out.println("접속");
	}

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doHandle(request,response);
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doHandle(request,response);
	}
	
	private void doHandle(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String folder=getViewFolderName(request);
		String view=getViewName(request);
		String location="/WEB-INF/views/main"+folder+view+".jsp";
		System.out.println(location);
		RequestDispatcher dispatcher=request.getRequestDispatcher(location);
		dispatcher.forward(request, response);
		//response.sendRedirect(location);
	}
	
	private String getViewFolderName(HttpServletRequest request) {
		String uri=request.getPathInfo();
		String folder;
		folder=uri.substring(0,uri.lastIndexOf("/"));
		System.out.println(folder);
		return folder;
	}
	
	private String getViewName(HttpServletRequest request) {
		String uri=request.getPathInfo();
		String viewName;
		viewName=uri.substring(uri.lastIndexOf("/"),uri.length());
		System.out.println(viewName);
		return viewName;
	}

}
