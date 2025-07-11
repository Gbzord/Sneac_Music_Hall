import { useState, useEffect } from "react";
import { useRouter } from "next/router";


export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erros, setErros] = useState({});
  const [podeEnviar, setPodeEnviar] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const senhaValida = senha.length > 0;

    setErros({
      email: emailValido ? "" : "E-mail inválido",
      senha: senhaValida ? "" : "Senha obrigatória",
    });

    setPodeEnviar(emailValido && senhaValida);
  }, [email, senha]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, senha }),
    });

    if (res.ok) {
      const data = await res.json();

     switch (data.funcao) {
      
      case 'adm':
        router.push('/admin/eventos');
        break;
      case 'vendedor':
        router.push('/vendedor/pedidos');
        break;
      case 'validador':
        router.push('/validador/validacoes');
        break;
      default:
        router.push('/');
    }
  } else {
    alert('Login inválido');
  }
};
  
  return (
    <form onSubmit={handleSubmit} noValidate>
      <h1 id ='login'>Faça seu login</h1>

      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          className="form-control"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {<span className="error-msg">{erros.email}</span>}
        

      </div>

      <div className="mb-3">
        <label htmlFor="senha">Senha:</label>
        <input
          type="password"
          className="form-control"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
        <span className="error-msg">{erros.senha}</span>
      </div>

      <button type="submit" className="btn btn-primary w-100" disabled={!podeEnviar}>
        Entrar
      </button>

      <p className="mt-3 text-center link-bottom">
        Ainda não tem conta? <a href="/cadastro">Cadastre-se</a>
      </p>
    </form>
  );
}
