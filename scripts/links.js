const baseURL = "https://bagmister.github.io/wdd230/";
const linksURL = "https://bagmister.github.io/wdd230/data/links.json";
const learningActivities = document.querySelector("#learningActivities");

async function getLinks() {
    try {
        const response = await fetch(linksURL);
        if (response.ok) {
            const data = await response.json();
            displayLinks(data);
            console.table(data)
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.error(error);
    }
}

function displayLinks(data) {
    const div = document.createElement("div");
    div.id = "learningActivities";

    const h2 = document.createElement("h2");
    h2.textContent = "Learning Activities";
    div.appendChild(h2);

    const ul = document.createElement("ul");

    data.weeks.forEach((week) => {
        const li = document.createElement("li");
        li.textContent = `${week.week} | `

        week.links.forEach((link, index) => {
            const a = document.createElement("a");
            const href = link.url.startsWith("http") ? link.url : `${baseURL}${link.url}`;
            a.setAttribute("href", href);
            a.textContent = link.title + " | ";
            li.appendChild(a);

            if (index < week.links.length - 1) {
                li.appendChild(document.createTextNode(" "));
            }
        });

        ul.appendChild(li);
    });

    div.appendChild(ul);
    learningActivities.replaceWith(div);
}

getLinks();