import react from 'react';
import style from "../style/welcome.module.css"
import { Link } from 'react-router-dom'; //allow us to navigate bw pages w/o having any kind of refresh



export default function Welcome() {
    return (
        <div className={style.WelcomeContainer}>
            <h1>Welcome!</h1>
            <div className={style.WelcomeInfo}>
                <p>
                    We're working hard to get clubhouse ready for everyone! While we wrap up the finishing touches, we're adding people gradually to make sure nothing breaks.
                </p>
                <p>
                    Anyone can join with an invite from an existing user - or reserve your username and we'll text you if you have a friend on the app who can let you in. We are so grateful you're here and can't wait to have you join!
                </p>
                <p>Paul, Rohan & the Clubhouse team</p>
            </div>

            <div className={style.actionBtn}>
                <Link
                    exact
                    to="/invite"
                    className='primaryBtn d-flex align-items-center mb-3'>
                    Get your username{" "}
                </Link>
                <Link>Have an invite text? Sign in</Link>
            </div>
        </div>
    );
}