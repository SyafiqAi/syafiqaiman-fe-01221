import { Box, Button, Flex, FormControl, FormLabel, Input, InputGroup, InputRightAddon, InputRightElement, Text, useToast } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

export default function NewsletterInput() {

    const toast = useToast();

    function handleSubmit(e) {
        e.preventDefault();
        toast({
            title: 'Subscribed.',
            description: `We'll send newsletters to ${e.target[0].value}.`,
            status: 'success',
            duration: 3000,
            isClosable: true,
        })
    }

    return (
        <form onSubmit={handleSubmit}>

            <FormControl>
                <FormLabel><Text fontWeight={'bold'}>Join Newsletters</Text></FormLabel>
                <InputGroup>
                    <Input pr={16} height={16} size={'lg'} variant='filled' bgColor={'#525252ff'} _focus={{ bg: '#2e2e2eff' }} _hover={{ bg: "#2e2e2eff" }} colorScheme="blue" placeholder="Insert your mail here" type="email" />
                    <InputRightElement>
                        {/* <Box border={'1px'} width={'8'} height={'100%'} mt={'2'}>

                        </Box> */}
                        <Button type="submit" bg={'yellow'} size={'lg'} mt={6} mr={6}>
                            <ArrowForwardIcon />
                        </Button>
                    </InputRightElement>
                </InputGroup>
            </FormControl>
        </form>
    )
}