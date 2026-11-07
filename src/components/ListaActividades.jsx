import { useState, useEffect } from 'react';

export default function ListaActividades() {
  // Estados personalizados para la gestión de datos y carga
  const [itemsActividades, setItemsActividades] = useState([]);
  const [estaCargando, setEstaCargando] = useState(true);
  const [mensajeError, setMensajeError] = useState(null);

  // Configuración del endpoint y credenciales de NocoDB
  const ENDPOINT_NOCODB = 'https://app.nocodb.com/api/v3/data/p56kfv8ql37hxfw/mehifkeoxni9osv/records?pageSize=25';
  const TOKEN_ACCESO = 'nc_pat_zAtCCIfCiNm4iOgbmkm2mCdDfcVxjPOK0rs7yXlr';

  useEffect(() => {
    const consultarDatosNocoDB = async () => {
      try {
        const respuesta = await fetch(ENDPOINT_NOCODB, {
          method: 'GET',
          headers: {
            'xc-token': TOKEN_ACCESO,
            'Content-Type': 'application/json'
          }
        });

        if (!respuesta.ok) {
          throw new Error('Error al conectar con el servidor');
        }

        const resultado = await respuesta.json();
        const listaRegistros = resultado.records || resultado.list || [];
        
        setItemsActividades(listaRegistros);
        setEstaCargando(false);
      } catch (error) {
        console.error('Fallo en la petición:', error);
        setMensajeError('No se pudo cargar la información desde la nube.');
        setEstaCargando(false);
      }
    };

    consultarDatosNocoDB();
  }, []);

  if (estaCargando) {
    return <div style={{ textAlign: 'center', padding: '20px', color: '#2563eb' }}>Cargando registros escolares...</div>;
  }

  if (mensajeError) {
    return <div style={{ color: '#dc2626', padding: '20px', fontWeight: 'bold' }}>{mensajeError}</div>;
  }

  return (
    <div style={{ padding: '24px', fontFamily: 'sans-serif', backgroundColor: '#fdfbf7', borderRadius: '12px', border: '2px solid #e2e8f0' }}>
      <h2 style={{ color: '#1e3a8a', borderBottom: '2px solid #3b82f6', paddingBottom: '8px' }}>
        📚 Panel de Actividades Académicas
      </h2>
      
      {itemsActividades.length === 0 ? (
        <p style={{ fontStyle: 'italic', color: '#64748b' }}>No hay registros disponibles en este momento.</p>
      ) : (
        <div style={{ display: 'grid', gap: '12px', marginTop: '16px' }}>
          {itemsActividades.map((registro, idx) => {
            // Extracción segura de los campos desde 'fields'
            const datosCampos = registro.fields || registro;

            const nombreTitulo = datosCampos.Titulo || datosCampos.titulo || datosCampos.Title || datosCampos.title || 'Actividad sin nombre';
            const tiempoDuracion = datosCampos.Duracion || datosCampos.duracion || datosCampos.Duration || datosCampos.duration || 0;
            const tipoCategoria = datosCampos.Categoria || datosCampos.categoria || datosCampos.Category || datosCampos.category || 'General';
            const estadoCompleto = datosCampos.Completo !== undefined ? datosCampos.Completo : (datosCampos.completo || false);

            return (
              <div 
                key={registro.id || idx} 
                style={{ 
                  background: '#ffffff', 
                  padding: '14px 18px', 
                  borderRadius: '8px', 
                  boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  borderLeft: '4px solid #3b82f6'
                }}
              >
                <div>
                  <h4 style={{ margin: '0 0 4px 0', color: '#0f172a' }}>{nombreTitulo}</h4>
                  <span style={{ fontSize: '13px', color: '#475569' }}>
                    Duración: <strong>{tiempoDuracion} min</strong> | Categoría: <span style={{ color: '#2563eb' }}>{tipoCategoria}</span>
                  </span>
                </div>
                <div style={{ fontSize: '16px', fontWeight: 'bold' }}>
                  {estadoCompleto ? '✅ Completado' : '⏳ Pendiente'}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}