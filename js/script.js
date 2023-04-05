let addTodoButton = document.getElementById('add-todo');
let todoInput = document.getElementById('input-field');
let container = document.getElementById('container');
let clearAll = document.getElementById('clear-all');


addTodoButton.addEventListener('click', function() {

    // Initialize elements
    var paragraph = document.createElement('p');
    var paragraph_div = document.createElement('div');

    // Set Values
    paragraph.innerText = todoInput.value;
    todoInput.value = '';
    
    //Give Classes
    paragraph.classList.add('paragraph-styling');
    container.appendChild(paragraph_div);
    paragraph_div.classList.add('paragraph_div');
    paragraph_div.appendChild(paragraph);

    // Add Icon

    const icon = document.createElement('img');
    icon.classList.add('icon');
    icon.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Remove_font_awesome.svg/1024px-Remove_font_awesome.svg.png';
    icon.height = 20;

    document.querySelectorAll('.paragraph_div').forEach(function(paraDiv) {
        paraDiv.appendChild(icon);
            });



    // Add Event Listeners


    icon.addEventListener('click', function() {
        container.removeChild(paragraph_div);
    }
    );

    paragraph.addEventListener('click', function() {
        paragraph.style.textDecoration = "line-through";
    });

    paragraph.addEventListener('dblclick', function() {
        container.removeChild(paragraph);
    }
    );

    clearAll.addEventListener('click', function() {
        container.removeChild(paragraph_div);
    });

});

