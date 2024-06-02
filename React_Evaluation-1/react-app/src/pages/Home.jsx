import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Grid, HStack, Select } from "@chakra-ui/react";
import ProductCard from "../components/ProductCard";
import Error from "../components/Error";
import Loading from "../components/Loading";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [sortValues, setSortValues] = useState("");
  const [filterValues, setFilterValues] = useState("");

  async function getProducts() {
    const queryParams = {};

    if(sortValues){
      queryParams.sort="price";
      queryParams.order=sortValues;
    }

    if(filterValues){
      queryParams.filter=filterValues;
    }

    setLoading(true);
    try {
      const res = await axios({
        method: "get",
        url: "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products",
        params:queryParams
      });
      setProducts(res?.data?.data);
    } catch (error) {
      console.log(error);
      setError(true);
      setLoading(false);
    }
  }

  useEffect(() => {
    getProducts();
  }, [sortValues, filterValues]);

  if (loading) {
    <Loading />;
  }

  if (error) {
    <Error />;
  }

  return (
    <Container maxW={"container.lg"}>
      <HStack>
        <Select
          value={sortValues}
          onChange={(e) => setSortValues(e.target.value)}
          placeholder="Sort by Price"
        >
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </Select>
        <Select value={filterValues} onChange={(e)=> setFilterValues(e.target.value)} placeholder="Filter by Category">
          <option value="men">Men</option>
          <option value="women">Women</option>
          <option value="kids">Kids</option>
          <option value="homedecor">Home Decor</option>
        </Select>
      </HStack>
      <Grid
        gap={10}
        templateColumns={{
          base: "repeat(1,1fr)",
          md: "repeat(2,1fr)",
          lg: "repeat(3,1fr)",
        }}
      >
        {products.map((ele, i) => {
          return <ProductCard {...ele} key={i} />;
        })}
      </Grid>
    </Container>
  );
};

export default Home;
