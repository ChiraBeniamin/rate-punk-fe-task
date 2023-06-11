import axios from "axios";
import {USER} from "@/common/constants/common";
import KEYS from "@/common/constants/keys";
import UserInterface from "@/common/interfaces/user";

const post = (data: UserInterface) => {
    return axios.post(
        'https://api.jsonbin.io/v3/b',
        data,
        {
            headers: {
                'Content-Type': 'application/json',
                'X-Master-Key': `${KEYS.X_MASTER_KEY}`,
            },
        }
    ).then((res) => {
        localStorage.setItem(USER.ID, res.data.metadata.id)
    }).catch((err: any) => {
        console.error('An error -->', err)
    })
}
export default post
