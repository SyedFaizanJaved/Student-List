// src/components/StudentItem.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const StudentItem = ({ student, onDelete, onUpdate }) => {
  const navigate = useNavigate();

  const handleDelete = () => {
    onDelete(student.id);
  };

  const handleUpdate = () => {
    onUpdate(student);
    navigate('/form');
  };

  return (
    <div className="bg-white shadow-md rounded p-4 mb-4">
      <h3 className="text-lg font-bold">{student.name}</h3>
      <p className="text-gray-700">Phone: {student.phoneNumber}</p>
      <p className="text-gray-700">Class: {student.className}</p>
      <p className="text-gray-700">Remarks: {student.remarks}</p>
      {student.picture && (
        <img src={student.picture} alt={student.name} className="w-32 h-32 rounded-full mt-2" />
      )}
      <div className="mt-4 flex justify-between">
        <button
          className="bg-red-600 text-white font-bold py-2 px-4 rounded hover:bg-red-700 transition duration-300"
          onClick={handleDelete}
        >
          Delete
        </button>
        <button
          className="bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
          onClick={handleUpdate}
        >
          Update
        </button>
      </div>
    </div>
  );
};

export default StudentItem;