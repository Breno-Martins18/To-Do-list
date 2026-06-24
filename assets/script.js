// VARIAVEIS
const c = (el) => document.querySelector(el);

let meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

const hoje = new Date();
let dia = hoje.getDay();
let mes = meses[hoje.getMonth()];
let ano = hoje.getFullYear();
let datahoje = `${dia} de ${mes} de ${ano}`;
let data = c('.img span').innerHTML = `${datahoje}`;




// FUNÇÕES
c('.task-img').addEventListener('click', () => {
    c('.task-input').style.display = 'block';
    c('.task-img').style.display = 'none';
})


c('.task-input').addEventListener('keypress', (e) => {
    if(e.key === 'Enter') {
        let input = c('.task-input').value;
        let vazio = c('.to-do ul');

        if(input !== '') {
            let li = document.createElement('li');
            li.innerHTML = input;

            li.addEventListener('click', () => {
                li.style.textDecoration = 'line-through';
            })


            c('.to-do ul').appendChild(li);
            c('.task-input').value = ''
        }
        
        if(vazio.children.length > 0) {
            c('.title').innerHTML = 'SEUS AFAZERES';
        }
    }
})





