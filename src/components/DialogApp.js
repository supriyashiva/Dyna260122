import React from 'react';

import CreateDeviceForm from '../pages/CreateDeviceForm';
import CustomizedDialogs from './Dialog';

export default function DialogApp() {
  return (
    <div>
        <CustomizedDialogs>
        <CreateDeviceForm/>
        </CustomizedDialogs>
        
    </div>
  )
}
