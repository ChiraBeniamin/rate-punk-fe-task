import React from "react";
import styles from '../../styles/modal.module.scss'

const Modal = ({isOpen, onClose, children, buttonText}) => {
    if (!isOpen) return null;

    return (
        <div className={styles.modalOverlay}>
            <div className={`${styles.modal} card`}>
                <div className={styles.modalContent}>
                    {children}
                </div>
                <button className={`${styles.modalClose}  btn btn-rounded btn-outlined`} onClick={onClose}>
                    {buttonText}
                </button>
            </div>
        </div>
    );
};

export default Modal;
