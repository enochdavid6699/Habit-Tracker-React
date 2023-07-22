import React, { useState } from 'react'
import Habit from './Habit'
import AddHabitForm from './AddHabitForm';

export default function Body() {
    const [habits, setHabits] = useState([])

    return (
        <>
            <AddHabitForm habits={habits} setHabits={setHabits} />
            {
                habits.map((habit, index) => <Habit key={index}
                    habit={habit}
                    habits={habits}
                    setHabits={setHabits} />)
            }
        </>
    )
}
