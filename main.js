          let currentDay = '';

        function updateTime() {
          const now = new Date();
          const hours = now.getHours();
          const minutes = now.getMinutes().toString().padStart(2, '0');
          const seconds = now.getSeconds().toString().padStart(2, '0');
          const amPm = hours >= 12 ? 'PM' : 'AM';
          const formattedTime = `${hours % 12 || 12}:${minutes}:${seconds} ${amPm}`;
          const formattedDate = now.toLocaleDateString();

          const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
          currentDay = daysOfWeek[now.getDay()];

          // Update the DOM
          document.getElementById('currentTime').textContent = formattedTime;
          document.getElementById('currentDate').textContent = formattedDate;
          document.getElementById('currentDay').textContent = `,  ${currentDay}`;
        }

        // Update the time every second
        setInterval(updateTime, 1000);
        updateTime();
        
  function opt(){
    let a = document.querySelector('.opt');
    let b = document.querySelector('#optt');

    if(a.style.display=="block"){
      a.style.display="none";
    b.textContent ="☰";
    b.style.backgroundColor = "green";

    }
    else{
      a.style.display="block";
    b.textContent ="×";
b.style.backgroundColor = "red";
    }
  }
  function home(){
    window.location.href="index.html";
  }
      function member() {
      window.location.href = "member.html";
    }
       function gal() {
        window.location.href = "gallery.html";
      }
        function rr() {
         window.location.href = "r&r.html";
       }
 function back() {
  window.history.back();
 }
    
    
    
