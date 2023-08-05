import React, { useContext } from 'react'
import "./AddNewStudent.css"
import StoreData from './Store'
import { useNavigate } from 'react-router-dom';

const AddNewStudent = () => {
    const ContextData = useContext(StoreData)
    console.log(ContextData);
    const Navigate = useNavigate();

    const newStudent = {
        Name: "",
        Age: "",
        Course: "",
        Batch: ""
    }

    const handleChnage = (e) => {
        newStudent[e.target.name] = e.target.value;
    }

    const handleClick = () => {
        ContextData.studentName.push(newStudent);
        Navigate("/student")
    }

    const handleCancel = () => {
        Navigate("/student")
    }

    return (
        <div>
            <h1>New student</h1>

            <div className='addNewstudent-field'>

                <div className='name-age'>
                    {/* Name */}
                    <label htmlFor='name'>Name :</label>
                    <input type="text" id="name" placeholder='name' name="Name" onChange={handleChnage}></input>

                    {/* Age */}
                    <label htmlFor='age'>Age :</label>
                    <input type="text" id="age" placeholder='age' name="Age" onChange={handleChnage}></input>
                </div>

                <div className='course-batch'>
                    {/* Course */}
                    <label htmlFor='course'>Course :</label>
                    <input type="text" id="course" placeholder='course' name="Course" onChange={handleChnage}></input>

                    {/* Batch */}
                    <label htmlFor='batch'>Batch :</label>
                    <input type="text" id="batch" placeholder='batch' name="Batch" onChange={handleChnage}></input>
                </div>

                <div className='btn-div'>
                    <button onClick={handleClick}>Add new student</button>
                    <button onClick={handleCancel}>Cancel</button>
                </div>
            </div>
        </div>
    )
}

export default AddNewStudent
