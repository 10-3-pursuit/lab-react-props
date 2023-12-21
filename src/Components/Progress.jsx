import React from 'react';

const Progress = ({ donations, targetAmount }) => {
  
  const totalDonations = donations.reduce((total, donation) => total + donation.amount, 0);


  const progressPercentage = (totalDonations / targetAmount) * 100;

  return (
    <section className="progress">
      <h2>
        Raised <span className="secondary">${totalDonations.toFixed(2)}</span> of
        <span className="secondary">${targetAmount}</span>
      </h2>
      <div className="progress-bar" style={{ width: `${progressPercentage}%` }}></div>
    </section>
  );
};

export default Progress;