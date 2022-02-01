import React, { Component } from 'react'

class StudentList extends Component {
    render() {
        const { name, classNo, roll, addr } = this.props
        const ulStyle = { border: '2px solid green', width: '40%', listStyleType: 'none' }
        const liStyle = { color: 'red', fontSize: '23px' }
        return (
            <ul style={ulStyle}>
                <li style={liStyle}>Name : {this.props.name}</li>
                <li style={liStyle}>Class: {this.props.classNo}</li>
                <li style={liStyle}>Roll: {this.props.roll}</li>
                <li style={liStyle}>Address : {this.props.addr}</li>
            </ul>
        )
    }
}

export default StudentList
