import React, {useState, useEffect} from 'react'
import {useParams} from "react-router-dom";
import axios from 'axios'
import UserImages from '../Containers/UserImages'

function ProfilePages(){
    let {profileId} = useParams()

    const [user, setUser] = useState("")


    useEffect(()=> {
        axios.get(`https://insta.nextacademy.com/api/v1/users/${profileId}`)
        .then((response) => {
            setUser(response.data)

        })
    },[user.id])


    return(
        <>
            <div style={{display:'flex'}}>

                <div style={{margin:'10px'}}>
                     <h1 style={{margin:'10px'}}>@{user.username}</h1>
                    <img src={user.profileImage} style={{height:"200px", borderRadius:'50%'}} />
                    <p>{user.username}</p>
                </div>
                    <div style={{display:'flex', flexWrap:'wrap'}}>
                        <UserImages userId={user.id}/>
                    </div>

            </div>

        </>
    )
}



export default ProfilePages;