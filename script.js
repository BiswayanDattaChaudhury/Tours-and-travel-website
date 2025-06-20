function scrollToTours() {
  document.getElementById("tours").scrollIntoView({ behavior: "smooth" });
}

function handleForm(event) {
  event.preventDefault();
  alert("Thank you! We'll contact you soon.");
}
