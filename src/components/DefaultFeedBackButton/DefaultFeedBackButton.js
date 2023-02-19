import React, {useState,useEffect}  from 'react'
import Button from '../Shared/Button'
import styles from './DefaultFeedBackButton.module.scss'
import {fetchFetureToggle} from './DefaultFeedBackButtonUtils'

const DefaultFeedBackButton = ()=>{
    const configToggle = process.env.TOGGLE === 'false' ? false : true
    const [buttonEnable,setButtonEnable] = useState(configToggle);

    useEffect(()=>{
       (async function(){
        const data = await fetchFetureToggle()
            setButtonEnable(data.isFeedbackButtonEnabled)
        }());
    },[])

    
    return (
        <div className={styles.wrapper}>
            <div>
                <h1>Feedback button with default function</h1>
                <Button type="button" variant="primary" disabled={buttonEnable}>Feedback</Button>
            </div>
        </div>
       
    )
}
export default DefaultFeedBackButton