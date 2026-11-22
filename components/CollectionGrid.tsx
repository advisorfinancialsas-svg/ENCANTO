"use client";
import Image from "next/image";
import { useMemo, useState } from "react";
import { collectionItems } from "@/lib/collection-data";
const filters = ["Todos", "Blusas", "Conjuntos", "Enterizos", "Pantalones", "Shorts", "Faldas", "Vestidos"];
export default function CollectionGrid() {
  const [active, setActive] = useState("Todos");
  const visible = useMemo(() => active === "Todos" ? collectionItems : collectionItems.filter((item) => item.category === active), [active]);
  return <>
    <div className="filter-row" aria-label="Filtrar categorías">{filters.map((filter) => <button type="button" key={filter} className={active === filter ? "filter active" : "filter"} aria-pressed={active === filter} onClick={() => setActive(filter)}>{filter}</button>)}</div>
    <div className="collection-grid">{visible.map((item, index) => <article className="collection-card" key={item.src}><div className="collection-image"><Image src={item.src} alt={`Referencia de ${item.name.toLowerCase()} de Encanto Confecciones MC`} fill sizes="(max-width: 700px) 90vw, (max-width: 1100px) 45vw, 30vw" style={{ objectFit: "cover" }} loading={index < 6 ? "eager" : "lazy"}/><span className="image-index">{String(index + 1).padStart(2, "0")}</span></div><div className="collection-caption"><div><h3>{item.name}</h3><p>{item.category}</p></div><span className="round-arrow" aria-hidden="true">↗</span></div></article>)}</div>
    <p className="gallery-count">Mostrando {visible.length} referencias{active !== "Todos" ? ` en ${active.toLowerCase()}` : ""}.</p>
  </>;
}
