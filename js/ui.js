 export const setupEffects = () => {
    const boatBtn = document.querySelector(".boatBtn");
    const boatsGrid = document.querySelector(".boatsGrid");

    if (boatBtn && boatsGrid) {
        boatBtn.addEventListener("click", () => {
            boatsGrid.classList.toggle("showGrid");

            const rightside = document.querySelector('.rightside');

            if (rightside) rightside.classList.toggle('shrink');
            
            if (boatsGrid.classList.contains("showGrid")) {
                boatBtn.textContent = "დახურვა ↑";
            } else {
                boatBtn.textContent = "ნახე ვრცლად ↓";
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
                museumBtn.textContent = "დახურვა ↑";
            } else {
                museumBtn.textContent = "ნახე ვრცლად ↓";
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
                this.textContent = "დახურვა";
                this.style.backgroundColor = "#d4a373";
            } else {
                hiddenContent.style.display = "none";
                this.textContent = "დაწვრილებით";
                this.style.backgroundColor = "";
            }
        });
    });
};

    export const greeting = () => {
        const userGreeting = document.getElementById('user-greeting');
        const authLink = document.getElementById('auth-link');
        const logoutBtn = document.getElementById('logout-btn');

        const storedUser = localStorage.getItem('userData');

                if (storedUser) {

        const user = JSON.parse(storedUser);

            if (userGreeting) {
        userGreeting.innerHTML = `მოგესალმებით, ${user.fullName}`;
        userGreeting.classList.add('welcomeText');
    }

            if (authLink) authLink.style.display = 'none';

            if (logoutBtn)
                logoutBtn.style.display = 'inline-block';

        } else {

            if (userGreeting) {
                userGreeting.innerHTML = "თქვენ იმყოფებით საიტზე სტუმრის სტატუსით";
    }

}

    if (logoutBtn) {

        logoutBtn.addEventListener('click', () => {

        localStorage.removeItem('userData');

        window.location.href = 'index.html';

    });

}
};

const tbilisiFacts = [
    {
        title: "თბილისის დაარსება",
        icon: "👑",
        text: "ლეგენდის მიხედვით, მეფე ვახტანგ გორგასალმა ქალაქი V საუკუნეში, ცხელი წყაროების აღმოჩენის შემდეგ დააარსა. სწორედ ამ 'თბილი' წყლების გამო ეწოდა დედაქალაქს თბილისი."
    },
    {
        title: "კულტურა ძველი დროიდან დღემდე",
        icon: "🎭",
        text: "თბილისი ყოველთვის იყო კულტურათა გზაჯვარედინი. აქ ერთმანეთს ხვდებოდა აღმოსავლური ქარვასლები, ევროპული არქიტექტურა და მრავალფეროვანი ხელოვნება, რაც ქალაქის უნიკალურ 'თბილისურ სტილს' ქმნიდა."
    },
    {
        title: "როგორ გაშენდა თბილისი",
        icon: "🏗️",
        text: "ქალაქი თავიდან მხოლოდ ნარიყალას ციხის გარშემო იყო გაშენებული. მე-19 საუკუნეში თბილისი გარეთ გამოვიდა და გაჩნდა ევროპული ტიპის გამზირები (მაგ. რუსთაველი), რამაც ქალაქს 'კავკასიის პარიზის' სახელი მოუტანა."
    },
    {
        title: "თბილისელი ხალხი",
        icon: "👥",
        text: "თბილისი გამოირჩევა მულტიკულტურული მოსახლეობით. საუკუნეების მანძილზე აქ გვერდიგვერდ, მშვიდობიანად ცხოვრობდნენ და შრომობდნენ სხვადასხვა ეროვნებისა და მრწამსის ადამიანები."
    },
    {
        title: "ტრადიციული ჩაცმულობა",
        icon: "👗",
        text: "ძველ თბილისში მამაკაცები ჩოხა-ახალუხს ატარებდნენ, რაც ვაჟკაცობისა და თავდადების სიმბოლო იყო, ხოლო ქალბატონები - დახვეწილ ქართულ კაბებსა და თავსაბურავებს."
    },
    {
        title: "რელიგია და ტაძრები",
        icon: "⛪",
        text: "თბილისი რელიგიური შემწყნარებლობის სიმბოლოა: ძველ უბანში (მეიდანზე) ნახავთ მართლმადიდებლურ ტაძარს, მეჩეთს, სინაგოგასა და სომხურ ეკლესიას, რომლებიც გვერდიგვერდ დგანან."
    }
];

export const initHistoryModal = () => {
    const historySection = document.querySelector(".tbshistory");
    const modal = document.getElementById("NewFact");
    const contentContainer = document.getElementById("factContent");

    if (!historySection || !modal || !contentContainer) return;

        const renderFact = () => {
        const oldWrapper = contentContainer.querySelector(".dynamic-fact-wrapper");
        if (oldWrapper) oldWrapper.remove();

        const randomData = tbilisiFacts[Math.floor(Math.random() * tbilisiFacts.length)];
        
        const wrapper = document.createElement("div");
        wrapper.classList.add("dynamic-fact-wrapper");

        const header = document.createElement("div");
        header.classList.add("fact-header");

        const iconSpan = document.createElement("span");
        iconSpan.classList.add("fact-icon");
        iconSpan.textContent = randomData.icon;

        const titleH3 = document.createElement("h3");
        titleH3.classList.add("fact-title");
        titleH3.textContent = randomData.title;

        const descP = document.createElement("p");
        descP.classList.add("fact-description");
        descP.textContent = randomData.text;

        const nextBtn = document.createElement("button");
        nextBtn.id = "nextFactBtn";
        nextBtn.textContent = "შემდეგი →";
        nextBtn.classList.add("facts-next");

        header.appendChild(iconSpan);
        header.appendChild(titleH3);
        wrapper.appendChild(header);
        wrapper.appendChild(descP);
        wrapper.appendChild(nextBtn);
        
        contentContainer.appendChild(wrapper);
    };

    historySection.addEventListener("click", (event) => {
        if (event.target.id === "openFact") {
            renderFact();
            modal.style.display = "flex";
        }

        if (event.target.id === "nextFactBtn") {
            renderFact();
        }

        if (event.target.id === "closeBtn" || event.target === modal) {
            modal.style.display = "none";
        }
    });

    window.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && modal.style.display === "flex") {
            modal.style.display = "none";
        }
    });
};