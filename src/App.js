import {useState} from "react"
import {ChakraProvider,Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Select,
  Checkbox, CheckboxGroup,HStack,Box,Divider
} from "@chakra-ui/react";
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import './App.css';

const SimpleDatePicker = () => {
 // const initialDate = new Date()
  const [startDate, setStartDate] = useState(null)
  const handleChange = (date) => {
    setStartDate(date)
  }

  return (
    <DatePicker
      selected={startDate}
      onChange={handleChange}
    />
  )
}

function App() {
  const [destination, setDestination] = useState("")
  const [destinationCheck, setDestinationCheck] = useState("")
  const [deadline, setDeadline] = useState("")
  const [shipper, setShipper] = useState("")
  const [deliveryDate, setDeliveryDate] = useState("")
  const [ataoNo, setAtaoNo] = useState("")
  const [sakataNo, setSakataNo] = useState("")
  const [memo, setMemo] = useState("")

  return (
    <ChakraProvider>
      <Box margin={3}>
        <FormControl id="">
          <FormLabel>送り先</FormLabel>
          <Select placeholder="選択してください。">
            <option>ATAO 広島物流</option>
            <option>送り先テストA</option>
            <option>送り先テストB</option>
            <option>送り先テストC</option>
          </Select>
        </FormControl>
        <br/>

        <CheckboxGroup colorScheme="green" defaultValue={[""]}>
          <HStack>
            <Checkbox value="1">直送</Checkbox>
            <Checkbox value="2">アネックスDC</Checkbox>
            <Checkbox value="3">その他</Checkbox>
          </HStack>
        </CheckboxGroup>
        <br/>

        <FormControl id="">
          <FormLabel>納期</FormLabel>
          <div style={{"border":"1px solid gray","width":"240px"}}>
          <SimpleDatePicker/>
          </div>
        </FormControl>
        <br/>


        <FormControl id="">
          <FormLabel>出荷元</FormLabel>
          <Select placeholder="選択してください。">
            <option>出荷元テストA</option>
            <option>出荷元テストB</option>
            <option>出荷元テストC</option>
          </Select>
        </FormControl>
        <br/>

        <FormControl id="">
          <FormLabel>納品日</FormLabel>
          <div style={{"border":"1px solid gray","width":"240px"}}>
            <SimpleDatePicker/>
          </div>
        </FormControl>
        <br/>

        <FormControl id="" >
          <FormLabel>ATAO NO</FormLabel>
          <Input placeholder="" />
        </FormControl>
        <br/>

        <FormControl id="" >
          <FormLabel>サカタ NO</FormLabel>
          <Input placeholder="" />
        </FormControl>
        <br/>

        <FormControl id="">
          <FormLabel>メモ</FormLabel>
          <Input placeholder="" />
        </FormControl>
        <br/>     <br/>

        <Button colorScheme="blue">読取</Button>
      </Box>


    </ChakraProvider>
  );
}

export default App;
