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

    return (
        <>
            <div className="card" style={{ width: "18rem" }}>
                <div className="card-body">
                    <h5 className="card-title">{habit.name}</h5>
                    <a href="#" className="btn btn-primary" onClick={handleModalOpen}>
                        Tracker
                    </a>
                </div>
            </div>

            {showModal && (
                <TrackerModal habit={habit}
                    onClose={handleModalClose}
                    habits={habits}
                    setHabits={setHabits} />
            )}
        </>
    );
}
