import React, { useContext } from 'react';
import "./Student.css"
import StoreData from './Store';
import { Link, useNavigate } from 'react-router-dom';

const Student = () => {
    const ContextData = useContext(StoreData);
    const Navigation = useNavigate()

    return (
        <div className="student-container">
            <center>
                <h2>Student Data</h2>
                <form>
                    <button className='btn' onClick={() => Navigation('/addnewStudent')}>Add new student</button>
                    <table border={1} style={{ width: '80%', height: '300px', textAlign: "center" }}>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Age</th>
                                <th>Course</th>
                                <th>Batch</th>
                                <th>Change</th>
                            </tr>
                        </thead>
                        <tbody>
                            {ContextData.studentName.map((student, index) => (
                                <tr key={index}>
                                    <td>{student.Name}</td>
                                    <td>{student.Age}</td>
                                    <td>{student.Course}</td>
                                    <td>{student.Batch}</td>
                                    <td><Link to="/editstudent" state={{ data: index }}> Edit</Link></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </form>
            </center>
        </div>
    );
};

export default Student;
