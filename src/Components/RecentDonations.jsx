// export default function RecentDonations() {
//   return null;
// }


const RecentDonations = (props) => {
  const { donations } = props;
  return (
    <section>
      <h2>Recent Donations</h2>
      <ul>
        {donations.map((donation) => (
          // key helps REACT understand what id 
          <li key={donation.id}>
            <span>{`${donation.name} donated $${donation.amount}`}</span>
            <p>{donation.caption}</p>
          </li>
          ))}
      </ul>
    </section>
  )
}

export default RecentDonations;