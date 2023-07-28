import { useState } from "react";

const TravelDestinationForm = () => {
  const [destination, setDestination] = useState("");
  const [days, setDays] = useState("");

  const onDestinationChangeHandler = (e) => setDestination(e.target.value);
  const onDaysChangeHandler = (e) => setDays(e.target.value);

  return (
    <div>
      <form>
        <div>
          <label htmlFor="destination">Travel Destination:</label>
          <input
            type="text"
            id="destination"
            name="destination"
            placeholder="Where to?"
            onChange={onDestinationChangeHandler}
          />
        </div>
        <div>
          <label htmlFor="days">Days:</label>
          <input
            type="number"
            id="days"
            name="days"
            onChange={onDaysChangeHandler}
          />
        </div>
      </form>
    </div>
  );
};

export default TravelDestinationForm;
