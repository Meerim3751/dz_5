import './App.css'
import Counter from './components/counter/counter'
import SimpleForm from './components/simpleForm/simpleForm'
import Toggles from './components/toggles/toggles'
// import PostList from './components/UserList/postList'
import UserList from './components/UserList/userList'
import PersonAdd from './components/UserList/addUser'


function App() {

  return (
    <div className="App">
      <UserList/>
      <PersonAdd/>
    </div>
  )
}

export default App
