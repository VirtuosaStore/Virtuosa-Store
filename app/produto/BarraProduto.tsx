"use client";

import Link from "next/link";
import { Home, ShoppingCart } from "lucide-react";
import { useCarrinho } from "../context/CarrinhoContext";

export default function BarraProduto() {
  const { carrinho } = useCarrinho();

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "35px",
      }}
    >
      <Link
        href="/"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          textDecoration: "none",
          color: "#8A6558",
          fontWeight: "600",
          fontFamily: "Montserrat, sans-serif",
        }}
      >
        <Home size={22} />
        Início
      </Link>

      <Link
        href="/carrinho"
        style={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          textDecoration: "none",
          color: "#8A6558",
        }}
      >
        <ShoppingCart size={24} />

        <span
          style={{
            position: "absolute",
            top: "-8px",
            right: "-8px",
            width: "18px",
            height: "18px",
            borderRadius: "50%",
            background: "#CDA45B",
            color: "#fff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "11px",
            fontWeight: "bold",
          }}
        >
          {carrinho.length}
        </span>
      </Link>
    </div>
  );
}