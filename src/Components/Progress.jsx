export default function Progress(props) {
  const amount = props.donations.reduce((total, donation) => total + donation.amount, 0)
  return (
    <section className="progress">
  <h2>
    Raised <span className="secondary">${amount}</span> of
    <span className="secondary"> ${props.target}</span>
  </h2>
</section>
  )
}
