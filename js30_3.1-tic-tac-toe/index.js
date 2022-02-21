const field = document.querySelector('.field');
const h2 = document.getElementsByTagName('h2')[0];
const box = document.getElementById('.box');
let time = document.getElementById('time')
let sec = 0;
let min = 0;
let move = 0;



//!!!! ";" <--- лучше привыкать ставить точку с запятой с самого начала, т.к в других более строгих языках, будут ошибки сыпаться

// field.addEventListener('click', function(event) {
    
//     if(move % 2 === 0) {
//         event.target.innerHTML = 'X'
//     } else {event.target.innerHTML = 'O'}
//     move++
//     check()
    
// })

// field.addEventListener('click', function(event) {
    
//     if((move % 2 === 0)&&(event.target.innerHTML==='')) {
//         event.target.innerHTML = 'X'
//     } else if (event.target.innerHTML===''){
//   event.target.innerHTML = 'O'
// }

//     move++
//     check()
    
// })

field.addEventListener('click', function(event) {
    if(move === 0)  timer(); //если шаг равен 0, запускаем таймер 
    if(event.target.innerHTML !== '') return; //если текущая цель не ровна пустой строке, ставим оператор завершения
    
    if(move % 2 === 0) { //если число четное
        event.target.innerHTML = 'X' //пишем X
    } else {event.target.innerHTML = 'O'} //иначе пишем O
    // if(move === 8 && POBEDA == 0) {
    //     location.reload()
    // return alert('DEADLOCK')
    // }
    move++; //переходим к следующему шагу
    check(); //запускаем функцию по проверке победы
    // alert('O - WIN!' + time.innerHTML);
    
   
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
            alert('X - WIN!');
            location.reload();
        } else if(boxes[win[i][0]].innerHTML === 'O' && boxes[win[i][1]].innerHTML === 'O' && boxes[win[i][2]].innerHTML === 'O'){
            alert('O - WIN!');
            location.reload();  
    }
}
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
