import React from 'react'
import PropTypes from "prop-types"

const Detail = (props) => {
    return (
        <table >
            <tbody>
                <tr>
                    <th>Name</th>
                    <td>{props.name}</td>
                </tr>
                <tr>
                    <th>Age</th>
                    <td>{props.age}</td>
                </tr>
                <tr>
                    <th>Phone</th>
                    <td>{props.phone}</td>
                </tr>
                <tr>
                    <th>isStudent</th>
                    <td>{props.isStudent ? "Yes" : "No"}</td>
                </tr>

            </tbody>

        </table>
    )
}
Detail.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    phone: PropTypes.number,
    isStudent: PropTypes.bool
}
Detail.defaultProps=
{
    name:"No name",
    age:0,
    phone:0,
    isStudent:false
}

export default Detail