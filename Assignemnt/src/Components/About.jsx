import React from "react";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container" data-aos="fade-up">
        <div className="mb-10 mt-48 md:mb-16">
          <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
            About Us
          </h2>
          <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
            Lorem ipsum dolor sit amet, consectetur.
          </p>
        </div>

        <div >
          <div className="row gy-4">
            <div className="divider" >
              <div className="youtube">

              <iframe
                style={{ width: "90%", height: "350px" }}
                src="https://www.youtube.com/embed/ZV16ev0n9J8"
                title="Discover thousands of easy-to-customize templates || ZRTHEMES"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
                ></iframe>
                </div>
            
            <div className="col-lg-7 mt-10">
              <div className="content ps-0 ps-lg-5 ">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Xonsectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua.
                </p>
                <ul className="mt-10">
                  <li>
                    <i className="bi bi-1-square"></i>1. Nemo enim ipsam
                    voluptatem quia voluptas sit aspernatur aut odit aut fugit.
                  </li>
                  <li>
                    <i className="bi bi-2-square"></i>2. Sed quia consequuntur
                    magni dolores eos qui ratione voluptatem sequi nesciunt.
                  </li>
                  <li>
                    <i className="bi bi-3-square"></i>3. Neque porro quisquam est,
                    qui dolorem ipsum quia dolor sit amet.
                  </li>
                  <li>
                    <i className="bi bi-4-square"></i>4. Consectetur, adipisci
                    velit, sed quia non numquam eius.
                  </li>
                  <li>
                    <i className="bi bi-5-square"></i>5. Rempora incidunt ut
                    labore et dolore magnam aliquam quaerat voluptatem.{" "}
                  </li>
                  <li>
                    <i className="bi bi-6-square"></i>6. Sed do eiusmod tempor
                    incididunt ut labore et dolore
                  </li>
                  <li>
                    <i className="bi bi-7-square"></i>7. Enim ad minima veniam,
                    quis nostrum exercitationem ullam corporis.
                  </li>
                </ul>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
