


let bancoDeDadosLocalSoparaTeste = [
    {'tarefa': 'estudar js', 'status' : ''},
    {'tarefa': 'netflix js', 'status ': ''},
    {'tarefa': 'css', 'status' : 'checked'},
    {'tarefa': ' js', 'status' : 'checked'}
]


const criarItem = (tarefa, status) => {
    const item  = document.createElement('label');
    item.classList.add('todo__item')
    item.innerHTML = `
    <input type="checkbox" ${status}>
    <div>${tarefa}</div>
    <input type="button" value="X">`
    document.getElementById('todoList').appendChild(item)
}

const limparTarefas = ( ) =>{
    const todoList = document.getElementById('todoList')
    while(todoList.firstChild ){
        todoList.removeChild(todoList.lastChild);
    }

}
const  atulaizarTela = () => {
    limparTarefas()
    bancoDeDadosLocalSoparaTeste.forEach(item => criarItem (item.tarefa, item.status))
}
atulaizarTela();
atulaizarTela();
atulaizarTela();

