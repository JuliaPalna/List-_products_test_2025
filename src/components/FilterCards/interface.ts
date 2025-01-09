import { TypeEventRadio } from "@/scripts/hooks/useFilter";

export interface IPropsTypeFilter {
  value: string;
  onChange: (event: TypeEventRadio) => void;
}
