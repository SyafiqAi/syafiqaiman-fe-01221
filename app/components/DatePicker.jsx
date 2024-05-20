import { useState, forwardRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { InputGroup, InputLeftElement, Input } from "@chakra-ui/react";
import { CalendarIcon } from "@chakra-ui/icons";

export default function TheDatePicker() {
    const [startDate, setStartDate] = useState(null);
    // eslint-disable-next-line react/display-name
    const ChakraCustomInput = forwardRef(({ value, onClick }, ref) => (

        <InputGroup onClick={onClick} ref={ref}>
            <InputLeftElement>
                <CalendarIcon color={'black'} mt={2} ml={4} />
            </InputLeftElement>
            <Input type="text" borderRadius={'full'} bg={'white'} color={'black'} placeholder="23/12/2021" w={'100%'} size={'lg'} value={value} onChange={() => null}/>
        </InputGroup>
    ));

    return (
        <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            customInput={<ChakraCustomInput />}
            dateFormat="dd/MM/yyyy"
        />
    );
}