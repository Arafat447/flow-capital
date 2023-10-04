import React from 'react';
import world_map from "../../assets/world_map.png";


const WorldMapAndEmail = () => {
    return (
        <>
             <section className="pb-4">
                <img style={{ width: "100%" , maxHeight:"450px"}} src={world_map} className="img-fluid"  alt="image" border="0" />
            </section>

            <section className="pt-3 pb-4">
                <div className="container mail__phone__bg">
                    <div className="row g-3">
                        <div className="col-md-5">
                            <p className="txt__p">
                                <span className="mail__phone__txt">EMAIL: </span>
                                <span className="mail__phone__txt__span" onClick={() => { window.location.href = 'mailto:EMAIL: INFO@SHELLEYGLOBAL.COM' }}>INFO@SHELLEYGLOBAL.COM</span>
                            </p>
                        </div>
                        <div className="col-md-7">
                            <p className="txt__p">
                                <span className="mail__phone__txt">PHONE: </span>
                                <span className="mail__phone__txt__span"> +1 888 415 2440 (USA, CANADA),  +61 2 804 662 30 (AUSTRALIA)</span>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default WorldMapAndEmail;