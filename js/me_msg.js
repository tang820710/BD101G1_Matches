window.addEventListener("load", doFirst, false);

function doFirst() {
   for (var i = 0, friendList = document.querySelectorAll('.friendList'); i < friendList.length; i++) {
      friendList[i].addEventListener("click", clickNow, false);
   }
   document.querySelector('.new .friendList .addfriend').addEventListener("click", addfriend, false);
   document.querySelector('.msg .sendmsg').addEventListener("click", send, false);
   document.getElementById('close').addEventListener("click", close, false);

}

function clickNow() {
   $(this).css("background-color", "#E0F0F8");
   $(".friendList").not(this).css("background-color", "white");
   document.getElementById('fname').innerHTML = this.childNodes[3].innerHTML +
      '<a href="#"><i class="fa fa-home" aria-hidden="true"></i></a>';

   $("#fname").css('backgroundColor', '#DBDCDC');
}

function addfriend() {
   document.querySelector('.friends').appendChild(this.parentNode);
   $(this).remove();
}

function send() {
   console.log(document.querySelector('.msg textarea').innerHTML);
   document.querySelector('.chatroom').innerHTML += '<span>' + document.querySelector('.msg textarea').value +
      '</span><br>';

   document.querySelector('.msg textarea').value = '';
}

function close() {
   $('section').css('display', 'none');
}