package zipchelin.notice;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


@WebServlet("/notice.do")
public class NoticeController extends HttpServlet{
	noticeService noticeService;
	NoticeVO noticeVO;
	
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
			List<NoticeVO> articlesList=new ArrayList<NoticeVO>();
			//최초 요청시 section, pageNum 값을 구하기 위해
			String _section=request.getParameter("section");
			String _pageNum=request.getParameter("pageNum");
			int section=Integer.parseInt((_section == null) ? "1" : _section);
			int pageNum=Integer.parseInt((_pageNum == null) ? "1" : _pageNum);
			Map<String, Integer> pagingMap=new HashMap<String, Integer>();
			pagingMap.put("section", section);
			pagingMap.put("pageNum", pageNum);
			Map noticeMap=noticeService.listNotices(pagingMap);
			articlesList=noticeService.listNotices(); //페이징 전에 사용한 방식
			request.setAttribute("articlesList", articlesList);//페이징 전에 사용한 방식
			noticeMap.put("section", section);
			noticeMap.put("pageNum", pageNum);
			request.setAttribute("noticeMap", noticeMap); //바인딩
			nextPage="/WEB-INF/views/main/content/notice.jsp";
			
		}catch (Exception e) {
			System.out.println("요청 처리 중 에러!!");
			e.printStackTrace();
		}
		RequestDispatcher dispatcher = request.getRequestDispatcher(nextPage);
		dispatcher.forward(request, response);
	}
	
}
