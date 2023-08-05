import React, { useState } from 'react'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import "./RoutesComp.css"
import Home from './Home'
import Student from './Student'
import ContactUs from './ContactUs'
import StoreData from './Store'
import AddNewStudent from './AddNewStudent'
import EditStudents from './EditStudents'

const RoutesComp = () => {
    const [studentData, setStudentData] = useState([
        {
            Name: "John",
            Age: 21,
            Course: "MEAN",
            Batch: "EA23"
        },

        {
            Name: "Doe",
            Age: 20,
            Course: "Javascript",
            Batch: "EA22"
        },
        {
            Name: "Biden",
            Age: 24,
            Course: "Python",
            Batch: "EA23"
        },
        {
            Name: "Barder",
            Age: 28,
            Course: "MEAN",
            Batch: "EA20"
        },
        {
            Name: "Andrew",
            Age: 27,
            Course: "JAVA",
            Batch: "EA23"
        },

    ])

    return (
        <div>
            <BrowserRouter>

                <div className='navbar'>
                    <NavLink className="text" to="/">Home</NavLink>
                    <NavLink className="text" to="/student">Student</NavLink>
                    <NavLink className="text" to="/contact">Contact</NavLink>
                </div>

                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/contact" element={<ContactUs />}></Route>
                    <Route path="/student" element={

                        // Proving Data to student component
                        <StoreData.Provider value={{ studentName: studentData, updateStudent: setStudentData }}>
                            <Student />
                        </StoreData.Provider>
                    }></Route>

                    <Route path="/addnewStudent" element={
                        <StoreData.Provider value={{ studentName: studentData, updateStudent: setStudentData }}>
                            <AddNewStudent />
                        </StoreData.Provider>
                    }>
                    </Route>

                    <Route path="/editStudent" element={
                        <StoreData.Provider value={{ studentName: studentData, updateStudent: setStudentData }}>
                            <EditStudents />
                        </StoreData.Provider>
                    }>
                    </Route>

                </Routes>

            </BrowserRouter>

        </div>
    )
}

export default RoutesComp
