package br.com.alura.tdd.service;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.IllegalFormatException;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

import br.com.alura.tdd.modelo.Funcionario;

public class BonusServiceTest {
    
    @Test
    public void deve_verificar_bonus_do_funcionario_com_salario_maior_que_limite(){
       
        //Arrenge
        BigDecimal bonusEsperado = new BigDecimal("0.00");
        BonusService bonus = new BonusService();
        Funcionario funcionario = new Funcionario("Lennon", LocalDate.now(), new BigDecimal("25000.00"));

        assertThrows(IllegalArgumentException.class, () ->  bonus.calcularBonus(funcionario)) ;

    }

    @Test
    public void deve_verificar_bonus_do_funcionario_com_salario_menor_que_limite(){
        //Arrange
        BigDecimal bonusEsperado = new BigDecimal("900.00");
        BonusService bonus = new BonusService();
        Funcionario funcionario = new Funcionario("Maruan",LocalDate.now(), new BigDecimal("9000.00"));

        //Act
        BigDecimal bonusAtual = bonus.calcularBonus(funcionario);

        //Assertions
        assertEquals(bonusEsperado, bonusAtual);
    }

    @Test
    public void deve_verificar_bonus_se_salario_igual_limite(){
        //Arrenge
        BigDecimal bonusEsperado =  new BigDecimal("1000.00");
        BonusService bonus = new BonusService();
        Funcionario funcionario = new Funcionario("Camila", LocalDate.now(), new BigDecimal("10000"));

        //Act
        BigDecimal bonusAtual = bonus.calcularBonus(funcionario);

        //Assertions
        assertEquals(bonusEsperado, bonusAtual);

    }
}
