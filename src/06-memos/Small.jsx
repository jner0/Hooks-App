import {memo} from 'react';
export const Small = React.memo(({value}) => {

    console.log('Me volvi a dibujar');
    console.log('addsaasd')
  return (
    <small>{ value }</small>
  )
})
