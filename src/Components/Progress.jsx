export default function Progress({donationAmt}) {
 return (
  <section className="progress">
  <h2>
    Raised <span className="secondary">${donationAmt}</span> of
    <span className="secondary"> $1000</span>
  </h2>
</section>
 )
}
