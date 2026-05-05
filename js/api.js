 export async function loadWeather() {
           const tempTag = document.getElementById('temp');
           const descTag = document.getElementById('weather-desc');
           const iconTag = document.getElementById('weather-icon');

           const apiKey = '0d92260c0a242a23d7bf7c9ed7df54c7';
           const city = 'Tbilisi';

           descTag.textContent = 'იტვირთება...';
           iconTag.style.display = 'none';

        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=ka`);
        
        if (!response.ok) {
            console.error("მონაცემები ვერ მოიძებნა!!!");
            return;
        }

            const data = await response.json();
            console.log(data);

            tempTag.textContent  = Math.round(data.main.temp);
            descTag.textContent = data.weather[0].description;
            iconTag.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
            iconTag.style.display = 'inline-block';

    } catch (error) {
        console.log('ამინდი არასწორად ჩაიტვირთა!', error);
        descTag.textContent = ('ამინდი არასწორად ჩაიტვირთა!!!', error);
        deskTag.style.color = "red";
    }
};
    