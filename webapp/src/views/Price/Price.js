import React from 'react';
import "../../assets/css/bootstrap.min.css"
import { Button } from 'react-bootstrap';
import { Container } from "reactstrap";
import firebase from "firebase/app";
import { useAuth } from "../../contexts/AuthContext"
import getStripe from "./getStripe";
import {auth , db} from "../../firebase";

import './Price.css';

    const app = firebase.app;

    async function createCheckoutSession1() {
        const checkoutSessionRef = await db
            .collection("customers")
            .doc(firebase.auth().currentUser.uid)
            .collection("checkout_sessions")
            .add({
                price: "price_1IZcoEJB3PZCBovI2xs8GOBi",
                success_url: window.location + "/admin/price",
                cancel_url: window.location+ "/admin/price",
            })

        checkoutSessionRef.onSnapshot(async (snap) => {
            const {sessionId} = snap.data()
            if(sessionId) {
                const stripe = await getStripe()
                stripe.redirectToCheckout({ sessionId });
            }
        })
    }

    async function createCheckoutSession2() {
        const checkoutSessionRef = await db
            .collection("customers")
            .doc(firebase.auth().currentUser.uid)
            .collection("checkout_sessions")
            .add({
                price: "price_1IZcs1JB3PZCBovIPXL3pWQ9",
                success_url: window.location + "/admin/price",
                cancel_url: window.location + "/admin/price"
            })

        checkoutSessionRef.onSnapshot(async (snap) => {
            const {sessionId} = snap.data()
            if(sessionId) {
                const stripe = await getStripe()
                stripe.redirectToCheckout({ sessionId });
            }
        })
    }


    async function createCheckoutSession3() {
        const checkoutSessionRef = await db
            .collection("customers")
            .doc(firebase.auth().currentUser.uid)
            .collection("checkout_sessions")
            .add({
                price: "price_1IZcsWJB3PZCBovI1uSHvCjK",
                success_url: window.location + "/admin/price",
                cancel_url: window.location + "/admin/price",
            })

        checkoutSessionRef.onSnapshot(async (snap) => {
            const {sessionId} = snap.data()
            if(sessionId) {
                const stripe = await getStripe()
                stripe.redirectToCheckout({ sessionId });
            }
        })
    }


    const goToBillingPortal = async () => {
        // Call billing portal function
        const functionRef = app()
            .functions('europe-west1')
            .httpsCallable('ext-firestore-stripe-subscriptions-createPortalLink');
        const { data } = await functionRef({ returnUrl: window.location + "/admin/price" });
        window.location.assign(data.url);
    };

    /*
    export async function goToBillingPortal() {
    const functionRef = app
    .functions('us-central1')
    .httpsCallable('ext-firestore-stripe-subscriptions-createPortalLink');

    const { data } = await functionRef({
        returnUrl: `${window.location.origin}/account`
     });

    window.location.assign(data.url);
    }
     */


class Price extends React.Component {

    render() {
        return (
            <div
                style={{
                    backgroundImage: "url(" + require("assets/img/Home1.jpg") + ")",
                }}
            >

            <div className="maincontainer">
                <section>
                    <div class="container py-5">

                        <header class="text-center mb-5 text-white">
                            <div class="row">
                                <div class="col-lg-8 mx-auto">
                                    <h1>Subscription</h1>

                                    <p>Change your subscription here</p>
                                    <Button onClick={(e) => goToBillingPortal()}> Change Subscription </Button>

                                </div>
                            </div>
                        </header>

                        <div class="row text-center align-items-end">

                            <div className="col-lg-4 mb-5 mb-lg-0">
                                <div className="bg-white p-5 rounded-lg shadow">
                                    <h1 className="h6 text-uppercase font-weight-bold mb-4">Weekly</h1>
                                    <h2 className="h1 font-weight-bold">€10<span
                                        className="text-small font-weight-normal ml-2">/ week</span></h2>
                                    <div className="custom-separator my-4 mx-auto bg-primary"></div>
                                    <ul className="list-unstyled my-5 text-small text-left font-weight-normal">
                                        <li className="mb-3">
                                            <i className="fa fa-check mr-2 text-primary"></i> Register vehicles
                                        </li>
                                        <li className="mb-3 text-muted">
                                            <i className="fa fa-times mr-2"></i>
                                            <del>Insurance included</del>
                                        </li>
                                        <li className="mb-3 text-muted">
                                            <i className="fa fa-times mr-2"></i>
                                            <del>Fuels included</del>
                                        </li>
                                    </ul>
                                    <Button class="btn btn-primary btn-block p-2 shadow rounded-pill" onClick={(e) => createCheckoutSession1()}> Start Weekly </Button>
                                </div>
                            </div>

                            <div class="col-lg-4 mb-5 mb-lg-0">
                                <div class="bg-white p-5 rounded-lg shadow">
                                    <h1 class="h6 text-uppercase font-weight-bold mb-4">Monthly</h1>
                                    <h2 class="h1 font-weight-bold">€30<span class="text-small font-weight-normal ml-2">/ month</span></h2>
                                    <div class="custom-separator my-4 mx-auto bg-primary"></div>
                                    <ul class="list-unstyled my-5 text-small text-left font-weight-normal">
                                        <li class="mb-3">
                                            <i class="fa fa-check mr-2 text-primary"></i> Register vehicles</li>
                                        <li class="mb-3">
                                            <i class="fa fa-check mr-2 text-primary"></i> Insurance included </li>
                                        <li class="mb-3 text-muted">
                                            <i class="fa fa-times mr-2"></i>
                                            <del>Fuels included</del>
                                        </li>
                                    </ul>
                                    <Button class="btn btn-primary btn-block p-2 shadow rounded-pill" onClick={(e) => createCheckoutSession2()}> Start Monthly </Button>
                                </div>
                            </div>

                            <div class="col-lg-4">
                                <div class="bg-white p-5 rounded-lg shadow">
                                    <h1 class="h6 text-uppercase font-weight-bold mb-4">Annual</h1>
                                    <h2 class="h1 font-weight-bold">€300<span class="text-small font-weight-normal ml-2">/ year</span></h2>
                                    <div class="custom-separator my-4 mx-auto bg-primary"></div>
                                    <ul class="list-unstyled my-5 text-small text-left font-weight-normal">
                                        <li class="mb-3">
                                            <i class="fa fa-check mr-2 text-primary"></i> Register vehicles</li>
                                        <li class="mb-3">
                                            <i class="fa fa-check mr-2 text-primary"></i> Insurance included</li>
                                        <li class="mb-3">
                                            <i class="fa fa-check mr-2 text-primary"></i> Fuels included</li>
                                    </ul>
                                    <Button class="btn btn-primary btn-block p-2 shadow rounded-pill" onClick={(e) => createCheckoutSession3()}> Start Annual </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            </div>
        )
    };
}
export default Price;


/*
 */