// <⚠️ DONT DELETE THIS ⚠️>
// import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const select = document.querySelector('select');
const options = document.querySelectorAll('option');

function answerText(country) {
    const answer = document.querySelector('.answer');
    answer.innerText = `I'm from ${country}`;
}

function reloadPage() {
    if(localStorage.country) {
        getLSCountry();
    }
}

// function compareCountry(LScountry) {
//     options.forEach(ele => {
//         if(LScountry === ele.innerText) {
//             ele.selected = true;
//         }
//     });
// }
function reloadSaveCountry(LScountry) {
    select.value = LScountry;
    reloadSaveCountry(LScountry);
}

function getLSCountry() {
    const LScountry = localStorage.getItem('country');
    console.log(LScountry);
    // compareCountry(LScountry);
    answerText(LScountry);
}

function saveCountry(countryName) {
    localStorage.setItem('country', countryName);
    answerText(countryName);
}

function selectCountry() {
    select.addEventListener('change', (country) => {
        console.log(country);
        const countryName = country.target.value;
        if(countryName !== '') {
            saveCountry(countryName);
        }
    });
}

function init() {
    selectCountry();
    reloadPage();
};

init();
