import React from 'react';
import {useHistory} from 'react-router-dom';
import './subtotal.css';
import CurrencyFormat from 'react-currency-format';
import {useStateValue} from './StateProvider';
import { getBasketTotal } from './reducer';

function Subtotal(){
  const history = useHistory();
  const [{ basket, user }, dispatch] = useStateValue();
    return(
        <div className="subtotal">
             <CurrencyFormat 
                renderText={(value) => (
                   <div>
                        <p>
                                Subtotal ({basket.length} items): <strong>{value}</strong>
                        </p> 
                        <small className="subtotal__gift">
                                <input type="checkbox"/>This order contains a gift
                        </small>
                  </div>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)} //part of homework
                displayType={'text'}
                thousandSeparator={true}
                prefix={'$'}
            />

          <button onClick={e => user ? history.push('/payment'): history.replace('/login') }><p>Proceed to Checkout</p></button>
        </div>

    )
}

export default Subtotal