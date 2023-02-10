function confirmarDados(nome){
    var nomeCompleto = nome + " da silva"
    var geracao = "millenium"
    function getAnoNascimento(){
        var idade = 40
        var ano = 2022 - idade
        return ano
    }

    console.log("Nome completo" + nomeCompleto)
    console.log("Ano de nascimento" + anoDeNascimento)
    console.log("geração" + geracao)

}
confirmarDados("Marcos")

try{

    if(anoDeNascimento == undefined)
        throw new Error("Está com erro")
} catch(Error){
    console.log("Um erro foi encontrado")
}





