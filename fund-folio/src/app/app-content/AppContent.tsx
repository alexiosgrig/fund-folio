import React from 'react';
import Table from '../shared-elements/table/Table';
import { InputField } from '../shared-elements/input-field/InputField';

export const AppContent = () => {
  return (
    <main className="flex flex-grow justify-center mt-12">
      <div className="text-center">
        <InputField />
      </div>
      {/* <Table /> */}
    </main>
  );
};
