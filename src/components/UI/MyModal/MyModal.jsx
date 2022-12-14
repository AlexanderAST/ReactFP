import React from 'react';
import st from "./MyModal.module.css"
const MyModal = ({children,visible,setVisible}) => {

    const rootClasses=[st.myModal]

    if (visible===true){
        rootClasses.push(st.active);
    }

    return (
        <div className={rootClasses.join(' ')} onClick={()=>setVisible(false)}>
            <div className={st.myModalContent} onClick={(e)=>e.stopPropagation()}>
                {children}

            </div>
        </div>
    );
};

export default MyModal;