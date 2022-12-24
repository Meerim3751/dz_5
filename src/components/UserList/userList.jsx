import styles from './postList.module.css'
import Post from '../post/post'
import React from 'react'
import axios from 'axios'

class UserList extends React.Component{
    constructor(){
        super();
        this.state= {
            users : []
        }
        console.log('constructor')
    }
    componentDidMount () {
        console.log('component did mouth')
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => {
            const users = res.data;
            console.log(users)
            this.setState({users});
        })
    }

    render() {
        return (
            <div className={styles.container}>
                {/* <form className={styles.postForm}>
                    <input type="text" name="title" placeholder='Заголовок поста'/>
                    <input type="text" name="description" placeholder='Короткое описание'/>
                    <label> Длинный пост: <input type="checkbox" name="longpost" /></label>
                    <label> Количество слов: <input type="number" name="wordscount"/></label>
                    <button>Добавить пост</button>
                </form> */}
    
                <div className="posts">
                    <ul>
                    {this.state.users.map( user =>
                        <li>{user.id}- {user.name}</li>
                    )}
                    
                    </ul>
                </div>
            </div>
        )
    }

}
    

export default UserList;



