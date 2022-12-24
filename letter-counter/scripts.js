let spanletter = document.getElementById("spanletter");
let inp = document.getElementById("inp");

inp.addEventListener('keyup', () => {
        spanletter.innerText = `This text has ${inp.value.length} letters`;
})