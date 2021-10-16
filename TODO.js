//Deletar Task
function deleteTask(id){ 
  Swal.fire({
    title: 'Você tem certeza?',
    text: "Você não conseguirá reverter essa ação!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Sim, apague-o!'
  }).then((result) => {
    if (result.isConfirmed) {
      document.getElementById(id).remove();  
      Swal.fire(
        'Apagado!',
        'Sua tarefa foi apagada.',
        'success'
      )
    }
    else{
      Swal.fire(
        'Cancelado!',
        'Sua tarefa está salva!',
        'error'
      )
    }
  })
}

//Completar Task
function checkTask(id){
  var Task = document.getElementById(id);
  if(Task.children[0].checked){
    document.getElementById("listDone").appendChild(Task);
    Swal.fire({
      icon: 'success',
      title: 'Sua tarefa foi completa!',
      showConfirmButton: false,
      timer: 1500
    })
  }
  else{
    document.getElementById("listDoing").appendChild(Task);
    Swal.fire({
      icon: 'success',
      title: 'Sua tarefa está incompleta novamente!',
      showConfirmButton: false,
      timer: 1500
    })
  }
}

//ADD Task
function buttonAdd() {
  var li = document.createElement("li");
  var time = new Date().getTime();
  li.id = time;
  var inputValue = document.getElementById("myInput").value;
  var t = document.createElement("textarea");
  t.value = (inputValue);
  document.getElementById("myInput").value = ""; 
  var delet = document.createElement("span");
  var txt = document.createElement("i");
  var check = document.createElement("input");
  txt.className = "fa fa-trash-o";
  check.type = "checkbox";
  delet.onclick = function (){deleteTask(time)};
  check.onchange = function (){checkTask(time)};
  delet.appendChild(txt);
  li.appendChild(check);
  li.appendChild(t);
  li.appendChild(delet);
  if (inputValue === '') {
    alert("Não é permitido tarefa vazia!!");
  } else {
    document.getElementById("listDoing").appendChild(li);
  }
}

//Le Enter
var input = document.getElementById("myInput");
input.addEventListener("keyup", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("myBtn").click();
  }
});