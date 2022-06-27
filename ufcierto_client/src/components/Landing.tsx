import React from "react";
import "../index.css";
import { Link } from "react-router-dom";
import Circle from "./Circle";
import { Title, Grid, Button, Text, Group, Image } from "@mantine/core";

const Landing = () => {
  return (
    <Grid
      className="background"
      sx={{ width: "100vw", height: "100vh" }}
      columns={6}
      align="center"
      justify="center"
      m={0}
      grow
    >
      <Grid.Col span={1}>
        <Group ml={"-75px"}>
          <Circle size={150} color="#fe4a49" style={{ zIndex: 1 }} />
          <Circle size={250} color="#fed766" style={{ marginLeft: "-75px" }} />
        </Group>
      </Grid.Col>
      <Grid.Col span={1}>
        <Group direction="column" spacing={0}>
          <Title order={1} className="primary">
            Uf,
          </Title>
          <Title order={1} className="secondary">
            cierto
          </Title>
          <Text color={"white"}>
            I forgot...<i> again</i>
          </Text>
        </Group>
      </Grid.Col>
      <Grid.Col span={1}>
        <Text color={"white"}>
          A simple website to help you remember birthdays
        </Text>
      </Grid.Col>
      <Grid.Col span={2}></Grid.Col>
      <Grid.Col>
        <Group position="center" mb="10em">
          <Link to={"login"}>
            <Button size="md">login</Button>
          </Link>
          <Text color={"white"}>or</Text>
          <Link to={"register"}>
            <Button size="md">sign up</Button>
          </Link>
        </Group>
      </Grid.Col>
      <Grid.Col
        sx={{ marginTop: "auto", marginBottom: "1em", marginRight: "1em" }}
      >
        <Group position="right">
          <a href="https://github.com/joacoabrego/ufcierto">
            <Image src="/assets/25231.png" width={50} height={50} />
          </a>
        </Group>
      </Grid.Col>
    </Grid>
  );
};

export default Landing;
