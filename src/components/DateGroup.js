import React from 'react';

export default function DateGroup({ date, habit, habits, setHabits }) {
    // Find the corresponding status for the given date
    const correspondingStatus = habit.history.find((entry) => entry.date === date)?.status || 'None';

    // Event handler for select value changes
    const handleStatusChange = (event) => {
        const selectedStatus = event.target.value;
        // Find the index of the history entry with the current date
        const historyIndex = habit.history.findIndex((entry) => entry.date === date);
        // Create a copy of the habits state to avoid mutating the original state
        const updatedHabits = [...habits];
        if (historyIndex !== -1) {
            // If the history entry exists, update the status
            updatedHabits[habits.indexOf(habit)].history[historyIndex].status = selectedStatus;
        } else {
            // If the history entry does not exist, create a new one
            updatedHabits[habits.indexOf(habit)].history.push({ date, status: selectedStatus });
        }
        // Update the habits state with the modified data
        setHabits(updatedHabits);
    };

    return (
        <>
            <div>{date}</div>
            <select
                name={`habitStatus-${date}`}
                className="form-select"
                aria-label="Default select example"
                value={correspondingStatus}
                onChange={handleStatusChange}
            >
                <option value="Done">Done</option>
                <option value="Not Done">Not Done</option>
                <option value="None">None</option>
            </select>
        </>
    );
}
