import { Box } from '@chakra-ui/react';
import './App.css';
import { Landing } from './pages/landing';
function App() {
  return (
    <div className="App">
      <Box border='1px solid black' bg='#f3f7fb'>
      <Landing/>
      </Box>
    </div>
  );
}

export default App;
