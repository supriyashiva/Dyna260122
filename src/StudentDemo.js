import React, { Component } from 'react'
import StudentList from './StudentList'

const StudentDemo = () => {
    return (
        <div>
            <StudentList
                name='Ashank'
                classNo='X'
                roll='05'
                addr='Kolkata, West Bengal'
            />
            <StudentList
                name='Samir'
                classNo='Xi'
                roll='09'
                addr='Jalpaiguri, West Bengal'
            />
            <StudentList
                name='Tusar'
                classNo='Xii'
                roll='02'
                addr='Howrah, West Bengal'
            />
            <StudentList
                name='Karishma'
                classNo='ix'
                roll='08'
                addr='Mednipur, West Bengal'
            />
        </div>
    )
}

export default StudentDemo
