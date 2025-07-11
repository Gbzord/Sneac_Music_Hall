import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function CadastroForm() {
  const [email, setEmail] = useState("");
  const [confEmail, setConfEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confSenha, setConfSenha] = useState("");
  const [nome, setNome] = useState("");
  const [erros, setErros] = useState({});
  const [podeEnviar, setPodeEnviar] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [funcaoSelecionada, setfuncaoSelecionada] = useState('');
  const funcoesValidas = ['administrador', 'vendedor', 'validador'];
  const funcaoValida = funcoesValidas.includes(funcaoSelecionada);
  const router = useRouter();

  useEffect(() => {
    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const emailsIguais = email === confEmail;
    const senhaValida = senha.length >= 6;
    const senhasIguais = senha === confSenha;


    setErros({
      email: emailsIguais && emailValido ? "" : "E-mails inválidos ou diferentes",
      senha: senhasIguais && senhaValida ? "" : "Senhas diferentes ou muito curtas",
    });

    setPodeEnviar(emailValido && emailsIguais && senhaValida && senhasIguais && funcaoValida);
  }, [email, confEmail, senha, confSenha ,funcaoValida]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/usuarios', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nome,
          email,
          senha,
          funcao: funcaoSelecionada,
          isAdmin
        }),
       });
      if (response.ok) {
        alert('Cadastro realizado com sucesso!');
        router.push('/');
      } else {
        alert('Erro ao cadastrar');
      }
    } catch (error) {
      alert('Erro ao conectar com o servidor');
    }
  };


  return (
    <form onSubmit={handleSubmit} noValidate>

      <div id='cadastrologo'>
        <h1>Cadastre - se</h1>
      </div>

      <div className="mb-3">
        <label>Nome completo:</label>
        <input
          type="text"
          className="form-control"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />
      </div>
      <hr></hr>
      <div className="mb-3">
        <label>Email:</label>
        <input
          type="email"
          className="form-control"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <hr></hr>
      <div className="mb-3">
        <label>Confirmar Email:</label>
        <input
          type="email"
          className="form-control"
          value={confEmail}
          onChange={(e) => setConfEmail(e.target.value)}
        />
        <span className="error-msg">{erros.email}</span>
      </div>
      <hr></hr>
      <div className="mb-3">
        <label>Senha:</label>
        <input
          type="password"
          className="form-control"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
      </div>
      <hr></hr>
      <div className="mb-3">
        <label>Confirmar Senha</label>
        <input
          type="password"
          className="form-control"
          value={confSenha}
          onChange={(e) => setConfSenha(e.target.value)}
        />
        <span className="error-msg">{erros.senha}</span>

      </div>
<br></br>

      <label htmlFor="funcao" className="form-label">Escolha a função:</label>
<br></br>
      <select name="funcao" id="funcao" className="form-select" value={funcaoSelecionada} onChange={(e) => setfuncaoSelecionada(e.target.value)}>
        <option value="administrador">Administrador</option>
        <option value="vendedor">Vendedor</option>
        <option value="validador">Validador</option>
        
      </select>

<br></br>
<br></br>

      <button type="submit" className="btn btn-success w-100" disabled={!podeEnviar}>
        Cadastrar
      </button>

      <p className="mt-3 text-center link-bottom">
        Já tem uma conta? <a href="/">Fazer login</a>
      </p>
    </form>
  );
}
