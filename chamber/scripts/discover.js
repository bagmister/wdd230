const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");
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
            displayLinks(data);
            console.table(data)
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.error(error);
    }
}


getMembers();