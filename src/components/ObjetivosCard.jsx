import { motion } from "framer-motion";

export default function ObjetivosCard({ indicador, competencia }) {
    return (
        <motion.div 
            whileHover={{ scale: 1.02, translateY: -4 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            style={{ 
                background: '#ffffff', 
                borderLeft: '5px solid #e28743', 
                border: '1px solid #cbd5e1',
                padding: '18px', 
                borderRadius: '8px', 
                marginBottom: '15px', 
                cursor: 'pointer',
                boxShadow: '0 2px 5px rgba(0,0,0,0.05)'
            }}
        >
            <h3 style={{ color: '#0f4c81', margin: '0 0 6px 0', fontSize: '1.1rem' }}>🎯 Indicador de Logro</h3>
            <p style={{ margin: '0 0 10px 0', color: '#334155', fontWeight: 'bold' }}>{indicador}</p>
            <p style={{ margin: 0, color: '#64748b', fontSize: '0.9em' }}><strong>Competencia:</strong> {competencia}</p>
        </motion.div>
    );
}