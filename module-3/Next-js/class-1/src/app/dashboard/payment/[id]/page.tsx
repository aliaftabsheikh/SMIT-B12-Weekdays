'use client'

import React from 'react'

const PaymentId = ({params, searchParams}: {params: {id: number}, searchParams: {name: string}}) => {
  return (
    <div>PaymentId : {params.id} of {searchParams.name}</div>
  )
}

export default PaymentId