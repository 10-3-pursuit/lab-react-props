export default function DonationForm() {
  return (
    <div>
      <form>
        <div>
          <label htmlFor='name'>Enter Name:</label>
          <input type='text' id='name' name='name' />
        </div>

        <div>
          <label htmlFor='caption'>Enter Caption:</label>
          <input type='text' id='caption' name='caption' />
        </div>

        <div>
          <label htmlFor='number'>Enter Amount:</label>
          <input type='number' id='number' name='number' />
        </div>

        <button type='submit'>Submit Donation</button>
      </form>
    </div>
  );
}
