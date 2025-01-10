import { HStack } from "@chakra-ui/react";
import { Radio, RadioGroup } from "@/components/ui/radio";
import { useFilter } from "@/scripts/hooks";

export const FilterCardList = (): JSX.Element => {
  const { serchProduct, handleSearchProduct } = useFilter();

  return (
    <RadioGroup value={serchProduct} onChange={handleSearchProduct} size="lg">
      <HStack gap="6">
        <Radio value="1">All cards</Radio>
        <Radio value="2">Favorites cards</Radio>
      </HStack>
    </RadioGroup>
  );
};
