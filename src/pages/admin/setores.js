import React, { useState, useEffect } from 'react';
import AdminLayout from '../../components/AdminLayout';
import SetorMapa from '../../components/SetorMapa';

export default function SetoresPage() {
  const [lugares, setLugares] = useState([]);
  const setorId = 1; // Exemplo fixo, depois podemos fazer dinâmico via query param

  useEffect(() => {
    fetch(`/api/setores?setorId=${setorId}`)
      .then(res => res.json())
      .then(setLugares);
  }, [setorId]);

  return (
    <AdminLayout>
      <h1>Mapa de Lugares - Setor {setorId}</h1>
      <SetorMapa lugares={lugares} />
    </AdminLayout>
  );
}
