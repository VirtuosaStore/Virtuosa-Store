"use client";

import Link from "next/link";
import Header from "../components/header";
import { useCarrinho } from "../context/CarrinhoContext";

export default function Carrinho() {
  const {
    carrinho,
    aumentarQuantidade,
    diminuirQuantidade,
    removerDoCarrinho,
  } = useCarrinho();

  const total = carrinho.reduce((acc, item) => {
    const valor = Number(
      item.preco.replace("R$", "").replace(".", "").replace(",", ".").trim()
    );

    return acc + valor * item.quantidade;
  }, 0);

  const mensagem = encodeURIComponent(
    `Olá! Gostaria de fazer este pedido:\n\n${carrinho
      .map(
        (item) =>
          `${item.nome}
Cor: ${item.cor}
Tamanho: ${item.tamanho}
Quantidade: ${item.quantidade}
Preço: ${item.preco}`
      )
      .join("\n\n")}

Total: R$ ${total.toFixed(2).replace(".", ",")}`
  );

  return (
    <>
      <Header />

      <main
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "140px 20px 80px",
          minHeight: "100vh",
        }}
      >
        <h1
          style={{
            color: "#8A6558",
            fontSize: "48px",
            marginBottom: "40px",
            fontFamily: "Cormorant Garamond, serif",
          }}
        >
          Meu Carrinho
        </h1>

        {carrinho.length === 0 ? (
          <div style={{ textAlign: "center" }}>
            <p>Seu carrinho está vazio.</p>

            <Link
              href="/"
              style={{
                display: "inline-block",
                marginTop: 20,
                padding: "14px 28px",
                background: "#CDA45B",
                color: "#fff",
                textDecoration: "none",
                borderRadius: 10,
              }}
            >
              Continuar comprando
            </Link>
          </div>
        ) : (
          <>
            {carrinho.map((item, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  gap: 20,
                  border: "1px solid #E8DDD2",
                  borderRadius: 16,
                  padding: 20,
                  marginBottom: 20,
                  alignItems: "center",
                }}
              >
                <img
                  src={item.imagem}
                  alt={item.nome}
                  style={{
                    width: 120,
                    borderRadius: 12,
                  }}
                />

                <div style={{ flex: 1 }}>
                  <h2 style={{ color: "#8A6558" }}>{item.nome}</h2>

                  <p>Cor: {item.cor}</p>
                  <p>Tamanho: {item.tamanho}</p>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 12,
                      margin: "15px 0",
                    }}
                  >
                    <button
                      onClick={() => diminuirQuantidade(index)}
                    >
                      -
                    </button>

                    <strong>{item.quantidade}</strong>

                    <button
                      onClick={() => aumentarQuantidade(index)}
                    >
                      +
                    </button>
                  </div>

                  <strong
                    style={{
                      color: "#CDA45B",
                      fontSize: 22,
                    }}
                  >
                    {item.preco}
                  </strong>

                  <br />

                  <button
                    onClick={() => removerDoCarrinho(index)}
                    style={{
                      marginTop: 15,
                      background: "#b22222",
                      color: "#fff",
                      border: "none",
                      padding: "10px 18px",
                      borderRadius: 8,
                      cursor: "pointer",
                    }}
                  >
                    Remover
                  </button>
                </div>
              </div>
            ))}

            <div
              style={{
                textAlign: "right",
                marginTop: 40,
              }}
            >
              <h2>
                Total:{" "}
                <span style={{ color: "#CDA45B" }}>
                  R$ {total.toFixed(2).replace(".", ",")}
                </span>
              </h2>

              <a
                href={`https://wa.me/5551998379681?text=${mensagem}`}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: "inline-block",
                  marginTop: 20,
                  padding: "18px 40px",
                  background: "#25D366",
                  color: "#fff",
                  textDecoration: "none",
                  borderRadius: 12,
                  fontWeight: "bold",
                }}
              >
                Finalizar pelo WhatsApp
              </a>
            </div>
          </>
        )}
      </main>
    </>
  );
}