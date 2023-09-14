const editButton = document.getElementById('edit')

editButton.addEventListener('click', editEmployee)

const addButton = document.getElementById('add')

addButton.addEventListener('click', addEmployee)

function editEmployee(){
    window.location = '/edit'
}

function addEmployee(){
    window.location = '/add'
}