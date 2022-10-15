import React, { useState, useEffect } from "react";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../assets/images/hero-img.png";
import "../styles/home.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Service from "../services/Service";
import ProductList from "../components/UI/ProductList";
import products from "../assets/data/products";
import counterImg from '../assets/images/counter-timer-img.png'
import Clock from "../components/UI/Clock";

const Home = () => {
  const year = new Date().getFullYear();
  const [trendingProducts, setTrendingProducts] = useState([]);
  const [bestsalesProducts, setBestSalesProducts] = useState([]);
  const [mobilesProducts, setMobilesProducts] = useState([]);
  const [wiressProducts, setWiressProducts] = useState([]);
  const [popularProducts, setPopularProducts] = useState([]);

  useEffect(() => {
    const filterTrendingproducts = products.filter((item) => item.category === "chair");
    const filterBestSalesgproducts = products.filter((item) => item.category === "sofa");
    const filterMobilesProducts = products.filter((item) => item.category === "mobile");
    const filterWiressProducts = products.filter((item) => item.category === "wireless");
    const filterPopularProducts = products.filter((item) => item.category === "watch");

    setTrendingProducts(filterTrendingproducts);
    setBestSalesProducts(filterBestSalesgproducts);
    setMobilesProducts(filterMobilesProducts);
    setWiressProducts(filterWiressProducts);
    setPopularProducts(filterPopularProducts);
  }, []);

  return (
    <Helmet title={"Home"}>
      <section className="hero__section">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content">
                <p className="hero-subtitle">Trending post in {year}</p>
                <h2>Make your Interior More Minimalistic Modern</h2>
                <p>
                  n publishing and graphic design, Lorem ipsum is a placeholder
                  text commonly used to demonstrate the visual form of a
                  document or a typeface without relying on meaningful content.
                  Lorem ipsum may be used as a placeholder before final copy is
                  available.
                </p>
                <motion.button whileTap={{ scale: 1.2 }} className="buy__btn">
                  <Link to="/shop">SHOP NOW</Link>
                </motion.button>
              </div>
            </Col>

            <Col lg="6" md="6">
              <div className="hero__img">
                <img src={heroImg} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <Service />

      <section className="trending__products">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section__title">Trending Products</h2>
            </Col>
            <ProductList data={trendingProducts} />
          </Row>
        </Container>
      </section>

      <section className="best__sales">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section__title">Best Sales</h2>
            </Col>
            <ProductList data={bestsalesProducts} />
          </Row>
        </Container>
      </section>

      <section className="timer__count">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="clock__top-content">
                <h4 className="text-white fs-6 mb-2">Limited Offer</h4>
                <h3 className="text-white fs-5 mb-3">Quality Armchair</h3>
              </div>
              <Clock/>
              <motion.button whileTap={{scale:1.2}} className="buy__btn store__btn">
                <Link to="/shop">SHOP NOW</Link>
              </motion.button>
            </Col>
            <Col lg="6" md="6" className="text-end">
            <img src={counterImg} alt="" />
            </Col>
          </Row>
          </Container>
        </section>


        <section className="new__arrivals">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section__title">New Arrivals</h2>
            </Col>
            <ProductList data={mobilesProducts} />
            <ProductList data={wiressProducts} />
          </Row>
        </Container>
      </section>

        <section className="popular__category">
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h2 className="section__title">Popular Products</h2>
            </Col>
            <ProductList data={popularProducts} />
          </Row>
        </Container>
      </section>


    </Helmet>
  );
};

export default Home;
