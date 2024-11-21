import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DonationForm = () => {
  const [formData, setFormData] = useState({
    quantity: '',
    itemType: '',
    pickupLocation: '',
    additionalNotes: '',
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Show the toast message
    toast.success('Thank you! We will reach your destination soon.');

    // Clear the form fields
    setFormData({
      quantity: '',
      itemType: '',
      pickupLocation: '',
      additionalNotes: '',
    });
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6  shadow-lg rounded-lg bg-cyan-100">
      <h2 className="text-2xl font-bold mb-4 text-center">Donation Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-700">Quantity of items</label>
          <input
            type="text"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md"
            placeholder=" 2 jackets, 3 blankets"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-700">Item type</label>
          <div className="flex items-center space-x-6">
            <label className="flex items-center">
              <input
                type="radio"
                name="itemType"
                value="Blanket"
                checked={formData.itemType === 'Blanket'}
                onChange={handleChange}
                className="mr-2"
              />
              Blanket
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="itemType"
                value="Jacket"
                checked={formData.itemType === 'Jacket'}
                onChange={handleChange}
                className="mr-2"
              />
              Jacket
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="itemType"
                value="Sweater"
                checked={formData.itemType === 'Sweater'}
                onChange={handleChange}
                className="mr-2"
              />
              Sweater
            </label>
          </div>
        </div>


        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-700">Pickup location</label>
          <input
            type="text"
            name="pickupLocation"
            value={formData.pickupLocation}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md"
            placeholder=" House 12, Road 5, Dhanmondi, Dhaka"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-700">Additional notes (optional)</label>
          <textarea
            name="additionalNotes"
            value={formData.additionalNotes}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md"
            placeholder="Any additional information (optional)"
          ></textarea>
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-[#0B255C] text-cyan-400 font-bold px-6 py-3 rounded-md hover:bg-blue-600"
          >
            Submit
          </button>
        </div>
      </form>

      <ToastContainer />
    </div>
  );
};

export default DonationForm;
