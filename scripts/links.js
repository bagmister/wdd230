const baseURL = "https://bagmister.github.io/wdd230/"
const linksURL = "https://bagmister.github.io/wdd230/data/links.json"
const learningActivites = document.querySelector("#learningActivities")


async function getLinks() {
    try {
        const response = await fetch(linksURL)
        if (response.ok){
            const data = await response.json()
            displayLinks(data)
            console.log(data)
        } else {
            throw Error(await response.text())
        }

    } catch (error) {
        console.log(error)
    }
}

function displayLinks(weeks) {
    let weeksRefined = weeks.weeks
    weeksRefined.forEach(week => {
        let title = document.createElement("h2")
        let week = document.createElement("")

        fullName.textContent = `${week.name} ${week.lastname}`;

        portrait.setAttribute('src', week.url);
        portrait.setAttribute('alt', `Portrait of ${week.name} ${week.lastname}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '420');
        card.appendChild(fullName);
        card.appendChild(portrait);

        cards.appendChild(card)
    });
}

getLinks()
