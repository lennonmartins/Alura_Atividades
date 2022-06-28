package br.com.alura.tdd.modelo;

import java.math.BigDecimal;

public enum Desempenho {
    REGULAR("regular") {
        @Override
        public BigDecimal percentualReajuste() {
            return new BigDecimal("0.03");
        }
    }, BOM("bom") {
        @Override
        public BigDecimal percentualReajuste() {
           return new BigDecimal("0.1");
        }
    }, OTIMO("otimo") {
        @Override
        public BigDecimal percentualReajuste() {
    
            return new BigDecimal("0.2");
        }
    };

    private String descricao;

    private Desempenho(String descricao){
        this.descricao = descricao;
    }

    public String getDescricao(){
        return descricao;
    }

    public abstract BigDecimal percentualReajuste();
    

}
