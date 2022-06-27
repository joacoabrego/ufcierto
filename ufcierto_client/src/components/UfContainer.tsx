import React from "react";
import { Stack, Title, Group, Image } from "@mantine/core";

const UfContainer = (props) => {
  return (
    <Stack sx={{ backgroundColor: "#2AB7CA", height: "100vh", width: "100vw" }}>
      <Title order={1} className="primary" p="0.1em">
        Uf,<span className="secondary"> cierto</span>
      </Title>
      {props.children}
      <Group position="right" mr={"1em"} mt="auto" mb={"1.5em"}>
        <a href="https://github.com/joacoabrego/ufcierto">
          <Image src="/assets/25231.png" width={50} height={50} />
        </a>
      </Group>
    </Stack>
  );
};

export default UfContainer;
