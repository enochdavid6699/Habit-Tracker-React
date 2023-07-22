import React, { useState } from 'react';
import TrackerModal from './TrackerModal';

export default function Habit({ habit, habits, setHabits }) {
    const [showModal, setShowModal] = useState(false);

    const handleModalOpen = () => {
        setShowModal(true);
    };

    const handleModalClose = () => {
        setShowModal(false);
    };

    function deleteHabit(habit) {

        alert('Habit is being Deleted');

        setHabits(habits.filter((e) => {
            return e !== habit;
        }));

        console.log('Deleted:', habit);
    }

    return (
        <>

            <div className="card" style={{ width: "18rem" }}>
                <div className="card-body">
                    <h5 className="card-title">{habit.name}</h5>
                    <a href="#" className="btn btn-primary" onClick={handleModalOpen}>
                        Tracker
                    </a>
                </div>

                <button type="button" class="btn btn-danger" onClick={() => { deleteHabit(habit) }}>Delete</button>


                {showModal && (
                    <TrackerModal habit={habit}
                        onClose={handleModalClose}
                        habits={habits}
                        setHabits={setHabits} />
                )}

            </div>


        </>
    );
}
