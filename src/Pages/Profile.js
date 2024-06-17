import { ChangeProfile } from "../Components/ChangeProfile"
import { useContext } from "react"
import { ProfileContext } from "../App"

export const Profile = ()=>{

    const {userName} = useContext(ProfileContext)


    return (
        <div>
            profile is {userName}
            <ChangeProfile />
        </div>
    )
}