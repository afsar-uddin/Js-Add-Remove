const input = document.querySelector('input');
const addBtn = document.querySelector('.addItem > button');

function addlListItems() {
    const createList = document.querySelector('.createList');;

    const createLi = document.createElement('li');
    const removeMe = document.createElement('button');
    removeMe.textContent = 'Remove me';
    
    if(input.value !== '') {
        createLi.textContent = input.value;
        input.value = '';
        createList.appendChild(createLi);
        createLi.appendChild(removeMe);
    }

    removeMe.addEventListener('click', function() {
        const parent = this.parentNode;
        parent.remove();
    })
    
}

addBtn.addEventListener('click', addlListItems);
input.addEventListener('keyup', (e)=>{
    (e.keyCode === 13) ? addlListItems(e) : null;
})