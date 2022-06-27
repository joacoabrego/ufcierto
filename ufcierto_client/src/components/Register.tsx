import React from "react";
import UfContainer from "./UfContainer";
import { useForm } from "@mantine/form";
import {
  TextInput,
  Button,
  Group,
  Box,
  PasswordInput,
  Center,
  Space,
} from "@mantine/core";

const Register = () => {
  const form = useForm({
    initialValues: {
      email: "",
      name: "",
      password: "",
      repeatedPassword: "",
    },
    validate: {
      email: (value) => value.length,
    },
  });
  return (
    <UfContainer>
      <Box sx={{ width: 300 }} mx="auto">
        <form onSubmit={form.onSubmit((values) => console.log(values))}>
          <Box
            sx={{
              maxWidth: 300,
              backgroundColor: "#006D7B",
              padding: 20,
              borderRadius: 10,
            }}
          >
            <TextInput
              required
              label="Email"
              labelProps={{ style: { color: "white" } }}
              placeholder="your@email.com"
              {...form.getInputProps("email")}
            />
            <Space h={"sm"} />
            <TextInput
              label="Name"
              labelProps={{ style: { color: "white" } }}
              placeholder="your name"
              {...form.getInputProps("name")}
            />
            <Space h={"sm"} />
            <PasswordInput
              required
              label="Password"
              labelProps={{ style: { color: "white" } }}
              {...form.getInputProps("password")}
            />
            <Space h={"sm"} />
            <PasswordInput
              required
              label="Please repeat your password"
              labelProps={{ style: { color: "white" } }}
              {...form.getInputProps("repeatedPassword")}
            />
          </Box>
          <Group position="center" mt="xl">
            <Button size="md" type="submit">
              submit
            </Button>
          </Group>
        </form>
      </Box>
    </UfContainer>
  );
};

export default Register;
