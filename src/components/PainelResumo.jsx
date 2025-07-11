import { useEffect, useState } from 'react';

export default function PainelResumo() {
  const [dados, setDados] = useState({
    totalEventos: 0,
    totalReservas: 0,
    totalUsuarios: 0,
    totalCadeiras: 0
  });

  useEffect(() => {
    // Simulação com dados fictícios - depois você conecta com API
    setDados({
      totalEventos: 5,
      totalReservas: 212,
      totalUsuarios: 158,
      totalCadeiras: 300
    });
  }, []);

  return (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      {Object.entries(dados).map(([titulo, valor], i) => (
        <div key={i} style={{
          background: '#fff',
          padding: '1rem',
          borderRadius: '8px',
          minWidth: '180px',
          boxShadow: '0 0 10px rgba(0,0,0,0.1)'
        }}>
          <h4>{titulo.replace('total', '')}</h4>
          <strong style={{ fontSize: '1.5rem' }}>{valor}</strong>
        </div>
      ))}
    </div>
  );
}
