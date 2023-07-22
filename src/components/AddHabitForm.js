import React, { useState } from 'react';

function AddHabitForm({ habits, setHabits }) {
    const [habitName, setHabitName] = useState('');

    const dateArray = Array.from({ length: 7 }, (_, i) => ({
        date: new Date(Date.now() - i * 24 * 60 * 60 * 1000).toISOString().slice(0, 10),
        status: 'None',
    }));

    const makeHabitObject = (name) => {
        return {
            id: habits.length,
            name: name,
            history: dateArray
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (habitName !== "") {
            if (!habits.find((habit) => habit.name === habitName)) {
                const habit = makeHabitObject(habitName);
                setHabits([...habits, habit]);
                setHabitName('');
            } else {
                alert(`"${habitName}" already exists. Please choose a different name.`);
            }
        }
    };


    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">
                    Add a Habit
                </label>
                <input
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Example running..."
                    value={habitName}
                    onChange={(e) => setHabitName(e.target.value)}
                />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
}

export default AddHabitForm;
