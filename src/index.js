import './styles.css';
import collapse from './assets/collapse.png';
import dele from './assets/delete.png';
import editt from './assets/edit.png'
import folder from './assets/folder.png'
import homee from './assets/home.png'
import menuu from './assets/menu.png'
import todoo from './assets/todo.jpg'

class Todo {
    constructor(title, descrTodo, dueDate, priority) {
        this.title = title;
        this.descrTodo = descrTodo;
        this.dueDate = dueDate;
        this.priority = priority;
    }
}

class NoteList {
    constructor(title, description) {
        this.title = title;
        this.description = description;
    }
}
const menuImg = document.querySelector('#menuImg');
menuImg.src = menuu
const nav = document.querySelector('.nav')
menuImg.addEventListener('click', ()=>{
        nav.style.transition = 'all 1s'
        if (nav.style.transform === 'translateX(0%)') {
            nav.style.transform = 'translateX(-100%)';
            menuImg.src = menuu
        } else  {
            nav.style.transform = 'translateX(0%)';
            menuImg.src = collapse
        }
})

window.addEventListener('resize', ()=>{
    if (window.innerWidth > 610) {
        nav.style.transform = 'translateX(0%)'
    }else if (window.innerWidth<=610) {
        nav.style.transform = 'translateX(-100%)'
        menuImg.src=menuu
    }
})

const proDialog = document.querySelector('.new-project-dialog');
const taskInfoPop = document.querySelector('.task-info-pop');
const projectName = document.querySelector('#proj-name');
const createBtn = document.querySelector('#create');

const add = document.querySelector('#add');
add.addEventListener('click', ()=>{
    proDialog.showModal();
    proDialog.style.display = 'flex';
    createBtn.textContent = (projectName.value === '') ? 'Close' : 'Create'
})

const projMenu = document.querySelector('#proj-menu');
const todoLists =  document.querySelector(".main");

function removeEl(ev) {
    delete arrOfList[ev.target.parentElement.parentElement.title]
    names.splice(names.indexOf(ev.target.parentElement.parentElement.title),1)
    ev.target.parentElement.remove();
}

let names = [];
let arrOfList = {};
const createProjectFolder = (name) => {
    if (+projectName.value===0) {
        alert('You can\'t leave the feild empty or space dozen')
    } else {
        const project = document.createElement('div');
        project.innerHTML = `
            <div class="added-project">
                <div id="fol-name">
                    <img src=${folder} width="15px" alt="folder">
                    <div class="proj-name">${name}</div>
                </div>
                <img src=${dele} width="15px" class="del-folder">
            </div>
        `
        project.classList.add('user-project', 'bg')
        project.firstElementChild.classList.add('fc');
        project.title = name
        names.push(name)
        projMenu.appendChild(project);
        
        arrOfList[name] = [];
        let arrOfFol = Array.from(projMenu.children)
        arrOfFol.forEach(pf=>{
            pf.addEventListener('click', ()=>{
                embed(pf.firstElementChild)
                tabFocus=pf.title;
                simulation=[]
                reRender(simulation, arrOfList[tabFocus])
                evaluate(arrOfList[tabFocus], taskInfoPop)
            })
        })
        closeDialoge(proDialog)
        projectName.value = '';
    }
    const delImgArr = Array.from(document.querySelectorAll('.del-folder'));
    delImgArr.forEach(im => im.addEventListener('click', e=>removeEl(e))) 
}

function closeDialoge(theDialog) {
    theDialog.close()
    theDialog.style.display = 'none';
}

projectName.addEventListener('input', ()=>{
    (projectName.value !== '') ? createBtn.textContent = 'Create' : createBtn.textContent = 'Close'
})

createBtn.addEventListener('click', ()=>{
    (createBtn.textContent === 'Close') ? closeDialoge(proDialog) : 
     (names.includes(projectName.value)) ? alert(`'${projectName.value}' is being used`) : createProjectFolder(projectName.value)
})

const allListLength = document.querySelector('.one')
const todayListLength = document.querySelector('.two')
const weekListLength = document.querySelector('.three')
const noteListLength = document.querySelector('.four')
const homeImg = document.querySelector('#home-tab-img');

document.querySelector('#demo').src = todoo

homeImg.src=homee
homeImg.addEventListener('click', ()=>{
    todoLists.innerHTML = ` <div class="home" style="width: 100%; height: 100%;" >
                                <img src=${todoo} width="100%" height="100%" alt="todo">
                            </div> `
})

const forToday = document.querySelector('#today');
const inWeek = document.querySelector('#in-week');
const allTodos = document.querySelector('#all-todos');
const notes = document.querySelector('#notes');
const priorityEl = document.querySelector('#priority')

let pri;
priorityEl.addEventListener('change', ()=>{
    pri = priorityEl.value;
    (mode==='create') ? SwapFlipBtnNames('Add Task') : SwapFlipBtnNames('Edit')
})

const addTask = document.querySelector('#add-task')
const taskName = document.querySelector('#task')
const dueDate = document.querySelector('#date')
const descrTodoInp = document.querySelector('#description');

let mode; // either create or edit
function enablePop(popUpType) {
    let addListEltsArr = Array.from(document.querySelectorAll('.add-list'))
    addListEltsArr.forEach(ad=>{
        ad.addEventListener('click', (e)=>{
            mode='create'
            SwapFlipBtnNames('Add Task')
            if (tabFocus==='All') {
                e.target.textContent = 'Nope here'
            }
            else {
                popUpType.showModal()
                popUpType.style.display = 'flex';
            }
        })
    })
}

function enableForEdit(popUpType) {
    popUpType.showModal()
    popUpType.style.display = 'flex';
}

let ToDolistDisplay = `
     <div class="empty-list-placeholder">
         <div style="width: 100%" id="empty">Empty List!</div>
         <button class="add-list">Add One</button>
     </div>
`
let updatedList = `
        <div class="added" style="width: 100%" id="list"></div>
        <button class="add-list">Add One</button>
`
let noteSimu = [];
let simulation = [];

let weekToDoList = [];
let todayToDoList = [];
let notesList = []; 
let all = [];

function evaluate(todoType, popUpType) {
    if (todoType.length===0)  {
        todoLists.innerHTML = ToDolistDisplay;
        enablePop(popUpType);
    } else {
        if (todoLists.firstElementChild.className==='home') {
            todoLists.innerHTML = ToDolistDisplay;
        }
        document.querySelector('.empty-list-placeholder').innerHTML = updatedList;
        todoType.forEach(l=>{
            document.querySelector('#list').appendChild(l);
            enablePop(popUpType)
        })
    }
}

let tabFocus;
inWeek.addEventListener('click',()=>{
    embed(inWeek)
    tabFocus = 'week';
    simulation = []
    reRender(simulation, weekToDoList)
    evaluate(weekToDoList, taskInfoPop);
});

forToday.addEventListener('click', ()=>{
    embed(forToday)
    tabFocus = 'today';
    simulation=[]
    reRender(simulation, todayToDoList)
    evaluate(todayToDoList,taskInfoPop)
});

// notes thing
const notesDialog = document.querySelector('.notes-dialog');
const addNote = document.querySelector('#add-note');
const noteTitle = document.querySelector('#title');
const noteDes = document.querySelector('#note-desc');
notes.addEventListener('click',()=> {
    tabFocus = 'note'
    embed(notes)
    todoLists.innerHTML = ToDolistDisplay
    enablePop(notesDialog)
    evaluate(notesList, notesDialog)
    noteSimu=[]
    reRender(noteSimu, notesList)
})

function SwapFlipBtnNames(name) {
    Array.from(document.querySelectorAll('.fields')).forEach(fl=>{
        fl.addEventListener('input', ()=>{
            addTask.textContent = (taskName.value!=='' && descrTodoInp.value!=='' && dueDate.value!=='') ? `${name}` : 'Close'
        })
    })
    priorityEl.addEventListener('change', ()=>{
        addTask.textContent = (mode==='editing') ?  'Edit' :
        (mode==='create' && (taskName.value!=='' && descrTodoInp.value!=='' && dueDate.value!=='')) ? 'Add Task' : 'Close'
    })
}

let taskItem; // implication for where the editing is happening 
addTask.addEventListener('click', ()=>{
    if ((taskName.value=== '') || (descrTodoInp.value==='') || dueDate.value==='' || (pri==='')) {
        closeDialoge(taskInfoPop)
    }
    else {
        (mode==='create') ? createTodoEl() : showEdited(taskItem)
        all = weekToDoList.concat(todayToDoList)
        enumSelfProArr()
        setLength()
        Array.from(document.querySelectorAll('.fields')).forEach(fl=>{fl.value = ''})
        addTask.textContent = 'Close'
        closeDialoge(taskInfoPop)
    }
})

Array.from(document.querySelectorAll('.note-fields')).forEach(nf=>{
    nf.addEventListener('input', ()=>{
        addNote.textContent = (noteTitle.value!== '' && noteDes.value!=='') ? 'Add' : 'Close'
    })
})

function enumSelfProArr() {
    let objArr = Object.values(arrOfList);
    objArr.forEach(oa=>{
        all = all.concat(oa)
    })
}

addNote.addEventListener('click', ()=>{
    if (noteTitle.value==='' || noteDes.value==='') {
        closeDialoge(notesDialog)
    }
    else {
        closeDialoge(notesDialog)
        createNote()
        setLength()
        Array.from(document.querySelectorAll('.note-fields')).forEach(nf=>{nf.value=''})
        addNote.textContent='Close'
    }
})

const createNote = () =>{
    let noteListObj = new NoteList(noteTitle.value,noteDes.value);
    const noteCont = document.createElement('div');
    noteCont.classList.add('note-item')
    noteCont.innerHTML = `
        <img style="width: 18px; align-self: flex-end; margin-bottom: -20px" src=${dele} class='delete-note' alt="delete-note">
        <h2 contenteditable style="color: rgb(255, 153, 0)" class="ttl">${noteListObj.title}</h2>
        <p class="para" contenteditable>${noteListObj.description}</p>
    `
    notesList.push(noteCont);
    document.querySelector('.empty-list-placeholder').innerHTML = updatedList;
    noteSimu.push(noteCont);
    document.querySelector('#list').classList.add('added')
    noteSimu.forEach(el=>document.querySelector('#list').appendChild(el))
    enablePop(notesDialog)
    enableNoteDelete()
}

const expDia = document.querySelector('.expand');
const createTodoEl = () => {
    const todoObj = new Todo(taskName.value, descrTodoInp.value, dueDate.value, pri)
    const todoEl = document.createElement('div');
    todoEl.classList.add('todoEl')
    todoEl.innerHTML = `
    <div>
        <input class="checkbox" style='width: 25px; height: 25px;accent-color: green' type="checkbox" name="isDone">
        <div class="title">${todoObj.title}</div>
    </div>
    <div>
        <button class="expandBtn">Expand</button>
        <span class="due-date">${todoObj.dueDate}</span>
        <span style='display: none'>${todoObj.descrTodo}</span>
        <img src=${editt} title='Edit' alt="edit" width="18px" class="edit-todo-item">
        <img src=${dele} alt="delete"  title='Delete' width="18px" class="del-todo-item" >
    </div>
    `
    todoEl.style.background = (pri==='High') ? 'rgb(0, 255, 0, .4)' : (pri==='Medium') ? 'rgb(255, 255, 0, .4)' : 'rgb(255, 0, 0, .4)';
    (tabFocus==='today') ? todayToDoList.push(todoEl) : (tabFocus==='week') ? weekToDoList.push(todoEl) : arrOfList[tabFocus] ? arrOfList[tabFocus].push(todoEl) : undefined;

    document.querySelector('.empty-list-placeholder').innerHTML = updatedList;
    simulation.push(todoEl);
    simulation.forEach(el=>document.querySelector('#list').appendChild(el))
    
    enablePop(taskInfoPop)
    enableTodoDetail()
    enableTodoDelete()
    enableCheck()
    enableEditing()
}

function enableNoteDelete() {
    const delNoteArr = Array.from(document.querySelectorAll(".delete-note"));
    delNoteArr.forEach(dna=>{
        dna.addEventListener('click', ()=>{
            dna.parentElement.remove()
            notesList = Array.from(document.querySelector('#list').children)
            evaluate(notesList, notesDialog)
            setLength()
            noteSimu=[]
            reRender(noteSimu, notesList)
        })
    })
}

function enableTodoDelete() {
    const delTodoItemList = Array.from(document.querySelectorAll('.del-todo-item'));
    delTodoItemList.forEach(dti=>{
        dti.addEventListener('click', (e)=>{
            let lists = document.querySelector('#list');
            dti.parentElement.parentElement.remove()
            if (tabFocus==='week') {
                weekToDoList = Array.from(lists.children)
                simulation=[]
                reRender(simulation, weekToDoList)
                evaluate(weekToDoList, taskInfoPop);
            } else if (tabFocus==='today') {
                todayToDoList = Array.from(lists.children)
                simulation=[]
                reRender(simulation, todayToDoList)
                evaluate(todayToDoList, taskInfoPop);
            } else {
                arrOfList[tabFocus] = Array.from(lists.children)
                simulation=[]
                reRender(simulation, arrOfList[tabFocus])
                evaluate(arrOfList[tabFocus], taskInfoPop);
            }
            all = weekToDoList.concat(todayToDoList)
            enumSelfProArr()
            setLength()
        })
    })
}

function enableTodoDetail() {
    const expaBtn = Array.from(document.querySelectorAll('.expandBtn'));
    expaBtn.forEach(ex=>{
        ex.addEventListener('click', ()=>{
            expDia.showModal()
            expDia.style.display = 'flex'
            todoTask.textContent= ex.parentElement.parentElement.firstElementChild.children[1].textContent
            dateDes.textContent = ex.nextElementSibling.textContent;
            descr.textContent = ex.nextElementSibling.nextElementSibling.textContent;
            detectPriorty(ex)
        })
    })
}

function enableCheck(){
    const checkboxes = Array.from(document.querySelectorAll('.checkbox'))
    checkboxes.forEach(cbx=>{
        cbx.addEventListener('change', (e)=>{
            (e.target.checked) ? cbx.parentElement.parentElement.classList.add('blur') : cbx.parentElement.parentElement.classList.remove('blur')
        })
    })
}

function enableEditing() {
    const editImgs = Array.from(document.querySelectorAll('.edit-todo-item'))
    editImgs.forEach(ei=>{
        ei.addEventListener('click', ()=>{
            mode='editing';
            taskItem = ei;
            taskName.value = ei.parentElement.parentElement.firstElementChild.children[1].textContent
            descrTodoInp.value = ei.parentElement.children[2].textContent
            dueDate.value = ei.parentElement.children[1].textContent
            detectPriorty(ei)
            enableForEdit(taskInfoPop)
            SwapFlipBtnNames('Edit')
        })
    })
}

function detectPriorty(ele) {
    if (ele.parentElement.parentElement.style.background==='rgba(0, 255, 0, 0.4)') {
        prio.innerHTML=`This Task Got <span style='color: rgba(0, 255, 0)'> Higher</span> Priority`
        priorityEl.value = 'High'
    }
    else if (ele.parentElement.parentElement.style.background==='rgba(255, 255, 0, 0.4)') {
        prio.innerHTML=`This Task Got <span style='color: rgba(255, 255, 0)'> Medium </span> Priority`
        priorityEl.value = 'Medium'
    }
    else  {
        prio.innerHTML=`This Task Got <span style='color: rgba(255, 0, 0)'> Low </span> Priority`
        priorityEl.value = 'Low'
    }
}

function showEdited(ts) {
    ts.parentElement.parentElement.firstElementChild.children[1].textContent = taskName.value
    ts.parentElement.children[2].textContent = descrTodoInp.value
    ts.parentElement.children[1].textContent = dueDate.value
    ts.parentElement.parentElement.style.background = (pri==='High') ? 'rgb(0, 255, 0, .4)' : (pri==='Medium') ? 'rgb(255, 255, 0, .4)' : 'rgb(255, 0, 0, .4)'
}

const todoTask = document.querySelector('.todo-task')
const dateDes = document.querySelector('.dates')
const descr = document.querySelector('.descr')
const prio = document.querySelector('.prio');

document.querySelector('#close-exp').addEventListener('click', ()=>closeDialoge(expDia))

allTodos.addEventListener('click', ()=>{
    embed(allTodos)
    tabFocus = 'All'
    evaluate(all,taskInfoPop)
})

function reRender(disp, arr) {
    arr.forEach(a=>{
        disp.push(a)
    })
}

function setLength () {
    weekListLength.textContent = weekToDoList.length
    todayListLength.textContent = todayToDoList.length
    noteListLength.textContent = notesList.length
    allListLength.textContent = all.length;
}

function createBg(focusType) {
    focusType.style.background = 'rgb(190, 12, 196)'
}

function removeBg(...arg) {
    arg.forEach(a=>{
        a.style.background = 'rgb(23, 36, 3)'
    })
}

function embed(ele) {
    let arrBgEl = Array.from(document.getElementsByClassName('fc'))
    createBg(ele);
    arrBgEl.splice(arrBgEl.indexOf(ele),1)
    removeBg(...arrBgEl)
}