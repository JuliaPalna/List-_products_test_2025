import { Icon } from "@chakra-ui/react";
import { HiHeart } from "react-icons/hi";
import { TypeIconProps } from "./TypeIconProps";

export const IconLike: React.FC<TypeIconProps> = ({ colorIcon }): JSX.Element => {
  return (
    <Icon fontSize="2xl" color={colorIcon}  >
      <HiHeart  />
    </Icon>
  )
}