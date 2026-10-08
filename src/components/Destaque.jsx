function Destaque({ titulo, texto }) {
  return (
    <article className="destaque">
      <h2>{titulo}</h2>
      <p>{texto}</p>
    </article>
  );
}

export default Destaque;