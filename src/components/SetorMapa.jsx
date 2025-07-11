export default function SetorMapa({ lugares }) {
    return (
      <div className="grid grid-cols-10 gap-2">
        {lugares.map(l => (
          <button
            key={l.id}
            className={`p-2 rounded ${l.disponivel ? 'bg-green-400' : 'bg-red-400'}`}
          >
            {l.numero}
          </button>
        ))}
      </div>
    );
  }
  