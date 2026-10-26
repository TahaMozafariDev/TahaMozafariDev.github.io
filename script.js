(function () {
  "use strict";
  if (typeof Typed !== "undefined") {
    new Typed("#typed", {
      strings: ["برنامه نویس", "دانش آموز", "کلاس هشتم", "عاشق لینوکس"],
      typeSpeed: 80,
      backSpeed: 40,
      backDelay: 1000,
      startDelay: 500,
      loop: true,
      showCursor: true,
      cursorChar: "|",
    });
  } else {
    console.warn("Typed.js لود نشده است.");
  }
})();
