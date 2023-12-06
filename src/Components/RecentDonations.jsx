export default function RecentDonations(props) {
  return (
    <section>
  <h2>Recent Donations</h2>
  <ul>
    {props.donations.map((donor) => <li><span> {donor.name} donated {donor.amount} </span>{donor.caption}</li>
 )}
  </ul>
</section>
  )
}
