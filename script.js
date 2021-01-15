const dino= document.getElementById('dino')
const cacti= document.getElementById('cacti')

let jumpTimeout;
let checkInterval;
let score= 0;

window.onload= ()=> {
    startGame()
}

const  resetGame= () => {
    clearInterval(checkInterval)
    clearInterval(addScore)
    clearTimeout(jumpTimeout)
    cacti.classList.remove('move')
    dino.classList.remove('jump')
    score=0
    let restart= confirm('Play again')
    if(restart){
        startGame()
    }
}

const startGame= () => {

    cacti.classList.add('move')

    document.body.onkeyup= (e) => {
        if(e.keyCode===32){
            dino.classList.add('jump')
            if(jumpTimeout){
                clearTimeout(jumpTimeout)
            }
            jumpTimeout= setTimeout(()=>{
                dino.classList.remove('jump') 
            }, 1000)
        }
    }
    
    checkInterval= setInterval(()=>{
        const dinoTop= parseInt(getComputedStyle(dino).getPropertyValue('top'))
        const cactiLeft= parseInt(getComputedStyle(cacti).getPropertyValue('left'))
        if(cactiLeft>=0 && cactiLeft<=85 && dinoTop>=220){
            alert(`You score is ${score}`)
            resetGame()
        }
    }, 10)

    addScore= setInterval(()=>{
        score++
        console.log('score', score)
    }, 1600)
}