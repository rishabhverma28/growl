import React from 'react'

import './growl.css'
const DEFAULT_TIME_FOR_ACTIVE_GROWL_MS = 3000

export const Growl = ({ active, message, onDismissed }) => (
  <div className={`growl${active ? ' active' : ''}`}>
    {message}
    <div onClick={onDismissed} className="growl-close" />
  </div>
)

export function useGrowl() {
  // state of the growl
  const [growlActive, setGrowlActive] = React.useState(false)
  const setTimeInMS = (timeInMS) => {
    setTimeout(() => {
      setGrowlActive(false)
    }, timeInMS)
  }

  return [
    // the first arg is the state
    growlActive,

    // the second arg is a fn that allows you to safely set its state
    (active) => {
      setGrowlActive(active)
    },
    (timeInMS = DEFAULT_TIME_FOR_ACTIVE_GROWL_MS) => {
      setTimeInMS(timeInMS)
    },
  ]
}
