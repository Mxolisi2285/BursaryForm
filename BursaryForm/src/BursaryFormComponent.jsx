import React, { useState } from "react";

const SasolBursaryForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    idNumber: "",
    matricMarks: "",
    fieldOfStudy: "",
    motivation: "",
    documents: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "documents") {
      setFormData({ ...formData, documents: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can handle form submission logic like sending data to an API
    console.log("Form Submitted", formData);
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg">
      <h1 className="text-2xl font-bold mb-6 text-center">Sasol Bursary Application</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Full Name */}
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
            Full Name
          </label>
          <input
            type="text"
            name="fullName"
            id="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="mt-1 block w-full p-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-1 block w-full p-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
            Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            id="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="mt-1 block w-full p-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        {/* ID Number */}
        <div>
          <label htmlFor="idNumber" className="block text-sm font-medium text-gray-700">
            ID Number
          </label>
          <input
            type="text"
            name="idNumber"
            id="idNumber"
            value={formData.idNumber}
            onChange={handleChange}
            required
            className="mt-1 block w-full p-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        {/* Matric Marks */}
        <div>
          <label htmlFor="matricMarks" className="block text-sm font-medium text-gray-700">
            Matric Marks (%)
          </label>
          <input
            type="number"
            name="matricMarks"
            id="matricMarks"
            value={formData.matricMarks}
            onChange={handleChange}
            required
            className="mt-1 block w-full p-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        {/* Field of Study */}
        <div>
          <label htmlFor="fieldOfStudy" className="block text-sm font-medium text-gray-700">
            Field of Study
          </label>
          <input
            type="text"
            name="fieldOfStudy"
            id="fieldOfStudy"
            value={formData.fieldOfStudy}
            onChange={handleChange}
            required
            className="mt-1 block w-full p-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        {/* Motivation */}
        <div>
          <label htmlFor="motivation" className="block text-sm font-medium text-gray-700">
            Motivation (Why should Sasol consider you?)
          </label>
          <textarea
            name="motivation"
            id="motivation"
            value={formData.motivation}
            onChange={handleChange}
            required
            className="mt-1 block w-full p-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        {/* File Upload */}
        <div>
          <label htmlFor="documents" className="block text-sm font-medium text-gray-700">
            Upload Supporting Documents
          </label>
          <input
            type="file"
            name="documents"
            id="documents"
            accept=".pdf,.docx"
            onChange={handleChange}
            required
            className="mt-1 block w-full p-2 border rounded-md"
          />
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
          >
            Submit Application
          </button>
        </div>
      </form>
    </div>
  );
};

export default SasolBursaryForm;
