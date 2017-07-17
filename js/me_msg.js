window.addEventListener("load", doFirst, false);

function doFirst() {
      for (var i = 0, friendList = document.querySelectorAll('.me_msg_friendList'); i < friendList.length; i++) {
            friendList[i].addEventListener("click", clickNow, false);
            friendList[i].addEventListener("click", chatInOut, false);
      }
      document.querySelector('.me_msg_addfriend').addEventListener("click", addFriend, false);
      document.querySelector('.me_msg_sendmsg').addEventListener("click", send, false);
      document.getElementById('me_msg_close').addEventListener("click", close, false);
}

function clickNow() {
      $(this).css("background-color", "#E0F0F8");
      $(".me_msg_friendList").not(this).css("background-color", "white");

      document.querySelector('.me_msg_chatroom').innerHTML = '<div id="me_msg_fname"></div>';
      if ($(window).width() < 767) {
            document.getElementById('me_msg_fname').innerHTML = '<i class="fa fa-arrow-left" aria-hidden="true"></i>';
      }
      document.getElementById('me_msg_fname').innerHTML += this.childNodes[3].innerHTML +
            '<a href="profile.html"><i class="fa fa-home" aria-hidden="true"></i></a>';

      $("#me_msg_fname").css('backgroundColor', '#DBDCDC');
      if ($(window).width() < 767) {
            document.querySelector('#me_msg_fname .fa-arrow-left').addEventListener("click", chatInOut, false);
      }

}

function addFriend() {
      document.querySelector('.me_msg_friends').appendChild(this.parentNode);
      $(this).remove();
}

function send() {
      var inputmsg = document.querySelector('.me_msg_msg textarea').value;
      var time = new Date($.now());
      var displaytime = time.getFullYear() + '/' + (time.getMonth() + 1) + '/' + (time.getDate()) +
            ' ' + (time.getHours()) + ':' + (time.getMinutes());
      if (inputmsg !== '') {
            document.querySelector('.me_msg_chatroom').innerHTML += '<span class="me_msg_sendmsg">' +
                  inputmsg.replace(/\n/g, "<br>").replace(/ /g, '&nbsp') +
                  '</span><div class="me_msg_sendtime">' + displaytime + '</div><br>';
      }
      document.querySelector('.me_msg_msg textarea').value = '';
      if ($(window).width() < 767) {
            document.querySelector('#me_msg_fname .fa-arrow-left').addEventListener("click", chatInOut, false)
      };
}

function close() {
      $('section.me_msg').css('display', 'none');
}

function chatInOut() {
      var friends = $('.me_msg_friends');
      var newfri = $('.me_msg_new');
      var chatroom = $('.me_msg_chatroom');
      var msg = $('.me_msg_msg');

      if ($(window).width() < 767) {
            if (friends.css('display') === 'none') {
                  friends.css('display', 'initial');
                  newfri.css('display', 'initial');
                  chatroom.css('display', 'none');
                  msg.css('display', 'none');
            } else {
                  friends.css('display', 'none');
                  newfri.css('display', 'none');
                  chatroom.css('display', 'initial');
                  msg.css('display', 'initial');
            }
      }
}