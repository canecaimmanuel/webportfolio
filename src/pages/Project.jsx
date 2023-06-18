import React from 'react';

function Project() {
    return (
        <div className='row'>
            <div className="page ">
                <div className="title col-md-12">
                    <h1>Projects</h1>
                </div>
            </div>

            <a href="" className="grid col-md-6 mt-4">
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
            <a href="" className="grid col-md-6 mt-4">
                <div className="img-wrapper bg-dark">
                    <img src={'proj4.png'} alt="" className="zoom" />
                    <p className="bg-secondary px-3 py-1 fs-5 rounded content">Code Combat</p>
                    <p className="fs-5 content-num">04</p>
                </div>
            </a>


        </div>
    )
}

export default Project