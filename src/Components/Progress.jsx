function Progress(props) {
  const totalAmount = props.donations.reduce((accumulator, donation) => accumulator + donation.amount, 0);
  return(
    <section className="progress">
      <h2>
        Raised <span className="secondary">{`$${totalAmount}`}</span> of <span className="secondary">{`$${props.targetAmount}`}</span>
      </h2>
    </section>
  )
}

export default Progress;
