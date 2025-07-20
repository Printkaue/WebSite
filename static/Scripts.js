function ClicouEmSim() {
  fetch('http://localhost:5000/votar', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ opcao: 'sim' })
  })
  .then(res => res.json())
  .then(data => {
    document.getElementById("vs").textContent = data.sim;
    document.getElementById("vn").textContent = data.nao;
  });

  alert("APOIS TU É DOIDO");
}

function ClicouEmNao() {
  fetch('http://localhost:5000/votar', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ opcao: 'nao' })
  })
  .then(res => res.json())
  .then(data => {
    document.getElementById("vs").textContent = data.sim;
    document.getElementById("vn").textContent = data.nao;
  });

  alert("APOIS TU NÃO É DOIDO NÃO DOIDO");
}

function CarregarDados() {
  fetch('http://localhost:5000/votos')
    .then(res => res.json())
    .then(data => {
      document.getElementById("vs").textContent = data.sim;
      document.getElementById("vn").textContent = data.nao;
    });
}
