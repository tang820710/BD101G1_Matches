//回到頂端
$(document).ready(function () {
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

//購物車開關
$(document).ready(function () {
    $('.head_cart').click(function(){
        if($(window).width() < 767){
            window.location.href = './cart.html';
        }else{
            if($('.head_cartlist').css('display') === 'none'){
                $('.head_cartlist').css('display','block');
            }else{
                $('.head_cartlist').css('display','none');
            }
        }
    });
});