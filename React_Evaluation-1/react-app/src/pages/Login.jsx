import React, { useEffect, useRef, useState, useContext } from "react";
import {
  Container,
  Heading,
  Input,
  Button,
  VStack,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContextProvider";
import Loading from "../components/Loading";
import Error from "../components/Error";


const Login = () => {
  const inputRef = useRef();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const {authDetails,  login } = useContext(AuthContext);

  async function handleLogin() {
    setLoading(true);
    try {
      const loginData = {
        email,
        password,
      };
      console.log(loginData);

      const res = await axios({
        method: "post",
        url: "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/login",
        data: loginData,
      });

      if (res?.status == 200) {
        login(res?.data?.token, email);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setError(true);
      setLoading(false);
    }
  }

  if(loading){
    <Loading />
  }
  if(error){
    <Error />
  }

  if(authDetails.isAuthenticated){
    navigate('/')
  }

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <Container m={6} maxW="600px">
      <Heading textAlign="center" as="h2" size="2xl">
        Login Page
      </Heading>
      <VStack m={6} spacing={6}>
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          ref={inputRef}
          placeholder="Enter Email"
        />
        <Input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter Password"
        />
        <Button size="lg" onClick={handleLogin}>
          <Text fontWeight={700} fontSize="2xl">
            Login
          </Text>
        </Button>
      </VStack>
    </Container>
  );
};

export default Login;
