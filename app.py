from flask import Flask, request, jsonify
from flask_cors import CORS 

# Cria o servidor
app = Flask(__name__)
CORS(app)

# Dicionário dos votos
votos = {
    "sim": 0,
    "nao": 0
}

@app.route("/votar", methods=["POST"])
def votar():
    data = request.get_json()

    # Contabiliza os votos
    if data["opcao"] == "sim":
        votos["sim"] += 1
    elif data["opcao"] == "nao":
        votos["nao"] += 1

    return jsonify(votos)

@app.route("/votos", methods=["GET"])
def getvotos():
    return jsonify(votos)

# Roda essa peste toda
if __name__ == '__main__':
    app.run(debug=True)