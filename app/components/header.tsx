"use client";

import "./header.css";

import Link from "next/link";
import { Search, User, ShoppingCart } from "lucide-react";
import { useCarrinho } from "../context/CarrinhoContext";

export default function Header() {
  const { carrinho } = useCarrinho();

  return (
    <header>
      {/* Logo */}
      <div className="logo">
        <h1
          style={{
            margin: 0,
            fontSize: "42px",
            color: "#8A6558",
            fontFamily: "Cormorant Garamond, serif",
            fontWeight: 600,
            letterSpacing: "1px",
          }}
        >
          VIRTUOSA
        </h1>

        <span
          style={{
            marginTop: "6px",
            textAlign: "center",
            color: "#CDA45B",
            fontSize: "20px",
            letterSpacing: "10px",
            fontFamily: "Cormorant Garamond, serif",
          }}
        >
          STORE
        </span>

        <span
          style={{
            marginTop: "8px",
            textAlign: "center",
            color: "#8A6558",
            fontSize: "11px",
            letterSpacing: "3px",
            fontFamily: "Montserrat, sans-serif",
            textTransform: "uppercase",
          }}
        >
          Moda Feminina Cristã
        </span>
      </div>

      {/* Menu */}
      <nav className="menu">
        <Link href="/">Início</Link>
        <Link href="/vestidos">Vestidos</Link>
        <Link href="/blusas">Blusas</Link>
        <Link href="/saias">Saias</Link>
        <Link href="/conjuntos">Conjuntos</Link>
        <Link href="/quem-somos">Quem Somos</Link>
        <Link href="/como-funciona">Como funciona</Link>
      </nav>

      {/* Ícones */}
      <div className="icones">
        <Search size={22} color="#8A6558" style={{ cursor: "pointer" }} />

        <User size={22} color="#8A6558" style={{ cursor: "pointer" }} />

        <Link href="/carrinho" className="carrinho">
          <ShoppingCart size={22} color="#8A6558" />

          <span className="badge">{carrinho.length}</span>
        </Link>
      </div>
    </header>
  );
}