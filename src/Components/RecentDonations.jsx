import React from 'react';

const RecentDonations = ({ donations }) => {
  return (
    <section className="recent-donations">
      <h2>Recent Donations</h2>
      <ul>
        {donations.map((donation) => (
          <li key={donation.id}>
            <strong>{donation.name}</strong> donated ${donation.amount}
            <p>{donation.caption}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default RecentDonations;