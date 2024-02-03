import { useUser } from "@clerk/nextjs"
import { Avatar, AvatarImage } from "./ui/avatar"
import { AvatarFallback } from "@radix-ui/react-avatar"

export const UserAvatar=()=>{
    const {user}=useUser()
    return (
        <Avatar>
            <AvatarImage src={user?.imageUrl}/>
            <AvatarFallback>
                {user?.firstName?.charAt(0)}
                {user?.lastName?.charAt(0)}
            </AvatarFallback>
        </Avatar>
       
    )
}