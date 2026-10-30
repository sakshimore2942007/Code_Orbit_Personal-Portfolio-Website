
const form = document.getElementById("contactForm");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;

    document.getElementById("response").textContent =
        "Thank you, " + name + "! Your form was submitted.";

    form.reset();
});
