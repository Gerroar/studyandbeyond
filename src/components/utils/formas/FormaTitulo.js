export default function FormaTitulo({ texto, idTitulo }) {
  return (
    <div className="forma-titulo" id={idTitulo}>
      <div className="sb-title">{texto}</div>
    </div>
  );
}
