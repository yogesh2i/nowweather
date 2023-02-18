import React from 'react';

import img from '../loading.png';

function Spinner() {
  return (
    <div style={{textAlign:'center',verticalAlign:'center',position:'relative'}}>
     <img src={img} alt="Loading..."style={{width:'2rem',height:'2rem'}} />
    </div>
  )
}

export default Spinner
