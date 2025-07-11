document.getElementById("envelope").addEventListener("click", () => {
  const envelope = document.getElementById("envelope");
  const invitationText = document.getElementById("invitationText");
  const confettiElements = document.querySelectorAll(".confetti");
  const confettiDino = document.querySelector(".confetti-4");

  // Open the envelope
  envelope.classList.add("open");

  // Hide the instruction text
  invitationText.classList.add("hidden");

  // Play music
  document
    .getElementById("music")
    .play()
    .catch((e) => {
      console.warn("Не удалось воспроизвести музыку:", e);
    });

  // Show confetti
  setTimeout(() => {
    confettiElements.forEach((confetti) => {
      confetti.classList.add("active");
      confettiDino.classList.add("active");
      confetti.style.animation = `float ${Math.random() * 3 + 2}s infinite`;
    });
  }, 1000);
});
