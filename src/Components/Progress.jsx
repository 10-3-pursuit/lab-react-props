// export default function Progress() {
//   return null;
// }


const Progress = ( { donations, targetAmount }) => {
  const totalDonations = donations.reduce((sum, donation) => sum + donation.amount, 0);
  return (
    <section className="progress">
    <h2>
      Raised <span className="secondary">${totalDonations}</span> of
      <span className="secondary">${targetAmount}</span>
    </h2>
  </section>
  )
};

export default Progress;