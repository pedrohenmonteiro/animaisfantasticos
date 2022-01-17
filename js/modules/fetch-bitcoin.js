export default function initFetchBitcoin() {}

const btcPreco = document.querySelector(".btc-preco");

fetch("https://blockchain.info/ticker")
  .then((r) => r.json())
  .then((bitcoin) => (btcPreco.innerText = (20 / bitcoin.BRL.sell).toFixed(7)))
  .catch((erro) => console.log(Error(erro)));
