

import {
    Box,
    Flex,
    Grid,
    GridItem,
    Heading,
    Spacer,
} from '@chakra-ui/react'

import './FooterPage.css'

export const Footer = () => {

    return(
        <Box marginTop={'40px'}>
            <Box>
                <Box >
               <Heading fontSize={'25px'}>INDIA’S LARGEST HEALTHCARE PLATFORM</Heading>
                </Box>
                <Box>
                    <Flex className='head1'>
                        <Box>
                            <Heading>260m+</Heading>
                            <p>Visitors</p>
                        </Box>
                        <Spacer />
                        <Box>
                            <Heading>31m+</Heading>
                            <p>Orders Delivered</p>
                        </Box>
                        <Spacer />
                        <Box>
                            <Heading>1800+</Heading>
                            <p>Cities</p>
                        </Box>
                    </Flex>
                </Box>
            </Box>

        </Box>

    )
}