import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import adeeb from "./adeeb.jpg";
import lund from "./lund.jpeg";
import computerGif from "./computergif.gif";
import "./heroSection.css";

const summaryData = [
  "Summary 1: Brief description of the first summary.",
  "Summary 2: Brief description of the second summary.",
  "Summary 3: Brief description of the third summary.",
  // Add more summaries as needed
];

const HeroSection = () => {
  const controls = useAnimation();
  const [summaryRefs, setSummaryRefs] = useState([]);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            controls.start('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (summaryRefs.length > 0) {
      summaryRefs.forEach((ref) => {
        observer.observe(ref);
      });
    }

    return () => {
      if (summaryRefs.length > 0) {
        summaryRefs.forEach((ref) => {
          observer.unobserve(ref);
        });
      }
    };
  }, [summaryRefs, controls]);

  useEffect(() => {
    const overlay = document.getElementById('overlay');
    overlay.style.animation = 'slide-out 1s forwards';
  }, []);

  const summaryVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <div className="hero">
      <div id="overlay"></div>
      <motion.div 
        className="title"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="name-container">
          <motion.img 
            className="adeebPic" 
            src={adeeb} 
            alt="Adeeb Al-Adhami"
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5 }}
          />
          <motion.h1 
            className="name"
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Adeeb Al-Adhami
            <motion.h3 
              className="masters"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Master of Science in Electrical Engineering, Business & Innovation
            </motion.h3>
          </motion.h1>
        </div>
      </motion.div>
      <div className="description">
        <motion.img 
          src={computerGif} 
          alt="Computer Animation"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        />
        <motion.div 
          className="Summary"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h1>Summary</h1>
          <div className="summary-container">
            {summaryData.map((summary, index) => (
              <motion.div
                key={index}
                className="summary-box"
                ref={(element) => {
                  summaryRefs[index] = element;
                  setSummaryRefs([...summaryRefs]);
                }}
                initial="hidden"
                animate={controls}
                variants={summaryVariants}
              >
                {summary}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      <div className="finish-summary">
        <h1>Who I am</h1>
        <div className="summary-container">
          {summaryData.map((summary, index) => (
            <motion.div
              key={index}
              className="summary-box"
              ref={(element) => {
                summaryRefs[index + summaryData.length] = element;
                setSummaryRefs([...summaryRefs]);
              }}
              initial="hidden"
              animate={controls}
              variants={summaryVariants}
            >
              {summary}
            </motion.div>
          ))}
        </div>
      </div>
      <div className="gallery">
        <div className="box">Box 1</div>
        <br/>
        <br/>
        <br/>
        <div className="box">Box 2</div>
        <br/>
        <br/>
        <div className="box">Box 3</div>
        <br/>
        <br/>
        <div className="box">Box 4</div>
        <br/>
      </div>
      <section>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <h1 className="CV">My PDF CV</h1>
        <br/>
        <a href=""><button className="button-28" role="button">Download</button></a>
        <div className='air air1'></div>
        <div className='air air2'></div>
        <div className='air air3'></div>
        <div className='air air4'></div>
      </section>
    </div>
  );
}

export default HeroSection;


