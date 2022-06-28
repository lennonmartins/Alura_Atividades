package br.com.alura.tdd.service;

import java.math.BigDecimal;

import br.com.alura.tdd.modelo.Desempenho;
import br.com.alura.tdd.modelo.Funcionario;

public class ReajusteService {

    private BigDecimal salarioComReajuste;
    private BigDecimal reajuste;
    private BigDecimal percentual;

    public BigDecimal calcularReajuste(Funcionario funcionario, Desempenho desempenho) {

        percentual = desempenho.percentualReajuste();
        reajuste = funcionario.getSalario().multiply(percentual);
        salarioComReajuste = funcionario.reajustarSalario(reajuste);
        
        return salarioComReajuste.setScale(2);
    }
}


//ANTES SEGUNDA FATORAÇÃO
// if (desempenho.equals(Desempenho.REGULAR.getDescricao())) {
// } else if (desempenho.equals(Desempenho.BOM.getDescricao())) {
//     reajuste = funcionario.getSalario().multiply(new BigDecimal("0.1"));
//     salarioComReajuste = funcionario.reajustarSalario(reajuste);
// } else {
//     reajuste = funcionario.getSalario().multiply(new BigDecimal("0.2"));
//     salarioComReajuste = funcionario.reajustarSalario(reajuste);
// }

//ANTES DA PRIMEIRA FATORAÇÃO 
// BigDecimal reajuste = funcionario.getSalario().multiply(new
// BigDecimal("0.03"));
// salarioComReajuste = funcionario.getSalario()
//         .add(funcionario.getSalario()
//         .multiply(new BigDecimal("0.03")));
// funcionario.reajustarSalario(reajuste);
//salarioComReajuste = funcionario.getSalario().add(funcionario.getSalario().multiply(new BigDecimal("0.1")));
//salarioComReajuste = funcionario.getSalario().add(funcionario.getSalario().multiply(new BigDecimal("0.2")));