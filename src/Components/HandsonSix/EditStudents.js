import React, { useContext } from 'react'
import "./EditStudent.css"
import { useLocation, useNavigate } from 'react-router-dom'
import StoreData from './Store';

const EditStudents = () => {
    const ContextData = useContext(StoreData);
    console.log(ContextData);
    const Navigate = useNavigate();


    // Triggering the index value from edit button
    const indexValue = useLocation().state.data;
    console.log(indexValue)

    const updateObj = {
        Name: ContextData.studentName[indexValue].Name,
        Age: ContextData.studentName[indexValue].Age,
        Course: ContextData.studentName[indexValue].Course,
        Batch: ContextData.studentName[indexValue].Batch
    }

    // Update the particular index
    const handleClick = () => {
        ContextData.studentName[indexValue] = updateObj
        Navigate('/student')
    }

    // to update student detail
    const handleChnage = (e) => {
        updateObj[e.target.name] = e.target.value;
    }

    // Handle the cancel button
    const handleCancel = () => {
        Navigate("/student")
    }

    return (

        <div>
            <h1> Edit Students Detail </h1>

            <div className='editStudentField'>

                <div className='name-age'>
                    {/* Name */}
                    <label htmlFor='name'>Name :</label>
                    <input type="text" id="name" placeholder={ContextData.studentName[indexValue].Name} name="Name" onChange={handleChnage}></input>

                    {/* Age */}
                    <label htmlFor='age'>Age :</label>
                    <input type="text" id="age" placeholder={ContextData.studentName[indexValue].Age} name="Age" onChange={handleChnage}></input>
                </div>

                <div className='course-batch '>
                    {/* Course */}
                    <label htmlFor='course'>Course :</label>
                    <input type="text" id="course" placeholder={ContextData.studentName[indexValue].Course} name="Course" onChange={handleChnage}></input>

                    <label htmlFor='batch'>Batch :</label>
                    <input type="text" id="batch" placeholder={ContextData.studentName[indexValue].Batch} name="Batch" onChange={handleChnage}></input>
                </div>

                <div>
                    {/* Batch */}
                    <button onClick={handleClick}>Update student</button>
                    <button onClick={handleCancel}>Cancel</button>
                </div>
            </div>

        </div>
    )
}

export default EditStudents
