export default function RecentDonations({ donations }) {
  const amount = donations.map((donation) => (
    <li key={donation.name}>
      <span>
        {donation.name} donated ${donation.amount}
      </span>
      {donation.caption}
    </li>
  ));

  // const amount = donations.map((donation) => (
  //   <>
  //     <li style={{ listStyle: "none", color: "green" }} key={donation.name}>
  //       {donation.name} donated ${donation.amount}
  //     </li>
  //     <p>{donation.caption}</p>
  //   </>
  // ));
  // // console.log(amount);
  return (
    <>
      <h2>Recent Donations</h2>
      <ul>{amount}</ul>
    </>
  );
}
