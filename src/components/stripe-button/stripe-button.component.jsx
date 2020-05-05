import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100; //price in cents
    const publichableKey = 'pk_test_nHJi5AB5XSYYorczbIlvLpow008wt0Jgw0';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
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
            stripeKey={publichableKey}
        />
    );
};

export default StripeCheckoutButton;