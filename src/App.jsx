// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import StudentForm from './components/StudentForm';
import StudentList from './components/StudentList';

const App = () => {
  const [students, setStudents] = useState([
    // Example student data
  ]);
  const [currentStudent, setCurrentStudent] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const handleAddStudent = (student) => {
    if (currentStudent) {
      // Update existing student
      setStudents(students.map(s => s.id === currentStudent.id ? student : s));
    } else {
      // Add new student
      setStudents([...students, { ...student, id: Date.now() }]);
    }
    setCurrentStudent(null);
  };

  const handleUpdateStudent = (student) => {
    setCurrentStudent(student);
  };

  const handleDeleteStudent = (studentId) => {
    setStudents(students.filter(student => student.id !== studentId));
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const filteredStudents = students.filter(student =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Router>
      <Navbar onSearch={handleSearch} />
      <div className="container mx-auto mt-8">
        <Routes>
          <Route
            path="/StudentList"
            element={
              <StudentList
                students={filteredStudents}
                onDelete={handleDeleteStudent}
                onUpdate={handleUpdateStudent}
              />
            }
          />
          <Route
            path="/form"
            element={
              <StudentForm onSubmit={handleAddStudent} currentStudent={currentStudent} />
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;