import { motion } from "framer-motion";

export default function HeaderClase({ tituloTema, horario }) {
    return (
        <motion.header 
            initial={{ opacity: 0, y: -30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{ 
                background: 'linear-gradient(135deg, #0f4c81, #1b6ca8)', 
                color: 'white', 
                padding: '25px', 
                borderRadius: '10px', 
                textAlign: 'center',
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                marginBottom: '20px'
            }}
        >
            <h1 style={{ margin: 0, fontSize: '1.8rem' }}>{tituloTema}</h1>
            <p style={{ margin: '8px 0 0 0', opacity: 0.9 }}>⏰ Horario: {horario}</p>
        </motion.header>
    );
}