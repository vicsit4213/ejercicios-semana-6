import HeaderClase from "./components/HeaderClase";
import ObjetivosCard from "./components/ObjetivosCard";
import ActividadItem from "./components/ActividadItem";

export default function App() {
  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "20px", fontFamily: "'Segoe UI', sans-serif" }}>
      
      {/* 1. Encabezado Animado */}
      <HeaderClase 
        tituloTema="Programación de Aplicaciones Web: Semana 6" 
        horario="Sábados 7:00 - 9:20 AM" 
      />

      {/* 2. Tarjeta de Objetivos Interactiva */}
      <ObjetivosCard 
        indicador="Desarrolla componentes React reutilizables incorporando animaciones fluidas con Framer Motion." 
        competencia="Dominar herramientas frontend modernas para el diseño de recursos educativos digitales." 
      />

      {/* 3. Lista de Actividades de la Sesión */}
      <h3 style={{ color: "#0f4c81", marginTop: "25px" }}>📋 Secuencia Didáctica de la Clase</h3>
      
      <ActividadItem titulo="1. Activación de presaberes con Trivia GIFT" tiempo="5 min" />
      <ActividadItem titulo="2. Taller Guiado: Instalación de NPM y package.json" tiempo="25 min" />
      <ActividadItem titulo="3. Laboratorio de Animaciones con Framer Motion" tiempo="25 min" />
      <ActividadItem titulo="4. Pair Programming: Integración en Proyecto Integrador" tiempo="35 min" />

    </div>
  );
}