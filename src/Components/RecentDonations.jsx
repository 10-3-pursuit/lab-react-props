// export default function RecentDonations() {
//   return null;
// }

const RecentDonations = (props) => {
  return (
    <div>
      <section>
        <h2>Recent Donations</h2>
        <ul>
          {props.donations.map((donation) => (
            <li key={donation.name}>
              <span>{donation.name} donated ${donation.amount}</span>
              {donation.caption}</li>
          ))}
        </ul>
      </section>
    </div>
  )
}

export default RecentDonations