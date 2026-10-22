const pollForm = document.getElementById("party-poll-form");
const pollMessage = document.getElementById("poll-message");

pollForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const selectedOption = pollForm.querySelector(
    'input[name="party-theme"]:checked'
  );

  if (!selectedOption) {
    pollMessage.textContent = "Please choose a theme first.";
    return;
  }

  pollMessage.textContent =
    `Thanks for voting! You selected: ${selectedOption.value}.`;

  pollForm.querySelectorAll('input[name="party-theme"]').forEach((input) => {
    input.disabled = true;
  });

  pollForm.querySelector("button[type='submit']").disabled = true;
});
