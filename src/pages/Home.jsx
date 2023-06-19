import React from 'react';
import { Link } from 'react-router-dom';
import { BiArrowToBottom } from "react-icons/bi";
import { LuContact } from "react-icons/lu";
import { BsBoxArrowInUpRight } from "react-icons/bs";

const PDF_FILE_URL = 'https://webportfolio-git-main-canecaimmanuel.vercel.app/immanuel_caneca_cv.pdf';
// const PDF_FILE_URL = 'http://localhost:5173/immanuel_caneca_cv.pdf'; //for my checking

function Home() {
    const downloadFileAtUrl = (url) => {
        fetch(url)
            .then((response) => response.blob())
            .then((blob) => {
                const blobURL = window.URL.createObjectURL(new Blob([blob]))
                const fileName = url.split("/").pop();
                const aTag = document.createElement('a');
                aTag.href = blobURL;
                aTag.setAttribute("download", fileName);
                document.body.appendChild(aTag);
                aTag.click();
                aTag.remove();
            })
    };

    //Other option if any case
    // const downloadFileAtUrl = (url) => {
    //     const fileName = url.split("/").pop();
    //     const aTag = document.createElement("a");
    //     aTag.href = url;
    //     aTag.setAttribute("download", fileName);
    //     document.body.appendChild(aTag);
    //     aTag.click();
    //     aTag.remove();
    // };

    return (
        <div className="">
            <div className="container">
                <div className="row mt-5">
                    <div className="col-md-6">
                        <img className='img-fluid hero-img' src={'hero-img.png'} alt="" />
                    </div>
                    <div className="col-md-1"></div>
                    <div className="col-md-5 hero-text">
                        <h1 className='fw-bold'>Making a Simple and Professional Looking Website.</h1>
                        <br />
                        <p className='fs-4 text-muted mt-2'> I am a passionate and dedicated <span className=" fw-bold ">Junior Web Developer</span>  with a keen eye for design and a love for coding. </p>
                        <br />
                        <div className="d-flex hero-btn">
                            <button onClick={() => { downloadFileAtUrl(PDF_FILE_URL) }} type="button" className="btn btn-dark px-4 fs-5">Resume  <BiArrowToBottom /></button>
                            <a href="mailto:immancaneca@gmail.com" className='text-decoration-none btn btn-light fs-5'>Contact <LuContact /></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="project-body row mt-5">
                <div className="project col-md-6">
                    <h1>Recent Projects</h1>
                </div>
                <div className="col-md-6 button">
                    <Link to={'/project'} className='btn-reuse'> <span></span><BsBoxArrowInUpRight /> View all </Link>
                </div>
            </div>

            <div className="container mt-5">
                <div className="row proj-grid bg-dark">
                    <a href='http://localhost:5173/project' className="proj-img col-12">
                        <img className='zoom img-fluid my-auto' src={'hp1.png'} alt="" />
                        <div className="content">
                            <p className="bg-secondary px-2 fs-5 rounded">JPI Website</p>
                        </div>
                        <p className="num1 fs-5 content-num">01</p>
                    </a>
                </div>
            </div>

            <div className="row">
                <a href="" className="grid col-md-6 mt-4">
                    <div className="img-wrapper bg-dark">
                        <img src={"proj1.png"} alt="" className="zoom" />
                        <p className="bg-secondary px-2 fs-5 rounded content">B.Shop</p>
                        <p className="fs-5 content-num">02</p>
                    </div>
                </a>
                <a href="" className="grid col-md-6 mt-4">
                    <div className="img-wrapper bg-dark">
                        <img src={'proj3.png'} alt="" className="zoom" />
                        <p className="bg-secondary px-2 fs-5 rounded content">Kopitime</p>
                        <p className="fs-5 content-num">03</p>
                    </div>
                </a>
            </div>

            <div className="project-body row margin">
                <div className="project col-md-6">
                    <h1>Technology Stack</h1>
                </div>
                <div className="col-md-6 button">
                    <Link to={'/about'} className='btn-reuse'> <span></span><BsBoxArrowInUpRight /> View about </Link>
                </div>
            </div>

            <div className="stack card-list">

                <div className="stack">
                    <img className='img-fluid' src={'bootstrap.png'} alt="" />
                </div>

                <div className="stack">
                    <img className='img-fluid' src={'mysql.png'} alt="" />
                </div>

                <div className="stack">
                    <img className='img-fluid' src={'php.png'} alt="" />
                </div>

                <div className="stack">
                    <img className='img-fluid' src={'react.png'} alt="" />
                </div>

                <div className="stack">
                    <img className='img-fluid' src={'firebase.png'} alt="" />
                </div>

                <div className="stack">
                    <img className='img-fluid' src={'laravel.png'} alt="" />
                </div>

                <div className="stack">
                    <img className='img-fluid' src={'nodejs.png'} alt="" />
                </div>

                <div className="stack">
                    <img className='img-fluid' src={'figma.png'} alt="" />
                </div>

                <div className="stack">
                    <img className='img-fluid' src={'html.png'} alt="" />
                </div>

                <div className="stack">
                    <img className='img-fluid' src={'css.png'} alt="" />
                </div>

                <div className="stack">
                    <img className='img-fluid' src={'js.png'} alt="" />
                </div>

                <div className="stack">
                    <img className='img-fluid' src={'postman.png'} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Home