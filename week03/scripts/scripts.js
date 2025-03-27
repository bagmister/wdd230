const input = document.querySelector("#favchap")
const button = document.querySelector("button")
const list = document.querySelector("#list")
const li = document.createElement("li")
const deleteButton = document.createElement("button")
let chaptersArray = getChapterList() || []
let displayList = (item)
input.value = '';

function addChapter(input){
  if (input.value.trim() !== null) {
    li.textContent = input.value;
    deleteButton.textContent = '❌';
    li.append(deleteButton);
    list.append(li);
  } else{
    return input.focus();
  }
}

function deleteChapter(chapter){
  chapter = chapter.slice(0, chapter.length - 1);
  chaptersArray = chaptersArray.filter((item) => item !== chapter);
  setChapterList()
}

function displayList(item){
  let li = document.createElement('li')
  let liDeletebutton = document.createElement('button')
  li.textContent = item
  liDeletebutton.textContent = '❌';
  liDeletebutton.classList.add('delete')
  li.append(liDeletebutton)
  list.append(li)
  liDeletebutton.addEventListener('click', function () {
    list.removeChild(li)
    deleteChapter(li.textContent)
    input.focus()
  })
}

function setChapterList(){
  localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray))
}

function getChapterList() {
  return JSON.parse(localStorage.getItem('myFavBOMList'));
}

chaptersArray.forEach(chapter => {
  displayList(chapter);
});

button.addEventListener('click', () => {
  if (input.value != '') { 
    displayList(input.value);
    chaptersArray.push(input.value);
    setChapterList();
    input.value = '';
    input.focus();
  }
});
deleteButton.addEventListener('click', deleteChapter(li))
