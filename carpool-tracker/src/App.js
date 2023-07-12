import React, { useState } from 'react';
import Calendar from './Calendar';

function App() {
  const [expenses, setExpenses] = useState(0);
  const [carpoolDays, setCarpoolDays] = useState([]);

  // Function to handle marking the carpooling status
  const markCarpoolStatus = (day, status) => {
    // Update the carpool status for the selected day
    const updatedCarpoolDays = carpoolDays.map((carpoolDay) => {
      if (carpoolDay.day === day) {
        return { day, status };
      }
      return carpoolDay;
    });

    setCarpoolDays(updatedCarpoolDays);
  };

  // Function to update the total expenses based on carpooling status
  const updateExpenses = () => {
    let totalExpenses = 0;

    carpoolDays.forEach((carpoolDay) => {
      if (carpoolDay.status === 'going') {
        // Add the expense amount for the selected day
        totalExpenses += 300; // Adjust the expense amount as per your requirement
      }
    });

    setExpenses(totalExpenses);
  };

  // Function to clear the expenses (amount owed by your friend)
  const clearExpenses = () => {
    console.log("check")
    setExpenses(0);
  };

  return (
    <div>
      <h1>Carpool Tracker</h1>
      <Calendar carpoolDays={carpoolDays} markCarpoolStatus={markCarpoolStatus} />
      <div>
        <p>Total Expenses: {expenses}</p>
        <button onClick={updateExpenses}>Update Expenses</button>
        <button onClick={clearExpenses}>Clear Expenses</button>
      </div>
    </div>
  );
}

export default App;
