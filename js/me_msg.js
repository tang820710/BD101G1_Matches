window.addEventListener("load", doFirst, false);

function doFirst() {
   for (var i = 0, friendList = document.querySelectorAll('.friendList'); i < friendList.length; i++) {
      friendList[i].addEventListener("click", clickNow, false);
   }
   document.querySelector('.new .friendList .addfriend').addEventListener("click", addFriend, false);
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

function addFriend() {
   document.querySelector('.friends').appendChild(this.parentNode);
   $(this).remove();
}

function send() {
   var inputmsg = document.querySelector('.msg textarea').value;
   if (inputmsg !== '') {
      document.querySelector('.chatroom').innerHTML += '<span>' +
         inputmsg.replace(/\n/g, "<br>").replace(/ /g, '&nbsp') + '</span><br>';
   }
   document.querySelector('.msg textarea').value = '';
}

function close() {
   $('section').css('display', 'none');
}