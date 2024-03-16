const header = document.querySelector(".calendar h3");
const dates = document.querySelector(".dates");
const navs = document.querySelectorAll("#prev, #next");

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
var daysArray = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"];

let date = new Date();
let month = date.getMonth();
let year = date.getFullYear();
function renderCalendar() {
  const start = new Date(year, month, 1).getDay();
  const endDate = new Date(year, month + 1, 0).getDate();
  const end = new Date(year, month, endDate).getDay();
  const endDatePrev = new Date(year, month, 0).getDate();
  var calMonthArray = makeMonthArray(month, year);
  
  function makeMonthArray(month,year) { // creates Array specifying dates and weekdays
    var e = [];
    for (var r = 1; r < getDaysInMonth(year, month) + 1; r++) {
        e.push({
            day: r,
            // Later refactor -- weekday needed only for first week
            weekday: daysArray[getWeekdayNum(year,month, r)]
        });
    }
    return e;
}
function getDaysInMonth(currentYear, currentMon) {
  return (new Date(currentYear, currentMon + 1, 0)).getDate();
}
function getWeekdayNum(e, t, n) {
  return (new Date(e, t, n)).getDay();
}

  let datesHtml = "";

//   for (let i = start; i > 0; i--) {
    
//     datesHtml += `<li class="inactive-disple">${endDatePrev - i + 1}</li>`;
  
//   }
  for (let i = 1; i <= endDate; i++) {
   
    // let className =
    //   i === date.getDate() &&
    //   month === new Date().getMonth() &&
    //   year === new Date().getFullYear()
    //     ? ' class="today"'
    //     : "";
  
    // datesHtml += `<li${className}>${i}</li>`;
    
    var shownDate = calMonthArray[i];
    var iter_date = new Date(year, month, shownDate);
    if (((shownDate != date.getDate() && month == date.getMonth()) || month != date.getMonth()) && iter_date < date) {
         
          datesHtml += `<li class="past-date">${i}</li>`;
      }
      else {
         let className =
        i === date.getDate() &&
        month === new Date().getMonth() &&
        year === new Date().getFullYear()
          ? ' class="today"'
          : "";
          datesHtml += `<li${className}>${i}</li>`;
    }


  }
  
  for (let i = end; i < 6; i++) {
    datesHtml += `<li class="inactive">${i - end + 1}</li>`;
  }

  dates.innerHTML = datesHtml;
  header.textContent = `${months[month]} ${year}`;
}

navs.forEach((nav) => {
  nav.addEventListener("click", (e) => {
    const btnId = e.target.id;

    if (btnId === "prev" && month === 0) {
      year--;
      month = 11;
    } else if (btnId === "next" && month === 11) {
      year++;
      month = 0;
    } else {
      month = btnId === "next" ? month + 1 : month - 1;
    }

    date = new Date(year, month, new Date().getDate());
    year = date.getFullYear();
    month = date.getMonth();

    renderCalendar();
  });
});

renderCalendar();
