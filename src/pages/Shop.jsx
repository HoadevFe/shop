import React from "react";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import "../styles/shop.css";
import products from "../assets/data/products";
import ProductsList from "../components/UI/ProductsList";
import { useState } from "react";
const Shop = () => {
  const [productData, setProductData] = useState([]);
  const handleFilter = (e) => {
    const valueFilter = e.target.value;
    if (valueFilter === "sofa") {
      const filteredProducts = products.filter(
        (item) => item.category === "sofa"
      );
      setProductData(filteredProducts);
    }
    if (valueFilter === "mobile") {
      const filteredProducts = products.filter(
        (item) => item.category === "mobile"
      );
      setProductData(filteredProducts);
    }
    if (valueFilter === "chair") {
      const filteredProducts = products.filter(
        (item) => item.category === "chair"
      );
      setProductData(filteredProducts);
    }
    if (valueFilter === "watch") {
      const filteredProducts = products.filter(
        (item) => item.category === "watch"
      );
      setProductData(filteredProducts);
    }
    if (valueFilter === "wireless") {
      const filteredProducts = products.filter(
        (item) => item.category === "wireless"
      );
      setProductData(filteredProducts);
    }
  };

  const handleSearch = (e) => {
    const searchValue = e.target.value;
    const searchedProduct = products.filter((item) =>
      item.productName.toLowerCase().includes(searchValue.toLowerCase())
    );
    setProductData(searchedProduct);
  };
  return (
    <Helmet title="Shop">
      <CommonSection title="Products" />

      <section>
        <Container>
          <Row>
            <Col lg="3" md="6">
              <div className="filter__widget">
                <select onChange={handleFilter}>
                  <option>Filter By Category</option>
                  <option value="sofa">Sofa</option>
                  <option value="mobile">Mobile</option>
                  <option value="chair">Chair</option>
                  <option value="watch">Watch</option>
                  <option value="wireless">Wireless</option>
                </select>
              </div>
            </Col>
            <Col lg="3" md="6" className="text-end">
              <div className="filter__widget">
                <select>
                  <option>Sort By</option>
                  <option value="ascending">Ascending</option>
                  <option value="descending">Descending</option>
                </select>
              </div>
            </Col>
            <Col lg="6" md="12">
              <div className="search__box">
                <input
                  onChange={handleSearch}
                  type="text"
                  placeholder="Search...."
                />
                <span>
                  <i className="ri-search-line"></i>
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="pt-0">
        <Container>
          <Row>
            {productData.length === 0 ? (
              <h1 className="text-center fs-4">No products are found!</h1>
            ) : (
              <ProductsList data={productData} />
            )}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Shop;
