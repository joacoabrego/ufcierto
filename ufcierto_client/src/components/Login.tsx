import React from "react";
import axios, { AxiosError } from "axios";
import UfContainer from "./UfContainer";
import { useForm } from "@mantine/form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  TextInput,
  Button,
  Group,
  Box,
  PasswordInput,
  Center,
  Space,
  Alert,
} from "@mantine/core";

const Login = () => {
  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });
  const saveJwt = (response) => {
    localStorage.setItem("jwt_token", response.data.access_token);
  };
  const handleSubmit = async (values: any) => {
    try {
      const response = await axios.post("http://localhost:3030/auth/login", {
        email: values.email,
        password: values.password,
      });
      saveJwt(response);
    } catch (error: any | AxiosError) {
      if (axios.isAxiosError(error)) {
        if (error.response) {
          toast(
            <Alert title="Oops!" color="red">
              Your email or password is incorrect
            </Alert>,
            { style: { backgroundColor: "#FFF5F5", padding: 5 } }
          );
        }
      }
    }
  };
  return (
    <UfContainer>
      <Box sx={{ width: 300 }} mx="auto">
        <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
          <Box
            sx={{
              maxWidth: 300,
              backgroundColor: "#006D7B",
              padding: 20,
              borderRadius: 10,
            }}
          >
            <TextInput
              label="Email"
              labelProps={{ style: { color: "white" } }}
              placeholder="your@email.com"
              {...form.getInputProps("email")}
            />
            <Space h={"sm"} />
            <PasswordInput
              label="Password"
              labelProps={{ style: { color: "white" } }}
              {...form.getInputProps("password")}
            />
          </Box>
          <Group position="center" mt="xl">
            <Button size="md" type="submit">
              login
            </Button>
          </Group>
        </form>
      </Box>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnHover
      />
    </UfContainer>
  );
};

export default Login;
