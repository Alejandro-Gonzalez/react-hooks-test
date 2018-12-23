import { useState } from "react";

const useStudentsState = () => {
  const [students, setStudent] = useState([]);
  const addStudent = student => {
    setStudent([...students, student]);
  };
  const removeStudent = id => {
    const studentsFilterd = students.filter(student => student.id !== id);
    setStudent(studentsFilterd);
  };
  return { students, addStudent, removeStudent };
};
export default useStudentsState;
