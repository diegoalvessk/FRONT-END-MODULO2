function usuario(){
    console.log("Informe um nome")
    let nome = prompt("Informe o nome")
    console.log("Informe a senha")
    let senha = prompt("Informe a senha")
    if(comparar(senha, nome) == true){
        return true
    }
}

function comparar(senha, nome){
    let senha2 = prompt("Informe a senha 2.")
    let nome2 = prompt("Informe o nome 2")
    if(senha == senha2 && nome == nome2){
        return true
    }else{
        return false
    }
}

