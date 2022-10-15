import React from "react";
import { Container, Row, Col } from "reactstrap";
import { motion } from "framer-motion";
import "./service.css";
import serviceData from "../assets/data/serviceData";

const Service = () => {
  return (
    <section className="services">
      <Container>
        <Row>
          {serviceData.map((service, index) => (
            <Col lg="3" md="6" sm="8" key={index}>
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="service__item"
                style={{ background: `${service.bg}` }}
              >
                <span>
                  <i class={service.icon}></i>
                </span>
                <div>
                  <h4>{service.title}</h4>
                  <p>{service.title}</p>
                </div>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Service;
