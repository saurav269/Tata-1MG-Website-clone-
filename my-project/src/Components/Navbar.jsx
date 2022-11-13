
import {
    Stack,
    Flex,
    Box,
    Input,
    Select,
    InputGroup,
    InputRightAddon,
    Button,
    
} from '@chakra-ui/react'

import {ArrowDownIcon, SearchIcon} from '@chakra-ui/icons'
export const Navbar=()=>{
    return (
        <Box> 
            <Stack borderBottom='1px solid grey' height='110px'>
        <Flex className='navFlex' gap='25px' fontSize='18px' font-style='bold' display='flex'
           alignItems='center'>
            <Box width='8%'>
                <img src='https://scontent.fccu9-2.fna.fbcdn.net/v/t39.30808-6/314401737_1801982186830147_8637105093664179843_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_ohc=IpcbtncuAswAX9r9wNj&_nc_ht=scontent.fccu9-2.fna&oh=00_AfDHyMT9jAQd6CCG8xo98iRZEc7Q8FNPFz1QlRAVbRMZlQ&oe=6370F3DB' alt='' />
            </Box>
            <Box hover='red'>
                <h1>MEDICINES</h1>
            </Box>
            <Box>
                <h1>LAB TESTS</h1>
            </Box>
            <Box>
                <h1>CONSULT DOCTORS</h1>
            </Box>
            <Box>
                <h1>COVID-19</h1>
            </Box>
            <Box>
                <h1>AYURVEDA</h1>
            </Box>
            <Box>
                <h1>CARE PLAN</h1>
            </Box>
            <Box marginLeft='50px' fontSize='15px'>
                <button>Login | Sign Up</button>
            </Box>
            <Box fontSize='15px'>
                <h1>Offers</h1>
            </Box>
            <Box width='40px'>
                <img src='https://static.vecteezy.com/system/resources/previews/004/999/463/original/shopping-cart-icon-illustration-free-vector.jpg' alt='' />
            </Box>
            <Box fontSize='15px'>
                <h1>Need Helps?</h1>
            </Box>
            </Flex>
        </Stack>

        <Stack>
            <Flex display='flex' alignItems='center' marginTop='10px' gap='15px'>
            <Select placeholder='New Delhi' size='md' width='15%'  icon={<ArrowDownIcon />} >
           <option value='option1'>Gurgaon</option>
           <option value='option2'>Pune</option>
           <option value='option3'>Mumbai</option>
           <option value='option3'>Bangalore</option>
           <option value='option3'>Kolakta</option>
           <option value='option3'>Hydrabad</option>
           <option value='option3'>Ahmedabad</option>
           <option value='option3'>Chennai</option>
           <option value='option3'>Indore</option>
           <option value='option3'>Lucknow</option>
           <option value='option1'>Chandigrah</option>
           <option value='option1'>Bhopal</option>
           <option value='option1'>Noida</option>
           <option value='option1'>Navi Mumbai</option>
           <option value='option1'>Surat</option>
           <option value='option1'>Patna</option>
           <option value='option1'>Ludhiana</option>
           <option value='option1'>Bhubaneshwar</option>
           <option value='option1'>All Cities</option>
           <option value='option1'>Abohar</option>
           <option value='option1'>Adilabad</option>
           <option value='option1'>Agra</option>
           <option value='option1'>Agartala</option>
           <option value='option1'>Ahmedabad</option>
           <option value='option1'>Aizawl</option>
           <option value='option1'>Ajmer</option>
           <option value='option1'>Akola</option>
           <option value='option1'>Alipurduar</option>
           <option value='option1'>Barasat</option>
           <option value='option1'>Basirhat</option>
           <option value='option1'>Barracpore</option>
           <option value='option1'>Bally</option>
           <option value='option1'>Balrampore</option>
        
            </Select>
            <Box>
                <InputGroup>
             <Input size='md' placeholder='Search for Medicines and Health Products' width='500px' type='email' />
             <InputRightAddon children={<SearchIcon/>}/>
              </InputGroup>
             </Box>

            <Box marginLeft='150px' fontSize='15px'>
                <h2>QUICK BUY! Get 25% off on medicines*</h2>
            </Box> 
            <Box>
                <Button colorScheme='red' variant='solid'>Quick Order</Button>
             </Box>
            </Flex>
        </Stack>

    </Box>
       
    )
}