import { Phone, Mail, AtSign } from "lucide-react";

export default function Footer() {
  return (
    <footer
      style={{
        background: "#F5EFE8",
        padding: "60px 20px 70px",
        textAlign: "center",
        borderTop: "1px solid #E8DDD2",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "18px",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <Phone size={18} color="#CDA45B" />

          <p
            style={{
              margin: 0,
              color: "#555",
              fontSize: "17px",
              fontFamily: "Montserrat, sans-serif",
            }}
          >
            WhatsApp: (51) 99837-9681
          </p>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <AtSign size={18} color="#CDA45B" />

          <p
            style={{
              margin: 0,
              color: "#555",
              fontSize: "17px",
              fontFamily: "Montserrat, sans-serif",
            }}
          >
            Instagram: @virtuosastore
          </p>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <Mail size={18} color="#CDA45B" />

          <p
            style={{
              margin: 0,
              color: "#555",
              fontSize: "17px",
              fontFamily: "Montserrat, sans-serif",
            }}
          >
            contato@virtuosastore.com
          </p>
        </div>
      </div>

      <div
        style={{
          width: "220px",
          height: "1px",
          background: "#D9C7B8",
          margin: "50px auto 30px",
        }}
      />

      <p
        style={{
          margin: 0,
          color: "#999",
          fontSize: "14px",
          fontFamily: "Montserrat, sans-serif",
          letterSpacing: "0.5px",
        }}
      >
        © 2025 Virtuosa Store • Todos os direitos reservados.
      </p>
    </footer>
  );
}