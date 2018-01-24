import React from 'react'
import DonateCrypto from '../DonateCrypto'

describe('[Component] DonateCrypto', () => {
  xtest('renders Component', () => {
    const wrapper = shallow(
      <DonateCrypto
        ownerName='Kei Oka'
        ownerImgUrl=''
        message=''
        wallets={[{
          'ETH': 'XZX3S2D2DS',
          'BTC': 'SSIAIUA897'
        }]}
      />
    )
  })

  test('renders DonateCryptoHeader', () => {
    const wrapper = shallow(
      <DonateCrypto
        ownerName='Kei Oka'
        ownerImgUrl=''
        message=''
        wallets={{
          'ETH': 'XZX3S2D2DS',
          'BTC': 'SSIAIUA897'
        }}
      />
    )
    expect(false).toBe(true)
  })

  xtest('renders DonateCryptoButton', () => {
    expect(false).toBe(true)
  })

  xtest('renders DonateCryptoAccount after click the button', () => {
    expect(false).toBe(true)
  })

  xtest('execute function onClick and setState', () => {
    expect(false).toBe(true)
  })

  xtest('returns an error if prorps:wallets are not passed', () => {
    expect(false).toBe(true)
  })

  xtest('returns an error if prorps:wallets are not passed', () => {
    expect(false).toBe(true)
  })


})
