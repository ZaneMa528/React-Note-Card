import './style/App.css';
import Header from './components/Header/Header';
import Notes from './components/Notes';
import Note from './components/Note';
import CreateNote from './components/CreateNote';

function App() {

  return (
    <>
      <div>
        <Header />
        <Notes />
      </div>
    </>
  )
}

export default App
