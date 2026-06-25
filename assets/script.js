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
            //let li = document.createElement('li');
            let li = lista.innerHTML = '<input type="checkbox"><li></li>';
            li.innerText = input;

            li.addEventListener('click', () => {
                 li.classList.toggle('concluida');
            })


            lista.appendChild(li);
            c('.task-input').value = ''
        }
        
        if(lista.children.length > 0) {
            c('.title').innerHTML = 'SEUS AFAZERES';
        }
    }
})





