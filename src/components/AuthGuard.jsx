import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function AuthGuard({ children }) {
  const router = useRouter();
  const [autenticado, setAutenticado] = useState(null);

  useEffect(() => {
    fetch('/api/verify')
      .then((res) => {
        if (res.ok) {
          setAutenticado(true);
        } else {
          router.push('/login');
        }
      });
  }, []);

  if (autenticado === null) return <p>Carregando...</p>;

  return children;
}
