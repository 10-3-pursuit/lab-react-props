export default function Progress(props) {
  const donationSum = props.donations.reduce((acc,donation)=> acc + donation.amount,0)
  return (
    <section className="progress">
  <h2>
    Raised <span className="secondary">${donationSum}</span> of
    <span className="secondary">${props.target}</span>
  </h2>
</section>
  )
}
