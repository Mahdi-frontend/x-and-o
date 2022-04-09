//  restarter
let btn = document.getElementById("btn-rest");
btn.addEventListener("click",function(){
    location.reload()
})
// variable
let flag = true;
let cells = document.querySelectorAll("li");
let i = document.querySelectorAll("i");
let array = [];
// funcitons
function show(){

    if(flag){
        this.textContent = "o"
        document.getElementById('turn').textContent = 'x turn'
        this.classList.add("disib")
        flag = false;
    }
    else{
        this.textContent = "x";
        document.getElementById('turn').textContent = 'o turn'

        this.classList.add("disib")
        flag = true;
    }
    
    if(cells[0].textContent == 'o'&&cells[1].textContent=='o'&&cells[2].textContent=='o'||cells[0].textContent=='x'&&cells[1].textContent=='x'&&cells[2].textContent=='x'){
        cells[0].classList.add('match')
        cells[1].classList.add('match')
        cells[2].classList.add('match');
        for (const celling of cells) {
            celling.classList.add('disib')
        }
    }
    else if(cells[3].textContent == 'o'&&cells[4].textContent=='o'&&cells[5].textContent=='o'||cells[3].textContent=='x'&&cells[4].textContent=='x'&&cells[5].textContent=='x'){
        cells[3].classList.add('match')
        cells[4].classList.add('match')
        cells[5].classList.add('match');
        for (const celling of cells) {
            celling.classList.add('disib')
        }
    }
    else if(cells[6].textContent == 'o'&&cells[7].textContent=='o'&&cells[8].textContent=='o'||cells[6].textContent=='x'&&cells[7].textContent=='x'&&cells[8].textContent=='x'){
        cells[6].classList.add('match')
        cells[7].classList.add('match')
        cells[8].classList.add('match');
        for (const celling of cells) {
            celling.classList.add('disib')
        }
    }
    else if(cells[1].textContent == 'o'&&cells[4].textContent=='o'&&cells[7].textContent=='o'||cells[1].textContent=='x'&&cells[4].textContent=='x'&&cells[7].textContent=='x'){
        cells[1].classList.add('match')
        cells[4].classList.add('match')
        cells[7].classList.add('match');
        for (const celling of cells) {
            celling.classList.add('disib')
        }
    }
    else if(cells[2].textContent == 'o'&&cells[5].textContent=='o'&&cells[8].textContent=='o'||cells[2].textContent=='x'&&cells[5].textContent=='x'&&cells[8].textContent=='x'){
        cells[2].classList.add('match')
        cells[5].classList.add('match')
        cells[8].classList.add('match');
        for (const celling of cells) {
            celling.classList.add('disib')
        }
    }
    else if(cells[0].textContent == 'o'&&cells[4].textContent=='o'&&cells[8].textContent=='o'||cells[0].textContent=='x'&&cells[4].textContent=='x'&&cells[8].textContent=='x'){
        cells[0].classList.add('match')
        cells[4].classList.add('match')
        cells[8].classList.add('match');
        for (const celling of cells) {
            celling.classList.add('disib')
        }
    }
    else if(cells[2].textContent == 'o'&&cells[4].textContent=='o'&&cells[6].textContent=='o'||cells[2].textContent=='x'&&cells[4].textContent=='x'&&cells[6].textContent=='x'){
        cells[2].classList.add('match')
        cells[4].classList.add('match')
        cells[6].classList.add('match');
        for (const celling of cells) {
            celling.classList.add('disib')
        }
    }
    else if(cells[0].textContent == 'o'&&cells[3].textContent=='o'&&cells[6].textContent=='o'||cells[0].textContent=='x'&&cells[3].textContent=='x'&&cells[6].textContent=='x'){
        cells[0].classList.add('match')
        cells[3].classList.add('match')
        cells[6].classList.add('match');
        for (const celling of cells) {
            celling.classList.add('disib')
        }
    }
}



// events
for (const cell of cells) {
    cell.addEventListener('click',show)
}
