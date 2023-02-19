import React from 'react'
import styles from './App.module.scss'
import Layout from './components/Shared/Layout'
import DefaultFeedBackButton from './components/DefaultFeedBackButton'
import FeedBackButtonWithApi from './components/FeedBackButtonWithApi'
import {
    Routes,
    Route,
  } from "react-router-dom";


function App(){

    return (
        <div className={styles.App}>
            <Layout>
                <Routes>
                    <Route path="/" element={<DefaultFeedBackButton />} />
                    <Route index element={<DefaultFeedBackButton />} />
                    <Route path="buttonWithmockApi" element={<FeedBackButtonWithApi />} />
                </Routes>
                
            </Layout>
        </div>
    )
}
export default App