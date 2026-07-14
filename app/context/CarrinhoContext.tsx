"use client";

import { createContext, useContext, useState } from "react";

export type ItemCarrinho = {
  slug: string;
  nome: string;
  preco: string;
  imagem: string;
  tamanho?: string;
  cor?: string;
  quantidade: number;
};

type CarrinhoContextType = {
  carrinho: ItemCarrinho[];
  adicionarAoCarrinho: (item: ItemCarrinho) => void;
  removerDoCarrinho: (index: number) => void;
  aumentarQuantidade: (index: number) => void;
  diminuirQuantidade: (index: number) => void;
};

const CarrinhoContext = createContext<CarrinhoContextType>({
  carrinho: [],
  adicionarAoCarrinho: () => {},
  removerDoCarrinho: () => {},
  aumentarQuantidade: () => {},
  diminuirQuantidade: () => {},
});

export function CarrinhoProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [carrinho, setCarrinho] = useState<ItemCarrinho[]>([]);

  function adicionarAoCarrinho(item: ItemCarrinho) {
    setCarrinho((anterior) => {
      const index = anterior.findIndex(
        (p) =>
          p.slug === item.slug &&
          p.cor === item.cor &&
          p.tamanho === item.tamanho
      );

      if (index !== -1) {
        const novo = [...anterior];
        novo[index].quantidade += item.quantidade;
        return novo;
      }

      return [...anterior, item];
    });
  }

  function removerDoCarrinho(index: number) {
    setCarrinho((anterior) =>
      anterior.filter((_, i) => i !== index)
    );
  }

function aumentarQuantidade(index: number) {
  console.count("AUMENTAR");

  setCarrinho((anterior) => {
    const novo = [...anterior];

    novo[index] = {
      ...novo[index],
      quantidade: novo[index].quantidade + 1,
    };

    return novo;
  });
}

  function diminuirQuantidade(index: number) {
    setCarrinho((anterior) => {
      const novo = [...anterior];

      if (novo[index].quantidade > 1) {
        novo[index].quantidade -= 1;
      } else {
        novo.splice(index, 1);
      }

      return novo;
    });
  }

  return (
    <CarrinhoContext.Provider
      value={{
        carrinho,
        adicionarAoCarrinho,
        removerDoCarrinho,
        aumentarQuantidade,
        diminuirQuantidade,
      }}
    >
      {children}
    </CarrinhoContext.Provider>
  );
}

export function useCarrinho() {
  return useContext(CarrinhoContext);
}