import AdminLayout from '../../components/AdminLayout';
import TabelaPadrao from '../../components/TabelaPadrao';

export default function EventosPage() {
  const eventos = [
    { id: 1, nome: 'Show Rock RJ', data: '2025-08-10', capacidade: 200 },
    { id: 2, nome: 'Teatro Popular', data: '2025-09-02', capacidade: 150 },
  ];

  return (
    <AdminLayout>
      <h1>Eventos Cadastrados</h1>
      <TabelaPadrao
        colunas={['ID', 'Nome', 'Data', 'Capacidade']}
        dados={eventos.map(e => [e.id, e.nome, e.data, e.capacidade])}
      />
    </AdminLayout>
  );
}
