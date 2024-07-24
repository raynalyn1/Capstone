import React, { useState, useEffect } from 'react';
import bullseye from '../../assets/Images/bulls-eye.png';
import Avatar from '@mui/material/Avatar';
import Calendar from '../../components/Calendar';
import Button from '../../components/Buttons';
import axios from 'axios';
import Modal from '../../components/Modal';
import DateTimeDisplay from '../../components/DateTimeDisplay';
import { IconButton } from '@mui/material';
import { Visibility, Delete } from '@mui/icons-material';

const Dashboard = () => {
    const [sortOrder, setSortOrder] = useState('asc');
    const [sortedStudents, setSortedStudents] = useState([]);
    const [events, setEvents] = useState([]);
    const [newEvent, setNewEvent] = useState({ title: '', dateTime: '' });
    const [isEventModalOpen, setIsEventModalOpen] = useState(false); // Renamed state
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [isViewModalOpen, setIsViewModalOpen] = useState(false);
    const [students, setStudents] = useState([]);
    const [selectedStudent, setSelectedStudent] = useState(null);
    const [isStudentModalOpen, setIsStudentModalOpen] = useState(false); // New state for student modal

    useEffect(() => {
        fetchStudents();
        fetchEvents();
    }, []);

    const fetchStudents = async () => {
        try {
            const response = await axios.get('http://localhost:5000/students');
            setStudents(response.data);
            setSortedStudents(response.data);
        } catch (error) {
            console.error('Error fetching students', error);
        }
    };

    const handleSort = (order) => {
        const sorted = [...sortedStudents].sort((a, b) => {
            if (order === 'asc') {
                return a.name.localeCompare(b.name);
            } else {
                return b.name.localeCompare(a.name);
            }
        });
        setSortedStudents(sorted);
        setSortOrder(order);
    };

    const fetchEvents = async () => {
        try {
            const response = await axios.get('http://localhost:5000/events');
            setEvents(response.data);
        } catch (error) {
            console.error('Error fetching events', error);
        }
    };

    const handleAddEvent = async () => {
        try {
            await axios.post('http://localhost:5000/events', newEvent);
            fetchEvents();
            setNewEvent({ title: '', dateTime: '' });
            setIsEventModalOpen(false);
        } catch (error) {
            console.error('Error adding event', error);
        }
    };

    const handleDeleteEvent = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/events/${id}`);
            fetchEvents();
        } catch (error) {
            console.error('Error deleting event', error);
        }
    };

    const handleViewEvent = (event) => {
        setSelectedEvent(event);
        setIsViewModalOpen(true);
    };

    const handleDeleteStudent = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/students/${id}`);
            fetchStudents();
        } catch (error) {
            console.error('Error deleting student', error);
        }
    };

    const handleViewStudent = (student) => {
        setSelectedStudent(student);
        setIsStudentModalOpen(true); // Open student modal
    };

    return (
        <div>
            <div className="bg-white w-full h-[9vh] flex justify-between items-center rounded-lg px-9 shadow-lg shadow-slate-400">
                <div className="text-2xl">Dashboard (Left)</div>
                <div className="text-2xl">Dashboard (Right)</div>
            </div>
            <h1 className='text-2xl mt-5 font-semibold'>Admin Dashboard</h1>
            <div>
                <div className='w-full h-[15dvh] flex gap-5 rounded-lg mt-5'>
                    <div className='bg-white w-full h-full rounded-lg text-center p-5 flex flex-col items-center justify-center gap-3 shadow-lg shadow-slate-400'>
                        <h1 className='text-2xl font-semibold'>Welcome to Early Learners Hub</h1>
                        <Avatar alt="pic" src={bullseye} className="w-[52px] h-[52px]" />
                        <div className='text-2xl font-semibold bg-slate-400 w-full h-[7dvh] rounded-lg'>100</div>
                    </div>
                    <div className='bg-white w-full h-full rounded-lg p-5 shadow-lg shadow-slate-400'>
                        <div className="bg-slate-500 w-full h-[5dvh] rounded-lg flex justify-between items-center">
                            <Avatar alt="pic" src={bullseye} className="w-[52px] h-[52px]" />
                            <h1>Total Student</h1>
                        </div>
                    </div>
                    <div className='bg-white w-full h-full rounded-lg p-5 shadow-lg shadow-slate-400'></div>
                </div>
            </div>
            <div className="w-full h-[55dvh] flex p-4 gap-5">
                <div className="bg-white w-full h-full rounded-lg shadow-lg shadow-slate-400 p-5">
                    <h1 className='text-2xl font-semibold'>Student List</h1>
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200 mt-4">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Age</th>
                                    <th className="px-6 py-3"></th>
            </tr>
        </thead>
    </table>
    <div className="overflow-y-auto max-h-[400px]"> {/* Adjust the max-height as needed */}
        <table className="min-w-full divide-y divide-gray-200">
            <tbody className="bg-white divide-y divide-gray-200">
                {sortedStudents.map((student) => (
                    <tr key={student.id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{student.name}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{student.age}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <IconButton onClick={() => handleViewStudent(student)}><Visibility /></IconButton>
                            <IconButton onClick={() => handleDeleteStudent(student.id)}><Delete /></IconButton>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
</div>

                </div>
                <div className="bg-white w-[50%] h-full rounded-lg p-4 shadow-lg shadow-slate-400">
                    <Calendar />
                    <div className='w-full h-[10dvh] bg-white rounded-lg shadow-lg shadow-slate-400 mt-5 overflow-y-auto'>
                        <h2 className='text-xl ml-5 font-semibold text-gray-500'>Event List</h2>
                        {events.length > 0 ? (
                            <ul className='p-2'>
                                {events.map((event) => (
                                    <li key={event.id} className='border-b pb-4 mb-4 flex justify-between items-center'>
                                        <div>
                                            <h3 className='text-lg font-medium'>{event.title}</h3>
                                            <p>{new Date(event.dateTime).toLocaleString()}</p>
                                        </div>
                                        <div className='flex gap-2 ml-5'>
                                            <Button label="View" styleType="primary7" onClick={() => handleViewEvent(event)} />
                                            <Button label="Delete" styleType="primary6" onClick={() => handleDeleteEvent(event.id)} />
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p className='text-center'>No events added yet.</p>
                        )}
                    </div>
                </div>
            </div>
            <div className='w-full h-[10dvh] bg-white rounded-lg shadow-lg shadow-slate-400 flex items-center justify-between px-5 py-3 gap-9'>
                <div className="w-full h-full flex-col">
                    <p className='text-xl font-semibold text-gray-500'>Title</p>
                    <h1 className='text-2xl ml-5 font-semibold'>Title of the News</h1>
                </div>
                <div className="w-full h-full flex flex-col">
                    <p className='text-xl font-semibold text-gray-500'>Date & Time</p>
                    <h1 className='text-2xl ml-5 font-semibold'><DateTimeDisplay /></h1>
                </div>
                <div className='w-full h-full bg-white rounded-lg shadow-lg shadow-slate-400 flex items-center justify-center'>
                    <Button label="Add a New Event" styleType="primary6" onClick={() => setIsEventModalOpen(true)} /> {/* Use setIsEventModalOpen */}
                </div>
            </div>

            <Modal isOpen={isEventModalOpen} onClose={() => setIsEventModalOpen(false)}> {/* Use isEventModalOpen */}
                <h2 className='text-xl font-semibold mb-4'>Add a New Event</h2>
                <input
                    type='text'
                    placeholder='Event Title'
                    value={newEvent.title}
                    onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
                    className='border rounded p-2 mb-2 w-full'
                />
                <input
                    type='datetime-local'
                    placeholder='Date & Time'
                    value={newEvent.dateTime}
                    onChange={(e) => setNewEvent({ ...newEvent, dateTime: e.target.value })}
                    className='border rounded p-2 mb-2 w-full'
                />
                <Button label="Add Event" styleType="primary6" onClick={handleAddEvent} />
            </Modal>

            <Modal isOpen={isViewModalOpen} onClose={() => setIsViewModalOpen(false)}>
                {selectedEvent && (
                    <>
                        <h2 className='text-xl font-semibold mb-4'>{selectedEvent.title}</h2>
                        <p className='mb-4'>{new Date(selectedEvent.dateTime).toLocaleString()}</p>
                        <p>{selectedEvent.description}</p> {/* Make sure your event data includes description */}
                    </>
                )}
            </Modal>

            <Modal isOpen={isStudentModalOpen} onClose={() => setIsStudentModalOpen(false)}> {/* Use isStudentModalOpen */}
                {selectedStudent && (
                    <>
                        <h2 className='text-xl font-semibold mb-4'>Student Details</h2>
                        <p className='mb-4'>Name: {selectedStudent.name}</p>
                        <p>Age: {selectedStudent.age}</p>
                    </>
                )}
            </Modal>
        </div>
    );
};

export default Dashboard;
