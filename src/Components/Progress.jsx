export default function Progress({donations, targetAmount}) {
  
  const totalDonations = donations.reduce((total, donation) => total + donation.amount, 0);

  // Calculate the percentage of the target amount reached
  const percentage = (totalDonations / targetAmount) * 100;
   

   return (
    <div className="progress-bar">
    <h2>Progress Bar</h2>
    <div style={{ width: '100%', background: '#e0e0e0', height: '20px' }}>
      <div style={{ width: `${percentage}%`, background: '#4caf50', height: '100%' }}></div>
    </div>
    <p>
      ${totalDonations} raised out of ${targetAmount}
    </p>
  </div>
  );
}



