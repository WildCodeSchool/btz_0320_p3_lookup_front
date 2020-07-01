import React from 'react';
import './App.css';
import Router from './components/Router';

function App() {
  // const [count, setCount] = useState('');

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setCount('Timeout called!');
  //   }, 1000);
  //   console.log(timer);
  //   return () => clearTimeout(timer);
  // }, []);

  return (
    <div className="App">
      <Router />
    </div>
  );
}

export default App;
