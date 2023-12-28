let addBtn = document.querySelectorAll(`button`)[0]
let addBtn1 = document.querySelectorAll(`button`)[1]
let addBtn2 = document.querySelectorAll(`button`)[2]
let inputBox = document.querySelectorAll(`input`)[0]
let inputBox1 = document.querySelectorAll(`input`)[1]
let inputBox2 = document.querySelectorAll(`input`)[2]
let container = document.querySelectorAll(`ul`)[0]
let container1 = document.querySelectorAll(`ul`)[1]
let container2 = document.querySelectorAll(`ul`)[2]
let todo1 = document.getElementById(`container`)
let todo2 = document.getElementById(`container1`)
let todo3 = document.getElementById(`container2`)
let listtags = container.childNodes
let listtags1 = container1.childNodes
let listtags2 = container2.childNodes
let leftIcon1 = document.querySelectorAll(`i`)[0]
let leftIcon2 = document.querySelectorAll(`i`)[1]
let rightIcon1 = document.querySelectorAll(`i`)[2]
let rightIcon2 = document.querySelectorAll(`i`)[3]
leftIcon1.style.display = `none`
leftIcon2.style.display = `none`
rightIcon2.style.display = `none`
rightIcon1.addEventListener(`click`, () => {
  todo1.classList.add(`slide-1`)
  todo2.classList.add(`slide-2`)
  todo1.classList.remove(`slide-3`)
  todo2.classList.remove(`slide-4`)
  leftIcon1.style.display = `block`
  rightIcon2.style.display = `block`
  leftIcon2.style.display = `none`
  rightIcon1.style.display = `none`
})
rightIcon2.addEventListener(`click`, () => {
  todo1.classList.remove(`slide-3`)
  todo2.classList.remove(`slide-4`)
  todo2.classList.remove(`slide-8`)
  todo2.classList.add(`slide-6`)
  todo3.classList.add(`slide-5`)
  todo3.classList.remove(`slide-7`)
  leftIcon2.style.display = `block`
  rightIcon2.style.display = `none`
  leftIcon1.style.display = `none`
  rightIcon1.style.display = `none`
})
leftIcon1.addEventListener(`click`, () => {
  todo1.classList.add(`slide-3`)
  todo2.classList.add(`slide-4`)
  todo2.classList.remove(`slide-6`)
  todo1.classList.remove(`slide-1`)
  todo2.classList.remove(`slide-2`)
  todo2.classList.remove(`slide-8`)
  leftIcon1.style.display = `none`
  leftIcon2.style.display = `none`
  rightIcon1.style.display = `block`
  rightIcon2.style.display = `none`
})
leftIcon2.addEventListener(`click`, () => {
  todo2.classList.add(`slide-8`)
  todo3.classList.add(`slide-7`)
  todo3.classList.remove(`slide-5`)
  todo2.classList.remove(`slide-2`)
  todo2.classList.remove(`slide-6`)
  leftIcon2.style.display = `none`
  leftIcon1.style.display = `block`
  rightIcon2.style.display = `block`
  rightIcon1.style.display = `none`
})

addBtn.addEventListener(`click`, () => {
  if (inputBox.value === '') {
    alert(`Your must write something`)
  }else {
    let listitems = document.createElement(`li`)
    listitems.innerHTML = inputBox.value
    container.appendChild(listitems)
    let span = document.createElement(`span`)
    span.innerHTML = `\u00d7`
    listitems.appendChild(span)
  }
  inputBox.value = ``
  addTaskToLocalStorage()
})
container.addEventListener(`click`, function (e) {
  if (e.target.tagName === 'LI') {
    e.target.classList.toggle(`event`)
    addTaskToLocalStorage()
  }else if (e.target.tagName === 'SPAN') {
    e.target.parentElement.remove()
    addTaskToLocalStorage()
  }})
const addTaskToLocalStorage = () => {
  localStorage.setItem(`data`, container.innerHTML)
}
const showitemFromLocalStorege = () => {
  container.innerHTML = localStorage.getItem(`data`)
}
showitemFromLocalStorege()

addBtn1.addEventListener(`click`, () => {
  if (inputBox1.value === '') {
    alert(`Your must write something`)
  }else {
    let listitems = document.createElement(`li`)
    listitems.innerHTML = inputBox1.value
    container1.appendChild(listitems)
    let span = document.createElement(`span`)
    span.innerHTML = `\u00d7`
    listitems.appendChild(span)
  }
  inputBox1.value = ``
  addTaskToLocalStorage1()
})
container1.addEventListener(`click`, function (e) {
  if (e.target.tagName === 'LI') {
    e.target.classList.toggle(`event`)
    addTaskToLocalStorage1()
  }else if (e.target.tagName === 'SPAN') {
    e.target.parentElement.remove()
    addTaskToLocalStorage1()
  }
}
)
const addTaskToLocalStorage1 = () => {
  localStorage.setItem(`data1`, container1.innerHTML)
}
const showitemFromLocalStorege1 = () => {
  container1.innerHTML = localStorage.getItem(`data1`)
}
showitemFromLocalStorege1()
addBtn2.addEventListener(`click`, () => {
  if (inputBox2.value === '') {
    alert(`Your must write something`)
  }else {
    let listitems = document.createElement(`li`)
    listitems.innerHTML = inputBox2.value
    container2.appendChild(listitems)
    let span = document.createElement(`span`)
    span.innerHTML = `\u00d7`
    listitems.appendChild(span)
  }
  inputBox2.value = ``
  addTaskToLocalStorage2()
})
container2.addEventListener(`click`, function (e) {
  if (e.target.tagName === 'LI') {
    e.target.classList.toggle(`event`)
    addTaskToLocalStorage2()
  }else if (e.target.tagName === 'SPAN') {
    e.target.parentElement.remove()
    addTaskToLocalStorage2()
  }
}
)
const addTaskToLocalStorage2 = () => {
  localStorage.setItem(`data2`, container2.innerHTML)
}
const showitemFromLocalStorege2 = () => {
  container2.innerHTML = localStorage.getItem(`data2`)
}
showitemFromLocalStorege2()
