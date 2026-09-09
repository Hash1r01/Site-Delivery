const barra = document.getElementById("barradepesquisa");

document.getElementById("barradepesquisa").addEventListener("input", function () {
    this.value = this.value.replace(/[^A-Za-zÀ-ÿ\s]/g, "");
});

const links = document.querySelectorAll('.filtros');

links.forEach(link => {
  link.addEventListener('click', function(evento) {

    evento.preventDefault(); 


    document.querySelectorAll('.box').forEach(box => {
      box.classList.remove('ativa');
    });

    const boxPai = this.closest('.box');
    boxPai.classList.add('ativa');
  });
});