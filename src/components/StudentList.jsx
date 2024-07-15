// src/components/StudentList.js
import React from 'react';
import StudentItem from './StudentItem';

const StudentList = ({ students, onDelete, onUpdate }) => {
  return (
    <div className="container mx-auto mt-4">
    <h2 className="text-2xl font-bold mb-4">Student List</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {students.map((student) => (
        <StudentItem
          key={student.id}
          student={student}
          onDelete={onDelete}
          onUpdate={onUpdate}
        />
      ))}
    </div>
    </div>
  );
};

export default StudentList;