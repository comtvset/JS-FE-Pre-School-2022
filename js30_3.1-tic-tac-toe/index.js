const field = document.querySelector('.field')
let move = 0;

field.addEventListener('click', function(event) {
    if(move % 2 === 0) {
        event.target.innerHTML = 'X'
    } else {event.target.innerHTML = 'O'}
    move++
    check()
})

function check() {
    const boxes = document.getElementsByClassName('box')
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
            alert('X - WIN!')
            location.reload()
        } else if(boxes[win[i][0]].innerHTML === 'O' && boxes[win[i][1]].innerHTML === 'O' && boxes[win[i][2]].innerHTML === 'O'){
            alert('O - WIN!')
            location.reload()
        } else {
            
        }
    }
}