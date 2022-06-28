package br.com.estudo.calculadora;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;


public class CalculadoraTest {

    @Test
    public void deve_verificar_soma_de_dois_numeros_positivos(){
        int resultado = 10;
        Calculadora calc = new Calculadora();
        int soma = calc.somar(3,7);

        Assertions.assertEquals(resultado, soma);
    }

    @Test
    public void deve_verificar_subtracao_de_dois_numeros_positivos(){
        int resultado = 7;
        Calculadora calc = new Calculadora();
        int subtracao = calc.subtrair(10, 3);

        Assertions.assertEquals(resultado, subtracao);
    }

    @Test
    public void deve_verificar_multiplicacao_de_dois_numeros_positivos(){
        int resultadoEsperado = 15;
        Calculadora calculadora = new Calculadora();
        int multiplicacao = calculadora.multiplicar(3, 5);

        Assertions.assertEquals(resultadoEsperado, multiplicacao);
    }

    @Test
    public void deve_verificar_a_divisao_de_dois_numeros_positivos(){
        int resultadoEsperado = 4;
        Calculadora calculadora = new Calculadora();
        double divisao = calculadora.dividir(3,12);

        Assertions.assertEquals(resultadoEsperado, divisao);
    }

}
