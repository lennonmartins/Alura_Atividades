package br.com.alura.tdd.service;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.math.BigDecimal;
import java.time.LocalDate;

import org.junit.jupiter.api.Test;

import br.com.alura.tdd.modelo.Desempenho;
import br.com.alura.tdd.modelo.Funcionario;

public class ReajusteServiceTest {

    @Test
    public void deve_atribuir_reajuste_de_tres_porcento_para_desempenho_a_desejar() {
        // Arrange
        BigDecimal salarioEsperado = new BigDecimal("1030.00");
        ReajusteService salariComReajuste = new ReajusteService();
        Funcionario funcionario = new Funcionario("Evandro", LocalDate.now(), new BigDecimal("1000.00"));

        // Act
        BigDecimal salarioAtual = salariComReajuste.calcularReajuste(funcionario, Desempenho.REGULAR);

        // Assetions
        assertEquals(salarioEsperado, salarioAtual);
    }

    @Test
    public void deve_atribuir_reajuste_de_10_porcento_para_desempenho_bom(){
        //Arrange
        BigDecimal salarioEsperado = new BigDecimal("1100.00");
        Funcionario funcionario = new Funcionario("Tatiane", LocalDate.now(), new BigDecimal("1000.00"));
        ReajusteService salarioComReajuste = new ReajusteService();

        //Act
        BigDecimal salarioAtual = salarioComReajuste.calcularReajuste(funcionario, Desempenho.BOM);

        //Assertions
        assertEquals(salarioEsperado, salarioAtual);
    }

    @Test
    public void deve_atribuir_reajuste_de_20_porcento_para_desempenho_otimo(){
        //Arrenge
        BigDecimal salarioEsperado = new BigDecimal("1200.00");
        Funcionario funcionario = new Funcionario("Moana", LocalDate.now(), new BigDecimal("1000.00"));
        ReajusteService salarioComReajuste = new ReajusteService();

        //Act
        BigDecimal salarioAtual = salarioComReajuste.calcularReajuste(funcionario, Desempenho.OTIMO);

        //Assertion
        assertEquals(salarioEsperado, salarioAtual);
    }

}
