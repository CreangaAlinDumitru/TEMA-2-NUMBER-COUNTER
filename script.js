var adauga = document.getElementById('adauga');
var scadere = document.getElementById('scade');
var sterge = document.getElementById('reset')

var numar = document.getElementById('counter');
var numaratoare = 0;

adauga.addEventListener('click', function() {
    numaratoare += 1;
    numar.innerHTML = numaratoare;
})
scadere.addEventListener('click', function() {
    numaratoare -= 1;
    numar.innerHTML = numaratoare;
})
sterge.addEventListener('click', function() {
    numaratoare = 0
    numar.innerHTML = numaratoare;
})