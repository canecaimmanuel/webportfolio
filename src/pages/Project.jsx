import React from 'react';

function Project() {
    return (
        <div className='row'>
            <div className="page ">
                <div className="title col-md-12">
                    <h1>Projects</h1>
                </div>
            </div>

            <a href="https://jpiwebsite-3pr2si4sh-canecaimmanuel.vercel.app/" className="grid col-md-6 mt-4">
                <div className="img-wrapper bg-dark">
                    <img src={'proj2.png'} alt="" className="zoom" />
                    <p className="bg-secondary px-3 py-1 fs-5 rounded content">JPI Website</p>
                    <p className="fs-5 content-num">01</p>
                </div>
            </a>
            <a href="" className="grid col-md-6 mt-4">
                <div className="img-wrapper bg-dark">
                    <img src={'proj1.png'} alt="" className="zoom" />
                    <p className="bg-secondary px-3 py-1 fs-5 rounded content">B.Shop</p>
                    <p className="fs-5 content-num">02</p>
                </div>
            </a>
            <a href="" className="grid col-md-6 mt-4">
                <div className="img-wrapper bg-dark">
                    <img src={'proj3.png'} alt="" className="zoom" />
                    <p className="bg-secondary px-3 py-1 fs-5 rounded content">Kopitime</p>
                    <p className="fs-5 content-num">03</p>
                </div>
            </a>
            <a href="https://github.com/canecaimmanuel/miniproject2" className="grid col-md-6 mt-4">
                <div className="img-wrapper bg-dark">
                    <img src={'proj4.png'} alt="" className="zoom" />
                    <p className="bg-secondary px-3 py-1 fs-5 rounded content">Code Combat</p>
                    <p className="fs-5 content-num">04</p>
                </div>
            </a>
            <a href="https://github.com/canecaimmanuel/mi" className="grid col-md-6 mt-4">
                <div className="img-wrapper bg-dark">
                    <img src={'proj5.png'} alt="" className="zoom" />
                    <p className="bg-secondary px-3 py-1 fs-5 rounded content">Linkr</p>
                    <p className="fs-5 content-num">05</p>
                </div>
            </a>
            <a href="https://music-player-two-dun.vercel.app/" className="grid col-md-6 mt-4">
                <div className="img-wrapper bg-dark">
                    <img src={'proj6.png'} alt="" className="zoom" />
                    <p className="bg-secondary px-3 py-1 fs-5 rounded content">Music Player</p>
                    <p className="fs-5 content-num">06</p>
                </div>
            </a>


        </div>
    )
}

export default Project