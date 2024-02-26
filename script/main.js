$(document).ready(function () {
  // 마우스커서 따라오게
  var mouseX = 0;
  var mouseY = 0;
  var speed = 0.09; // 이동 속도 계수

  function moveFollower() {
    // 부드러운 애니메이션을 위해 requestAnimationFrame 사용
    requestAnimationFrame(moveFollower);

    // 현재 위치에서 목표 위치로 이동
    var distanceX = mouseX - $("#follower").offset().left;
    var distanceY = mouseY - $("#follower").offset().top;

    $("#follower").css({
      left: $("#follower").offset().left + distanceX * speed + "px",
      top: $("#follower").offset().top + distanceY * speed + "px"
    });
  }

  $(document).mousemove(function (e) {
    // 마우스의 현재 위치 업데이트
    mouseX = e.pageX;
    mouseY = e.pageY;
  });

  // 1초 뒤에 실행
  setTimeout(function () {
    moveFollower();
  }, 1000);



  // 제목 날아오게 하기
  $('#intro h2').animate({ 'top': '25%' }, 500, 'swing');

  // $('#intro h3').animate({'right':'0%'}, 1000, 'swing');
  $('#intro h3').css({ 'left': '5%' }).hide().fadeIn(2000, 'swing');
  $('#intro hr').css({ 'left': '15%', 'width': '0%' });
  setTimeout(function () {
    $('#intro hr').animate({ 'width': '1200px' }, 3000, 'swing');
  }, 500);
  $('#intro h4').css({ 'left': '80%' }).hide().fadeIn(3000, 'swing');
  setTimeout(function () {
    $('#intro h4').hide().fadeIn(2000, 'swing');
  }, 500);

  setTimeout(function () {
    $('#intro .int_profile').animate({ 'left': '3%' }, 1000, 'linear');
  }, 4500);



  // 날짜 시간
  function updateDateTime() {
    const currentDate = new Date();

    // Format the date as "YYYY-MM-DD"
    const formattedDate = currentDate.toISOString().split('T')[0];

    // Format the time as "HH:MM:SS"
    const formattedTime = currentDate.toTimeString().split(' ')[0];

    // Display the date and time in the respective elements using jQuery
    $('#date').text(`${formattedDate}`);
    $('#time').text(`${formattedTime}`);
  }

  // Update date and time every second (1000 milliseconds)
  setInterval(updateDateTime, 1000);

  // Initial update
  updateDateTime();



  //스크롤동작시 스크롤값 표시하기
  $(window).scroll(function () {

    let sPos = $(this).scrollTop();
    console.log(sPos); //스크롤값이 얼마면 내비게이션을 고정을 해야할지 값 알아보기  870px

    $('.gnb li a')
    //section에 각각 offset().top이 0일때
    $('main section').each(function (i) {
      //해당 li a태그에 act2서식을 적용하여 현재위치를 표시한다.
      let top = $(this).offset().top - 400;

      if (sPos >= top) { //스크롤값이 section이 떨어진 값보다 크면
        $('.gnb li a').removeClass('act2'); //메뉴에 act2 서식을 적용하고
        $('.gnb li').eq(i).find('a').addClass('act2'); //메뉴서식을 제거한다.
      }
    });
  });

  //메뉴 클릭시 인덱스값을 구해서 인덱스번호에 해당하는 n번째 section을 선택하여  화면위로 스크롤하여 올라오게 한다.

  let gnb = $('.gnb ul li');
  let i;

  gnb.click(function () {
    i = $(this).index();
    console.log(i); //인덱스값 출력하기 0,1,2,3,4,5

    $('html, body').stop().animate({ scrollTop: $('main section').eq(i).offset().top }, 500, 'easeOutQuint');

    return false; //새로고침 방지
  });


  // 글자 스크롤
  const pTag1 = $('.first-parallel');
  const pTag2 = $('.second-parallel');
  const pTag3 = $('.third-parallel');
  const pTag4 = $('.forth-parallel');

  const textArr1 = 'ABOUT-ME ABOUT-ME ABOUT-ME'.split(' ');
  const textArr2 = '조수인 JOSOOIN 趙秀寅 ジョスイン مساعد βοηθός सहायक ასისტენტი помоћник pytyvõhára '.split(' ');
  const textArr3 = '도전정신이 있다. 생산적이고 유능한 사람을 좋아한다. 야망이 넘친다. 단호하게 행동하는 편이다. 비판을 크게 신경 안 쓰며 자신의 성찰 원동력으로 사용한다. 피드백 해 줄 사람을 오히려 찾는다. 효율성을 중요시한다. 시간 낭비에 예민하다. 결과 중심적이다. 완벽주의이다. 지식을 쌓고자 하는 욕구가 많다. 가끔 엉뚱할 때가 있다. 멀어지면 뒤도 안 돌아본다. 감정 표현이 솔직하다. 외향형 중 ENTP 다음으로 가장 내향적이다.'.split(' ');
  const textArr4 = 'Phone : +82 010-0000-0000 / E-mail : whtndls330@naver.com /'.split(' ');

  let count1 = 0;
  let count2 = 0;
  let count3 = 0;
  let count4 = 0;

  initTexts(pTag1, textArr1);
  initTexts(pTag2, textArr2);
  initTexts(pTag3, textArr3);
  initTexts(pTag4, textArr4);

  function initTexts(element, textArray) {
    textArray.push(...textArray);
    for (let i = 0; i < textArray.length; i++) {
      element.text(element.text() + `${textArray[i]}\u00A0\u00A0\u00A0\u00A0`);
    }
  }

  function marqueeText(count, element, direction) {
    if (count > element[0].scrollWidth / 2) {
      element.css('transform', 'translate3d(0, 0, 0)');
      count = 0;
    }
    element.css('transform', `translate3d(${direction * count}px, 0, 0)`);

    return count;
  }

  function animate() {
    count1++;
    count2++;
    count3++;
    count4++;

    count1 = marqueeText(count1, pTag1, -1);
    count2 = marqueeText(count2, pTag2, 1);
    count3 = marqueeText(count3, pTag3, -1);
    count4 = marqueeText(count4, pTag4, 1);

    window.requestAnimationFrame(animate);
  }

  function scrollHandler() {
    count1 += 15;
    count2 += 15;
    count3 += 15;
    count4 += 15;
  }

  $(window).on('scroll', scrollHandler);
  animate();


  // 스크롤 시 그림 개체 나오게
  const prf_img = $('.prf_img');
  const prf_txt = $('#prf_txt');

  $(window).scroll(function () {
    const scrollPos = $(window).scrollTop();
    const windowHeight = $(window).height();
    const triggerScroll = 140 * windowHeight / 100; // 스크롤 위치 계산

    // 이미지가 화면에 나타날 때
    if (scrollPos > triggerScroll && !prf_img.hasClass('visible')) {
      prf_img.addClass('visible').css({ 'opacity': '1', 'transform': 'translateY(0)' });

      // 1초 후에 텍스트가 화면에 나타나고 타이핑 애니메이션 시작
      setTimeout(function () {
        if (!prf_txt.hasClass('visible')) {
          prf_txt.addClass('visible').css({ 'opacity': '1', 'transform': 'translateY(0)' });
          if (!typingStarted) { // 타이핑 애니메이션이 아직 시작되지 않았다면 시작
            startTyping();
          }
        }
      }, 1000); // 1초 지연
    }
  });

  $('.prf_d_lng, .prf_program').addClass('hidden');

  $(window).scroll(function () {
    const scrollPos = $(window).scrollTop();
    const windowHeight = $(window).height();
    const triggerScroll = 140 * windowHeight / 100; // 애니메이션을 시작할 스크롤 위치

    $('.prf_d_lng, .prf_program').each(function () {
      if (scrollPos > triggerScroll && !$(this).hasClass('visible')) {
        $(this).removeClass('hidden').addClass('visible'); // 요소를 보이게 하고 애니메이션 적용

        // .progress-bar에 대한 애니메이션 적용
        $(this).find('.progress-bar').each(function () {
          if (!$(this).hasClass('animate-width')) {
            setTimeout(() => {
              $(this).addClass('animate-width'); // 1초 지연 후 애니메이션 적용
            }, 300);
          }
        });

        // .progress-bar2에 대한 애니메이션 적용
        $(this).find('.progress-bar2').each(function () {
          if (!$(this).hasClass('animate-width2')) {
            setTimeout(() => {
              $(this).addClass('animate-width2'); // 1초 지연 후 애니메이션 적용
            }, 300);
          }
        });

        // .progress-bar3에 대한 애니메이션 적용
        $(this).find('.progress-bar3').each(function () {
          if (!$(this).hasClass('animate-width3')) {
            setTimeout(() => {
              $(this).addClass('animate-width3'); // 1초 지연 후 애니메이션 적용
            }, 300);
          }
        });

        // .progress-bar4에 대한 애니메이션 적용
        $(this).find('.progress-bar4').each(function () {
          if (!$(this).hasClass('animate-width4')) {
            setTimeout(() => {
              $(this).addClass('animate-width4'); // 1초 지연 후 애니메이션 적용
            }, 300);
          }
        });
      }
    });
  });





  // 플립 이미지
  let prp_img = 0; // 현재 뒤집히는 이미지의 인덱스
  const flipInterval = 5000; // 뒤집히는 간격 (5초)
  const flipDuration = 1500; // 뒤집히는 애니메이션 지속 시간 (1.5초)

  function flipImage() {
    // 모든 flipper의 뒤집힘 상태 리셋
    $('.flipper').css('transform', '');

    // 현재 flipper 뒤집기
    $('.flipper').eq(prp_img).css('transform', 'rotateY(180deg)');

    // 다음 flipper로 인덱스 업데이트
    prp_img = (prp_img + 1) % $('.flipper').length;

    // 마지막 flipper가 뒤집힌 후에는 첫 번째 flipper로 리셋
    if (prp_img === 0) {
      setTimeout(function () {
        $('.flipper').css('transform', ''); // 모든 flipper 리셋
      }, flipDuration); // flipper가 뒤집히는 애니메이션 시간 이후에 실행
    }
  }

  // 첫 번째 이미지 뒤집기 시작
  flipImage();

  // 5초 간격으로 flipImage 함수 반복 실행
  setInterval(flipImage, flipInterval);


  // 타이핑 텍스트
  const textElement = document.getElementById('prf_txt');
  const textToType = "HTML5, CSS3, JavaScript 및 Adobe 도구를 활용하여 혁신적인 웹 경험을 제공하는 웹 퍼블리셔가 되고자 합니다.";
  let index = 0;

  let typingStarted = false; // 타이핑 애니메이션 시작 여부를 추적하는 플래그

  function startTyping() {
    typingStarted = true; // 타이핑 시작 플래그 설정
    function typeText() {
      textElement.textContent = textToType.slice(0, index);
      index++;

      if (index > textToType.length) {
        clearInterval(typingInterval);
        setTimeout(() => {
          index = 0;
          typingInterval = setInterval(typeText, 100); // 여기서는 100ms 간격으로 설정
        }, 5000); // 5초 후에 다시 시작
      }
    }

    let typingInterval = setInterval(typeText, 30); // 타이핑 속도를 조절하려면 이 값을 변경
  }


  // 마우스 오버 시 동영상 재생
  $(document).ready(function () {
    $(".hover-video").hover(
      function () {
        $(this).addClass("active").css({ width: "100%", height: "auto", opacity: 1 }).get(0).play();
      },
      function () {
        $(this).removeClass("active").css({ width: "100%", height: "auto", opacity: 0 }).get(0).pause().currentTime = 0;
      }
    );
  });




  // 프로젝트 이미지 사이트 이동
  $('#unlock1').draggable({
    axis: 'x', // x축으로만 드래그 가능하도록 설정
    containment: '.prj_l_unlock', // 바깥으로 나가지 않도록 body 영역에 제한
    stop: function (event, ui) {
      if (ui.position.left >= 200) {
        window.location.href = 'https://josooin.github.io/cgv/'; // 이동할 웹사이트 주소를 여기에 입력합니다.
      }
    }
  });

  // 프로젝트 이미지 사이트 이동
  $('#unlock2').draggable({
    axis: 'x', // x축으로만 드래그 가능하도록 설정
    containment: '.prj_l_unlock', // 바깥으로 나가지 않도록 body 영역에 제한
    stop: function (event, ui) {
      if (ui.position.left >= 200) {
        window.location.href = 'http://josooin1.dothome.co.kr/harim/index.html'; // 이동할 웹사이트 주소를 여기에 입력합니다.
      }
    }
  });

  // 프로젝트 이미지 사이트 이동
  $('#unlock3').draggable({
    axis: 'x', // x축으로만 드래그 가능하도록 설정
    containment: '.prj_l_unlock', // 바깥으로 나가지 않도록 body 영역에 제한
    stop: function (event, ui) {
      if (ui.position.left >= 200) {
        window.location.href = 'http://josooin1.dothome.co.kr/innisfree/index.html'; // 이동할 웹사이트 주소를 여기에 입력합니다.
      }
    }
  });




});