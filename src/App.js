import './App.css';
import Button from './components/Buttons/Button';
import Navbar from './components/navbar/Navbar';
import Swal from 'sweetalert2'
import PrimaryBtn from './components/Buttons/Primary-Buttons/PrimaryBtn';
import Form1 from './components/form/form1/Form1';
function App({ user }) {
  // const elementTest = 'Im student';
  // Creating object
  const userObject = {
    firstName: 'Ibrahim',
    lastName: 'Muddasir',
    age: 17,
    nestedObject: {
      nestedObjectValue1: 1,
      nestedObjectValue2: 2,
    },
    arrayValue: [1, 2, 3, 45, 66],
  };
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


  function authenticateUser(user) {
    return user.firstName + ' ' + user.lastName;
  }
  function greetingForUser(user) {
    return !user ? <h1>Hi {authenticateUser(user)} </h1> : <h1>Hi error</h1>
  }
  function randomClicker() {
    Swal.fire({
      title: 'Testing Sweet Alert',
      text: 'Happy with this implementation in this alert',
      icon: 'success',
      showClass: {
        popup: `
          animate__animated
          animate__fadeInUp
          animate__faster
        `
      },
      hideClass: {
        popup: `
          animate__animated
          animate__fadeOutDown
          animate__faster
        `
      }
    });
  }
  function testClicker() {
    Swal.fire({
      title: 'Testing Sweet Alert',
      text: 'Close this alert',
      icon: 'error',
      background: '#678299',
      color: '#ffffff'
    });
    // console.log("Ibrahim is clicking the button");
  }
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




      <button onClick={randomClicker}>Random Button</button>




      <div className='buttons-container'>
        <Button title="Contact Us" onClick={randomClicker} />
        <Button title="Ibrahim" onClick={testClicker} />
        <Button title="About" onClick={testClicker} />
        <Button title="About" onClick={randomClicker} />

        <PrimaryBtn titel="ibraheem" fronticon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3" />
</svg>}/>

<Form1 placeholder="Text" label="Label" hintmsg="Hint Message"/>



      </div>

    </div>
  );
}

export default App;
