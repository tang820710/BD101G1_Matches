window.addEventListener("load", doFirst, false);

function doFirst() {
      for (var i = 0, friendList = document.querySelectorAll('.friendList'); i < friendList.length; i++) {
            friendList[i].addEventListener("click", clickNow, false);
            friendList[i].addEventListener("click", chatInOut, false);
      }
      document.querySelector('.new .friendList .addfriend').addEventListener("click", addFriend, false);
      document.querySelector('.msg .sendmsg').addEventListener("click", send, false);
      document.getElementById('close').addEventListener("click", close, false);
}

function clickNow() {
      $(this).css("background-color", "#E0F0F8");
      $(".friendList").not(this).css("background-color", "white");

      document.querySelector('.chatroom').innerHTML = '<div id="fname"></div>';
      if ($(window).width() < 767) {
            document.getElementById('fname').innerHTML = '<i class="fa fa-arrow-left" aria-hidden="true"></i>';
      }
      document.getElementById('fname').innerHTML += this.childNodes[3].innerHTML +
            '<a href="#"><i class="fa fa-home" aria-hidden="true"></i></a>';

      $("#fname").css('backgroundColor', '#DBDCDC');
      document.querySelector('#fname .fa-arrow-left').addEventListener("click", chatInOut, false);

}

function addFriend() {
      document.querySelector('.friends').appendChild(this.parentNode);
      $(this).remove();
}

function send() {
      var inputmsg = document.querySelector('.msg textarea').value;
      var time = new Date($.now());
      var displaytime = time.getFullYear() + '/' + (time.getMonth() + 1) + '/' + (time.getDate()) +
            ' ' + (time.getHours()) + ':' + (time.getMinutes());
      if (inputmsg !== '') {
            document.querySelector('.chatroom').innerHTML += '<span class="sendmsg">' +
                  inputmsg.replace(/\n/g, "<br>").replace(/ /g, '&nbsp') +
                  '</span><div class="sendtime">' + displaytime + '</div><br>';
      }
      document.querySelector('.msg textarea').value = '';
      if ($(window).width() < 767) {
            document.querySelector('#fname .fa-arrow-left').addEventListener("click", chatInOut, false)
      };
}

function close() {
      $('section').css('display', 'none');
}

function chatInOut() {
      var friends = $('.me_msg .scope .friends');
      var newfri = $('.me_msg .scope .new');
      var chatroom = $('.me_msg .scope .chatroom');
      var msg = $('.me_msg .scope .msg');

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