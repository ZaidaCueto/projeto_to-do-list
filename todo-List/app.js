let bancoDeDadosLocalSoparaTeste = [
    {'tarafa': 'estudar js', 'status': ''},
    {'tarafa': 'css', 'status': ''},
    {'tarafa': 'html', 'status': 'checked'}
]
    


// const getBanco = ( ) => JSON.parse(localStorage.getItem ('todoList')) ?? [];
// const setBanco = ( bancoDeDadosLocalSoparaTeste) =>localStorage.setItem('todolist', JSON.stringify(bancoDeDadosLocalSoparaTeste));


const criarItem = (tarefa, status, indice) => {
    const item  = document.createElement('label');
    item.classList.add('todo__item')
    item.innerHTML = `
    <input type="checkbox" ${status} data-indice=${indice}>
    <div>${tarefa}</div>
    <input type="button" value="X"  data-indice=${indice}>`
    document.getElementById('todoList').appendChild(item)
}

const limparTarefas = ( ) =>{
    const todoList = document.getElementById('todoList');
    while(todoList.firstChild ){
        todoList.removeChild(todoList.lastChild);
    }

}
const  atulaizarTela = () => {
    limparTarefas()
    // const bancoDeDadosLocalSoparaTeste = getBanco()
    bancoDeDadosLocalSoparaTeste.forEach((item, indice) => criarItem (item.tarefas, item.status, indice));
   
}


const adicionarTarefa = (evento)=> {
    const tecla = evento.key;
 
    if(tecla === 'Enter') {
        //  const bancoDeDadosLocalSoparaTeste = getBanco()
        const texto = evento.target.value
        bancoDeDadosLocalSoparaTeste.push({'tarefas': texto, 'status' : ''});
        // setBanco(bancoDeDadosLocalSoparaTeste)
         atulaizarTela()
    
         evento.target.value = '';
   
    }
 
}

const removerItem = (indice)=>{
    // const bancoDeDadosLocalSoparaTeste = getBanco()
    bancoDeDadosLocalSoparaTeste.splice(indice,1)
    // setBanco(bancoDeDadosLocalSoparaTeste)
    atulaizarTela()
}

const atualizarItem = (indice) => {
    // const bancoDeDadosLocalSoparaTeste = getBanco()
    bancoDeDadosLocalSoparaTeste[indice].status = bancoDeDadosLocalSoparaTeste[indice].status === '' ? 'checked ': '';
    // setBanco(bancoDeDadosLocalSoparaTeste)
    atulaizarTela()
}
    



const clickItem = (evento) =>{
    const elemento = evento.target;
   if(elemento.type === 'button'){
       const indice = elemento.dataset.indice;
       removerItem(indice)
   }else if(elemento.type === 'checkbox'){
    const indice = elemento.dataset.indice;
       atualizarItem(indice);
   }

}


document.getElementById('newItem').addEventListener('keypress', adicionarTarefa)
 document.getElementById('todoList').addEventListener('click', clickItem)



atulaizarTela();
