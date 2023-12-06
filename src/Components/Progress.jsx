export default function Progress(props) {
  return (
    <section className="progress">
      <h2>Raised
        <span className="secondary">${props.total}</span> of
        <span className="secondary">${props.target}</span>
      </h2>
    </section>
  );
}
