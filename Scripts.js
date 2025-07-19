let cont = 0;
let vts = 0;
let vtn = 0;

function ClicouEmSim() {
    alert("APOIS TU É DOIDO");
    vts += 1;
    document.getElementById("vs").textContent = vts;
}

function ClicouEmNao() {
    cont += 1;
    vtn += 1;
    document.getElementById("vn").textContent = vtn;
        

    if (cont === 3) {
        document.getElementById("tlt").textContent = "Deixa ds ser doido";
        alert("APOIS TU NÃO É DOIDO NÃO DOIDO");
        cont = 0;
        
        document.getElementById("vn").textContent = vtn;
    } else {
        alert("APOIS TU NÃO É DOIDO NÃO DOIDO");
    }
}

// salava tudo em um json

function SalvarDados(){
    //cria a estruruta do json
    const dados = {
        vts: vts,
        vtn: vtn
    };
    //salva o json no aramazenamento local
    localStorage.setItem("Dados", JSON.stringify(dados));
}

function CarregarDados(){
    //pega os dados salvos 
    const dadosSalvos = localStorage.getItem("Dados");
    
    //transfere os dados salvos para o lugar dos dados originais
    if (dadosSalvos){
        const dados = JSON.parse(dadosSalvos);
        vts = dados.vts;
        vtn = dados.vtn;
        
        document.getElementById("vs").textContent = vts;
        document.getElementById("vn").textContent = vtn;
        
    }
}