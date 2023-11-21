import { CLIENT_ID, extractNumber } from '../../utils/util'
import React, { useState, useEffect } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import './paypal-component.css'; // Import your CSS file
import { useLocation, useNavigate } from 'react-router-dom';
import astroData from '../../mock-data/data.json';
import axios from 'axios';

const PaypalComponent = () => {
    const [show, setShow] = useState(false);
    const [success, setSuccess] = useState(false);
    const [ErrorMessage, setErrorMessage] = useState("");
    const [orderID, setOrderID] = useState(false);
    const [item, setItem] = useState({});
    const location = useLocation();
    const [user, setUser] = useState({});

    const navigate = useNavigate();

    useEffect(() => {
        const tmp = astroData.VIP_PACKAGE_DATA.find(i => i.id == location.state);
        setItem(tmp)
    }, [location.state, item])

    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem("user")))
    }, [])

    // creates a PayPal order
    const createOrder = (data, actions) => {
        return actions.order.create({
            purchase_units: [
                {
                    description: item?.type,
                    amount: {
                        currency_code: "USD",
                        value: extractNumber(item?.priceAfterDiscount)
                    },
                },
            ],
        }).then((orderID) => {
            setOrderID(orderID);
            return orderID;
        });
    };

    // check Approval
    const onApprove = (data, actions) => {
        return actions.order.capture().then(function (details) {
            const { payer } = details;
            setSuccess(true);
        });
    };

    // capture likely error
    const onError = (data, actions) => {
        setErrorMessage("An error occurred with your payment.");
    };

    useEffect(() => {
        if (success) {
            axios
                .put(`http://localhost:3001/api/updateUserVipId/${user?.id}`, { vipId: item?.id })
                .then((response) => {
                    if (response.status === 200) {
                        navigate("/payment-confirm", { state: { isPayed: true } });
                    } else {
                        console.error('Failed to update vipId');
                    }
                })
                .catch((error) => {
                    console.error('Error updating vipId', error);
                });
        }
    }, [success]); // Include user, item, and navigate in the dependency array


    return (
        item ? <PayPalScriptProvider options={{ "client-id": CLIENT_ID }}>
            <div className="product-container">
                <div className="product-info">
                    <div className="product-text">
                        <h1>Combo</h1>
                    </div>
                    <div className="product-price-btn">
                        <p>{item.type}</p>
                        <p>{item.price}</p>
                        <p>{item.priceAfterDiscount}</p>
                        <button className='buy-btn' type="submit" onClick={() => setShow(true)}>
                            Buy Now
                        </button>
                    </div>
                </div>
            </div>
            {show ? (
                <div className="paypal-container">
                    <h2>Payment</h2>
                    <PayPalButtons
                        style={{ layout: "vertical" }}
                        createOrder={createOrder}
                        onApprove={onApprove}
                        onError={onError}
                    />
                    {ErrorMessage && <p className="error-message">{ErrorMessage}</p>}
                </div>
            ) : null}
        </PayPalScriptProvider> : <></>
    );
}

export default PaypalComponent;
