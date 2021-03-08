const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');

// fill listeners
fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

// Loop though empties and call drag events
for(const epmty of empties){
    epmty.addEventListener('dragover', dragOver);
    epmty.addEventListener('dragenter', dragEnter);
    epmty.addEventListener('dragleave', dragLeave);
    epmty.addEventListener('drop', dragDrop);
}

// Drag functions
function dragStart(){
this.className += ' hold';
setTimeout(() => this.className = 'invisible', 0)
}

function dragEnd(){
this.className = 'fill';
}

function dragOver(e){
e.preventDefault();
}

function dragEnter(e){
    e.preventDefault();
    this.className += ' hovered';
}

function dragLeave(){
    this.className += 'empty';    
}

function dragDrop(){
this.className = 'empty';
this.append(fill);
    
}