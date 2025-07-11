import AdminLayout from '../../components/AdminLayout';
import PainelResumo from '../../components/PainelResumo';

export default function AdminDashboard() {
  return (
    <AdminLayout>
      <h1>Dashboard do Administrador</h1>
      <PainelResumo />
    </AdminLayout>
  );
}
