document.getElementById("envelope").addEventListener("click", () => {
  const envelope = document.getElementById("envelope");
  const invitationText = document.getElementById("invitationText");
  const music = document.getElementById("musicFrame");
  const confettiElements = document.querySelectorAll(".confetti");

  // Open the envelope
  envelope.classList.add("open");

  // Hide the instruction text
  invitationText.classList.add("hidden");

  // Play music
  music.src =
    "https://www.youtube.com/embed/vhVBWw6rId0?autoplay=1&loop=1&playlist=vhVBWw6rId0";

  // Show confetti
  setTimeout(() => {
    confettiElements.forEach((confetti) => {
      confetti.classList.add("active");
      confetti.style.animation = `float ${Math.random() * 3 + 2}s infinite`;
    });
  }, 1000);
});
