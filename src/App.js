import {useState} from "react"
import {ChakraProvider,Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  Checkbox, CheckboxGroup,HStack,Box,  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import './App.css';
import Scan2 from "./Scan2";

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
  // const [destination, setDestination] = useState("")
  // const [destinationCheck, setDestinationCheck] = useState("")
  // const [deadline, setDeadline] = useState("")
  // const [shipper, setShipper] = useState("")
  // const [deliveryDate, setDeliveryDate] = useState("")
  // const [ataoNo, setAtaoNo] = useState("")
  // const [sakataNo, setSakataNo] = useState("")
  // const [memo, setMemo] = useState("")

  const [scanStart,setScanStart] = useState(false)

  const [scanData,setScanData] = useState([
   //   {code:"11111",name:"商品名テスト",size:"サイズカラーテスト",num:2}
  ])

  const codeMap = {
    '1920195007105': {name: "商品名AAA", size: "ホワイト / L"},
    '9784344426399': {name: "商品名BBB", size: "ブラック / XL"},
  };


  const handleScanData = (jancode) => {
    const mapData = codeMap.hasOwnProperty(jancode)

    let setData = {
      code : jancode,
      name : mapData ? codeMap[jancode].name : "ダミー商品名",
      size : mapData ? codeMap[jancode].size : "ダミーサイズ",
      num  : ""
    }


    console.log(scanData)
    console.log(setData);

    setScanData([...scanData,setData])


    console.log(jancode)
  }

  const handleSubmit = () => {
    if(window.confirm("入荷を確定します。よろしいですか。")){
      window.location.href = './'
    }
  }

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

        <Button onClick={()=>{
          setScanStart(true)
        }} colorScheme="blue">読取</Button>
      </Box>

      {scanData.length > 0 &&
      <Table variant="simple">
        <TableCaption>
          <Button onClick={handleSubmit} colorScheme="blue">決定</Button>
        </TableCaption>
        <Thead>
          <Tr>
            <Th>商品コード</Th>
            <Th>商品名</Th>
            <Th>サイズ/カラー</Th>
            <Th>入荷数</Th>
          </Tr>
        </Thead>
        {scanData.map(item => {
          return(
            <Tbody>
              <Tr>
                <Td>{item.code}</Td>
                <Td>{item.name}</Td>
                <Td>{item.size}</Td>
                <Td>
                  <NumberInput>
                    <NumberInputField />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                </Td>
              </Tr>
            </Tbody>
          )
        })}

      </Table>
      }



      {scanStart &&
      <Scan2 setScanStart={setScanStart} onSchan={handleScanData}/>
      }


    </ChakraProvider>
  );
}

export default App;
