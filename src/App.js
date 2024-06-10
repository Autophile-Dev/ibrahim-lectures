import { useState } from 'react';
import './App.css';
import Button from './components/Buttons/Button';
import Navbar from './components/navbar/Navbar';
import Swal from 'sweetalert2'
import Users from './components/Table/Users';
import Photos from './components/Photos/Photos';
import { Link, Route, Routes } from 'react-router-dom';
import Error from './components/Table/Error';
import ViewUser from './components/Table/ViewUser';
function App({ user }) {

  const [value, setValue] = useState('');
  const [error, setError] = useState('');

  function handleInput(event) {

    const inputValue = event.target.value;
    if (inputValue !== '') {
      setValue(inputValue);
      setError('');
    }
    console.log(inputValue);
  }


  function handleSubmit() {
    if (value !== '') {
      setError('');
      console.log('Input Data uploaded');
    } else {
      setError('Field is empty');
    }
  }

  // const elementTest = 'Im student';
  // Creating object
  // const userObject = {
  //   firstName: 'Ibrahim',
  //   lastName: 'Muddasir',
  //   age: 17,
  //   nestedObject: {
  //     nestedObjectValue1: 1,
  //     nestedObjectValue2: 2,
  //   },
  //   arrayValue: [1, 2, 3, 45, 66],
  // };
  // // const numbers = [1, 2, 3, 4, 5, 6]
  // console.log(userObject);
  // const fullName = userObject.firstName + ' ' + userObject.lastName;
  // const age = userObject.age;
  // const nestedValue1 = userObject.nestedObject.nestedObjectValue2

  // const newArr = userObject.arrayValue.map(myFunction);
  // // For printing array
  // function myFunction(num) {
  //   return num;
  // }


  // function authenticateUser(user) {
  //   return user.firstName + ' ' + user.lastName;
  // }
  // function greetingForUser(user) {
  //   return !user ? <h1>Hi {authenticateUser(user)} </h1> : <h1>Hi error</h1>
  // }
  // function randomClicker() {
  //   Swal.fire({
  //     title: 'Testing Sweet Alert',
  //     text: 'Happy with this implementation in this alert',
  //     icon: 'success',
  //     showClass: {
  //       popup: `
  //         animate__animated
  //         animate__fadeInUp
  //         animate__faster
  //       `
  //     },
  //     hideClass: {
  //       popup: `
  //         animate__animated
  //         animate__fadeOutDown
  //         animate__faster
  //       `
  //     }
  //   });
  // }
  // function testClicker() {
  //   Swal.fire({
  //     title: 'Testing Sweet Alert',
  //     text: 'Close this alert',
  //     icon: 'error',
  //     background: '#678299',
  //     color: '#ffffff'
  //   });
  //   // console.log("Ibrahim is clicking the button");
  // }
  return (
    <div className="App">
      {/* <h1 className=''>hello Learning React</h1>
      <h2>Hello {elementTest} </h2>
      <br />
      <Buttons />
      <Navbar /> */}
      {/* <h1>Full Name: {userObject.firstName + ' ' + userObject.lastName}</h1>
      <span>User Age: {age}</span>
      <br />
      <span>Nested Value1: {nestedValue1}</span>
      <br />
      <span>Array: {newArr}</span>
      <h1>Object: {userObject.lastName}</h1> */}
      {/* {greetingForUser(userObject)} */}
      {/* <button onClick={randomClicker}>Random Button</button>
      <div className='buttons-container'>
        <Button title="Contact Us" onClick={randomClicker} />
        <Button title="Ibrahim" onClick={testClicker} />
        <Button title="About" onClick={testClicker} />
        <Button title="About" onClick={randomClicker} />
      </div> */}
      {/* <div className='text-container'>
        <label>Enter Text</label>
        <input placeholder='Enter value' type='text' value={value} onChange={handleInput} />
        <span className='error-message'>{error && <div>{error}</div>}</span>
      </div>
      <button onClick={handleSubmit}>Upload</button> */}


      {/* <Users /> */}
      {/* <Photos /> */}
      <Routes>
        <Route path='/test' element={<Button />} />
      </Routes>
      <Routes>
        <Route path='/' element={<Users />} />
      </Routes>
      {/* <Routes>
        <Route path='*' element={<Error />} />
      </Routes> */}
      <Routes>
        <Route path='/user' element={<Users />} />
      </Routes>
      <Routes>
        <Route path='/user/:id' element={<ViewUser />} />
      </Routes>
    </div>
  );
}

export default App;
