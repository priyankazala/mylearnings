import React, {useState } from 'react';

const InputForm = ({ onFormSubmit }) => {
//State to manage the user input 

const [location, setlocation] = useState('');

//Function to handle form submission
const handleSubmit = (e) => {
    e.preventDefault();

    //pass location to parent component
    onFormSubmit(location);

    //clear input after submission
    setlocation('');

};

return (
    <form onSubmit={handleSubmit} className="d-flex justify-content-center" style={{ margin: '20px 0', display: 'flex', justifyContent: 'center' }}>
        <label className="input-group" style={{ marginRight: '10px' }}>
            Enter Location(City or Zip Code):
            <input
            type="text"
            value={location}
            onChange={(e) => setlocation(e.target.value)}
            placeholder=" Ex. New York 10001"
            style={{ marginLeft: '5px' }}
            className="form-control"
            />

        </label>
        <div className="input-group-append">
          <button type="submit" className="btn btn-primary">Get Weather</button>
        </div>
        </form>
);

};

export default InputForm;