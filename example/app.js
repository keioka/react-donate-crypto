import React from 'react'
import ReactDOM from 'react-dom'
import DonateCrypto from '../src/DonateCrypto'

import classes from './app.scss'

const App = () => {
  return (
    <div className={classes.app}>
      <div className={classes.bgLayor}></div>
      <div className={classes.bgLayor2}></div>
      <div className={classes.bgLayor3}></div>
      <div className={classes.body}>
        <DonateCrypto
          ownerName='Kei Oka'
          ownerImgUrl='https://pbs.twimg.com/profile_images/946921679577522176/g4i3Rjfa_400x400.jpg'
          message='Buy me beer Buy me beer Buy me beer Buy me beer Buy me beer Buy me beer Buy me beer Buy me beer'
          enableClose={true}
          handleClickCloseButton={() => {}}
          wallets={{
            'BTC': 'XZX3S2D2DS',
            'ETH': 'XZX3SdsD2DS',
            'LTC': 'SDDS98989SHDS',
            'XRP': 'AD9DSI0DSIJDAI',
            'TRX': 'AD9DSI0DSIJDAI',
            'LSK': 'AD9DSI0DSIJDAI',
          }}
        />
        <h1>DonateCrypto</h1>
        <h2>Turn website donatable</h2>
      </div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('content'))

if (module.hot)
  module.hot.accept()
