import React from 'react'
import { Header } from './Header'
import { useState, useEffect } from 'react';
import './styles.css';
import { CircularProgressbar } from 'react-circular-progressbar';


const Telegram = (props) => {
    const [isLightTheme, setIsLightTheme] = useState(false);
    const [countDownTimer, setCountDownTimer] = useState(60);
    useEffect(() => {
        if (countDownTimer == 0) setCountDownTimer(60);
        countDownTimer > 0 && setTimeout(() => setCountDownTimer(countDownTimer - 1), 1000);
    }, [countDownTimer])
    const onThemeButtonClick = () => {
        setIsLightTheme(!isLightTheme)

    };
    const [dropdownOpenCurrency, setDropdownOpenCurrency] = useState(false);
    const [dropdownOpenAsset, setDropdownOpenAsset] = useState(false);
    const toggleCurrency = () => setDropdownOpenCurrency(prevState => !prevState);
    const toggleAsset = () => setDropdownOpenAsset(prevState => !prevState);
    return (
        <div style={{ height: '120vh' , marginBottom:"-46px"}} className={("theme-") + (isLightTheme ? "light" : "dark")}>
            <div style={{ padding: "20px 30px 0px" }}>
                <div className=" align-items-center justify-content-sm-center row">
                    <div className="text-center-sm col-12 col-sm-7 col-md-5 col-lg-4">
                        <a href="/">
                            <div className="padding-none text-center-xs col-12 col-sm-12 col-md-11 col-lg-11">
                                <img src="hodlinfo_logo.png" class="fiat-logo" style={{ padding: "10px" }} />
                            </div>
                        </a>
                        <p className="col-12 text-center-xs" style={{ fontFamily: "Oswald, sans-serif", marginTop: "-18px", opacity: "0.8", fontSize: "18px", color: "gray" }}>Powered By <a class="footer-text-link" rel="nofollow" target="_blank" href="https://www.finstreet.in/" style={{ color: "rgb(61, 198, 193)" }}> Finstreet </a>
                        </p>
                    </div>
                    <div className="text-center padding-none col-12 col-sm-12 col-md-2 col-lg-4">


                    </div>
                    <div className="right-header col-12 col-sm-12 col-md-5 col-lg-4">
                        <div className="d-inline-flex flex-wrap align-items-center justify-content-center">




                            <div className="margin-10 d-inline-block">
                                <label className="switch">
                                    <input type="checkbox" checked={!props.isLightTheme} onChange={props.onThemeButtonClick} />
                                    <span className="slider round"></span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div  style={{textAlign:"center"}} className="main__tel">
            <h1>Connect Telegram</h1>
            <h2>Add bot to your group</h2>
            <h3>Manual :</h3>
            <p>1. Open the telegram app. <br />
2. Open the group you want to add the bot to. <br />
3. Click on add members in group settings.   <br />
4. Search @HodlInfoBot and click it.  <br /></p>
            <h3>Automatic</h3>
            <p>Go to : https://t.me/HodlInfoBot?startgroup=true</p><br /><br /><br />
            <h3>Chat with the bot</h3>
            <p>Manual : <br />
1. Open the telegram app. <br />
2. Click on new message button.<br />
3. In search bar type HodlInfoBot.<br />
4. Click on @HodlInfoBot.<br /></p>
<h3>Automatic</h3>
<p>Go to : https://t.me/HodlInfoBot</p>


            </div>

            <div style={{borderTop: "1px solid #ccc"}} className="d-flex align-items-center text-center">
                <div className="footer-text">Copyright © 2019</div>
                <div className="footer-text">HodlInfo.com</div>
                <div className="footer-text">Developed By <a rel="nofollow" href="https://www.quadbtech.com" target="_blank" style={{color:"#3dc6c1"}}> QuadBTech</a></div>
                <div className="footer-text pointer" style={{ "marginLeft": "auto" }}>
                    <a href="mailto:support@hodlinfo.com" class="footer-text-link">Support</a>
                </div>
            </div>



        </div>

    )
};

export default Telegram
