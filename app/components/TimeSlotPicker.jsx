import { useState, forwardRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { InputGroup, InputLeftElement, Input } from "@chakra-ui/react";
import { CalendarIcon, TimeIcon } from "@chakra-ui/icons";

export default function Picker() {
    const [startDate, setStartDate] = useState(null);
    const ChakraCustomInput = forwardRef(({ value, onClick }, ref) => (

        <InputGroup onClick={onClick} ref={ref}>
            <InputLeftElement>
                <TimeIcon color={'black'} mt={2} ml={4} />
            </InputLeftElement>
            <Input type="text" borderRadius={'full'} bg={'white'} color={'black'} placeholder="18/05/2024 - 11.00 PM" size={'lg'} value={value} onChange={() => null}/>
                                                                                                    {/* there's an error when value is assigned but onChange is not handled. */}
        </InputGroup>
    ));

    return (
        <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            customInput={<ChakraCustomInput />}
            showTimeSelect
            timeFormat="h:mm aa"
            timeIntervals={15}
            timeCaption="Time"
            dateFormat="dd/MM/yyyy - h.mm aa"
        />
    );
}