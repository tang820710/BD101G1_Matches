//回到頂端
$(function () {
    $('.gotop').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, "slow");
    });
});

//抓取網頁的檔名
function getPageName(url) {
    var index = url.lastIndexOf("/") + 1;
    var filenameWithExtension = url.substr(index);
    return filenameWithExtension;
}
//nav顏色變換
$(function () {
    var currentPath = getPageName(window.location.pathname);
    $('nav > ul > li > a[href="' + currentPath + '"]').css('color', '#FFA266');
});
//麵包屑
$(function () {
    var currentPath = getPageName(window.location.pathname);
    console.log(currentPath);
    var currentName = $('nav > ul > li > a[href="' + currentPath + '"]').text();
    $('#breadcrumb').html("<a href='" + currentPath + "'>" + currentName + "</a>");
});

//漢堡選單伸展
$(function () {
    $('.hamburger').click(function () {
        $('.hbmenu').animate({
            left: "0"
        }, 200);
    });
});

//漢堡選單關閉
$(function () {
    $('.hb_close').click(function () {
        $('.hbmenu').animate({
            left: "-250px"
        }, 200);
    });
});

//漢堡nav顏色變換
$(function () {
    var currentPath = getPageName(window.location.pathname);
    $('.hbmenu > li > a[href="' + currentPath + '"]').css('backgroundColor', '#60c3dc');
});

//購物車開關
$(function () {
    $('.head_cart').click(function () {
        if ($(window).width() < 767) {
            window.location.href = './cart.html';
        } else {
            if ($('.head_cartlist').css('display') === 'none') {
                $('.head_cartlist').css('display', 'block');
            } else {
                $('.head_cartlist').css('display', 'none');
            }
        }
    });
});

//登入光箱
$(function () {
    //判斷登入登出,登出狀態進光箱,登入狀態立刻登出    
    $('header #login').on('click', function () {
        if ($('header #login span').html() === "登入") {
            $('header .loginbox').css('display', 'block');
        } else if ($('header #login span').html() === "登出") {
            $('header .member a').remove()
            $('header #login').html(`
                        <img src="images/defaultmember.png" alt="訪客">
                        <span>登入</span>`);
        }
    });
    //關閉登入光箱
    $('header #login_close').on('click', function () {
        $('header .loginbox').css('display', 'none');
        $('header #memId').val('');
        $('header #memPsw').val('');
    });
    //未接後端: 按送出立刻登入
    $('header .gologin').on('click', function () {
        $('header .loginbox').css('display', 'none');
        $('header #memId').val('');
        $('header #memPsw').val('');
        $('header #login').html(`
                        <span>登出</span>`);
        $(`<a href="me.html">
            <img src="images/defaultmember_login.png" alt="會員">
            <span>aaa</span>
           </a>`).insertBefore('header #login');
    });
});