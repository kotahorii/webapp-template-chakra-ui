import { useAnimation } from "framer-motion";
import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { Icon } from "@chakra-ui/react";
import { MotionBox } from "./framerMotion/MotionBox";

export const LikeButtonWithCount = () => {
  const [isLiked, setIsLiked] = useState(false);
  const controls = useAnimation();

  const isToggle = async () => {
    await setIsLiked(!isLiked);
    controls.start({ scale: [1, 1.4, 1.7, 1.4, 1] });
  };

  return (
    <>
      <MotionBox
        onClick={isToggle}
        animate={controls}
        transition={{ duration: 0.2 }}
        boxSize="5"
      >
        <Icon
          boxSize="full"
          color={isLiked ? "red.400" : ""}
          as={isLiked ? AiFillHeart : AiOutlineHeart}
        />
      </MotionBox>
    </>
  );
};
