export default function Progress(props) {
  const { donations, targetAmount } = props;


  const raisedAmount = donations.reduce((total, donation) => total + donation.amount,0);

  return (
    <section className="progress">
      <h2>
        Raised <span className="secondary">${raisedAmount}</span> of
        <span className="secondary">${targetAmount}</span>
      </h2>
    </section>
  );
}
