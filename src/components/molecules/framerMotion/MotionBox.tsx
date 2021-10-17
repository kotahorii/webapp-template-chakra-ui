import { chakra, HTMLChakraProps } from "@chakra-ui/system";
import { VFC } from "react";
import { HTMLMotionProps, motion } from "framer-motion";

type Merge<P, T> = Omit<P, keyof T> & T;
type MotionBoxProps = Merge<HTMLChakraProps<"div">, HTMLMotionProps<"div">>;
export const MotionBox: VFC<MotionBoxProps> = motion(chakra.div);
