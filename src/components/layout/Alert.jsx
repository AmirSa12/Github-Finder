import React from 'react'
import { useContext } from 'react'
import AlertContext from '../../context/alert/AlertContext'

function Alert() {
    const {alert} = useContext(AlertContext)

    return (
        alert !== null && (
          <p>Please Enter Something</p>
        )
      );
}

export default Alert