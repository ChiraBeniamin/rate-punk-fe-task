import React from 'react';
import style from '../../styles/side-panel.module.scss'

const SidePanel = ({isOpen, togglePanel}) => {

    return (
        <div className={`${style.sidePanel} ${isOpen ? style.open : ''}`}>
            <div className={style.panelContent}>
                ivbsdbfvsidbfvisboivbwoierb viwdbficjvwb ibf
            </div>
        </div>
    );
};

export default SidePanel;
