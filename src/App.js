import './App.css';
import { useState } from 'react';
import DqdListStudent from './components/DqdStudents';
import DqdStudentAddOrEdit from './components/DqdStudentAddOrEdit';

function App() {
  const dqd_Student = [
    { dqd_Id:2210900015, dqd_Name:" Đặng Quang Dũng", dqd_Age:19,lttIsActive:true },
    { dqd_Id:1, dqd_Name:"Nguyễn Khánh Phương", dqd_Age:19,lttIsActive:true },
    { dqd_Id:2, dqd_Name:"Biện Văn Giáp",dqd_Age:19,lttIsActive:false},
    { dqd_Id:3, dqd_Name:"Đặng Quang Hiếu",dqd_Age:42,lttIsActive:false},
    { dqd_Id:4, dqd_Name:"Hoàng Thị Mộng Tuyền",dqd_Age:41,lttIsActive:true},
   ];
   const dqdStudentOpj = { 
    dqd_Id: 0,
    dqd_Name:"",
    dqd_Age:""
}
   // su dung hang useState de luu tru trang thai du lieu
   const [dqdListStudent, setDqdListStudent] = useState(dqd_Student);
   const [studentEdit, setStudentEdit] = useState(dqdStudentOpj);
   const [isEdit, setIsEdit] = useState(false);

   const dqdHandleSubmit = (dqdParam) => {
      console.log("App:", dqdParam);
     
      if(isEdit){
        const updatedData = dqdListStudent.map((element) => {
          if (element.dqd_Id === dqdParam.dqd_Id) {
            return { dqd_Id: dqdParam.dqd_Id,dqd_Name:dqdParam.dqd_Name , dqd_Age: dqdParam.dqd_Age }; // Update the element with the new name
          }
          return element; // Return the original element for other IDs
        });
        setDqdListStudent(updatedData);
        setIsEdit(false);
        setStudentEdit(dqdStudentOpj)
      } else {
        setDqdListStudent(prev => {
          return[
            ...prev,
            dqdParam
          ]
        })
      }
   }
   const removeItem = (student) => {
    console.log("student:", student);

    const updatedData = dqdListStudent.filter((element) => element.dqd_Id !== student);
    setDqdListStudent(updatedData)
   }
   const editItem = (student) => {
    console.log("student:", student);
    setStudentEdit(student)
    setIsEdit(true)
   }
   
  return (
    <div className="container border">
      <h1> Đặng Quang Dũng - K22CNT1</h1>
      <hr/>
      <div>
        {/*Danh sach list Student*/}
        <DqdListStudent renderDqdListStudents = {dqdListStudent} removeItem={removeItem} editItem={editItem}/>
      </div>
      <div>
        <DqdStudentAddOrEdit dqdOnSubmit={dqdHandleSubmit} studentEdit={studentEdit} isEdit={isEdit}/>
      </div>
    </div>
    
  );
}

export default App;