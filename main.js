const addButton = document.querySelector('addButton');
const inputValue = document.querySelector('.input');
const ccontainer = document.querySelector('.container');

class item{
        constructor(itemName){
            this.createDiv(itemName);
        }  


    createDiv(itemName){
        let input = document.createElement('input');
        input.value = itemName;
        input.disabled = true;
        input.classList.add('item_input');
        input.type ="text";

        

        let itemBox = document.createElement('div');
        itemBox.classList.add('item'); 
        
        let editButton = document.createElement('button');
        editButton.innerHTML = "EDIT";
        editButton.classList.add('editButton');


        let removeButton = document.createElement('button');
        removeButton.innerHTML = "REMOVE";
        removeButton.classList.add('removeButton');

        container.appendChild(itemBox);

        itemBox.appendChild(input);
        itemBox.appendChild(editButton);
        itemBox.appendChild(removeButton);

        editButton.addEventListener('click',()=> edit(input));
        removeButton.addEventListener('click',()=> remove(input)); 

    }

    edit(input){
        input.disabled = ! input.disabled;
    }


    remove(input){
        container.removeChild(item);
    }

    
        
    
}

function check(){
    if(input.value != ""){
        new item(input.value);
    }
}

addButton.addEventListener('click', check);
window.addEventListener('keydown', (e) =>{
    if(e.which ==13){
        check();
    }
})