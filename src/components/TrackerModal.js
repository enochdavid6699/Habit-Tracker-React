import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import DateGroup from './DateGroup';

export default function TrackerModal({ habit, onClose, habits, setHabits }) {
    const formRef = React.createRef();
    return (
        <Modal show={true} onHide={onClose}>
            <form>
                <Modal.Header closeButton>
                    <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {habit.history.map((obj, index) => (
                        <DateGroup key={index}
                            habit={habit}
                            date={obj.date}
                            habits={habits}
                            setHabits={setHabits} />
                    ))}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={onClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </form>
        </Modal>
    );
}
