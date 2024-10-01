import React, { useState, useEffect } from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Typewriter from "typewriter-effect";
import { introdata, meta } from "../../content_option";
import { Link } from "react-router-dom";

export const Home = () => {
  // Step 1: Define an array of images
  const images = [
    introdata.your_1st_img_url, // First image URL
    introdata.your_2nd_img_url, // Second image URL
    introdata.your_3rd_img_url  // Third image URL
  ];

  // Step 2: Use state to track the current image index, fade class, and loading state
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fadeClass, setFadeClass] = useState("fade-in");
  const [isLoading, setIsLoading] = useState(true);
  const [loadedImages, setLoadedImages] = useState([]);

  // Step 3: Preload images and mark when all images are loaded
  useEffect(() => {
    const preloadImages = images.map((src) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = src;
        img.onload = () => resolve(src); // Resolve once the image is loaded
        img.onerror = reject; // Reject if there's an error
      });
    });

    // Wait for all images to be loaded
    Promise.all(preloadImages)
        .then((loaded) => {
          setLoadedImages(loaded);
          setIsLoading(false); // Set loading to false once all images are loaded
        })
        .catch((err) => {
          console.error("Failed to load images", err);
        });
  }, [images]);

  // Step 4: Use useEffect to change the image every second and add fade effect
  useEffect(() => {
    if (!isLoading) {
      const interval = setInterval(() => {
        setFadeClass("fade-out");

        setTimeout(() => {
          setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
          setFadeClass("fade-in");
        }, 500);
      }, 3000);

      return () => clearInterval(interval); // Cleanup the interval on component unmount
    }
  }, [isLoading, images.length]);

  // Step 5: Conditional rendering based on loading state
  if (isLoading) {
    return <div className="loader">Loading...</div>; // Show loader while loading
  }

  return (
      <HelmetProvider>
        <section id="home" className="home">
          <Helmet>
            <meta charSet="utf-8" />
            <title>{meta.title}</title>
            <meta name="description" content={meta.description} />
          </Helmet>
          <div className="intro_sec d-block d-lg-flex align-items-center ">
            {/* Step 6: Change background image based on currentImageIndex */}
            <div
                className={`h_bg-image order-1 order-lg-2 h-100 ${fadeClass}`}
                style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
            ></div>
            <div className="text order-2 order-lg-1 h-100 d-lg-flex justify-content-center">
              <div className="align-self-center">
                <div className="intro mx-auto">
                  <h2 className="mb-1x">{introdata.title}</h2>
                  <h1 className="fluidz-48 mb-1x">
                    <Typewriter
                        options={{
                          strings: [
                            introdata.animated.first,
                            introdata.animated.second,
                            introdata.animated.third,
                          ],
                          autoStart: true,
                          loop: true,
                          deleteSpeed: 10,
                        }}
                    />
                  </h1>
                  <p className="mb-1x">{introdata.description}</p>
                  <div className="intro_btn-action pb-5">
                    <Link to="/portfolio" className="text_2">
                      <div id="button_p" className="ac_btn btn ">
                        My Portfolio
                        <div className="ring one"></div>
                        <div className="ring two"></div>
                        <div className="ring three"></div>
                      </div>
                    </Link>
                    <Link to="/contact">
                      <div id="button_h" className="ac_btn btn">
                        Contact Me
                        <div className="ring one"></div>
                        <div className="ring two"></div>
                        <div className="ring three"></div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </HelmetProvider>
  );
};
