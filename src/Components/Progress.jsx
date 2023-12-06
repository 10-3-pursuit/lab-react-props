export default function Progress(props) {
  return (
    <section className="progress">
      <h2>
        Raised <span className="secondary">{props.donations.reduce((acc, curr) => {
          acc += curr.amount
          return acc
        },0)}</span> of
        <span className="secondary"> {props.targetAmount} </span>
      </h2>
    </section>
  );
}
