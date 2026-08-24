/* =========================================================
   EVENT COUNTDOWN
   ========================================================= */

const eventDate = new Date("2026-10-25T16:00:00+05:30");

function updateCountdown() {

  const daysElement = document.getElementById("days");
  const hoursElement = document.getElementById("hours");
  const minutesElement = document.getElementById("minutes");
  const secondsElement = document.getElementById("seconds");

  /*
    Only run the countdown if this page actually
    contains the countdown elements.
  */

  if (
    !daysElement ||
    !hoursElement ||
    !minutesElement ||
    !secondsElement
  ) {
    return;
  }

  const now = new Date();

  const remaining = Math.max(
    0,
    Math.floor(
      (eventDate.getTime() - now.getTime()) / 1000
    )
  );

  const days = Math.floor(remaining / 86400);

  const hours = Math.floor(
    (remaining % 86400) / 3600
  );

  const minutes = Math.floor(
    (remaining % 3600) / 60
  );

  const seconds = remaining % 60;

  daysElement.textContent =
    String(days).padStart(2, "0");

  hoursElement.textContent =
    String(hours).padStart(2, "0");

  minutesElement.textContent =
    String(minutes).padStart(2, "0");

  secondsElement.textContent =
    String(seconds).padStart(2, "0");
}

updateCountdown();

setInterval(updateCountdown, 1000);


/* =========================================================
   MOBILE MENU
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

  const menuButton =
    document.querySelector(".mobile-menu");

  const menuPanel =
    document.querySelector(".mobile-menu-panel");

  const closeButton =
    document.querySelector(".mobile-menu-close");


  /* Page doesn't have mobile menu */
  if (!menuButton || !menuPanel) {
    return;
  }


  /* OPEN MENU */

  menuButton.addEventListener("click", function () {

    menuPanel.classList.add("open");

  });


  /* CLOSE MENU */

  if (closeButton) {

    closeButton.addEventListener("click", function () {

      menuPanel.classList.remove("open");

    });

  }


  /* CLOSE WHEN CLICKING A LINK */

  menuPanel.querySelectorAll("a").forEach(function (link) {

    link.addEventListener("click", function () {

      menuPanel.classList.remove("open");

    });

  });

});
