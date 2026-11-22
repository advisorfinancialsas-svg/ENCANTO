import type { MetadataRoute } from "next";
export default function manifest(): MetadataRoute.Manifest {
  return { name: "Encanto Confecciones MC", short_name: "Encanto MC", description: "Maquila y confección para marcas en Bogotá", start_url: "/", display: "standalone", background_color: "#f7f3ee", theme_color: "#d91b5c" };
}
