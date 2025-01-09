import {
  Box,
  Button,
  Fieldset,
  Input,
  Stack,
  Textarea,
} from "@chakra-ui/react";
import { Field } from "@/components/ui/field";
import { IFormProps } from "./interface";
import { Transit } from "@/context/PagesProvider";

export const FormCreateNewProduct: React.FC<IFormProps> = ({
  data,
}): JSX.Element => {
  return (
    <form onSubmit={data.handleSubmit(data.onSubmit)}>
      <Fieldset.Root
        maxW="sm"
        invalid={
          data.errors.price || data.errors.title || data.errors.description
            ? true
            : false
        }
      >
        <Box w={1}>
          <Transit to={"/products"}>Close</Transit>
        </Box>

        <Stack>
          <Fieldset.Legend>Create new product</Fieldset.Legend>

          <Fieldset.HelperText>
            Fill in the form below to create new product
          </Fieldset.HelperText>
        </Stack>

        <Fieldset.Content>
          <Field
            label="product name"
            required
            invalid={data.errors.title ? true : false}
          >
            <Input
              {...data.register("title")}
              id="title"
              name="title"
              type="text"
            />
          </Field>

          <Field
            label="price"
            required
            invalid={data.errors.price ? true : false}
          >
            <Input
              {...data.register("price", {
                setValueAs: (value: string): number => Number(value),
              })}
              id="price"
              name="price"
              type="number"
            />
          </Field>

          <Field
            label="description"
            required
            invalid={data.errors.description ? true : false}
          >
            <Textarea
              {...data.register("description")}
              id="description"
              name="description"
            />
          </Field>
        </Fieldset.Content>

        <Button type="submit" disabled={data.isDesebled()}>
          Submit
        </Button>

        <Fieldset.ErrorText>
          Some fields are invalid. Please check them.
        </Fieldset.ErrorText>
      </Fieldset.Root>
    </form>
  );
};
