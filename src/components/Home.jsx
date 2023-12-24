import "../styles/Home.css"

export default function Home(){
    return(
        <section className="Home" id="home">
            <div className="main">
                <div className="main-text-area">
                    <h1>Front-End <br/> Developer</h1>
                    <p>Hi, I am Swetanshu Singh. A passionate Front-end <br/> Developer based in Jaipur, Rajasthan.</p>
                    <span className="icons">
                    <a href="https://www.linkedin.com/in/swetanshu-singh-a06642226/"><i class="ri-linkedin-box-line"></i></a>
                    <a href="https://github.com/SwetanshuSingh"><i class="ri-github-line"></i></a>
                    </span>
                </div>
                <div className="main-img-area">
                    <img src="/images/profile3.jpg" alt="profile" />
                </div>
            </div>

            <div className="skills">
                <h3>Tech Stack</h3>
                <p>|</p>
                <div className="skills-icon">
                <img src="https://skillicons.dev/icons?i=html,css,js" />
                </div>
                <div className="skills-icon">
                <img src="https://skillicons.dev/icons?i=react,tailwind,next" />
                </div>
            </div>
        </section>
    )
}