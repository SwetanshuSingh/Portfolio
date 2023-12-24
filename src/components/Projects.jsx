import "../styles/Projects.css";

export default function Projects(){
    return (
        <section className="Projects" id="projects">
        <h4>Portfolio</h4>
        <h3>Marrying design aesthetics with web technology to produce captivating sites.</h3>

        <div className="project-one">
            <div className="one-img-area interactable">
                <a href="https://comfy-malabi-bf07cb.netlify.app">
                    <img src="/images/project-one.jpg" alt="project-pic" />
                </a>
            </div>

            <div className="one-text-area">
                <h4>E-Commerce</h4>
                <p>An ecommerce app that prioritize <br/> user-experience, making it easy for <br/> users to purchase the styles they <br/> need. 
                  It provides user interface to <br/> shop and add items to cart.</p>

                <div className="stack">
                <span className="tech">JavaScript</span>
                <span className="tech">CSS</span>
                </div>

                <div className="links">
                    <a href="https://github.com/SwetanshuSingh/NOSTRA">Code <i className="ri-github-line"></i></a>
                    <a href="https://comfy-malabi-bf07cb.netlify.app">Live Demo <i className="ri-external-link-line"></i></a>
                </div>
            </div>
        </div>
        </section>
    )
}