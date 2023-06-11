import React, {useEffect, useState} from 'react';
import style from "@/styles/pages/sign-up.module.scss";
import {useForm} from "react-hook-form";
import {useRouter} from "next/navigation";
import login from "@/services/login.service";
import {USER} from "@/common/constants/common";
import KEYS from "@/common/constants/keys";
import axios from "axios";

const Index = () => {
    const [user, setUser] = useState(null);
    const [toggle, setToggle]: [any, any] = useState(false);
    const router = useRouter();
    const {register, handleSubmit, watch, formState: {errors}} = useForm();
    const [modalOpen, setModalOpen] = useState(false);

    useEffect(() => {
        console.log(user)
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
        ).then((r: any) => {
            setUser(r.data.record)
        }).catch((err) => {
            console.error(err)
        })

    }, [toggle])

    const onSubmit = () => {
        login()
        router.push('/')
    }
    return (
        <>
            <div className={`${style.homeWrapper} column-center`}>
                <div className={`${style.formCard} column-center card`}>
                    <form className={`${style.form} column`} onSubmit={handleSubmit(onSubmit)}>
                        <div className={style.titleContainer}>
                            <h2>Sign in</h2>
                        </div>

                        <label>Email</label>
                        <input className={errors.email ? style.error : style.input}
                               type={'text'}  {...register("email", {
                            required: {value: true, message: "Field must not be empty"}, pattern: {
                                value: /^\S+@\S+$/i,
                                message: 'Invalid email format',
                            }, validate: value => value === user.email || "Email is not correct"
                        })} />
                        {errors.email && < span> {errors.email.message}</span>}

                        <input className={`${style.formSubmitButton} btn btn-filled btn-rounded`} type="submit"/>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Index;
