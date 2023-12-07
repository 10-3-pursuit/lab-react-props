// export default function RecentDonations() {
//   return null;
// }


const RecentDonations = (props) => {
  const { donations } = props; // props is a standard way in React to pass data to components.
  return (
    <section>
      <h2>Recent Donations</h2>
      <ul>
        {donations.map((donation) => (
          // key prop is crucial in React for helping it identify which items have changed, are added, or are removed. This is particularly important for performance optimization when rendering lists
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

/* ------ NOTES ------
Why key prop is Important:

Without keys, React would have to re-render the entire list when any part of the list changes, which can lead to poor performance, especially for large lists.
Keys should be unique among siblings but don't need to be globally unique in the component.
Typically, you should use IDs from your data as keys if available. If you don’t have stable IDs for rendered items, you might use the item index as a last resort, but this can negatively affect performance and cause issues with item state.
*/