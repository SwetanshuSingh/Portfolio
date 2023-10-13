import "../styles/About.css";

export default function About() {
  return (
    <section className="About">
      <div className="about-img">
        <img src="/images/about.jpg" alt="about" />
      </div>
      <div className="about-text">
        <h4>About Me</h4>
        <h3>
          A dedicated Front-end Developer <br /> based in Jaipur, Rajasthan 📍
        </h3>
        <p>
          As an aspiring Front-end Developer, I posses an impressive <br />
          skillset in HTML, CSS, JavaScript and React. I excell in designing{" "}
          <br />
          and maintaining responsive websites that offer a smooth user <br />{" "}
          experience. My expertise lies in crafting engaging interfaces <br />{" "}
          through writing clean and optimized code and utilizing cutting-edge{" "}
          <br /> development tools and techniques. I am also a team player who
          thrives in collaborating with cross-functional teams to produce
          outstanding web applications.
        </p>
      </div>
    </section>
  );
}
