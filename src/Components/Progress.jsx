function Progress(props) {
  //Extracting donations and targetAmount from props
  const { donations, targetAmount } = props;
  //Calculating the total amount raised from the donations array
  const fullAmount = donations.reduce((total, donation) => total + donation.amount, 0);
 //Rendering the progress section
  return (
    <section className="progress">
      <h2>
        Raised <span className="secondary">${fullAmount}</span> of
        <span className="secondary">${targetAmount}</span>
      </h2>
    </section>
  );
}

export default Progress;