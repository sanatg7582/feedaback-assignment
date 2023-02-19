import React from 'react'
import Header from './Header'
import PropTypes from 'prop-types'
import Footer from './Footer'

const Layout = ({isHeader,isFooter,children})=> {
    return (
        <>
        {isHeader ? <Header /> : null}
        <main>
        {children ? children : null}
        </main>
        {isFooter ? <Footer/> : null}
        </>
    )
}
Layout.defaultProps = {
    isHeader:true,
    isFooter:true,
    children:<></>
}
Layout.propTypes = {
    isHeader:PropTypes.bool,
    isFooter:PropTypes.bool,
    children:PropTypes.node
}
export default Layout