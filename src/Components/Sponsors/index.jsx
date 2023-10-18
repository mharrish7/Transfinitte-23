import boeing from "../../assets/boeing.png";
import charged from "../../assets/charged.png";
import crewsphere from "../../assets/crewsphere.png";
import gfg from "../../assets/temp.png";
import tezos from "../../assets/tezos.png";
import netcon from "../../assets/netcon.png";
import abhibus from "../../assets/abhibus.png";
import pathway from "../../assets/pathway2.png";

import { motion } from "framer-motion";
import "./sponsors.css";

const Sponsors = () => {
  return (
    <>
      <section id="sponsors">
        <div className="aboutPage" id="aboutus">
          <div className="inBox">
            <div className="Box">
              <div className="text-wrapper">Sponsors</div>
              <div className="imageHolder">
              <div
                  style={{ width: "fit-content", display: "inline-block" }}
                  className="block"
                >
                  <motion.img
                    src={boeing}
                    initial={{ transform: "rotateZ(90deg)" }}
                    viewport={{ once: true }}
                    whileInView={{ transform: "rotateX(0)" }}
                    transition={{ duration: 0.5 }}
                  ></motion.img>
                </div>
                <div
                  style={{ width: "fit-content", display: "inline-block" }}
                  className="block"
                >
                  <motion.img
                    src={netcon}
                    initial={{ transform: "rotateZ(90deg)" }}
                    viewport={{ once: true }}
                    whileInView={{ transform: "rotateX(0)" }}
                    transition={{ duration: 0.5 }}
                  ></motion.img>
                </div>

                <div
                  style={{ width: "fit-content", display: "inline-block" }}
                  className="block"
                >
                  <motion.img
                    src={charged}
                    initial={{ transform: "rotateZ(90deg)" }}
                    viewport={{ once: true }}
                    whileInView={{ transform: "rotateX(0)" }}
                    transition={{ duration: 0.5 }}
                  ></motion.img>
                </div>
                <div
                  style={{ width: "fit-content", display: "inline-block" }}
                  className="block"
                >
                  <motion.img
                    src={abhibus}
                    initial={{ transform: "rotateZ(90deg)" }}
                    viewport={{ once: true }}
                    whileInView={{ transform: "rotateX(0)" }}
                    transition={{ duration: 0.5 }}
                  ></motion.img>
                </div>
                
                <div
                  style={{ width: "fit-content", display: "inline-block" }}
                  className="block"
                >
                  <motion.img
                    src={tezos}
                    initial={{ transform: "rotateZ(90deg)" }}
                    viewport={{ once: true }}
                    whileInView={{ transform: "rotateX(0)" }}
                    transition={{ duration: 0.5 }}
                  ></motion.img>
                </div>
                <div
                  style={{ width: "fit-content", display: "inline-block" }}
                  className="block"
                >
                  <motion.img
                    src={gfg}
                    style={{width : "15rem", backgroundColor : "white", marginBottom : '2rem'}}
                    initial={{ transform: "rotateZ(90deg)" }}
                    viewport={{ once: true }}
                    whileInView={{ transform: "rotateX(0)" }}
                    transition={{ duration: 0.5 }}
                  ></motion.img>
                </div>
                <div
                  style={{ width: "fit-content", display: "inline-block" }}
                  className="block"
                >
                  <motion.img
                    src={pathway}
                    style={{width : "10rem"}}
                    initial={{ transform: "rotateZ(90deg)" }}
                    viewport={{ once: true }}
                    whileInView={{ transform: "rotateX(0)" }}
                    transition={{ duration: 0.5 }}
                  ></motion.img>
                </div>
                <div
                  style={{ width: "fit-content", display: "inline-block" }}
                  className="block"
                >
                  <motion.img
                    src={crewsphere}
                    initial={{ transform: "rotateZ(90deg)" }}
                    viewport={{ once: true }}
                    whileInView={{ transform: "rotateX(0)" }}
                    transition={{ duration: 0.5 }}
                  ></motion.img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Sponsors;