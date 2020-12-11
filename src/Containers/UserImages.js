import axios from 'axios'
import {useState, useEffect} from 'react'


function UserImages(props){
    const {userId} = props

    const [userImages, setUserImages] = useState([])

    useEffect(() => {
        axios.get(`https://insta.nextacademy.com/api/v2/images?userId=${userId}`)
        .then((response) => {
            console.log(response.data)
            setUserImages(response.data)
        })    
        .catch((error)=> {
            console.log(error)
        })

    }, [userId])

    // console.log(userImages)

    return (
    <>
        {userImages.map((eachImage) => {
            return(
                <div>
                    <img src={eachImage.url} style={{height:'150px', margin:'2px'}}/>
                </div>
            )
        })} 
    </>
    )

}


export default UserImages;