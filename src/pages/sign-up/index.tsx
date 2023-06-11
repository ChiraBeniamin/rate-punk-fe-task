import React, {useState} from 'react';
import style from "@/styles/pages/sign-up.module.scss";
import {useForm} from "react-hook-form";
import UserInterface from "@/common/interfaces/user";
import Modal from "@/common/components/modal";
import {useRouter} from "next/navigation";
import post from "@/services/sign-up.service";

const Index = () => {
    const router = useRouter();
    const {register, handleSubmit, watch, formState: {errors}} = useForm();
    const [modalOpen, setModalOpen] = useState(false);
    const [user, setUser] = useState();

    const handleOpenModal = () => {
        setModalOpen(true);
    };
    const handleCloseModal = () => {
        setModalOpen(false);
        router.push('/login')
    };

    const onSubmit = (data: UserInterface) => {
        return post(data).then(() => handleOpenModal())
    }

    return (
        <>
            <div className={`${style.homeWrapper} column-center`}>
                <div className={`${style.formCard} column-center card`}>
                    <form className={`${style.form} column`} onSubmit={handleSubmit(onSubmit)}>
                       <div className={style.titleContainer}>
                        <h2>Sign up to access the app</h2>
                       </div>

                        <label>First Name</label>
                        <input className={errors.firstName ? style.error : style.input}
                               type={'text'}  {...register("firstName", {
                            required: {value: true, message: "Field must not be empty"}
                        })} />
                        {errors.firstName && < span> {errors.firstName.message}</span>}

                        <label>Last Name</label>
                        <input className={errors.lastName ? style.error : style.input}
                               type={'text'}  {...register("lastName", {
                            required: {value: true, message: "Field must not be empty"},
                        })} />
                        {errors.lastName && < span> {errors.lastName.message}</span>}

                        <label>Email</label>
                        <input className={errors.email ? style.error : style.input}
                               type={'text'}  {...register("email", {
                            required: {value: true, message: "Field must not be empty"}, pattern: {
                                value: /^\S+@\S+$/i,
                                message: 'Invalid email format',
                            },
                        })} />
                        {errors.email && < span> {errors.email.message}</span>}

                        <label>Age</label>
                        <input className={errors.age ? style.error : style.input}
                               type={'text'}  {...register("age", {
                            required: {value: true, message: "Field must not be empty"}
                        })} />
                        {errors.age && < span> {errors.age.message}</span>}

                        <input className={`${style.formSubmitButton} btn btn-filled btn-rounded`} type="submit"/>
                    </form>
                </div>
            </div>
            <Modal buttonText={'Go To Login'} isOpen={modalOpen} onClose={handleCloseModal}>
                <h2>Your Account has been created!</h2>
                <p>To access your account you must first log in.</p>
            </Modal>
        </>
    );
};

export default Index;
