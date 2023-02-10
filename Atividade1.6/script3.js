function confirmarDados(nome){
    let nomeCompvaro = nome + " da silva"
    
    function geracaoPertence(anoDeNascimento){
        if(anoDeNascimento>2000){
            geracao = "geracao z"
        } else{
            geracao = "geracao y"
        }

        return geracao
    }
   
    function getAnoNascimento(){
        let idade = 40
        let ano = 2022 - idade
        return ano
    }

    let anoDeNascimento = getAnoNascimento()
    let geracao = geracaoPertence(anoDeNascimento)
   
    console.log("Nome compvaro " + nomeCompvaro)
    console.log("Ano de nascimento " + anoDeNascimento)
    console.log("geração " + geracao)

}
confirmarDados("Marcos")