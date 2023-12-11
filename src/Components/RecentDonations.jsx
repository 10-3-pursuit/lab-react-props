export default function RecentDonations({donations}) {
  const donatedAmount = donations.map((gift) => (
    <>
    <li style={{listStyle: "none"}}>
      {gift.name} donated {gift.amount};
    </li>
    <p>{gift.caption}</p>
    </>
  ))
  return 
  <div>
    <h2>Recent Donations</h2>
    {donatedAmount}
  </div>
};
