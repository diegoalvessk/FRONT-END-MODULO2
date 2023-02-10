function confirmarDados(nome){
    let nomeCompleto = nome + " da silva"
    let geracao = "millenium"
    function getAnoNascimento(){
        let idade = 40
        let ano = 2022 - idade
        return ano
    }

    let anoDeNascimento = getAnoNascimento()
    if(anoDeNascimento <= 1995){
         geracao = "geração x"
    }
    console.log("Nome completo " + nomeCompleto)
    console.log("Ano de nascimento " + anoDeNascimento)
    console.log("geração " + geracao)

}
confirmarDados("Marcos")