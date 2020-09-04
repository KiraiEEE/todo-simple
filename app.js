// houni nediw l nodes li 3anna bech nrak7ouhom
const form = document.getElementById('form');
const input = document.getElementById('input');
const todos = document.getElementById('todos');

//9olt 7ot empty fil list w 7ottelha class .empty
let emp = document.createElement('li');
    emp.innerText = "Empty";
    todos.appendChild(emp);
    emp.classList.add("empty"); //fel css 3titha opacity 0.5

form.addEventListener('submit', (e) => {
    e.preventDefault();//bech ya3malch refresh lel page
    const todoText = input.value;//lenna tet5azen valeur l input
    //9olt ken tfa3let l input heky abda
    if(todoText){
        const todoEl = document.createElement('li');//9otlou a3ml li fi var todoEl
        todoEl.innerText = todoText;//9otlou 7ot feha ly fil input
        todos.appendChild(todoEl);//w orbotha bel todos
        input.value = '';//fassa5ly elly fil input
        emp.innerText = "";//ne77ily kilmet empty
        todos.appendChild(emp); ////w orbotha bel todos ( el tatbi9 fel wa9e3)
    }
})