import React, { useState } from 'react';

const DataPicker = () => {
    const [startDate, setStartDate] = useState(new Date());
    
    return (
      <div className="input-group input-group-sm" onSubmit={{}}>
      <input className="form-control" type="search" 
          placeholder = {startDate}
          onChange={{}}
      />
  </div>
    );
}

export default DataPicker;