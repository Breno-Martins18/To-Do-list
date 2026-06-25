// VARIAVEIS
const c = (el) => document.querySelector(el);

let meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
let days = ['Dom.', 'Seg.', 'Ter.', 'Qua.', 'Qui', 'Sex.', 'Sáb.',];

const hoje = new Date();
let dia = days[hoje.getDay()];
let mes = meses[hoje.getMonth()];
let ano = hoje.getFullYear();
let datahoje = `${dia}., ${mes} de ${ano}`;

let data = c('.img span').innerText = `${datahoje}`;




// FUNÇÕES
// 1. Mostrar o campo de input ao clicar no botão "+"

c('.task-img').addEventListener('click', () => {
    c('.task-input').style.display = 'block';
    c('.task-img').style.display = 'none';
    c('.task-input').focus(); // Dá foco automático para começar a digitar
})

// 2. Adicionar tarefa ao apertar Enter
c('.task-input').addEventListener('keyup', (e) => {
    if(e.key === 'Enter') {
        let input = c('.task-input').value.trim(); // trim() remove espaços inúteis
        let lista = c('.to-do ul');

        if(input !== '') {
            let li = document.createElement('li');

            let checkbox = document.createElement('input');
            checkbox.type = 'checkbox';

            li.addEventListener('change', () => {
                 li.classList.toggle('concluida');
            })

            let span = document.createElement('span');
            span.innerText = input;

            let btrRemover = document.createElement('button');
            btrRemover.innerText = 'X';
            btrRemover.classList.add('btn-remover');

            btrRemover.addEventListener('click', (e) => {
                e.stopPropagation(); // Evita que o evento de clique no botão se propague para o li
                li.remove();
            })

            li.appendChild(checkbox);
            li.appendChild(span); 
            li.appendChild(btrRemover); 

            lista.appendChild(li);
            c('.task-input').value = ''
        }
        
        if(lista.children.length > 0) {
            c('.title').innerHTML = 'SEUS AFAZERES';
        }
    }
})





