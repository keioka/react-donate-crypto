import React from 'react'
import Transition from 'react-motion-ui-pack'

import classes from './DonateCryptoButton.scss'

const DonateCryptoButton = ({
  symbol,
  handleClickCurrencyButton,
}) => {
  const Logo = require(`../logos/${symbol.toLowerCase()}.svg`)
  return (
    <button className={classes.element} onClick={handleClickCurrencyButton}>
      <div className={classes.inner}>
        <Logo width={20} height={20} />
        <span className={classes.text}>{symbol}</span>
      </div>
    </button>
  )
}

export default DonateCryptoButton
