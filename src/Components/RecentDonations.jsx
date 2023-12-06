export default function RecentDonations(props) {
  return (
    <section>
      <h2>Recent Donations</h2>
      <ul>
        {props.donations.map(d => {
          return <li key={d.name}><span>{d.name} donated ${d.amount}</span>{d.caption}</li>
        })}
      </ul>
    </section>
  )
}
