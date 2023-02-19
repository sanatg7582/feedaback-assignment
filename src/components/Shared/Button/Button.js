import React from 'react'
import styles from './Button.module.scss'
import PropTypes from 'prop-types'

const Button = ({children,variant,disabled,...rest})=> {
    const disabledClass = disabled ? styles.disable : '';
    return <button className={`${styles[variant]} ${disabledClass}`} {...rest}>{children}</button>
}
Button.defaultProps = {
    children:<></>,
    variant:'',
    disabled:false
}
Button.propTypes = {
    children:PropTypes.node,
    variant:PropTypes.string,
    disabled:PropTypes.bool
}
export default Button