function ClicouEmSim() {
  fetch('https://website-9cmm.onrender.com', {
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
  fetch('https://website-9cmm.onrender.com', {
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
  fetch('https://website-9cmm.onrender.com')
    .then(res => res.json())
    .then(data => {
      document.getElementById("vs").textContent = data.sim;
      document.getElementById("vn").textContent = data.nao;
    });
}
