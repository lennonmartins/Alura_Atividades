package br.com.estudo.calculadora;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;


public class Calculadora {

	public int somar(int a,int b) {
		return a+b;
	}

	public int subtrair (int a, int b){
		return a-b;
	}

	public int multiplicar (int a, int b){
		return a*b;
	}

	public double dividir (int a, int b){
		return b/a;
	}
}
