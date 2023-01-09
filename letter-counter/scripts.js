let spanletter = document.getElementById("spanletter");
let inp = document.getElementById("inp");

inp.addEventListener('keyup', () => {

        return spanletter.innerText = `This text has ${inp.value.split(' ').join('').length} letters`;
})
