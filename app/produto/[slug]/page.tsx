

import Link from "next/link";
import { produtos } from "../../dadosProdutos"; 
import ComprarProduto from "./CompraProduto";
import BarraProduto from "../BarraProduto";
import Header from "../../components/header";

type Props = {
  params: {
    slug: string;
  };
};

export default async function Produto({ params }: Props) {
  const { slug } = await params;

  
  

  const produto =
    produtos[slug as keyof typeof produtos] ??
    produtos["vestido-elegance"];


    return (
    <>
   
    <Header />

    <main
      style={{
        background: "#fff",
        minHeight: "100vh",
        padding: "140px 20px 80px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "70px",
          alignItems: "center",
        }}
      >
        <div>
          <img
            src={produto.imagem}
            alt={produto.nome}
            style={{
              width: "100%",
              borderRadius: "20px",
              border: "1px solid #E8DDD2",
            }}
          />
        </div>

        <div>
          <h1
            style={{
              fontFamily: "Cormorant Garamond, serif",
              color: "#8A6558",
              fontSize: "56px",
              margin: 0,
            }}
          >
            {produto.nome}
          </h1>

          <p
            style={{
              fontFamily: "Montserrat, sans-serif",
              color: "#6F5A52",
              fontSize: "18px",
              lineHeight: 1.8,
              marginTop: "20px",
            }}
          >
            {produto.descricao}
          </p>

          <h2
            style={{
              color: "#CDA45B",
              fontSize: "44px",
              margin: "35px 0",
            }}
          >
            {produto.preco}
          </h2>
 
         <ComprarProduto
           produto={produto}
           slug={slug}
         />

          <a
            href="https://wa.me/5551998379681"
            target="_blank"
            rel="noreferrer"
            style={{
              display: "block",
              textAlign: "center",
              textDecoration: "none",
              width: "100%",
              padding: "18px",
              background: "#25D366",
              color: "#fff",
              borderRadius: "12px",
              fontSize: "17px",
              fontWeight: 600,
              boxSizing: "border-box",
            }}
          >
            Comprar pelo WhatsApp
          </a>
        </div>
      </div>
      <section
        style={{
          maxWidth: "1200px",
          margin: "80px auto 0",
          padding: "0 20px",
        }}
      >
        <h2
          style={{
            fontFamily: "Cormorant Garamond, serif",
            color: "#8A6558",
            fontSize: "42px",
            marginBottom: "20px",
          }}
        >
          Descrição
        </h2>

        <p
          style={{
            fontFamily: "Montserrat, sans-serif",
            color: "#6F5A52",
            lineHeight: 1.9,
            fontSize: "17px",
          }}
        >
          {produto.descricao}
        </p>

        <h2
          style={{
            fontFamily: "Cormorant Garamond, serif",
            color: "#8A6558",
            fontSize: "38px",
            marginTop: "60px",
            marginBottom: "20px",
          }}
        >
          Características
        </h2>

        <ul
          style={{
            fontFamily: "Montserrat, sans-serif",
            color: "#6F5A52",
            lineHeight: 2,
            fontSize: "17px",
            paddingLeft: "22px",
          }}
        >
          {produto.caracteristicas.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <h2
          style={{
            fontFamily: "Cormorant Garamond, serif",
            color: "#8A6558",
            fontSize: "38px",
            marginTop: "70px",
            marginBottom: "30px",
            textAlign: "center",
          }}
        >
          Você também pode gostar
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "25px",
          }}
        >
          {Object.entries(produtos)
            .filter(([key]) => key !== slug)
            .slice(0, 4)
            .map(([key, item]) => (
              <Link
                key={key}
                href={`/produto/${key}`}
                style={{
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                <div
                  style={{
                    background: "#FBF6EE",
                    borderRadius: "18px",
                    overflow: "hidden",
                    border: "1px solid #E8DDD2",
                    boxShadow: "0 8px 20px rgba(0,0,0,.08)",
                    cursor: "pointer",
                  }}
                >
                  <img
                    src={item.imagem}
                    alt={item.nome}
                    style={{
                      width: "100%",
                      height: "300px",
                      objectFit: "cover",
                      objectPosition: "top",
                    }}
                  />

                  <div
                    style={{
                      padding: "18px",
                      textAlign: "center",
                    }}
                  >
                    <h3
                      style={{
                        margin: 0,
                        fontFamily: "Cormorant Garamond, serif",
                        color: "#8A6558",
                        fontSize: "28px",
                      }}
                    >
                      {item.nome}
                    </h3>

                    <p
                      style={{
                        margin: "10px 0",
                        color: "#CDA45B",
                        fontWeight: "bold",
                        fontSize: "22px",
                      }}
                    >
                      {item.preco}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </section>
    </main>
    </>
  );
}
