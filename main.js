// Projeto Dado - Número aleatório

let imagemDado = document.querySelector("#dado");
let btn = document.querySelector("#btn");
let numberRandom = Math.floor(Math.random() * 7);
let mensagem = document.querySelector("#msg");

btn.addEventListener("click", () => {
    switch (numberRandom) {
      case 1:
        imagemDado.src = "img/1.png";
        mensagem.textContent = "O número sorteado foi 1";
        btn.style.display = 'none'
        break;
      case 2:
        imagemDado.src = "img/2.png";
        mensagem.textContent = "O número sorteado foi 2";
        btn.style.display = 'none'
        break;
      case 3:
        imagemDado.src = "img/3.png";
        mensagem.textContent = "O número sorteado foi 3";
        btn.style.display = 'none'
        break;
      case 4:
        imagemDado.src = "img/4.png";
        mensagem.textContent = "O número sorteado foi 4";
        btn.style.display = 'none'
        break;
      case 5:
        imagemDado.src = "img/5.png";
        mensagem.textContent = "O número sorteado foi 5";
        btn.style.display = 'none' 
        break;
      case 6:
        imagemDado.src = "img/6.png";
        mensagem.textContent = "O número sorteado foi 6";
        btn.style.display = 'none'
        break;
  }
});
