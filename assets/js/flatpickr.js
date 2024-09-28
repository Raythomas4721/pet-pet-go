// const dateAlert = document.querySelector(".dateAlert");

// const currentTime = new Date();

// let startDateValue = null;
// let endDateValue = null;

// const config = {
//   inline: true,
//   appendTo: document.querySelector(".calendar-container"),
//   disableMobile: true,
//   enableTime: true, // 啟用時間選擇
//   dateFormat: "m/d/Y H:i", // 日期和時間格式
//   time_24hr: true, // 使用24小時格式
//   minuteIncrement: 60, // 分鐘增量
//   allowInput: true, // 允許手動輸入
//   minDate: "today", // 最小可選日期
//   maxDate: new Date(new Date().setMonth(currentTime.getMonth() + 2)), // 最大可選日期（兩個月後）

//   onChange: function (selectedDates, dateStr, instance) {
//     checkDateTime(dateStr, instance.input.id);
//   },
// };

// function checkDateTime(dateStr, id) {
//   if (id === "startDate") {
//     startDateValue = dateStr;
//   }

//   if (id === "endDate") {
//     endDateValue = dateStr;
//   }

//   if (startDateValue && endDateValue && startDateValue > endDateValue) {
//     dateAlert.classList.remove("d-none");
//   } else {
//     dateAlert.classList.add("d-none");
//   }
// }

// const datePickerOffcanvas = document.getElementById("datePickerOffcanvas");
// datePickerOffcanvas.addEventListener("show.bs.offcanvas", function () {
//   flatpickr("input[type=datetime-local]", config);
// });