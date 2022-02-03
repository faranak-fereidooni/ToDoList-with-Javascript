const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search input');

const generateTemplate = todo => {
const html = `
    <li class="list-group-item d-flex text-light justify-content-between align-item-center">
       <span>${todo}</span>
       <i class="fa fa-trash delete" aria-hidden="true"></i>
    </li>
`;
    list.innerHTML += html.toLowerCase();
};

// add todos
addForm.addEventListener('submit', e =>{
    e.preventDefault();
    const todo = addForm.add.value.trim();
    if(todo.length){
    generateTemplate(todo);
    addForm.reset();
}
});

// delete todos
list.addEventListener('click', e =>{
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
});

const filterTodos = (term) => {
 Array.from(list.children)
  .filter((todo) => !todo.textContent.toLowerCase().includes(term))
  .forEach((todo) => todo.classList.add('filtered'));

 Array.from(list.children)
   .filter((todo) => todo.textContent.toLowerCase().includes(term))
   .forEach((todo) => todo.classList.remove('filtered'));

};

// keyup event
search.addEventListener('keyup', ()=>{
 const term = search.value.trim().toLowerCase();
 filterTodos(term);


});
