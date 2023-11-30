<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" isELIgnored="false"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<c:set var="contextPath" value="${pageContext.request.contextPath}" />

<div class="headerContainer">
    <a class="logo" href="${contextPath}/common/index.do">
        <img src="${contextPath}/resource/images/logo/logo.png" />
    </a>
    <div class="menu">
        <a class="menu_list" href="/front/html/recipe/recipe_list.html">레시피</a>
        <a class="menu_list" href="/front/html/guide/guide_list.html">가이드</a>
        <div class="sub-menu menu_list">
            <a href="#">커뮤니티</a>
            <div class="sub-menu_wrap">
                <div class="sub-menu_content">
                    <a href="/front/html/community/myrecipe.html">나만의레시피</a>
                </div>
                <div class="sub-menu_content">
                    <a href="/front/html/community/qna.html">요리상담소</a>
                </div>
            </div>
        </div>
        <a class="menu_list" href="${contextPath}/notice.do">공지사항</a>
    </div>
    <div class="right_menu">
        <a class="iconBox" href="/front/html/search/searching_list.html">
            <span class="material-symbols-outlined">search</span>
        </a>
        <a href="${contextPath}/common/login.do">로그인</a>
        <a href="${contextPath}/common/join.do">회원가입</a>
    </div>
</div>
