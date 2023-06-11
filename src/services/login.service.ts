import {LOGGED, USER} from "@/common/constants/common";
import axios from "axios";
import KEYS from "@/common/constants/keys";

const login = () => {
    if (typeof window === 'undefined') return
    const id = localStorage.getItem(USER.ID)
    axios.get(
        `https://api.jsonbin.io/v3/b/${id}`,
        {
            headers: {
                'Content-Type': 'application/json',
                'X-Master-Key': KEYS.X_MASTER_KEY,
            },
        }
    ).then((r) => {
        console.log(r)
        localStorage.setItem(LOGGED.IN, 'true')
    }).catch((err) => {
        console.error(err)
    })
}
export default login
