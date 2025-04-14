const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");
const discover = document.querySelector("#directory");
const membersURL = "https://bagmister.github.io/wdd230/chamber/data/members.json";

gridbutton.addEventListener("click", () => {
    display.classList.add("grid");
    display.classList.remove("list");
});

listbutton.addEventListener("click", showList);

function showList() {
    display.classList.add("list");
    display.classList.remove("grid");
}

async function getMembers() {
    try {
        const response = await fetch(membersURL);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayBusinesses(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.error(error);
    }
}

function displayBusinesses(businesses) {
    display.innerHTML = '';
    businesses.businesses.forEach(business => {
        let card = document.createElement("section");
        let fullName = document.createElement("h2");
        let logo = document.createElement("img");

        fullName.textContent = `${business.name}`;

        logo.setAttribute('src', business.image);
        logo.setAttribute('alt', `logo of ${business.name}`);
        logo.setAttribute('loading', 'lazy');
        logo.setAttribute('width', '340');
        logo.setAttribute('height', '420');

        card.appendChild(fullName);
        card.appendChild(logo);

        display.appendChild(card);
    });
}

getMembers();