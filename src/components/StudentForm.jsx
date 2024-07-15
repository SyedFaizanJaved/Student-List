// src/components/StudentForm.js
import React, { useState, useEffect, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { useNavigate } from 'react-router-dom';

const StudentForm = ({ onSubmit, currentStudent }) => {
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    className: '',
    picture: '',
    remarks: ''
  });

  useEffect(() => {
    if (currentStudent) {
      setFormData(currentStudent);
    }
  }, [currentStudent]);

  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    setFormData({
      ...formData,
      picture: URL.createObjectURL(file)
    });
  }, [formData]);

  const { getRootProps, getInputProps } = useDropzone({ onDrop, accept: 'image/*' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      picture: URL.createObjectURL(file)
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      name: '',
      phoneNumber: '',
      className: '',
      picture: '',
      remarks: ''
    });
  };

  const navigate = useNavigate();

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Phone Number</label>
        <input
          type="tel"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Class Name</label>
        <input
          type="text"
          name="className"
          value={formData.className}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Picture</label>
        <div
          {...getRootProps()}
          className="border-dashed border-2 border-gray-300 rounded p-4 text-center cursor-pointer"
        >
          <input {...getInputProps()} />
          {formData.picture ? (
            <img src={formData.picture} alt="Preview" className="mx-auto w-32 h-32 rounded-full" />
          ) : (
            <p className="text-gray-700">Drag 'n' drop some files here, or click to select files</p>
          )}
        </div>
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="mt-2"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Remarks</label>
        <textarea
          name="remarks"
          value={formData.remarks}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="flex items-center justify-between">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          {currentStudent ? 'Update Student' : 'Add Student'}
        </button>
      </div>
    </form>
  );
};

export default StudentForm;