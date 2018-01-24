import React from 'react'
import PropTypes from 'prop-types'

import classes from './DonateCrypto.scss'
import currencies from '../currencies.json'
import DonateCryptoHeader from '../DonateCryptoHeader'
import DonateCryptoWallet from '../DonateCryptoWallet'
import DonateCryptoButton from '../DonateCryptoButton'


const generate = ({ symbol, address }) => {
  if (!currencies[symbol]) {
    throw new Error(`This symbol "${symbol}" is not supported. Please add "/src/".`)
  }
  return {
    symbol,
    address,
    fullName: currencies[symbol],
  }
}

export default class DonateCrypto extends React.Component {

  static propTypes = {
    ownerName: PropTypes.string.isRequired,
    ownerImgUrl: PropTypes.string,
    message:  PropTypes.string,
    wallets: PropTypes.array.isRequired,
    handleClickCloseButton: PropTypes.func,
    enableClose: PropTypes.bool,
  }

  static defaultProps = {
    ownerImgUrl: 'https://shellter-static.s3.amazonaws.com:443/static/img/default_user.jpg',
    ownerName: 'Owner name is required',
    message: 'Donate to keep my activity',
  }

  state = {
    selectedCurency: ''
  }

  handleClickCurrencyButton = (symbol) => {
    this.setState({
      selectedCurency: symbol,
    })
  }

  handleClearSelectedCurrency = () => {
    this.setState({
      selectedCurency: null,
    })
  }

  render() {
    const {
      ownerName,
      ownerImgUrl,
      message,
      wallets,
      enableClose,
      handleClickCloseButton,
    } = this.props

    const walletsMapped = {}
    Object
    .keys(wallets)
    .map(symbol => ( generate({ symbol, address: wallets[symbol] }) ))
    .forEach(wallet => {
      walletsMapped[wallet.symbol] = wallet
    })


    const selectedWallet = walletsMapped[this.state.selectedCurency]
    return (
      <div className={classes.element}>
        <DonateCryptoHeader
          ownerName={ownerName}
          ownerImgUrl={ownerImgUrl}
          message={message}
          enableClose={enableClose}
          handleClickCloseButton={handleClickCloseButton}
        />
        <div className={classes.body}>
        {selectedWallet ?
          <DonateCryptoWallet
            wallet={selectedWallet}
            handleClearSelectedCurrency={this.handleClearSelectedCurrency}
          /> :
          <div className={classes.sectionButtons}>
            {Object.keys(walletsMapped).map(symbol => (
              <DonateCryptoButton
                key={symbol}
                symbol={symbol}
                handleClickCurrencyButton={() => this.handleClickCurrencyButton(symbol)}
              />
            ))}
          </div>
        }
        </div>
      </div>
    )
  }
}
