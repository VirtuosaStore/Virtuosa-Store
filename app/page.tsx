"use client";

import Link from "next/link";
import Header from "./components/header";
import Footer from "./components/Footer";
export default function Home() {
const irParaColecao = () => {
  const colecao = document.getElementById("colecao");

  if (!colecao) return;

  const inicio = window.pageYOffset;
  const destino = colecao.offsetTop;
  const distancia = destino - inicio;

  const duracao = 1800; // Quanto maior, mais lento

  let inicioTempo: number | null = null;

  function easeInOutCubic(x: number) {
    return x < 0.5
      ? 4 * x * x * x
      : 1 - Math.pow(-2 * x + 2, 3) / 2;
  }

  function animar(tempoAtual: number) {
    if (inicioTempo === null) inicioTempo = tempoAtual;

    const progresso = Math.min((tempoAtual - inicioTempo) / duracao, 1);

    const ease = easeInOutCubic(progresso);

    window.scrollTo(0, inicio + distancia * ease);

    if (progresso < 1) {
      requestAnimationFrame(animar);
    }
  }

  requestAnimationFrame(animar);
};

  return (
    <>
      <Header />

      <main
        style={{
          background: "#FFFFFF",
          minHeight: "100vh",
        }}
      >
        {/* HERO */}
        <section
          style={{
            minHeight: "100vh",
            background: "#FBF6EE",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            padding: "140px 20px 100px",
          }}
        >
          <div
            style={{
              maxWidth: "850px",
              width: "100%",
            }}
          >
            <h2
              style={{
                margin: "25px 0 0",
                color: "#8A6558",
                fontFamily: "Cormorant Garamond, serif",
                fontSize: "62px",
                fontWeight: 400,
              }}
            >
              Seja
            </h2>

            <h1
              style={{
                margin: "-15px 0 -5px",
                color: "#CDA45B",
                fontFamily: "Snell Roundhand",
                fontSize: "120px",
                fontWeight: 400,
                lineHeight: 1,
              }}
            >
              Bem-vinda
            </h1>

            <h2
              style={{
                margin: 0,
                color: "#8A6558",
                fontFamily: "Cormorant Garamond, serif",
                fontSize: "62px",
                fontWeight: 400,
              }}
            >
              a nossa loja
            </h2>

            <p
  style={{
    margin: "40px auto",
    maxWidth: "650px",
    color: "#6F5A52",
    fontSize: "20px",
    lineHeight: 1.9,
    fontFamily: "Montserrat, sans-serif",
  }}
>
  Aqui você encontra peças que expressam <strong>fé</strong>,{" "}
  <strong>propósito</strong> e transformam o seu vestir em uma forma de{" "}
  <strong>adoração</strong>.
</p>

<button
  onClick={irParaColecao}
  style={{
    display: "inline-block",
    marginTop: "45px",
    padding: "18px 42px",
    background: "#CDA45B",
    color: "#FFFFFF",
    border: "none",
    borderRadius: "10px",
    fontFamily: "Montserrat, sans-serif",
    fontWeight: 600,
    fontSize: "16px",
    cursor: "pointer",
  }}
>
  Conheça a Coleção
</button>
          </div>
        </section>
       
        {/* EXPLORE NOSSAS CATEGORIAS */}
        <section
          id="colecao"
          style={{
            padding: "110px 20px",
            background: "#FFFFFF",
          }}
        >
          <div
            style={{
              maxWidth: "1250px",
              margin: "0 auto",
            }}
          >
            <span
              style={{
                display: "block",
                textAlign: "center",
                color: "#CDA45B",
                fontFamily: "Montserrat, sans-serif",
                letterSpacing: "3px",
                textTransform: "uppercase",
                fontSize: "14px",
                fontWeight: 600,
              }}
            >
              Nossa Coleção
            </span>

            <h2
              style={{
                textAlign: "center",
                marginTop: "18px",
                marginBottom: "20px",
                color: "#8A6558",
                fontFamily: "Cormorant Garamond, serif",
                fontSize: "58px",
                fontWeight: 500,
              }}
            >
              Explore nossas categorias
            </h2>

            <p
              style={{
                maxWidth: "760px",
                margin: "0 auto 60px",
                textAlign: "center",
                color: "#6F5A52",
                fontFamily: "Montserrat, sans-serif",
                fontSize: "18px",
                lineHeight: 1.9,
              }}
            >
              Escolha sua categoria favorita e encontre peças desenvolvidas
              para mulheres que valorizam elegância, delicadeza e conforto.
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(260px,1fr))",
                gap: "30px",
              }}
            >
              {[
                {
                  nome: "Vestidos",
                  imagem: "/imagens/imagens/vestido.png",
                  href: "/vestidos",
                },
                {
                  nome: "Blusas",
                  imagem: "/imagens/imagens/blusa.png",
                  href: "/blusas",
                },
                {
                  nome: "Saias",
                  imagem: "/imagens/imagens/saia.png",
                  href: "/saias",
                },
                {
                  nome: "Conjuntos",
                  imagem: "/imagens/imagens/conjunto.png",
                  href: "/conjuntos",
                },
              ].map((categoria) => (
                <Link
                  key={categoria.nome}
                  href={categoria.href}
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                  }}
                >
                  <div
                    style={{
                      background: "#FBF6EE",
                      borderRadius: "20px",
                      overflow: "hidden",
                      border: "1px solid #E8DDD2",
                      boxShadow: "0 10px 25px rgba(0,0,0,.08)",
                      transition: ".3s",
                      cursor: "pointer",
                    }}
                  >
                    <img
                      src={categoria.imagem}
                      alt={categoria.nome}
                      style={{
                        width: "100%",
                        height: "360px",
                        objectFit: "cover",
                        objectPosition: "top",
                        display: "block",
                      }}
                    />

                    <div
                      style={{
                        padding: "24px",
                        textAlign: "center",
                      }}
                    >
                      <h3
                        style={{
                          margin: 0,
                          color: "#8A6558",
                          fontFamily: "Cormorant Garamond, serif",
                          fontSize: "34px",
                          fontWeight: 500,
                        }}
                      >
                        {categoria.nome}
                      </h3>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
        {/* NOSSOS DIFERENCIAIS */}
        <section
          style={{
            background: "#FBF6EE",
            padding: "90px 20px",
            borderTop: "1px solid #E8DDD2",
            borderBottom: "1px solid #E8DDD2",
          }}
        >
          <div
            style={{
              maxWidth: "1250px",
              margin: "0 auto",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "35px",
            }}
          >
            <div style={{ textAlign: "center", padding: "20px" }}>
              <div
                style={{
                  color: "#CDA45B",
                  fontSize: "42px",
                  marginBottom: "20px",
                }}
              >
                ♥
              </div>

              <h3
                style={{
                  fontFamily: "Cormorant Garamond, serif",
                  fontSize: "32px",
                  color: "#8A6558",
                  marginBottom: "12px",
                }}
              >
                Peças Exclusivas
              </h3>

              <p
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  color: "#6F5A52",
                  lineHeight: 1.8,
                }}
              >
                Selecionadas com carinho para oferecer elegância e exclusividade
                em cada detalhe.
              </p>
            </div>

            <div style={{ textAlign: "center", padding: "20px" }}>
              <div
                style={{
                  color: "#CDA45B",
                  fontSize: "42px",
                  marginBottom: "20px",
                }}
              >
                ❀
              </div>

              <h3
                style={{
                  fontFamily: "Cormorant Garamond, serif",
                  fontSize: "32px",
                  color: "#8A6558",
                  marginBottom: "12px",
                }}
              >
                Moda com Propósito
              </h3>

              <p
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  color: "#6F5A52",
                  lineHeight: 1.8,
                }}
              >
                Estilo pensado para mulheres que desejam vestir-se com beleza,
                fé e feminilidade.
              </p>
            </div>

            <div style={{ textAlign: "center", padding: "20px" }}>
              <div
                style={{
                  color: "#CDA45B",
                  fontSize: "42px",
                  marginBottom: "20px",
                }}
              >
                ✦
              </div>

              <h3
                style={{
                  fontFamily: "Cormorant Garamond, serif",
                  fontSize: "32px",
                  color: "#8A6558",
                  marginBottom: "12px",
                }}
              >
                Elegância e Sofisticação
              </h3>

              <p
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  color: "#6F5A52",
                  lineHeight: 1.8,
                }}
              >
                Looks desenvolvidos para transmitir confiança, charme e conforto
                em qualquer ocasião.
              </p>
            </div>

            <div style={{ textAlign: "center", padding: "20px" }}>
              <div
                style={{
                  color: "#CDA45B",
                  fontSize: "42px",
                  marginBottom: "20px",
                }}
              >
                ✈
              </div>

              <h3
                style={{
                  fontFamily: "Cormorant Garamond, serif",
                  fontSize: "32px",
                  color: "#8A6558",
                  marginBottom: "12px",
                }}
              >
                Envio para Todo o Brasil
              </h3>

              <p
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  color: "#6F5A52",
                  lineHeight: 1.8,
                }}
              >
                Entregamos seus pedidos com rapidez, segurança e muito cuidado.
              </p>
            </div>
          </div>
        </section>
        
            
          
     
        {/* ENTRE EM CONTATO */}
        <section
          style={{
            background: "#FBF6EE",
            padding: "110px 20px",
          }}
        >
          <div
            style={{
              maxWidth: "900px",
              margin: "0 auto",
              textAlign: "center",
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
              Entre em Contato
            </span>

            <h2
              style={{
                marginTop: "20px",
                marginBottom: "20px",
                fontFamily: "Cormorant Garamond, serif",
                color: "#8A6558",
                fontSize: "56px",
                fontWeight: 500,
              }}
            >
              Será um prazer falar com você
            </h2>

            <p
              style={{
                maxWidth: "700px",
                margin: "0 auto 40px",
                color: "#6F5A52",
                fontFamily: "Montserrat, sans-serif",
                fontSize: "18px",
                lineHeight: 1.9,
              }}
            >
              Tire suas dúvidas, solicite atendimento ou envie uma mensagem.
              Nossa equipe responderá o mais breve possível.
            </p>

            <form
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                maxWidth: "700px",
                margin: "0 auto",
              }}
            >
              <input
                type="text"
                placeholder="Seu nome"
                style={{
                  padding: "18px",
                  borderRadius: "10px",
                  border: "1px solid #DDD",
                  fontSize: "16px",
                }}
              />

              <input
                type="email"
                placeholder="Seu e-mail"
                style={{
                  padding: "18px",
                  borderRadius: "10px",
                  border: "1px solid #DDD",
                  fontSize: "16px",
                }}
              />

              <textarea
                rows={6}
                placeholder="Escreva sua mensagem..."
                style={{
                  padding: "18px",
                  borderRadius: "10px",
                  border: "1px solid #DDD",
                  fontSize: "16px",
                  resize: "vertical",
                }}
              />

              <button
                type="submit"
                style={{
                  padding: "18px",
                  background: "#CDA45B",
                  color: "#FFF",
                  border: "none",
                  borderRadius: "10px",
                  fontWeight: 600,
                  fontSize: "16px",
                  cursor: "pointer",
                }}
              >
                Enviar Mensagem
              </button>
            </form>
          </div>
        </section>

        {/* CHAMADA FINAL */}
        <section
          style={{
            background: "#FFFFFF",
            padding: "90px 20px",
            textAlign: "center",
            borderTop: "1px solid #E8DDD2",
          }}
        >
          <div
            style={{
              maxWidth: "900px",
              margin: "0 auto",
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

            <h2
              style={{
                marginTop: "20px",
                marginBottom: "20px",
                fontFamily: "Cormorant Garamond, serif",
                color: "#8A6558",
                fontSize: "56px",
                fontWeight: 500,
              }}
            >
              Encontrou seu look ideal?
            </h2>

            <p
              style={{
                fontFamily: "Montserrat, sans-serif",
                color: "#6F5A52",
                fontSize: "18px",
                lineHeight: 1.9,
                marginBottom: "40px",
              }}
            >
              Fale conosco pelo WhatsApp e receba um atendimento personalizado
              para escolher a peça perfeita para você.
            </p>

            <a
              href="https://wa.me/5500000000000"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                padding: "18px 40px",
                background: "#CDA45B",
                color: "#FFFFFF",
                textDecoration: "none",
                borderRadius: "10px",
                fontFamily: "Montserrat, sans-serif",
                fontWeight: 600,
                fontSize: "16px",
              }}
            >
              Falar pelo WhatsApp
            </a>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}