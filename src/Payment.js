import React, {useState, useEffect} from 'react';
import './Payment.css'
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import {Link, useHistory} from 'react-router-dom';
import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import {getBasketTotal} from './reducer';
import axios from './axios';
import {db} from './firebase';

function Payment(){
    const [{basket, user}, dispatch] = useStateValue();
    const history = useHistory();

    const stripe = useStripe();
    const elements = useElements();
     
    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState('');

    useEffect(() => {

        //generate the special stripe secret which allows us to charge a costumer
        const getClientSecret = async () => {
            //axios is a way to make post requests and get requests
            const response = await axios({
                method: 'post',
                //Stripe expects the total in a curreencies subunits
                url: `/payments/create?total=${getBasketTotal(basket) * 100}`
            });
            setClientSecret(response.data.clientSecret)
        }
        getClientSecret();
    }, [basket])
    const handleSubmit = async e => {
       e.preventDefault();//to prevent page refresh after submitting form
       setProcessing(true);//prevents from clicking the buy Now button mutiple times
        const payload = await stripe.confirmCardPayment(clientSecret, {payment_method: {
            card: elements.getElement(CardElement)
        }}).then(({paymentIntent}) =>{
            //paymentIntent = payment confirmation
            db.collection('users').doc(user?.uid).collection('orders').doc(paymentIntent.id).set({
                basket: basket,
                amount: paymentIntent.amount,
                created: paymentIntent.created
            });

            setSucceeded(true);
            setError(null);
            setProcessing(false)

            dispatch({
                type: 'EMPTY_BASKET'
            });
            history.replace('/orders')
        })
    }
    const handleChange = e => {
         //listen for changes in the CardElement
        //and display any errors as the customer types their card details
        setDisabled(e.empty);
        setError(e.error ? e.error.message : "");
    }
    const userLoggedIn = () => { if(!user) history.push('./login');}
    return(
        <div className='payment'>
                <div className='payment__container'>
                        <h1>
                            Checkout (<Link to='/checkout'>{basket?.length} items</Link>)
                        </h1>
                        <div className='payment__section'>
                            <div className='payment__title'>
                                    <h3>Delivery Address</h3>
                            </div>

                            <div className='payment__address'>
                                    <p>{user ? user.email : 'Guest'}</p>
                                    <p>123, React lane</p>
                                    <p>Lagos, Nigeria</p>
                            </div>
                        </div>

                        <div className='payment__section'>
                                <div className='payment__title'>
                                        <h3>Review Items in Delivery</h3>
                                </div>
                                <div className='payment__items'>
                                        {basket.map(item => (<CheckoutProduct
                                            id = {item.id}
                                            title= {item.title}
                                            image= {item.image}
                                            price= {item.price}
                                            rating= {item.rating}
                                            />
                                        ))}
                                </div>
                        </div>

                        <div className='payment__section'>
                            <div className='payment__title'>
                                  <h3>Payment Method</h3>
                            </div>
                            
                            <div className='payment__details'>
                                 <form onSubmit={handleSubmit}>
                                     <CardElement onChange={handleChange}/>
                                    
                                     <div className='payment__priceContainer'>
                                     <CurrencyFormat 
                                     renderText={(value) => (
                                        
                                             <h3>Order Total: {value}</h3>
                                     )}
                                     decimalScale={2}
                                     value={getBasketTotal(basket)} //part of homework
                                     displayType={'text'}
                                     thousandSeparator={true}
                                     prefix={'$'}
                                    />
                                    <div onClick={userLoggedIn}>
                                        <button disabled={processing || disabled || succeeded}>
                                            <span>{processing ? <p>Processing</p>: "Buy Now"}</span>
                                        </button>
                                    </div>
                              
                                </div>

                                {error && <div>{error}</div>}
                                </form>
                            </div>
                        </div>
                </div>
        </div>
    )
}

export default Payment;