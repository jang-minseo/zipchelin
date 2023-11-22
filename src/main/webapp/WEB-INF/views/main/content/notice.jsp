<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"
    isELIgnored="false"
    %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<c:set var="contextPath" value="${pageContext.request.contextPath}" />
<%
	request.setCharacterEncoding("utf-8");
%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
<meta http-equiv="x-ua-compatible" content="IE=edge">
<meta name="keywords" content="레시피, 혼밥, 요리">
<meta name="description" content="요리에 관한 모든 정보를 한 번에 보세요">

<meta property="og:type" content="website">
<meta property="og:title" content="집슐랭">
<meta property="og:description" content="요리에 관한 모든 정보를 한 번에 보세요">
<meta property="og:image" content="">
<meta property="og:url" content="">

<!-- favicon-->
<link rel="shortcut icon" type="text/css" href="">
<link rel="icon"  type="text/css" href="">

<!-- google icon CDN -->
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet">

<!-- basic CSS -->
<link rel="stylesheet" type="text/css" href="${contextPaht}/css/reset.css">
<link rel="stylesheet" type="text/css" href="${contextPaht}/css/base.css">
<link rel="stylesheet" type="text/css" href="${contextPaht}/css/common.css">

<!-- page CSS -->
<link rel="stylesheet" type="text/css" href="${contextPaht}/css/notice.css">

<!-- plugin CSS -->
<link rel="stylesheet" href="${contextPaht}/css/swiper-bundle.min.css">
<title>공지사항</title>
</head>
<body>
	<!--헤더 -->
    <header class="header"></header>

    <main>
        <h3 class="pageTitle">공지사항</h3>
        <ul class="noticeList">
            <li class="noticeItem">
                <div class="titleBox">
                    <span class="num">8</span>
                    <h6 class="title">사람은 크고 작고 간에 이상이 있음으로써 용감하고 굳세게 살 수 있는 것이다</h6>
                    <span class="date">2023.10.15</span>
                    <span class="icon material-symbols-outlined">keyboard_arrow_down</span>
                </div>
                <div class="contentBox">
                    <p>얼마나 쓸쓸하랴? 얼음에 싸인 만물은 얼음이 있을 뿐이다 그들에게 생명을 불어 넣는 것은 따뜻한 봄바람이다 풀밭에</p>
                    <p>광야에서 방황하였으며 공자는 무엇을 위하여 천하를 철환하였는가? 밥을 위하여서 옷을 위하여서 미인을 구하기 위하여서 그리하였는가?</p>
                    <p> 아니다 그들은 커다란 이상 곧 만천하의 대중을 품에 안고 그들에게 밝은 길을 찾아 주며 그들을 행복스럽고 평화스러운 곳으로 인도하겠다는 커다란 이상을 품었기 때문이다</p>
                    <p> 그러므로 그들은 길지 아니한 과실이 어디 있으랴? 이상! 우리의 청춘이 가장 많이 품고 있는 이상! 이것이야말로 무한한 가치를 가진 것이다 사람은 크고 작고 간에 이상이 있음으로써 용감하고 굳세게 살 수 있는 것이다</p>
                </div>
            </li>
            <li class="noticeItem">
                <div class="titleBox">
                    <span class="num">7</span>
                    <h6 class="title">과실이 어디 있으랴? 이상!</h6>
                    <span class="date">2023.10.15</span>
                    <span class="icon material-symbols-outlined">keyboard_arrow_down</span>
                </div>
                <div class="contentBox">
                    <p>얼마나 쓸쓸하랴? 얼음에 싸인 만물은 얼음이 있을 뿐이다 그들에게 생명을 불어 넣는 것은 따뜻한 봄바람이다 풀밭에</p>
                    <p>광야에서 방황하였으며 공자는 무엇을 위하여 천하를 철환하였는가? 밥을 위하여서 옷을 위하여서 미인을 구하기 위하여서 그리하였는가?</p>
                    <p> 아니다 그들은 커다란 이상 곧 만천하의 대중을 품에 안고 그들에게 밝은 길을 찾아 주며 그들을 행복스럽고 평화스러운 곳으로 인도하겠다는 커다란 이상을 품었기 때문이다</p>
                    <p> 그러므로 그들은 길지 아니한 과실이 어디 있으랴? 이상! 우리의 청춘이 가장 많이 품고 있는 이상! 이것이야말로 무한한 가치를 가진 것이다 사람은 크고 작고 간에 이상이 있음으로써 용감하고 굳세게 살 수 있는 것이다</p>
                </div>
            </li>
            <li class="noticeItem">
                <div class="titleBox">
                    <span class="num">6</span>
                    <h6 class="title">그들은 커다란 이상 곧 만천하의 대중을 품에 안고</h6>
                    <span class="date">2023.10.15</span>
                    <span class="icon material-symbols-outlined">keyboard_arrow_down</span>
                </div>
                <div class="contentBox">
                    <p>얼마나 쓸쓸하랴? 얼음에 싸인 만물은 얼음이 있을 뿐이다 그들에게 생명을 불어 넣는 것은 따뜻한 봄바람이다 풀밭에</p>
                    <p>광야에서 방황하였으며 공자는 무엇을 위하여 천하를 철환하였는가? 밥을 위하여서 옷을 위하여서 미인을 구하기 위하여서 그리하였는가?</p>
                    <p> 아니다 그들은 커다란 이상 곧 만천하의 대중을 품에 안고 그들에게 밝은 길을 찾아 주며 그들을 행복스럽고 평화스러운 곳으로 인도하겠다는 커다란 이상을 품었기 때문이다</p>
                    <p> 그러므로 그들은 길지 아니한 과실이 어디 있으랴? 이상! 우리의 청춘이 가장 많이 품고 있는 이상! 이것이야말로 무한한 가치를 가진 것이다 사람은 크고 작고 간에 이상이 있음으로써 용감하고 굳세게 살 수 있는 것이다</p>
                </div>
            </li>
            <li class="noticeItem">
                <div class="titleBox">
                    <span class="num">5</span>
                    <h6 class="title">사람은 크고 작고 간에 이상이 있음으로써 용감하고 굳세게 살 수 있는 것이다</h6>
                    <span class="date">2023.10.15</span>
                    <span class="icon material-symbols-outlined">keyboard_arrow_down</span>
                </div>
                <div class="contentBox">
                    <p>얼마나 쓸쓸하랴? 얼음에 싸인 만물은 얼음이 있을 뿐이다 그들에게 생명을 불어 넣는 것은 따뜻한 봄바람이다 풀밭에</p>
                    <p>광야에서 방황하였으며 공자는 무엇을 위하여 천하를 철환하였는가? 밥을 위하여서 옷을 위하여서 미인을 구하기 위하여서 그리하였는가?</p>
                    <p> 아니다 그들은 커다란 이상 곧 만천하의 대중을 품에 안고 그들에게 밝은 길을 찾아 주며 그들을 행복스럽고 평화스러운 곳으로 인도하겠다는 커다란 이상을 품었기 때문이다</p>
                    <p> 그러므로 그들은 길지 아니한 과실이 어디 있으랴? 이상! 우리의 청춘이 가장 많이 품고 있는 이상! 이것이야말로 무한한 가치를 가진 것이다 사람은 크고 작고 간에 이상이 있음으로써 용감하고 굳세게 살 수 있는 것이다</p>
                </div>
            </li>
            <li class="noticeItem">
                <div class="titleBox">
                    <span class="num">4</span>
                    <h6 class="title">광야에서 방황하였으며 공자는 무엇을 위하여 천하를 철환하였는가?</h6>
                    <span class="date">2023.10.15</span>
                    <span class="icon material-symbols-outlined">keyboard_arrow_down</span>
                </div>
                <div class="contentBox">
                    <p>얼마나 쓸쓸하랴? 얼음에 싸인 만물은 얼음이 있을 뿐이다 그들에게 생명을 불어 넣는 것은 따뜻한 봄바람이다 풀밭에</p>
                    <p>광야에서 방황하였으며 공자는 무엇을 위하여 천하를 철환하였는가? 밥을 위하여서 옷을 위하여서 미인을 구하기 위하여서 그리하였는가?</p>
                    <p> 아니다 그들은 커다란 이상 곧 만천하의 대중을 품에 안고 그들에게 밝은 길을 찾아 주며 그들을 행복스럽고 평화스러운 곳으로 인도하겠다는 커다란 이상을 품었기 때문이다</p>
                    <p> 그러므로 그들은 길지 아니한 과실이 어디 있으랴? 이상! 우리의 청춘이 가장 많이 품고 있는 이상! 이것이야말로 무한한 가치를 가진 것이다 사람은 크고 작고 간에 이상이 있음으로써 용감하고 굳세게 살 수 있는 것이다</p>
                </div>
            </li>
            <li class="noticeItem">
                <div class="titleBox">
                    <span class="num">3</span>
                    <h6 class="title">과실이 어디 있으랴? 이상!</h6>
                    <span class="date">2023.10.15</span>
                    <span class="icon material-symbols-outlined">keyboard_arrow_down</span>
                </div>
                <div class="contentBox">
                    <p>얼마나 쓸쓸하랴? 얼음에 싸인 만물은 얼음이 있을 뿐이다 그들에게 생명을 불어 넣는 것은 따뜻한 봄바람이다 풀밭에</p>
                    <p>광야에서 방황하였으며 공자는 무엇을 위하여 천하를 철환하였는가? 밥을 위하여서 옷을 위하여서 미인을 구하기 위하여서 그리하였는가?</p>
                    <p> 아니다 그들은 커다란 이상 곧 만천하의 대중을 품에 안고 그들에게 밝은 길을 찾아 주며 그들을 행복스럽고 평화스러운 곳으로 인도하겠다는 커다란 이상을 품었기 때문이다</p>
                    <p> 그러므로 그들은 길지 아니한 과실이 어디 있으랴? 이상! 우리의 청춘이 가장 많이 품고 있는 이상! 이것이야말로 무한한 가치를 가진 것이다 사람은 크고 작고 간에 이상이 있음으로써 용감하고 굳세게 살 수 있는 것이다</p>
                </div>
            </li>
            <li class="noticeItem">
                <div class="titleBox">
                    <span class="num">2</span>
                    <h6 class="title">사람은 크고 작고 간에 이상이 있음으로써 용감하고 굳세게 살 수 있는 것이다</h6>
                    <span class="date">2023.10.15</span>
                    <span class="icon material-symbols-outlined">keyboard_arrow_down</span>
                </div>
                <div class="contentBox">
                    <p>얼마나 쓸쓸하랴? 얼음에 싸인 만물은 얼음이 있을 뿐이다 그들에게 생명을 불어 넣는 것은 따뜻한 봄바람이다 풀밭에</p>
                    <p>광야에서 방황하였으며 공자는 무엇을 위하여 천하를 철환하였는가? 밥을 위하여서 옷을 위하여서 미인을 구하기 위하여서 그리하였는가?</p>
                    <p> 아니다 그들은 커다란 이상 곧 만천하의 대중을 품에 안고 그들에게 밝은 길을 찾아 주며 그들을 행복스럽고 평화스러운 곳으로 인도하겠다는 커다란 이상을 품었기 때문이다</p>
                    <p> 그러므로 그들은 길지 아니한 과실이 어디 있으랴? 이상! 우리의 청춘이 가장 많이 품고 있는 이상! 이것이야말로 무한한 가치를 가진 것이다 사람은 크고 작고 간에 이상이 있음으로써 용감하고 굳세게 살 수 있는 것이다</p>
                </div>
            </li>
            <li class="noticeItem">
                <div class="titleBox">
                    <span class="num">1</span>
                    <h6 class="title">그들은 커다란 이상 곧 만천하의 대중을 품에 안고</h6>
                    <span class="date">2023.10.15</span>
                    <span class="icon material-symbols-outlined">keyboard_arrow_down</span>
                </div>
                <div class="contentBox">
                    <p>얼마나 쓸쓸하랴? 얼음에 싸인 만물은 얼음이 있을 뿐이다 그들에게 생명을 불어 넣는 것은 따뜻한 봄바람이다 풀밭에</p>
                    <p>광야에서 방황하였으며 공자는 무엇을 위하여 천하를 철환하였는가? 밥을 위하여서 옷을 위하여서 미인을 구하기 위하여서 그리하였는가?</p>
                    <p> 아니다 그들은 커다란 이상 곧 만천하의 대중을 품에 안고 그들에게 밝은 길을 찾아 주며 그들을 행복스럽고 평화스러운 곳으로 인도하겠다는 커다란 이상을 품었기 때문이다</p>
                    <p> 그러므로 그들은 길지 아니한 과실이 어디 있으랴? 이상! 우리의 청춘이 가장 많이 품고 있는 이상! 이것이야말로 무한한 가치를 가진 것이다 사람은 크고 작고 간에 이상이 있음으로써 용감하고 굳세게 살 수 있는 것이다</p>
                </div>
            </li>
        </ul>
        <div class="paging">
            <ul>
                <!--li에 .disabled가 있으면 화살표에 클릭방지 생김-->
                <li class="arrow prev disabled"><button disabled><span class="material-symbols-outlined">navigate_before</span></button></li>
                <li class="active"><a href="javascript:">1</a></li>
                <li><a href="javascript:">2</a></li>
                <li><a href="javascript:">3</a></li>
                <li><a href="javascript:">4</a></li>
                <li><a href="javascript:">5</a></li>
                <li class="arrow next"><button><span class="material-symbols-outlined">navigate_next</span></button></li>
            </ul>
        </div>
    </main>

    <!-- 푸터 -->
    <footer id="footer"></footer> 
    
    <!-- js -->
    <script src="http://code.jquery.com/jquery-latest.min.js"></script>
    <script src="${contextPaht}/js/common.js"></script>
    <script src="${contextPaht}/js/notice.js"></script>
</body>
</html>