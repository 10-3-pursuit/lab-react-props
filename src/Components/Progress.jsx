function Progress(props) {
  const { donations, targetAmount } = props;

  const fullAmount = donations.reduce((total, donation) => total + donation.amount, 0);

  return (
    <section className="progress">
      <h2>
        Raised <span className="secondary">${fullAmount.toLocaleString()}</span> of
        <span className="secondary">${targetAmount.toLocaleString()}</span>
      </h2>
    </section>
  );
}

export default Progress;