import Link from 'next/link';

export default function AdminLayout({ children }) {
  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      {/* MENU LATERAL */}
      <aside style={{ width: '220px', background: '#222', color: '#fff', padding: '1rem' }}>
        <h2>🎟️ Ingressos ADM</h2>
        <nav>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li><Link href="/admin">Dashboard</Link></li>
            <li><Link href="/admin/eventos">Eventos</Link></li>
            <li><Link href="/admin/reservas">Reservas</Link></li>
            <li><Link href="/admin/usuarios">Usuários</Link></li>
          </ul>
        </nav>
      </aside>

      {/* CONTEÚDO PRINCIPAL */}
      <main style={{ flex: 1, padding: '2rem', backgroundColor: '#f5f5f5' }}>
        {children}
      </main>
    </div>
  );
}
