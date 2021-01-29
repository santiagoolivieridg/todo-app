const lastItem = document.getElementById("lastItem")
const data = []

function addItem() {
    const taskValue = document.getElementById("addTask").value
    const taskList = document.getElementById("taskList")
    
    data.push(taskValue)
    addElementToDOM("taskList", taskValue)

    document.getElementById('addTask').value = ""

    if( taskList.firstElementChild !== lastItem ) {
        lastItem.classList.remove("last-item")
        lastItem.classList.add("first-item")
    }

    changeQuantity();
}

function addElementToDOM(parentId, taskValue) {
    const parent = document.getElementById(parentId)
    const li = document.createElement('li')
    parent.insertBefore(li, lastItem)

    const label = document.createElement('label')
    label.setAttribute('class', 'checkbox-container')
    const button = document.createElement('button')
    button.setAttribute('class', 'delete-task')
    li.appendChild(label)
    li.appendChild(button)

    const input = document.createElement('input')
    input.setAttribute('type', 'checkbox')
    const checkmark = document.createElement('span')
    checkmark.setAttribute('class', 'checkmark')
    const text = document.createTextNode(`${taskValue}`)

    label.appendChild(input)
    label.appendChild(checkmark)
    label.appendChild(text)  
} 

function handlePress(e) {
    if (e.key === 'Enter') {
        addItem()
    }
}

function changeQuantity() {
    const itemsLeft = lastItem.children[0]

    if (data.length === 1 ) {
        itemsLeft.innerHTML = `${data.length} item left`
    } else {
        itemsLeft.innerHTML = `${data.length} items left`
    }
    
}