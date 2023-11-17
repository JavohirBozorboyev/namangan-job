import {
  TextInput,
  Textarea,
  SimpleGrid,
  Group,
  Title,
  Button,
  Container,
  Paper,
} from "@mantine/core";
import { useForm } from "@mantine/form";

export function Contact() {
  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    validate: {
      name: (value) => value.trim().length < 2,
      email: (value) => value.trim().length < 3,
      subject: (value) => value.trim().length === 0,
    },
  });

  return (
    <form onSubmit={form.onSubmit(() => {})}>
      <Container my={"xl"} p={"xs"} size={"xl"}>
        <Paper p={"xl"} radius={"xl"}>
          <Title
            order={2}
            size="h2"
            style={{ fontFamily: "Greycliff CF, var(--mantine-font-family)" }}
            fw={900}
            ta="center"
          >
            {"Biz bilan bog'lanish"}
          </Title>

          <SimpleGrid cols={{ base: 1, sm: 2 }} mt="xl">
            <TextInput
              label="Ism Familiya"
              placeholder="Ism Familiya"
              name="name"
              radius={'xl'}
              variant="filled"
              {...form.getInputProps("name")}
            />
            <TextInput
              label="Telefon raqam"
              placeholder="+998"
              name="email"
              radius={"xl"}
              variant="filled"
              {...form.getInputProps("email")}
            />
          </SimpleGrid>

          <TextInput
            label="Aloqa mavzusi"
            placeholder="mavzu"
            mt="md"
            radius={'xl'}
            name="subject"
            variant="filled"
            {...form.getInputProps("subject")}
          />
          <Textarea
            mt="md"
            label="Batafsil malumot"
            placeholder="Malumot"
            maxRows={10}
            minRows={5}
            autosize
            name="message"
            variant="filled"
          radius={'xl'}
            {...form.getInputProps("message")}
          />

          <Group justify="center" mt="xl">
            <Button radius={'xl'} type="submit" size="md">
              Send message
            </Button>
          </Group>
        </Paper>
      </Container>
    </form>
  );
}
