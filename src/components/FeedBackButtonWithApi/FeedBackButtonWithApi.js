import React,{useEffect,useState} from 'react'
import Button from '../Shared/Button'
import styles from './FeedBackButtonWithApi.module.scss'
import axios from 'axios';

const FeedBackButtonWithApi = ()=>{
    const configToggle = process.env.TOGGLE === 'false' ? false : true
    const [buttonEnable,setButtonEnable] = useState(configToggle);

    useEffect(()=>{
        axios.get('./data.json')
            .then(function (response) {
                // handle success
                setButtonEnable(response.data.isFeedbackButtonEnabled)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
    },[])

    return (
        <div className={styles.wrapper}>
            <div>
                <h1>Feedback button with mock api</h1>
                <Button type="button" variant="warning" disabled={buttonEnable}>Feedback</Button>
            </div>
        </div>
        
    )
}
export default FeedBackButtonWithApi