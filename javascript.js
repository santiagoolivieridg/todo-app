function handlePress(e) {
    if (e.key === 'Enter') {
        addItem()
    }
}

function addItem() {
    const taskValue = document.getElementById("addTask").value
    addElementToDOM("taskList", taskValue)
    document.getElementById('addTask').value = ""
}

function addElementToDOM(parentId, taskValue) {
    const parent = document.getElementById(parentId)
    const firstChild = document.getElementById("lastItem")
    const li = document.createElement('li')
    parent.insertBefore(li, firstChild)

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

