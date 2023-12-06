export default function DonationForm(props) {
  return (
    <section className="donation">
      <h3>You could be donation <span className="secondary">#{props.number}!</span></h3>
    </section>
  );
}
