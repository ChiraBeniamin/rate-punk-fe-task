import {USER} from "@/common/constants/common";
import axios from "axios";
import KEYS from "@/common/constants/keys";

const getUser = (): any => {
    if (typeof window === 'undefined') return
    const id = localStorage.getItem(USER.ID)
    return axios.get(
        `https://api.jsonbin.io/v3/b/${id}`,
        {
            headers: {
                'Content-Type': 'application/json',
                'X-Master-Key': KEYS.X_MASTER_KEY,
            },
        }
    ).then((r) => {
        return r.data
    }).catch((err) => {
        console.error(err)
    })
}
export default getUser
