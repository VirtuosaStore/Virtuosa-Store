"use client";

import { useCarrinho } from "../context/CarrinhoContext";

type Props = {
  item: {
    slug: string;
    nome: string;
    preco: string;
    imagem: string;
    tamanho?: string;
    cor?: string;
    quantidade: number;
  };
};

export default function BotaoCarrinho({ item }: Props) {
  const { adicionarAoCarrinho } = useCarrinho();

  return (
    <button
      onClick={() => {
        console.log("BOTÃO CLICADO");
        console.log(item);
        adicionarAoCarrinho(item);
        alert("Produto adicionado!");
      }}
      style={{
        width: "100%",
        padding: "18px",
        background: "#CDA45B",
        color: "#fff",
        border: "none",
        borderRadius: "12px",
        fontSize: "17px",
        fontWeight: 600,
        cursor: "pointer",
        marginBottom: "15px",
      }}
    >
      Adicionar ao Carrinho
    </button>
  );
}