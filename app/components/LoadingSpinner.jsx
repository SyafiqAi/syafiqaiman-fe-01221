import { Flex, keyframes } from "@chakra-ui/react";
import { SpinnerIcon } from "@chakra-ui/icons";

const spin = keyframes`  
from {transform: rotate(0deg);}   
to {transform: rotate(360deg)} 
`;

const spinAnimation = `${spin} infinite 2s linear`;   

export default function LoadingSpinner() {
    return (
        <Flex justify={'center'}>
            <SpinnerIcon color='yellow' animation={spinAnimation} boxSize={20}/>
        </Flex>
    )
}