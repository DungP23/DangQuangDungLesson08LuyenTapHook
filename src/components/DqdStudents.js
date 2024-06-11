import React from 'react'

export default function DqdListStuent({ renderDqdListStudents, removeItem, editItem }) {

    //render data

    let dqdElementStudent = renderDqdListStudents.map((student, index) => {
        return (
            <>
                <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{student.dqd_Id}</td>
                    <td>{student.dqd_Name}</td>
                    <td>{student.dqd_Age}</td>
                    <td>
                        <input
                            type="checkbox"
                            checked={student.dqdIsActive}
                            readOnly
                        />
                    </td>
                    <td>
                        <button className='btn btn-success' onClick={() => editItem(student)}>Edit</button>
                        <button className='btn btn-danger' onClick={() => removeItem(student.dqd_Id)}>Remove</button>
                    </td>
                </tr>

            </>
        )
    })

    return (
        <div>
            <h2>Danh sach sinh vien</h2>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th> Dqd STT</th>
                        <th> Dqd Ma sinh vien</th>
                        <th> Dqd Name</th>
                        <th> Dqd Age</th>
                        <th> Dqd Hoạt động</th>
                        <th> Dqd Action</th>
                    </tr>
                </thead>

                <tbody>
                    {dqdElementStudent}
                </tbody>
            </table>
        </div>
    )
}   