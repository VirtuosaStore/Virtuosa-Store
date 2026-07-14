import Image from "next/image";
import Link from "next/link";

const vestidos = [
  {
    nome: "Vestido Elegance",
    imagem: "/imagens/imagens/vestido.png",
    slug: "vestido-elegance",
    preco: "R$ 83,90",
  },
  {
    nome: "Vestido Sofia",
    imagem: "/imagens/imagens/vestido-sofia.png",
    slug: "vestido-sofia",
    preco: "R$ 94,90",
  },
  {
    nome: "Vestido Serena",
    imagem: "/imagens/imagens/vestido-serena.png",
    slug: "vestido-serena",
    preco: "R$ 119,90",
  },
  {
    nome: "Vestido Jasmim",
    imagem: "/imagens/imagens/vestido-jasmim.png",
    slug: "vestido-jasmim",
    preco: "R$ 185,90",
  },
  {
    nome: "Vestido Esther",
    imagem: "/imagens/imagens/vestido-esther.png",
    slug: "vestido-esther",
    preco: "R$ 149,90",
  },
  {
    nome: "Vestido Magnólia",
    imagem: "/imagens/imagens/vestido-magnolia.png",
    slug: "vestido-magnolia",
    preco: "R$ 195,90",
  },
];

export default function Vestidos() {
  return (
    <main
      style={{
        background: "#FFFFFF",
        minHeight: "100vh",
        padding: "140px 20px 80px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            fontFamily: "Cormorant Garamond, serif",
            fontSize: "60px",
            color: "#8A6558",
            fontWeight: 500,
            marginBottom: "15px",
          }}
        >
          Vestidos
        </h1>

        <p
          style={{
            textAlign: "center",
            fontFamily: "Montserrat, sans-serif",
            fontSize: "18px",
            color: "#6F5A52",
            marginBottom: "60px",
          }}
        >
          Elegância, feminilidade e propósito em cada detalhe.
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "35px",
          }}
        >
          {vestidos.map((vestido) => (
            <Link
              key={vestido.slug}
              href={`/produto/${vestido.slug}`}
              style={{
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <div
                style={{
                  width: "300px",
                  background: "#FBF6EE",
                  borderRadius: "20px",
                  overflow: "hidden",
                  border: "1px solid #E8DDD2",
                  boxShadow: "0 10px 25px rgba(0,0,0,.08)",
                  transition: "0.3s",
                  cursor: "pointer",
                }}
              >
                <Image
                  src={vestido.imagem}
                  alt={vestido.nome}
                  width={300}
                  height={420}
                  style={{
                    width: "100%",
                    height: "420px",
                    objectFit: "cover",
                    objectPosition: "top",
                    display: "block",
                  }}
                />

                <div
                  style={{
                    padding: "22px",
                    textAlign: "center",
                  }}
                >
                  <h3
                    style={{
                      margin: 0,
                      fontFamily: "Cormorant Garamond, serif",
                      fontSize: "32px",
                      color: "#8A6558",
                      fontWeight: 500,
                    }}
                  >
                    {vestido.nome}
                  </h3>

                  <p
                    style={{
                      margin: "10px 0",
                      color: "#6F5A52",
                      fontFamily: "Montserrat, sans-serif",
                    }}
                  >
                    Moda feminina cristã.
                  </p>

                  <p
                    style={{
                      margin: 0,
                      fontSize: "28px",
                      color: "#CDA45B",
                      fontWeight: "bold",
                    }}
                  >
                    {vestido.preco}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}