import { HStack } from "@chakra-ui/react";
import { Radio, RadioGroup } from "@/components/ui/radio";
import { IPropsTypeFilter } from "./interface";

export const FilterCards: React.FC<IPropsTypeFilter> = ({
  value,
  onChange,
}): JSX.Element => {
  return (
    <RadioGroup value={value} onChange={onChange} size="lg">
      <HStack gap="6">
        <Radio value="1">All cards</Radio>
        <Radio value="2">Favorites cards</Radio>
      </HStack>
    </RadioGroup>
  );
};
