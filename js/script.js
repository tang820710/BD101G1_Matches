//回到頂端
$(document).ready(function () {
    $('.gotop').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, "slow");
    });
});


//麵包屑
$(document).ready(function () {
    bindEventToNavigation();
    showBreadCrumb(); //Show the breadcrumb when you arrive on the new page
});

function bindEventToNavigation() {
    $.each($("nav > ul > li > a"), function (index, element) {
        $(element).click(function (event) {
            breadcrumbStateSaver($(this).attr('href'), $(this).text());
            showBreadCrumb();
        });
    });
    $.each($("nav > .logo > a"), function (index, element) {
        $(element).click(function (event) {
            sessionStorage.breadcrumb = "";
            showBreadCrumb();
        });
    });
}

function breadcrumbStateSaver(link, text) {
    if (typeof (Storage) != "undefined") {
        //暫時先一層
        // if (sessionStorage.breadcrumb) {
        //     var breadcrumb = sessionStorage.breadcrumb;
        //     sessionStorage.breadcrumb = breadcrumb + " >> <a href='" + link + "'>" + text + "</a>";
        // } else {
        sessionStorage.breadcrumb = "<a href='" + link + "'>" + text + "</a>";
        // }
    }
}

function showBreadCrumb() {
    $("#breadcrumb").html(sessionStorage.breadcrumb);
}

//nav顏色變換
function getPageName(url) {
    var index = url.lastIndexOf("/") + 1;
    var filenameWithExtension = url.substr(index);
    return filenameWithExtension;
}
$(function () {
    var currentPageName = getPageName(window.location.pathname);
    $('nav > ul > li > a[href="' + currentPageName + '"]').css('color', '#FFA266');
});

//漢堡選單伸展
$(document).ready(function () {
    $('.hamburger').click(function () {
        if ($('body').css('left') === '0px') {
            $('#hbmenu').animate({
                left: "0"
            }, 200);

            $('body').animate({
                left: "250px"
            }, 200);
        } else {
            $('#hbmenu').animate({
                left: "-250px"
            }, 200);

            $('body').animate({
                left: "0"
            }, 200);
        }
    });
});