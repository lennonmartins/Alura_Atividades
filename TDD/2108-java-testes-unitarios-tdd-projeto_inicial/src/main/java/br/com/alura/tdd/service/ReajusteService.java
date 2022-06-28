package br.com.alura.tdd.service;

import java.math.BigDecimal;

import br.com.alura.tdd.modelo.Desempenho;
import br.com.alura.tdd.modelo.Funcionario;

public class ReajusteService {
    
    public BigDecimal calcularReajuste(Funcionario funcionario, Desempenho desempenho) {
        if (desempenho.equals(Desempenho.A_DESEJAR)){
            BigDecimal reajuste = funcionario.getSalario().multiply(new BigDecimal("0.03"));
        }
        return funcionario.reajustarSalario(reajuste);
    }
    
}
