import React from 'react'
import classes from './DonateCryptoHeader.scss'
import { MdClear } from 'react-icons/lib/md'

const DonateCryptoHeader = ({
  ownerName,
  ownerImgUrl,
  message,
  enableClose,
  handleClickCloseButton,
}) => {
  return (
    <div className={classes.element}>
      {enableClose && <div className={classes.iconClose} onClick={handleClickCloseButton}><MdClear /></div>}
      <div className={classes.boxImg}>
        <img src={ownerImgUrl} alt="" className={classes.img} />
      </div>
      <div className={classes.info}>
        <h3 className={classes.textOwnerName}>{ownerName}</h3>
        <h4 className={classes.textMessage}>{message}</h4>
      </div>
    </div>
  )
}

export default DonateCryptoHeader
