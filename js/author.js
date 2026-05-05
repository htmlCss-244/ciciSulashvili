export const authorization = () => {
    const authForm = document.getElementById('contactForm');
    const formFeedback = document.getElementById('form-feedback');
    const userFeedback = document.getElementById('user-feedback');
    const emailFeedback = document.getElementById('email-feedback');
    const passFeedback = document.getElementById('pass-feedback');
    const confirmFeedback = document.getElementById('confirm-feedback');

    let isLoginMode = false;

    document.addEventListener('click', (e) => {
        if (e.target && e.target.id === 'switchBtn') {
            e.preventDefault();
            isLoginMode = !isLoginMode;

            const nameField = document.getElementById('sure-name').parentElement;
            const userField = document.getElementById('username').parentElement;
            const confirmField = document.getElementById('confirmPass').parentElement;
            const mainBtn = document.querySelector('.submitBtn');
            const toggleText = document.getElementById('toggleText');

            const feedbacks = document.querySelectorAll('.feedback-msg');
            feedbacks.forEach(f => f.textContent = "");

            if (isLoginMode) {
                nameField.style.display = "none";
                userField.style.display = "none";
                confirmField.style.display = "none";
                mainBtn.textContent = "შესვლა";
                toggleText.innerHTML = 'არ გაქვთ ანგარიში? <a href="#" id="switchBtn">რეგისტრაცია</a>';
            } else {
                nameField.style.display = "block";
                userField.style.display = "block";
                confirmField.style.display = "block";
                mainBtn.textContent = "რეგისტრაცია";
                toggleText.innerHTML = 'უკვე გაქვთ ანგარიში? <a href="#" id="switchBtn">შესვლა</a>';
            }
        }
    });

    if (authForm) {
        authForm.addEventListener('submit', function(event) {
            event.preventDefault();


            const feedbackMsgs = document.querySelectorAll('.feedback-msg');
            feedbackMsgs.forEach(msg => msg.textContent = "");

            const email = document.getElementById('email').value.trim();
            const password = document.getElementById('password').value.trim();
            const rememberMe = document.getElementById('rememberMe').checked;

            let userList = JSON.parse(localStorage.getItem('users')) || [];

                if (isLoginMode) {

            const foundUser = userList.find(u => u.email === email && u.password === password);

                if (foundUser) {

                if (rememberMe) {
                    localStorage.setItem('userData', JSON.stringify(foundUser));
                } else {
                    sessionStorage.setItem('userData', JSON.stringify(foundUser));
                    localStorage.removeItem('userData');
                }
                    formFeedback.textContent = "თქვენ წარმატებით შეხვედით თქვენს კაბინეტში!";
                    formFeedback.style.color = "green";
                    setTimeout(() => { window.location.href = "index.html" }, 2000);
            } else {
                formFeedback.textContent = "ელ.ფოსტა ან პაროლი არასწორია!";
                formFeedback.style.color = "red";
            }
            } else {
                const fullName = document.getElementById('sure-name').value.trim();
                const username = document.getElementById('username').value.trim();
                const confirmPass = document.getElementById('confirmPass').value.trim();
                const usernameRegex = /^[A-Z][a-z0-9!@#$%&()=+-_]{4,}$/;
                const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
                const passwordRegex = /^[A-Z][a-z0-9!@#$%&()+=-_]{5,}$/;

                if (!fullName || !username || !email || !password || !confirmPass) {
                    formFeedback.textContent = "გთხოვთ შეავსოთ ყველა ველი!";
                    formFeedback.style.color = "red";
                    return;
                }

                if (!usernameRegex.test(username)) {
                    userFeedback.textContent = "Username უნდა იწყებოდეს დიდი ასოთი (მინ. 4 სიმბოლო)!";
                    userFeedback.style.color = "red";
                    return;
                }

                if (!emailRegex.test(email)) {
                    emailFeedback.textContent = "გთხოვთ შეიყვანოთ სწორი ელ.ფოსტა!";
                    emailFeedback.style.color = "red";
                    return;
                }

                if (!passwordRegex.test(password)) {
                    passFeedback.textContent = "პაროლი უნდა შეიცავდეს დიდ ასოს და სიმბოლოებს (მინ. 6 სიმბოლო)!";
                    passFeedback.style.color = "red";
                    return;
                }

                if (password !== confirmPass) {
                    confirmFeedback.textContent = "პაროლები არ ემთხვევა!";
                    confirmFeedback.style.color = "red";
                    return;
                }

                const alreadyExists = userList.some(u => u.email === email || u.username === username);
                
                if (alreadyExists) {
                    formFeedback.textContent = "ეს ელ.ფოსტა ან Username-ი უკვე გამოყენებულია!";
                    formFeedback.style.color = "red";
                    return;
                }

                const newUser = {
                    fullName: fullName,
                    username: username,
                    email: email,
                    password: password
                };

                userList.push(newUser);
                localStorage.setItem('users', JSON.stringify(userList));
                localStorage.setItem('userData', JSON.stringify(newUser));

                formFeedback.textContent = "თქვენ წარმატებით გაიარეთ რეგისტრაცია!!!";
                formFeedback.style.color = "green";

                setTimeout(() => {
                    window.location.href = "index.html";
                }, 2000);
            }
        });
    }
};
