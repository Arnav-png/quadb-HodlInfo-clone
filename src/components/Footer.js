import React from 'react';
import './styles.css'


export function Footer() {

        return(<>
<div className="footer">
            <div className="d-flex align-items-center text-center">
                <div className="footer-text">Copyright © 2019</div>
                <div className="footer-text">HodlInfo.com</div>
                <div className="footer-text">Developed By <a rel="nofollow" href="https://www.quadbtech.com" target="_blank" style={{color:"#3dc6c1"}}> QuadBTech</a></div>
                <div className="footer-text pointer" style={{ "marginLeft": "auto" }}>
                    <a href="mailto:support@hodlinfo.com" class="footer-text-link">Support</a>
                </div>
            </div>
</div>
        <div className="d-flex justify-content-center" style={{border:"solid 1px #191d28","backgroundColor":"#191d28",position:"fixed",left:"0","alignItems":"center",width:"100vw",height:"47px",bottom:"0","zIndex":"8",fontFamily:'sans-serif',fontSize:16,letterSpacing:0,fontStyle:'normal',fontWeight:400,}}><button className="add-button btn btn-outline-info" style={{display: "block"}}>Add hodlinfo to home screen</button></div>

</>
        )
    }
