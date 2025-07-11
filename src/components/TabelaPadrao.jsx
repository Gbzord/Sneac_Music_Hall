export default function TabelaPadrao({ colunas, dados }) {
    return (
      <table style={{ width: '100%', background: '#fff', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            {colunas.map((coluna, i) => (
              <th key={i} style={{ padding: '0.5rem', borderBottom: '2px solid #ccc' }}>{coluna}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {dados.map((linha, i) => (
            <tr key={i}>
              {linha.map((celula, j) => (
                <td key={j} style={{ padding: '0.5rem', borderBottom: '1px solid #eee' }}>{celula}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
  