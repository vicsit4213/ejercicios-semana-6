import { useState } from "react";
import { motion } from "framer-motion";

export default function ActividadItem({ titulo, tiempo }) {
    const [completada, setCompletada] = useState(false);

    return (
        <motion.div 
            layout
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            style={{ 
                background: completada ? '#e8f5e9' : '#f8fafc', 
                border: '1px solid #cbd5e1', 
                padding: '12px 18px', 
                borderRadius: '6px', 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                marginBottom: '10px'
            }}
        >
            <span style={{ 
                textDecoration: completada ? 'line-through' : 'none',
                color: completada ? '#2e7d32' : '#334155',
                fontWeight: completada ? 'normal' : '600'
            }}>
                {titulo} ({tiempo})
            </span>

            <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setCompletada(!completada)}
                style={{
                    background: completada ? '#2e7d32' : '#0f4c81',
                    color: 'white',
                    border: 'none',
                    padding: '6px 12px',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    fontSize: '0.85em'
                }}
            >
                {completada ? "✓ Listo" : "Marcar avance"}
            </motion.button>
        </motion.div>
    );
}