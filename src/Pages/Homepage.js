import {useEffect, useState} from 'react'
import axios from 'axios'
import reactstrap from 'reactstrap'
import UserImages from '../Containers/UserImages'
import {Link} from 'react-router-dom';




function Homepage(){

    const [users, updateUsers] = useState([]);
    const axios = require('axios');

    useEffect(()=>{
        axios.get('https://insta.nextacademy.com/api/v1/users')
        .then((response) => {
            // console.log(response.data)
            updateUsers(response.data)
        })
    }, [])


        return(
            <>
                {users.map((user) => {
                    return (
                        <div style={{display:'flex', alignItems:'center'}}>
                            <div style={{margin:'10px', backgroundColor:'lightgrey', alignItems:'center', height:'200px'}}>
                                <img src={user.profileImage} style={{height:'150px', width:'150px', margin:'10px'}} alt=""/>
                                <Link to={`/users/${user.id}`} >{user.username} </Link>
                            </div>
                            <div style={{display:'flex'}}>
                                <UserImages userId={user.id}/>
                            </div>
                        </div>
                    )
                    
                })}
            </>

        )

}

export default Homepage
