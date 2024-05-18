import { Search2Icon } from "@chakra-ui/icons";
import { Popover, PopoverTrigger, PopoverContent, PopoverArrow, PopoverCloseButton, PopoverBody, Text, Link, Stack } from "@chakra-ui/react";
import { useRef } from "react";

export default function NavbarSearchButton() {
    return (
        <Popover placement='bottom' id='popoverContent' trigger="hover">
            <PopoverTrigger>
                <Link href="/search/by_theater">
                    <Search2Icon cursor={'pointer'} _hover={{ color: 'yellow' }} />
                </Link>
            </PopoverTrigger>
            <PopoverContent color="black" w={'fit-content'} pr={'8'}>
                <PopoverArrow />
                <PopoverBody>
                    <Stack>
                        <Link href="/search/by_theater">
                            Search By Theater
                        </Link>
                        <Link href="/search/by_timeslot">
                            Search By Time Slot
                        </Link>
                    </Stack>
                </PopoverBody>
            </PopoverContent>
        </Popover>
    )
}