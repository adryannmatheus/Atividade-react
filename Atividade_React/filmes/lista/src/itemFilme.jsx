function ItemFilme({ titulo, ano }) {
  return (
    <article>
      <strong>{titulo}</strong>
      <span> - Ano: {ano}</span>
    </article>
  );
}

export default ItemFilme;