package br.com.alura.tdd.service;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.math.BigDecimal;
import java.time.LocalDate;

import org.junit.jupiter.api.Test;

import br.com.alura.tdd.modelo.Desempenho;
import br.com.alura.tdd.modelo.Funcionario;

public class ReajusteServiceTest {
    
    @Test
    public void deve_atribuir_reajuste_de_tre_porcento_para_desempenho_a_desejar(){
        //Arrange
        ReajusteService reajuste = new ReajusteService();
        Funcionario funcionario = new Funcionario("Evandro", LocalDate.now(), new BigDecimal("1000.00"));

        //Act
        BigDecimal salarioReajustado = reajuste.calcularReajuste(funcionario, Desempenho.A_DESEJAR);

        //Assetions
        assertEquals("1030.00", salarioReajustado);

    }

   

    
}
