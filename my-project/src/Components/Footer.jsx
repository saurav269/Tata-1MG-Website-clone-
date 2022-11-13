

import {
    Box,
    Flex,
    Grid,
    GridItem,
    Heading,
    Spacer,
    Input,
    InputGroup,
    InputLeftElement,
    Stack,

} from '@chakra-ui/react'

import './FooterPage.css'

import {PhoneIcon} from '@chakra-ui/icons'

export const Footer = () => {

    return(
        <Box>
            <Box marginTop={'40px'}>
             <Box>
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
            <Box className='divide' width='90%' margin='auto'>
            </Box>
            <Box>
                <Stack >
                    <Flex className='stack1'>
                        <Box>
                        <p>Get the link to download App</p>
                        </Box>
                        <Box>
                            <InputGroup>
                             <InputLeftElement
                                  pointerEvents='none'
                                  children={<PhoneIcon color='gray.300' />}
                                />
                                <Input type='tel' placeholder='Enter Phone Number' width='350px' 
                                color='green'
                                />
                            </InputGroup>
                        </Box>
                        <Box>
                            <button className='btnn'>Send Link</button>
                        </Box>
                        
                    </Flex>
                </Stack>
            </Box>
        <Box className='mainBox'>   
            <Box marginTop='20px' >
                <Flex gap='100px' padding='50px' className='fBorder'>
                     <Box marginLeft='70px' width='500px' height='200px'>
                        <Stack className='fStack' textAlign='left'>
                            <h3 className='hh'>Know Us</h3>
                            <br>
                            </br>
                            <p>About Us</p>
                            <p>Contact Us</p>
                            <p>Press Coverage</p>
                            <p>Careers</p>
                            <p>Business Partnership</p>
                            <p>Become a Health Partner</p>
                            <p>Corporate Governance</p>
                        </Stack>     
                     </Box>
                     <Box width='580px'>
                        <Stack className='fStack' textAlign='left'>
                            <h3 className='hh'>Our Policies</h3>
                            <br>
                            </br>
                            <p>Privacy Policy</p>
                            <p>Terms and Conditions</p>
                            <p>Editorial Policy</p>
                            <p>Return Policy</p>
                            <p>IP Policy</p>
                            <p>Grievance Redressal Policy</p>
                            <p>Fake Jobs and Fraud Disclaimer</p>
                        </Stack>     
                     </Box>

                    <Box width='550px'>
                        <Stack className='fStack' textAlign='left'>
                            <h3 className='hh'>Our Services</h3>
                            <br>
                            </br>
                            <p>Order Medicines</p>
                            <p>Book Lab Tests</p>
                            <p>Consult a Doctor</p>
                            <p>Ayurveda Articles</p>
                            <p>Hindi Articles</p>
                            <p>Care Plan</p>
                        </Stack>     
                    </Box>

                    <Box width='800px'>
                        <Stack className='fStack' textAlign='left'>
                            <h3 className='hh'>Connect</h3>
                            <br>
                            </br>
                            <p>Social Links</p>
                             <Box>
                                <Flex gap='8px' display='flex' alignItems='center'>
                                    <Box width='13%'>
                                        <img src='data:image/png;base64,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' alt='' />
                                    </Box>
                                    <Box width='10%'>
                                        <img src='data:image/jpeg;base64,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' alt='' />
                                    </Box>
                                    <Box width='10%'>
                                        <img src='https://www.pngitem.com/pimgs/m/630-6308222_image-transparent-twitter-icon-png-png-download.png' alt='' />
                                    </Box>
                                    <Box width='10%'>
                                        <img src='https://www.freeiconspng.com/uploads/youtube-icon-0.png' alt='' />
                                    </Box>
                                    <Box width='9%'>
                                        <img src='https://cdn-icons-png.flaticon.com/512/174/174857.png' alt='' />
                                    </Box>
                                </Flex>
                             </Box>
                            <p>Want daily dose of health?</p>
                            <button className='sign'>SIGN UP</button>
                        </Stack>     
                    </Box>

                    <Box width='550px'>
                        <Stack className='fStack' textAlign='left'>
                            <h3 className='dapp'><b>Download App</b></h3>
                            <br>
                            </br>
                            <Box onClick={() => window.location.href='https://play.google.com/store/apps/details?id=com.aranoah.healthkart.plus&pli=1'}>
                                <img src='https://media.monsterindia.com/trex/public/default/images/android-footer.png' alt='' />
                            </Box>
                            <Box onClick={() => window.location.href='https://apps.apple.com/in/app/1mg/id554578419'}>
                                <img src='https://media.monsterindia.com/trex/public/default/images/ios-footer.png' alt='' />
                            </Box>
                        </Stack>     
                    </Box>
                </Flex>
            </Box>
            <Box className='logo'>
                <img src='https://onemg.gumlet.io/URS_ebgmxc.png' alt='' />
            </Box>
            <Box marginTop='30px' borderBottom='1px solid gray' paddingBottom='20px'>
                <h2><b>India's only LegitScript and ISO/ IEC 27001 certified online healthcare platform</b></h2>
            </Box>
            <Box marginTop='15px' color='gray'>
                <p>© 2022 Tata 1mg. All rights reserved. In compliance with Drugs and Cosmetics Act, 1940 and Drugs and Cosmetics Rules, 1945, we don't process requests for Schedule X and other habit forming drugs.</p>
            </Box>
        </Box>     
        </Box>

    )
}