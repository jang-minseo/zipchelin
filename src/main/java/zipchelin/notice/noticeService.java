package zipchelin.notice;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class noticeService {
	NoticeDAO noticeDAO;

	public noticeService() {
		noticeDAO = new NoticeDAO();
	}
	
	//페이징 기법을 활용한 listArticles
	public Map listNotices(Map<String, Integer> pagingMap) {
		Map noticeMap=new HashMap<>();
		List<NoticeVO> noticeList=noticeDAO.selectAllNotices(pagingMap);
		int totNotices=noticeDAO.selectToNotices();
		noticeMap.put("noticeList", noticeList);
		noticeMap.put("totNotices", totNotices);
		
		return noticeMap;		
	}
	
	public List<NoticeVO> listNotices(){
		List<NoticeVO> noticeList=noticeDAO.selectAllNotices();
		return noticeList;
	}
	
}
