function AumentoSalarial(salarioBase) {
    let salario = salarioBase
    let salario2 = 0
    try {
        if (typeof salario == "string") {
            throw new Error("O salário informado não foi um número")
        } else if (typeof salario == "number") {
            switch (true) {
                case salario <= 1500:
                    salario2 = salario + (salario * 0.2)
                    console.log("O salário com aumento é: " + salario2)
                    break;

                case salario >= 1501 && salario <= 2000:
                    salario2 = salario + (salario * 0.15)
                    console.log("O salário com aumento é: " + salario2)
                    break;

                case salario >= 2001 && salario <= 3000:
                    salario2 = salario + (salario * 0.1)
                    console.log("O salário com aumento é: " + salario2)
                    break;

                case salario >= 3001:
                    salario2 = salario + (salario * 0.05)
                    console.log("O salário com aumento é: " + salario2)
                    break;
            }
        }
    } catch (error) {
        console.log(error)
    }
}