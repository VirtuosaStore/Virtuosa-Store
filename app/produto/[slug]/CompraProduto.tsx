"use client";

import { useState } from "react";
import Seletor from "./Seletor";
import BotaoCarrinho from "../BotaoCarrinho";

type Produto = {
  nome: string;
  preco: string;
  imagem: string;
  cores: string[];
  tamanhos: {
    sigla: string;
    veste: string;
  }[];
};

type Props = {
  produto: Produto;
  slug: string;
};

export default function CompraProduto({ produto, slug }: Props) {
  const [cor, setCor] = useState(produto.cores[0] ?? "");
  const [tamanho, setTamanho] = useState(produto.tamanhos[0]?.sigla ?? "");

  return (
    <>
      <p
        style={{
          fontFamily: "Montserrat, sans-serif",
          fontWeight: 600,
          color: "#6F5A52",
          marginBottom: "12px",
        }}
      >
        Cores disponíveis
      </p>

      <Seletor
        opcoes={produto.cores}
        value={cor}
        onChange={setCor}
      />

      <p
        style={{
          fontFamily: "Montserrat, sans-serif",
          fontWeight: 600,
          color: "#6F5A52",
          marginTop: "35px",
          marginBottom: "12px",
        }}
      >
        Tamanhos disponíveis
      </p>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "12px",
          marginBottom: "35px",
        }}
      >
        {produto.tamanhos.map((tam) => {
          const selecionado = tamanho === tam.sigla;

          return (
            <button
              key={tam.sigla}
              type="button"
              onClick={() => setTamanho(tam.sigla)}
              style={{
                minWidth: "90px",
                padding: "12px",
                border: selecionado
                  ? "2px solid #CDA45B"
                  : "1px solid #D8C6B8",
                background: selecionado ? "#CDA45B" : "#fff",
                borderRadius: "10px",
                cursor: "pointer",
                transition: "all .2s ease",
              }}
            >
              <div
                style={{
                  fontWeight: 700,
                  color: selecionado ? "#fff" : "#8A6558",
                }}
              >
                {tam.sigla}
              </div>

              <div
                style={{
                  fontSize: "13px",
                  marginTop: "4px",
                  color: selecionado ? "#fff" : "#6F5A52",
                }}
              >
                {tam.veste}
              </div>
            </button>
          );
        })}
      </div>

      <BotaoCarrinho
        item={{
          slug,
          nome: produto.nome,
          preco: produto.preco,
          imagem: produto.imagem,
          cor,
          tamanho,
          quantidade: 1,
        }}
      />
    </>
  );
}