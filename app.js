
var list = document.getElementById("list");

function addTodo(){
    var todoitem = document.getElementById("todo-item");
var li = document.createElement('li');
var liText = document.createTextNode(todoitem.value);
if ( todoitem.value == ""){
    alert("Enter a value");
    return false;
}
li.appendChild(liText);
//delete btn
var delBtn = document.createElement("img");
delBtn.setAttribute("src","delete.png");
delBtn.setAttribute("class","btn ")
var delText = document.createTextNode("");
// delBtn.setAttribute("class","btn")
delBtn.setAttribute("onClick","delItem(this)");
delBtn.appendChild(delText);

var editBtn = document.createElement("img")
    editBtn.setAttribute("src","edit-icon.png");
    editBtn.setAttribute("class","btn")
    var editText = document.createTextNode("");
    editBtn.setAttribute("onclick", "editItem(this)");
    editBtn.appendChild(editText);
    li.appendChild(editBtn)
    
    console.log(li)
li.appendChild(editBtn);
li.appendChild(delBtn);


list.appendChild(li);

todoitem.value = "";
}

function delItem(e){
    e.parentNode.remove();
    console.log(e)

}

function editItem(e){
    var val = e.parentNode.firstChild.nodeValue;
    var editValue = prompt ("Enter Edit Value",val)

    e.parentNode.firstChild.nodeValue = editValue;
    }
    
function delAll(){
    list.innerHTML="";
}

