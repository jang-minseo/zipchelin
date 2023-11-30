<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"
    isELIgnored="false"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<c:set var="contextPath" value="${pageContext.request.contextPath}"/>
<%
	request.setCharacterEncoding("utf-8");
%>
<!DOCTYPE html>
<html lang="ko">
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
 
    <link rel="stylesheet" type="text/css" href="${contextPath}/resource/css/reset.css">
    <link rel="stylesheet" type="text/css" href="${contextPath}/resource/css/base.css">
    <link rel="stylesheet" type="text/css" href="${contextPath}/resource/css/common.css">
 
    <!-- page CSS -->
    <link rel="stylesheet" type="text/css"  href="${contextPath}/resource/css/user.css">
    
    <!-- plugin CSS -->
    <link rel="stylesheet" href="${contextPath}/resource/css/swiper-bundle.min.css">

    <title>로그인</title>
</head>
<body>

    <main>
        <section id="login_section">
            <h1 class="pageTitle">로그인</h1>
            <form id="login_form" action="#">
                <div class="login_input_left login_input_div">
                    <label for="login_id">아이디</label>
                    <input type="text" id="login_id" name="id" placeholder="아이디">
                    <p class="login_warning" id="login_id_warning">아이디가 입력되지 않았습니다.</p>
                </div>
                <div class="inputField login_input_left login_input_div">
                    <label for="login_password">비밀번호</label>
                    <input type="password" name="login_password" id="login_password" placeholder="비밀번호">
                    <span class="pwdToggle material-symbols-outlined">visibility_off</span>
                    <p class="login_warning" id="login_pwd_warning">비밀번호가 입력되지 않았습니다.</p>
                </div>
                <div class="login_acc">
                    <div class="login_input_div">
                        <input id="login_id_save" type="checkbox" class="login_small chkBox" name="id_save">
                        <label for="login_id_save" class="small">아이디 저장</label>
                    </div>
                    <div class="login_input_div">
                        <a href="${contextPath}/test/user/find" class="login_find">아이디/비밀번호 찾기</a>
                    </div>
                </div>
                <div>
                    <button class="login_login btnBg" type="button" onclick="login_form_submit()">로그인</button>
                </div>
            </form>
            <div class="login_sns">
                <h2>소셜 로그인</h2>
                <div>
                    <div class="login_email"><a href="#"><img src="${contextPath}/resource/images/icon/kakao_circle.png" alt="카카오 로그인"></a></div>
                    <div class="login_email"><a href="#"><img src="${contextPath}/resource/images/icon/naver_circle.png" alt="네이버 로그인"></a></div>
                    <div class="login_email circle_bd"><a href="#"><img src="${contextPath}/resource/images/icon/google_circle.png" alt="구글 로그인"> </a></div>
                </div>
            </div>
        </section>
    </main>
    
    <!-- 푸터 -->
    
    <div id="login_fail">
        <div id="login_fail_box">
            <p id="login_fail_msg">해당하는 아이디가 없거나 비밀번호가 틀렸습니다.</p>
            <button id="login_fail_out" type="button" onclick="login_fail_get_out()">확인</button>
        </div>
    </div>
    
    <!-- js -->
    <script src="http://code.jquery.com/jquery-latest.min.js"></script>
    <script src="${contextPath}/resource/js/common.js"></script>
    <script src="${contextPath}/resource/js/user.js"></script>
</body>
</html>