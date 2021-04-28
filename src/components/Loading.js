import React from 'react'
import styles from "./Loading.css"
import ReactDelayRender from "react-delay-render"

const Loading = () => {
    return (
        <div className={styles.cont}>
            <div className={styles.ldsRing}><div></div><div></div><div></div><div></div></div>
        </div>
    )
}

export default ReactDelayRender({ delay: 300 })(Loading);