const button = document.getElementById('button');
const minus = document.getElementById('minus');
const plus = document.getElementById('plus');
let out = 0;
counter.innerText = out;

minus.addEventListener('click', () =>{
    out--;
    counter.innerText = out;
});

plus.addEventListener('click', () => {
    out++;
    counter.innerText = out;
});

