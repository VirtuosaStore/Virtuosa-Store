"use client";

import Header from "../components/header";

export default function ComoFunciona() {
  return (
    <>
      <Header />

      <main
        style={{
          background: "#FBF6EE",
          minHeight: "100vh",
          padding: "160px 20px 100px",
        }}
      >
        <div
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            background: "#FFFFFF",
            borderRadius: "20px",
            padding: "60px",
            boxShadow: "0 10px 30px rgba(0,0,0,.06)",
          }}
        >
          <span
            style={{
              color: "#CDA45B",
              fontFamily: "Montserrat, sans-serif",
              letterSpacing: "3px",
              textTransform: "uppercase",
              fontSize: "14px",
              fontWeight: 600,
            }}
          >
            Virtuosa Store
          </span>

          <h1
            style={{
              marginTop: "18px",
              color: "#8A6558",
              fontFamily: "Cormorant Garamond, serif",
              fontSize: "58px",
              fontWeight: 500,
            }}
          >
            Como funciona a Virtuosa Store
          </h1>

          <p
            style={{
              color: "#6F5A52",
              fontFamily: "Montserrat, sans-serif",
              fontSize: "18px",
              lineHeight: 1.9,
            }}
          >
            Na Virtuosa Store, cada pedido é preparado com carinho e propósito.
          </p>

          <p
            style={{
              color: "#6F5A52",
              fontFamily: "Montserrat, sans-serif",
              fontSize: "18px",
              lineHeight: 1.9,
            }}
          >
            Trabalhamos com um modelo de revenda sob encomenda, o que significa
            que cada peça é providenciada especialmente para você após a
            confirmação do pedido.
          </p>

          <h2
            style={{
              marginTop: "50px",
              color: "#8A6558",
              fontFamily: "Cormorant Garamond, serif",
              fontSize: "42px",
            }}
          >
            Nosso processo
          </h2>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "18px",
              marginTop: "30px",
            }}
          >
            <p style={{ color: "#6F5A52", fontSize: "18px", lineHeight: 1.8 }}>
              🤍 Você escolhe suas peças em nosso site.
            </p>

            <p style={{ color: "#6F5A52", fontSize: "18px", lineHeight: 1.8 }}>
              🤍 Após a confirmação do pagamento, iniciamos a preparação do seu
              pedido junto aos nossos fornecedores.
            </p>

            <p style={{ color: "#6F5A52", fontSize: "18px", lineHeight: 1.8 }}>
              🤍 Quando a peça chega até nós, realizamos uma conferência para
              verificar se está em perfeito estado.
            </p>

            <p style={{ color: "#6F5A52", fontSize: "18px", lineHeight: 1.8 }}>
              🤍 Em seguida, embalamos tudo com a identidade da Virtuosa Store,
              pensando em cada detalhe para que sua experiência seja especial.
            </p>

            <p style={{ color: "#6F5A52", fontSize: "18px", lineHeight: 1.8 }}>
              🤍 Depois, despachamos sua encomenda para o endereço informado e
              enviamos o código de rastreamento.
            </p>
          </div>

          <h2
            style={{
              marginTop: "60px",
              color: "#8A6558",
              fontFamily: "Cormorant Garamond, serif",
              fontSize: "42px",
            }}
          >
            Prazo de entrega
          </h2>

          <p
            style={{
              color: "#6F5A52",
              fontFamily: "Montserrat, sans-serif",
              fontSize: "18px",
              lineHeight: 1.9,
            }}
          >
            📦 Como cada pedido é preparado especialmente para você, nosso prazo
            é um pouco maior do que o de lojas com estoque imediato.
          </p>

          <p
            style={{
              color: "#6F5A52",
              fontFamily: "Montserrat, sans-serif",
              fontSize: "18px",
              lineHeight: 1.9,
            }}
          >
            O prazo médio para entrega é de <strong>10 a 20 dias úteis</strong>,
            podendo variar conforme sua região e o tempo de transporte.
          </p>

          <p
            style={{
              color: "#6F5A52",
              fontFamily: "Montserrat, sans-serif",
              fontSize: "18px",
              lineHeight: 1.9,
            }}
          >
            Nosso compromisso é acompanhar cada etapa do processo para que seu
            pedido chegue com segurança, qualidade e muito carinho.
          </p>

          <div
            style={{
              marginTop: "70px",
              padding: "30px",
              background: "#FBF6EE",
              borderLeft: "4px solid #CDA45B",
              borderRadius: "12px",
            }}
          >
            <p
              style={{
                margin: 0,
                color: "#8A6558",
                fontFamily: "Cormorant Garamond, serif",
                fontSize: "30px",
                fontStyle: "italic",
                lineHeight: 1.6,
              }}
            >
              "Tudo o que fizerem, façam de todo o coração, como para o Senhor."
            </p>

            <p
              style={{
                marginTop: "15px",
                color: "#CDA45B",
                fontFamily: "Montserrat, sans-serif",
                fontWeight: 600,
              }}
            >
              Colossenses 3:23
            </p>
          </div>
        </div>
      </main>
    </>
  );
}