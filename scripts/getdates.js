currentDate = new Date().getFullYear();
document.body.innerHTML = document.body.innerHTML.replace('current_date', currentDate);
lastModDate = new Date(document.lastModified)
document.body.innerHTML = document.body.innerHTML.replace('last_Modified', lastModDate);