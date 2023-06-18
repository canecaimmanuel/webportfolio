import React from 'react';

function About() {
    return (
        <div className='row'>
            <div className="page ">
                <div className="title col-md-12">
                    <h1>About</h1>
                </div>
                <div className="sub-title">
                    <p>Hi! I'm a web developer I can work either as a front-end web developer or back-end web developer. </p>
                </div>
            </div>
            <div className="col-md-4 mt-5 fs-3">
                <p className='fw-bold'>Contact</p>
                <p>If you're interested in discussing a potential collaboration, have any questions, or simply want to connect, feel free to reach out to me through my <a className='text-dark' href="mailto:immancaneca@gmail.com">email</a>.</p>

                <div className="card mt-5">
                    <div className="card-header">
                        <h3 className='fw-bold text-secondary'>Certification</h3>
                    </div>
                    <div className="card-body">
                        <p className='text-muted'>I am a batch WD63 in KodeGo Boothcamp under Web Development Program.</p>
                    </div>
                </div>
            </div>

            <div className="about-content col-md-8 fs-3 mt-5">
                <p>
                    I'm a passionate and dedicated junior developer. I'm thrilled to embark on a journey of continuous learning and growth in the world of web development.

                    As a junior developer, I bring a strong foundation in programming principles, problem-solving skills, and a genuine curiosity to explore new technologies. My goal is to contribute to dynamic and innovative projects while expanding my expertise in full-stack web development.

                    I am eager to contribute my skills, enthusiasm, and dedication to a team that shares my passion for creating impactful web applications. I'm open to new challenges and excited to work alongside experienced professionals to further enhance my abilities.

                    <br /><br />

                    <span>Skills:</span>
                    <br /><br />
                    <span>Front-end:</span> I have experience with HTML, CSS, and JavaScript, as well as modern frameworks like React. I enjoy crafting intuitive user interfaces and implementing responsive designs to create engaging web experiences.
                    <br /><br />
                    <span>Back-end:</span> I have a solid understanding of server-side programming using Node.js and I'm comfortable with database management using MySQL.
                    <br /><br />
                    <span>Version Control:</span> I am proficient in using Git for version control and collaborating with teams effectively.
                    During my educational journey and personal projects in KodeGo, I've had the opportunity to work on various web applications, allowing me to gain hands-on experience and a deep understanding of the development process. I thrive in a collaborative environment and value teamwork, communication, and continuous learning.
                </p>
            </div>
        </div>

    )
}

export default About;