import React, { useEffect, useState } from 'react'

export default function DqdStudentAddOrEdit({dqdOnSubmit, studentEdit, isEdit}) {
    // Doi tuong Student
    
    const [dqdStudent, setDqdStudent] = useState(studentEdit);
    
    useEffect(() => {
        setDqdStudent(studentEdit);
    }, [studentEdit])
    //Ham xu ly su kien thay doi tren dieu khien

    const dqdHandleChange = (dqdEvent) => {
        let name = dqdEvent.target.name;
        let value = dqdEvent.target.value;
        
        setDqdStudent(prev => {
            return{
                ...prev,
                [name]:value,
            }
        })
    }

    const dqdHandleSubmit = (dqdEvent) => {
      dqdEvent.preventDefault();
        dqdOnSubmit(dqdStudent);
    }
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setDqdStudent(prevStudent => ({
          ...prevStudent,
          [name]: type === 'checkbox' ? checked : value
        }));
      };
  return (
    <div>
        <h2>{isEdit ? 'Update task' : 'Them moi Sinh vien'}</h2>
        <form>
            <div>
                <span class='input-group-text' id='basic-addon1'>Ma sinh vien</span>
                <input name='dqd_Id' value={dqdStudent.dqd_Id} onChange={dqdHandleChange}/>
            </div>
            <div>
                <label>Dqd Name</label>
                <input name='dqd_Name' value={dqdStudent.dqd_Name} onChange={dqdHandleChange}/>
            </div>
            
            <div>
                <label>Dqd Age</label>
                <input name='dqd_Age' value={dqdStudent.dqd_Age} onChange={dqdHandleChange}/>
            </div>
            <div className="form-group mb-3">
            <label> Dqd Hoạt động:</label>
            <div className="form-check">
              <input
                type="checkbox"
                name='dqdIsActive'
                checked={dqdStudent.dqdIsActive}
                onChange={handleChange}
                className="form-check-input"
              />
              <label className="form-check-label"> Dqd Active</label>
            </div>
          </div>
            <button onClick={dqdHandleSubmit}>{isEdit ? 'Update' : 'Add'}</button>
        </form>
    </div>
  )
}