export default function Progress({ donations, targetAmount }) {
  const sum = donations.reduce((acc, curr) => acc + curr.amount, 0);
  return (
    <section className="progress">
      <h2>
        Raised <span className="secondary">${sum}</span> of
        <span className="secondary">${targetAmount}</span>
      </h2>
    </section>
  );
}
