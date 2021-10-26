## full-calendar 라이브러리 사용법

1.  공식 홈페이지에서 다운로드 한다.
2.  다운 받은 폴더 fullcalendar-5.10.0.zip/lib 에 있는 'main.js','main.css'를 public 안에 fullcalendar 폴더를 만들어서 복사&붙여넣기 한다.
3.  'index.html' head 에 아래와 같은 코드를 입력한다.

        <link rel="stylesheet" type="text/css" href="fullcalendar/main.css" />
        <script src='fullcalendar/main.js'></script>
        <script>
          document.addEventListener('DOMContentLoaded', function() {
            var calendarEl = document.getElementById('calendar');
            var calendar = new FullCalendar.Calendar(calendarEl, {
              initialView: 'dayGridMonth'
              });
              calendar.render();
            });
        </script>

4.  'index.html' body 에 아래와 같은 코드를 입력하여 full-calendar 를 불러온다.

        <div id='calendar'></div>

### 기능들

aspectRatio : 달력의 가로세로 비율을 설정한다.
selectable : 드래그로 날짜를 여러개 선택한다.
contentHeight : 달력 바디부분의 높이를 조정한다.
headerToolbar : 달력 헤더부분을 설정한다.
showNonCurrentDates : 해당 월이 아닐경우의 요일표시여부를 설정한다.
fixedWeekCount : true의 경우 6주로 고정되어 출력되고, false의 경우 해당 월에 있는 주기만큼 동적으로 출력된다.(4~6주)
dayHeaderContent : 요일표기방식을 설정한다.
locale : 언어를 설정한다.
