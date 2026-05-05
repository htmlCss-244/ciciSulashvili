export const tbilisiLocations = [
    {
        id: 1,
        name: "რიყის პარკი",
        category: "პარკი",
        description: "თანამედროვე დასასვენებელი სივრცე მინის ხიდითა და საბაგიროთი.",
        image: "./picture/riye.jpg",
    },
    {
        id: 2,
        name: "მთაწმინდის პარკი",
        category: "პარკი",
        description: "თბილისის ყველაზე მაღალი წერტილი ატრაქციონებითა და პანორამული ხედებით.",
        image: "./picture/mtawminda.jpg",
    },
    {
        id: 3,
        name: "აბანოთუბანი",
        category: "ისტორიული",
        description: "უძველესი უბანი, სადაც თბილისის ისტორია გოგირდის წყლებით დაიწყო.",
        image: "./picture/abanotubani.jpg",
    },
    {
        id: 4,
        name: "კუს ტბა",
        category: "ბუნება",
        description: "იდეალური ადგილი ბუნებაში დასასვენებლად, სპორტისა და სეირნობისთვის.",
        image: "./picture/kustba.jpg",
    },
    {
        id: 5,
        name: "ფაბრიკა",
        category: "კულტურა",
        description: "ურბანული სივრცე, რომელიც ხელოვნებას, კაფეებსა და თავისუფალ სულს აერთიანებს.",
        image: "./picture/fabrika.jpg",
    },
    {
        id: 6,
        name: "თბილისის ოპერისა და ბალეტის თეატრი",
        category: "კულტურა",
        description: "თბილისის კულტურული ცენტრი რუსთაველის გამზირზე, გამორჩეული მავრიტანული სტილის არქიტექტურით.",
        image: "./picture/opera.jpg",
    },
    {
        id: 7,
        name: "ეთნოგრაფიული მუზეუმი",
        category: "მუზეუმი",
        description: "იდეალური ადგილი ბუნებაში დასასვენებლად, სპორტისა და სეირნობისთვის.",
        image: "./picture/etnografiuli.jpg",
    },
    {
        id: 8,
        name: "ბოტანიკური ბაღი",
        category: "ბუნება",
        description: "მწვანე ოაზისი ქალაქის ცენტრში, ჩანჩქერითა და უნიკალური მცენარეებით.",
        image: "./picture/botanikuri.jpg",
    },
];

 export const updateLocation = tbilisiLocations.map((location) => {
        return {
            ...location,
            country: "საქართველო",
            city: "თბილისი",
            currency: "₾/GEL",
            language: "ქართული",
       };
    });

export const renderLocations = (data = updateLocation) => {
       const container = document.getElementById("locations-container");

       if (container) {
        container.innerHTML = "";

       data.forEach((location, index) => {
            const itemNumber = index + 1;

            const card = document.createElement('div');
            card.classList.add('locationCard');

            const img = document.createElement('img');
            img.src = location.image;
            img.alt = location.name;
            img.classList.add('card-img');

            const cardContent = document.createElement('div');
            cardContent.classList.add('card-content');

            const title = document.createElement('h3');
            title.textContent = `${itemNumber}. ${location.name}`;

            const description = document.createElement('p');
            description.textContent = location.description;

            const info = document.createElement('p');
            info.classList.add('location-info');
            info.textContent = `📍 ${location.city}, ${location.country}`;

            const category = document.createElement('p');
            category.classList.add('category-tag');
            category.textContent = location.category;

            const metaInfo = document.createElement('small');
            metaInfo.textContent = `ვალუტა: ${location.currency} | ენა: ${location.language}`;

            cardContent.appendChild(title);
            cardContent.appendChild(description);
            cardContent.appendChild(info);
            cardContent.appendChild(category);
            cardContent.appendChild(metaInfo);

            card.appendChild(img);
            card.appendChild(cardContent);

            container.appendChild(card);
        });
    }
};

export const searchInput = document.getElementById("searchInput");

if (searchInput) {
    searchInput.addEventListener('input', (event) => {
        const term = event.target.value.toLowerCase();

        const filteredLocations = tbilisiLocations.filter((location) => {
            if (location.name.toLowerCase().includes(term) || location.category.toLowerCase().includes(term)) {
                    return true;
                }
            });
            renderLocations(filteredLocations);
        })
    };

