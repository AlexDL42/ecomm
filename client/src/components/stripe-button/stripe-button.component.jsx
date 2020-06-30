import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100; //price in cents
    const publishableKey = 'pk_test_nHJi5AB5XSYYorczbIlvLpow008wt0Jgw0';

    const onToken = token => {
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token
            }
        }).then(response => {
            alert('Payment succesful')
        }).catch(error => {
            alert(
                'There was an issue with your payment. Please make sure you use the provided credit card.'
            )
        })
    };

    return (
        <StripeCheckout
            label='Pay Now'
            name='ecomm test'
            billingAddress
            shippingAddress
            image='https://upload.wikimedia.org/wikipedia/commons/b/bd/Test.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Nowww'
            token={onToken} // token is the 'on success' call
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;