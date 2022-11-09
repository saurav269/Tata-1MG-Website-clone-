
import {
    Stack,
    Flex,
    Box,

} from '@chakra-ui/react'

import {} from '@chakra-ui/icons'
export const Navbar=()=>{
    return (
        <Stack>
            <Flex className='navFlex' gap='25px' fontSize='18px' font-style='bold' display='flex'
            alignItems='center'>
                <Box width='10%'>
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
    )
}