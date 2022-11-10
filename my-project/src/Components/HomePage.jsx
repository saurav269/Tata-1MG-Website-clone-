
import {Grid, GridItem , Box} from '@chakra-ui/react'
import './HomePage.css'

export const HomePage = () => {

return (
     <Box>

        <Box className='div_uncle'>
            <img
            src='https://res.cloudinary.com/du8msdgbj/image/upload/v1647251796/ueyxzzku83yuvpqxyrwe.png' 
            alt='' 
            />
            <p>Shop by health concerns</p>
        </Box>
            <Box className='div_desease'>
             <Grid templateColumns='repeat(7, 1fr)' gap={4}>
             <GridItem w='100%' className='grid_first'>
             <img src='https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/c2a0598f-483c-48ff-9783-71e402aa28d3.png'alt='' />
             <p>Diabetes Care</p>
            </GridItem>

             <GridItem w='100%' className='grid_first'>
                <img src='https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/ab1da5f4-c074-47d2-b278-a5fbd2c93f1f.png' alt=''/>
                <p>Cardiac Care</p>
            </GridItem>

             <GridItem w='100%' className='grid_first'>
                <img src='https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/18e90e64-9e8c-47c5-ae33-508903429450.png' alt='' />
                <p>Stomac Care</p>
            </GridItem>

             <GridItem w='100%' className='grid_first'>
                <img src='https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/14f0bebe-6220-4ac7-b4bb-c5b425975af3.png' alt='' />
                <p>Liver Care</p>
                </GridItem>
            <GridItem w='100%' className='grid_first'>
                <img src='https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/ba975795-98dc-4cd8-8b55-3c20230d70e3.png' alt='' />
                <p>Bone, Joint, & Muscle Care</p>
            </GridItem>
            <GridItem w='100%' className='grid_first'>
                <img src='https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/555f6a24-3e20-41ee-a03b-e3dbda183392.png' alt='' />
                <p>Kidney Care</p>
            </GridItem>
            <GridItem w='100%' className='grid_first'>
                <img src='https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/5fa692ad-6647-4db5-9cb4-eb0bd9111331.png' alt='' />
                <p>Pain Relief</p>
            </GridItem>
             </Grid>

            </Box>

     </Box>   
    )
}