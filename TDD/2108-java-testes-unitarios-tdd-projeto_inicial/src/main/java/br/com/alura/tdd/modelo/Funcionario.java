package br.com.alura.tdd.modelo;

import java.math.BigDecimal;
import java.time.LocalDate;

public class Funcionario {
	private String nome;
	private LocalDate dataAdmissao;
	private BigDecimal salario;
	

	// Método Construtor
	public Funcionario(String nome, LocalDate dataAdmissao, BigDecimal salario) {
		this.nome = nome;
		this.dataAdmissao = dataAdmissao;
		this.salario = salario;
	}

	// Pegar nome e retornar para classe que chamar a função construtora
	public String getNome() {
		return nome;
	}

	// Pegar data de admissão e retornar para classe que chama-lá
	public LocalDate getDataAdmissao() {
		return dataAdmissao;
	}

	// Pegar o slario e retornar para a classe que o chamar;
	public BigDecimal getSalario() {
		return salario;
	}

	public BigDecimal reajustarSalario(BigDecimal reajuste) {
		return this.salario = this.salario.add(reajuste).setScale(2);
	}


	//FEITO PELO PROFESSOR;
	// public BigDecimal reajustarSalario(BigDecimal reajuste){
	// salarioComReajuste = reajuste*this.getSalario();
	// return salariocomReajuste;
	// }

	// private String nome;
	// private LocalDate dataAdmissao;
	// private BigDecimal salario;

	// public Funcionario(String nome, LocalDate dataAdmissao, BigDecimal salario) {
	// this.nome = nome;
	// this.dataAdmissao = dataAdmissao;
	// this.salario = salario;
	// }

	// public String getNome() {
	// return nome;
	// }

	// public LocalDate getDataAdmissao() {
	// return dataAdmissao;
	// }

	// public BigDecimal getSalario() {
	// return salario;
	// }

}
