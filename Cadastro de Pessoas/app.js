var Cadastro = [
    {
        "nome": "Francielle Limonge",
        "cidade": "Belo Horizonte",
        "idade": "25",
        "veiculos": [
            {
                "marca": "fiat",
                "modelo": "toro",
                "ano": 2020,
                "placa": "hnv-1010"
            }
        ]
    },
    {
        "nome": "Maria Tereza",
        "cidade": "São Paulo",
        "idade": "25",
        "veiculos": []
    },
    {
        "nome": "Pedro Augusto",
        "cidade": "Rio de Janeiro",
        "idade": 48,
        "veiculos": [
            {
                "marca": "ford",
                "modelo": "Territory",
                "ano": 2021,
                "placa": "xyz-4231"
            },
            {
                "marca": "Toyota",
                "modelo": "Etyos",
                "ano": 2019,
                "placa": "xyz-4451"
            }
        ]
    }
];

function exibirCadastro() {
    var textoHTML = '';
    for (let x = 0; x < Cadastro.length; x++) {
        textoHTML += `Pessoa: ${Cadastro[x].nome} <br>`;

        if (Cadastro[x].veiculos.length > 0) {
            textoHTML += '<ul>';

            for (let y = 0; y < Cadastro[x].veiculos.length; y++) {
                let marca = Cadastro[x].veiculos[y].marca;
                let modelo = Cadastro[x].veiculos[y].modelo;
                let ano = Cadastro[x].veiculos[y].ano;
                let placa = Cadastro[x].veiculos[y].placa;
                textoHTML += `<li>${marca} - ${modelo} - ${ano} - ${placa}</li>`;
            }

            textoHTML += '</ul>';
        }
    }

    var tela = document.getElementById('tela');
    tela.innerHTML = textoHTML;
}

