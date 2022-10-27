/*===========queryFunction-start============ */
function $(value){
    return document.querySelector(value);
}
/*===========queryFunction-finish============ */

/*===========others-start============ */
let container = $('#container');
/*===========others-finish============ */

/*===========addTodo-start============ */
function addTodo(container,text){
    let containerList = document.createElement('div');
    containerList.className='containerList';
    containerList.innerHTML=text;

    // delete-start
    let cross = document.createElement('span');
    cross.className='cross';
    cross.innerHTML='delete';

    cross.addEventListener('click',(event)=>{
        container.removeChild(containerList);
    })
    // delete-finish

    // edit-start
    let edit=document.createElement('span');
    edit.className='edit';
    edit.innerHTML='edit';
    
    edit.addEventListener('click',(event)=>{
       containerList.innerHTML=`<span class="doneAbs">Done</span>
       <textarea class="textRel" rows="10">${text}</textarea>`;

       let doneBtn= document.querySelector('.doneAbs');

       doneBtn.addEventListener('click',(event)=>{
        var textValue=document.querySelector('.textRel');

        
        containerList.innerHTML=textValue.value;
        containerList.appendChild(cross);
        containerList.appendChild(edit);
        
        containerList.appendChild(listContainer);

        container.appendChild(containerList);
       });
    });
    // edit-finish

    // color-start
    let colorSet=['#2ecc71','#3498db','#d63031','#6c5ce7','#C4E538'];

    let listContainer=document.createElement('ul');
    listContainer.className='listContainer';

    let colorLength=colorSet.length;
    for(var i=0;i<colorLength;i++){
        let containerPot=document.createElement('li');
        containerPot.className='containerPot';
        containerPot.setAttribute('data-key',colorSet[i]);

        containerPot.style.background=colorSet[i];

        listContainer.appendChild(containerPot);
    }
    console.dir(listContainer);

    let listValue = document.querySelector('.listContainer');

    listContainer.addEventListener('click',(event)=>{
       let colorValue= event.target.attributes[1].nodeValue;
       
       containerList.style.background=colorValue;
       containerList.style.border=colorValue;
       edit.style.color='white';
       cross.style.color='white';
       containerList.style.color='white';
    })
    
    // color-finish
    containerList.appendChild(cross);
    containerList.appendChild(edit);
    containerList.appendChild(listContainer);
    

    container.appendChild(containerList);
}
/*===========addTodo-finish============ */

/*===========event-start============ */
let form = $('#form');

form.addEventListener('submit',(event)=>{
    event.preventDefault();

    let inputText = $('#inputText');
    let clearText = inputText.value.trim();

    addTodo(container,clearText);
    inputText.value='';
})
/*===========event-finish============ */

