export default function RecentDonations({ donations }) {
  const amount = donations.map((donation) => (
    <li key={donation.name}>
      <span>
        {donation.name} donated ${donation.amount}
      </span>
      {donation.caption}
    </li>
  ));

  return (
    <>
      <h2>Recent Donations</h2>
      <ul>{amount}</ul>
    </>
  );
}
