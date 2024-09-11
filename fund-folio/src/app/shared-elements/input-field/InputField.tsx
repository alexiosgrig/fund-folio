import React, { useState } from 'react';

export const InputField = ({ onSubmit }: any) => {
  const [field, setField] = useState('');
  return (
    <>
      <label htmlFor="username" className="block text-lg font-medium mb-2">
        Username:
      </label>
      <input
        onChange={(e) => setField(e.target.value)}
        type="text"
        id="username"
        name="username"
        required
        className="block w-80 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      />
      <button type="submit" onClick={() => onSubmit(field)}>
        {' '}
        Submit{' '}
      </button>
    </>
  );
};
