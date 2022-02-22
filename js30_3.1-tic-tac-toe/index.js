// "use strict"
const field = document.querySelector('.field');
const h2 = document.getElementsByTagName('h2')[0];
const box = document.getElementById('.box');
let time = document.getElementById('time')
let timeGame = document.querySelector('.time_game');
let sec = 0;
let min = 0;
let move = 0;



//!!!! ";" <--- лучше привыкать ставить точку с запятой с самого начала, т.к в других более строгих языках, будут ошибки сыпаться

field.addEventListener('click', function(event) {
    if(move === 0)  timer(); //если шаг равен 0, запускаем таймер 
    if(event.target.innerHTML !== '') return; //если текущая цель не ровна пустой строке, ставим оператор завершения
    
    if(move % 2 === 0) { //если число четное
        event.target.innerHTML = 'X' //пишем X
    } else {event.target.innerHTML = 'O'} //иначе пишем O
    
            
    move++; //переходим к следующему шагу
    
    // if ((check() == 0)) return location.reload(alert('DEADLOCK'));
    if (check() == 0  && move == 9) {
        alert('DEADLOCK')
        return location.reload();
        }

   
      
    
    timeGame = console.log(h2)

});





function check() {
    const boxes = document.getElementsByClassName('box');
    const win = [
        [0,1,2],
        [3,4,5],
        [6,7,8],

        [0,3,6],
        [1,4,7],
        [2,5,8],

        [0,4,8],
        [6,4,2]
    ]

    
    for(let i = 0; i < win.length; i++) {
        if(boxes[win[i][0]].innerHTML === 'X' && boxes[win[i][1]].innerHTML === 'X' && boxes[win[i][2]].innerHTML === 'X') {
            location.reload(alert('X - WIN!'));
            return 1
            
        } else if(boxes[win[i][0]].innerHTML === 'O' && boxes[win[i][1]].innerHTML === 'O' && boxes[win[i][2]].innerHTML === 'O'){
            location.reload(alert('O - WIN!'));  
            return 1
        } 
        
    }
    
return 0

}




function tick(){
    sec++;
    if (sec >= 60) {
        sec = 0;
        min++       
    }
}
function add() {
    tick()
    h2.textContent = (min > 9 ? min : "0" + min)
       		 + ":" + (sec > 9 ? sec : "0" + sec)
    timer()
}
function timer() {
    t = setTimeout(add, 1000)    
    
}

