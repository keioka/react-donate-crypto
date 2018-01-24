import React from 'react'
import QRCode from 'qrcode.react'
import { MdKeyboardArrowLeft } from 'react-icons/lib/md'

import classes from './DonateCryptWallet.scss'

const DonateCryptWallet = ({
  wallet,
  handleClearSelectedCurrency
}) => {
  const Logo = require(`../logos/${wallet.symbol.toLowerCase()}.svg`)
  return (
  <div className={classes.element}>
    <div className={classes.currencyInfo}>
      <Logo />
      <div className={classes.currencyInfoNames}>
        <h4 className={classes.textFullName}>{wallet.fullName}</h4>
        <h5 className={classes.textSymbol}>{wallet.symbol}</h5>
      </div>
    </div>

    <span className={classes.textAddress}>{wallet.address}</span>
    <div className={classes.sectionQrCode}>
      <QRCode
        value={wallet.address || ''}
        fgColor='#596067'
      />
    </div>
    <button
      className={classes.btnBack}
      onClick={handleClearSelectedCurrency}
    >
      <div className={classes.btnBackInner}>
        <div className={classes.iconArrowBack}>
          <MdKeyboardArrowLeft size={16}/>
        </div>
        <span className={classes.btnBackText}>Back</span>
      </div>
    </button>
  </div>
  )
}

export default DonateCryptWallet
