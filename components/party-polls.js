
const pollForm = document.getElementById("party-poll-form");
const pollMessage = document.getElementById("poll-message");

pollForm.addEventListener("submit", async function (event) {
  event.preventDefault();

  const selectedOption = pollForm.querySelector(
    'input[name="party-theme"]:checked'
  );

  if (!selectedOption) {
    pollMessage.textContent = "Please choose a theme first.";
    return;
  }

  const voteButton = pollForm.querySelector("button[type='submit']");

  voteButton.disabled = true;
  pollMessage.textContent = "Submitting your vote...";

  const data = new FormData(pollForm);

  try {
    const response = await fetch(pollForm.action, {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json"
      }
    });

    if (response.ok) {
      pollMessage.textContent =
        `Thanks for voting! You selected: ${selectedOption.value}.`;

      pollForm.querySelectorAll(
        'input[name="party-theme"]'
      ).forEach((input) => {
        input.disabled = true;
      });

    } else {
      throw new Error("Submission failed");
    }

  } catch (error) {
    pollMessage.textContent =
      "There was a problem submitting your vote. Please try again.";

    voteButton.disabled = false;
  }
});

