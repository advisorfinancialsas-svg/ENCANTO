"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
const links = [{ href: "/", label: "Inicio" }, { href: "/servicios", label: "Servicios" }, { href: "/colecciones", label: "Prendas" }, { href: "/nosotros", label: "Nosotros" }, { href: "/planta", label: "Nuestro taller" }];
export default function SiteHeader() {
 const [open,setOpen] = useState(false);
 return <header className="site-header"><div className="header-inner"><Link href="/" className="brand" aria-label="Encanto Confecciones MC, inicio"><Image src="/images/logo/logo.png" alt="Encanto Confecciones MC" width={210} height={125} priority /></Link><nav className={open ? "main-nav nav-open" : "main-nav"} aria-label="Navegación principal">{links.map(l=><Link key={l.href} href={l.href} onClick={()=>setOpen(false)}>{l.label}</Link>)}<Link className="nav-contact" href="/contacto" onClick={()=>setOpen(false)}>Hablemos <ArrowUpRight size={16}/></Link></nav><button className="menu-toggle" onClick={()=>setOpen(!open)} aria-label={open?"Cerrar menú":"Abrir menú"}>{open?<X/>:<Menu/>}</button></div></header>;
}
