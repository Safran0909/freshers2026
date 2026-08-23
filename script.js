/*
  The reference screenshot shows 11 : 05 : 42 : 19.
  To keep the visual identical while making the counter live, this starts
  from that exact duration and counts down from page load.
*/
const eventDate = new Date("2026-10-25T16:00:00+05:30");

function updateCountdown() {
  const now = new Date();

  const remaining = Math.max(
    0,
    Math.floor((eventDate.getTime() - now.getTime()) / 1000)
  );

  const days = Math.floor(remaining / 86400);
  const hours = Math.floor((remaining % 86400) / 3600);
  const minutes = Math.floor((remaining % 3600) / 60);
  const seconds = remaining % 60;

  document.getElementById("days").textContent =
    String(days).padStart(2, "0");

  document.getElementById("hours").textContent =
    String(hours).padStart(2, "0");

  document.getElementById("minutes").textContent =
    String(minutes).padStart(2, "0");

  document.getElementById("seconds").textContent =
    String(seconds).padStart(2, "0");
}

updateCountdown();
setInterval(updateCountdown, 1000);