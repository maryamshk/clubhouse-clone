import React from "react";
import style from "../style/phoneConfirm.module.css";
import { Link } from "react-router-dom";

export default function CodeConfirm() {
    return (
        <div className={style.phoneConfirmContainer}>
            <Link exact to="/" className={style.backBtn}>
                <img src="/images/left.png" alt="" />
            </Link>
            <div className="text-center">
                <h1 style={{ width: "100%", maxWidth: "200px", marginBottom: "1em" }}>
                    Enter the code we just texted you
                </h1>
                <input
                    type="text"
                    style={{
                        width: "100%",
                        border: "none",
                        textAlign: "center",
                        outline: "none",
                    }}
                />
                <p className="mt-2">
                    Didn't receive it? <span>Tap to resend.</span>
                </p>
            </div>
            <Link
                exact
                to="/allow_notification"
                className="primaryBtn d-flex align-items-center"
            >
                Next <img src="/images/rightt.png" className="ml-1 align-items-center" style={{ width: "13px", height: "13px", marginLeft: "7px" }}></img>
            </Link>
        </div>
    );
}
