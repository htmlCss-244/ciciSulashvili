document.addEventListener('DOMContentLoaded', () => {
    const isGeorgian = document.documentElement.lang === 'ka';

    const boatBtn = document.querySelector(".boatBtn");
    const boatsGrid = document.querySelector(".boatsGrid");

    if (boatBtn && boatsGrid) {
        boatBtn.addEventListener("click", () => {
            boatsGrid.classList.toggle("showGrid");
            const rightside = document.querySelector('.rightside');
            if (rightside) rightside.classList.toggle('shrink');
            
            if (boatsGrid.classList.contains("showGrid")) {
                boatBtn.textContent = isGeorgian ? "დახურვა ↑" : "Close ↑";
            } else {
                boatBtn.textContent = isGeorgian ? "ნახე ვრცლად ↓" : "See more ↓";
            }
        });
    }

    const museumBtn = document.querySelector(".museumBtn");
    const museumGrid = document.querySelector(".museumGrid");

    if (museumBtn && museumGrid) {
        museumBtn.addEventListener("click", () => {
            museumGrid.classList.toggle("showGrid");
            const rightside = document.querySelector('.rightside');
            if (rightside) rightside.classList.toggle('shrink');
            
            if (museumGrid.classList.contains("showGrid")) {
                museumBtn.textContent = isGeorgian ? "დახურვა ↑" : "Close ↑";
            } else {
                museumBtn.textContent = isGeorgian ? "ნახე ვრცლად ↓" : "See more ↓";
            }
        });
    }

    const detailsButtons = document.querySelectorAll('.details-btn');
    detailsButtons.forEach(button => {
        button.addEventListener('click', function() {
            const card = this.closest('.service-card');
            if (!card) return;
            
            const hiddenContent = card.querySelector('.hidden-details');

            if (hiddenContent.style.display === "none" || hiddenContent.style.display === "") {
                hiddenContent.style.display = "block";
                this.textContent = isGeorgian ? "დახურვა" : "Close";
                this.style.backgroundColor = "#d4a373";
            } else {
                hiddenContent.style.display = "none";
                this.textContent = isGeorgian ? "დაწვრილებით" : "Details";
                this.style.backgroundColor = "";
            }
        });
    });

    const contactForm = document.getElementById('contactForm');
    const feedback = document.getElementById('form-feedback');

    if (contactForm && feedback) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const messageElement = document.getElementById('message');
            const message = messageElement ? messageElement.value.trim() : "";

            if (name.length < 2 || email === "" || (messageElement && message === "")) {
                feedback.textContent = isGeorgian ? "გთხოვთ, შეავსოთ ყველა ველი სწორად!" : "Please fill in all fields correctly!";
                feedback.style.color = "red";
                return;
            }

            if (!email.includes("@") || !email.includes(".")) {
                feedback.textContent = isGeorgian ? "გთხოვთ, მიუთითოთ სწორი ელ-ფოსტა!" : "Please enter a valid email address.";
                feedback.style.color = "red";
                return;
            }

            feedback.textContent = isGeorgian ? "წარმატებით გაიგზავნა!" : "Success! Your message has been sent.";
            feedback.style.color = "green";
            contactForm.reset();
        });
    }
});