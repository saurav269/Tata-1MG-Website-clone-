
import {
    Grid, 
    GridItem , 
    Box, 
    Flex,
    Heading,
    Button,
    ButtonGroup,
    Spacer,
    Divider,
    Text

 } from '@chakra-ui/react'

 import {StarIcon} from '@chakra-ui/icons'
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
        
        <Box>
            <Flex className='flex1'
            minWidth='max-content' 
            alignItems='center' 
            gap='2' 
            padding='20px'
            // border='1px solid red'
            >
             <Box p='2'>
             <p className='featured'>Featured brands</p>
            </Box>
           <Spacer />
            <Button className='btn' colorScheme='red' size='sm'>See all</Button>
            </Flex>
        </Box>


         <Box className='div_desease'>
             <Grid templateColumns='repeat(7, 1fr)' gap={4}>
             <GridItem w='100%' className='grid_first'>
             <img src='https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/f3461d00-3633-48d3-914e-6b60983c23e6.png'alt='' />
             <p>Dabur</p>
            </GridItem>

             <GridItem w='100%' className='grid_first'>
                <img src='https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/7d61bd19-267e-41fb-b688-c9bf9345ffb7.png' alt=''/>
                <p>Sugar Free</p>
            </GridItem>

             <GridItem w='100%' className='grid_first'>
                <img src='https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/f9fef1fa-c93b-4181-8c5c-b917049e48a4.png' alt='' />
                <p>Himalaya</p>
            </GridItem>

             <GridItem w='100%' className='grid_first'>
                <img src='https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/342482a8-ec5a-4f7c-9aba-9d6a94f48659.png' alt='' />
                <p>Ensure/ EDC-Bestsellers</p>
                </GridItem>
            <GridItem w='100%' className='grid_first'>
                <img src='https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/af71c4e3-e543-44c7-816a-d9d83a34d0c9.png' alt='' />
                <p>Baidyanath</p>
            </GridItem>
            <GridItem w='100%' className='grid_first'>
                <img src='https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/96e19e0e-7496-4ec6-8da2-46babeb57a85.png' alt='' />
                <p>Mamaearth</p>
            </GridItem>
            <GridItem w='100%' className='grid_first'>
                <img src='https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/2c420226-5989-4242-b49a-c319fb26bb90.jpg' alt='' />
                <p>Tata 1mg Health Products</p>
            </GridItem>
             </Grid>
        </Box>
        <Box p='2'>
                <Flex
                className='flex1'
                minWidth='max-content' 
                alignItems='center' 
                gap='2' 
                padding='20px'>
                <p className='featured'>Popular categories</p>
                </Flex>
        </Box>
        <Box className='div_desease'>
             <Grid templateColumns='repeat(7, 1fr)' gap={4}>
             <GridItem w='100%' className='grid_first'>
             <img src='https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/1a60e859-3e9f-4f13-84ec-57b7c03a73ce.png'alt='' />
             <p>Vitamins & Supliments</p>
            </GridItem>

             <GridItem w='100%' className='grid_first'>
                <img src='https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/c7b76d60-380b-4ac6-a8f2-1c6c99f828c3.png' alt=''/>
                <p>Nutritional Drinks</p>
            </GridItem>

             <GridItem w='100%' className='grid_first'>
                <img src='https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/bb094c46-5ca2-4a1c-84ae-0cb5c1d2723b.png' alt='' />
                <p>Healthcare Devices</p>
            </GridItem>

             <GridItem w='100%' className='grid_first'>
                <img src='https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/sjjktxvuqn3hgdf1zthz.png' alt='' />
                <p>Homeopathy</p>
                </GridItem>
            <GridItem w='100%' className='grid_first'>
                <img src='https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/54fda5eb-32d5-4b99-80ba-d1e8b5103be2.png' alt='' />
                <p>Sexual Wellness</p>
            </GridItem>
            <GridItem w='100%' className='grid_first'>
                <img src='https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/he8w8sxhmm2la752zjt2.png' alt='' />
                <p>Skin Care</p>
            </GridItem>
            <GridItem w='100%' className='grid_first'>
                <img src='https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/d0e47f42-a6f7-40ad-b1d3-145b3744b961.png' alt='' />
                <p>Diaetes Care</p>
            </GridItem>
             </Grid>
        </Box>
        <Box>
            <Flex className='flex1'
            minWidth='max-content' 
            alignItems='center' 
            gap='2' 
            padding='20px'
            // border='1px solid red'
            >
             <Box p='2'>
             <p className='featured'>Popular Combo Deals</p>
            </Box>
           <Spacer />
            <Button className='btn' colorScheme='red' size='sm'>See all</Button>
            </Flex>
        </Box>
        <Box className='div_desease'>
             <Grid templateColumns='repeat(7, 1fr)' gap={4}>
             <GridItem w='100%' className='grid_first'>
             <img src='https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/38b86c6a33f744afac80ed36d4bb87ba.jpg'alt='' />
             <br>
            </br>
             <p className='head'>Tata 1mg Diabetes Care Combo Pack for...</p>
             <p className='forsmall'>Combo pack of 3 packs</p>
             <p className='forsmall'>MRP <label className='leb'>50% off</label></p>
             <p>₹544</p>
            </GridItem>

             <GridItem w='100%' className='grid_first'>
                <img src='https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/c2sw0gi2dw4cwdf1ecjp.jpg' alt=''/>
                <br>
                </br>
                <p className='head'>Acua Check Combo pack of Active 50 Test Strip</p>
                <p className='forsmall'>Combo pack of 3 units</p>
                <p className='forsmall'>MRP <label className='leb'>12% off</label></p>
                <p>₹1142</p>
            </GridItem>

             <GridItem w='100%' className='grid_first'>
                <img src='https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/hqi50gamtyablux4pozy.jpg' alt='' />
                <br>
                </br>
                <p className='head'>Durex Honeymoon Pack (Mutual Climax Condoms + Sensual Lube)</p>
                <p className='forsmall'>Combo pack of 2 packs</p>
                <p className='forsmall'>MRP <label className='leb'>22% off</label></p>
                <p>₹826</p>
            </GridItem>

             <GridItem w='100%' className='grid_first'>
                <img src='https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/qir6i2zlhzeddxa4mqt0.jpg' alt='' />
                <p className='head'>Immunity Care Combo of 1mg Panch Tulsi...</p>
                <p className='forsmall'>Combo pack of 2 packs</p>
                <p className='forsmall'>MRP <label className='leb'>36% off</label></p>
                <p>₹213</p>    
            </GridItem>

            <GridItem w='100%' className='grid_first'>
                <img src='https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/cr9a2p0evnuzwvw5ksp1.jpg' alt='' />
                <p className='head'>Acne Care Combo of Cetaphil Oily Skin.</p>
                <p className='forsmall'>Combo pack of 2 packs</p>
                <p className='forsmall'>MRP <label className='leb'>15% off</label></p>
                <p>₹697</p>
            </GridItem>

            <GridItem w='100%' className='grid_first'>
                <img className='glucometer'
                src='https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/if0qou7t1ptcaaowcigp.jpg' 
                alt='' />
                <br>
                </br>
                <p className='head'>Accu-Check Active Combo of Glucometer</p>
                <p className='forsmall'>Combo pack of 2 packs</p>
                <p className='forsmall'>MRP <label className='leb'>9% off</label></p>
                <p>₹1866</p>
            </GridItem>

            <GridItem w='100%' className='grid_first'>
                <img src='https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/g6phmkjrdbw3x4nngxlr.jpg' alt='' />
                <p className='head'>Oral Care Combo of Listerine Mouth Wash..</p>
                <p className='forsmall'>Combo pack of 2 packs</p>
                <p className='forsmall'>MRP <label className='leb'>9% off</label></p>
                <p>₹487</p>   
            </GridItem>
             </Grid>
        </Box>

        <Box>
            <Flex className='flex1'
            minWidth='max-content' 
            alignItems='center' 
            gap='2' 
            padding='20px'
            // border='1px solid red'
            >
             <Box p='2'>
             <p className='featured'>Sugar substitutes</p>
            </Box>
           <Spacer />
            <Button className='btn' colorScheme='red' size='sm'>See all</Button>
            </Flex>
        </Box>

        <Box className='div_desease'>
             <Grid templateColumns='repeat(7, 1fr)' gap={4}>
             <GridItem w='100%' className='grid_first'>
             <img src='https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/cropped/bpgstknem0udqzp9p4dm.jpg'alt='' />
             <br>
            </br>
             <p className='head'>Sugar Free Gold Low Calorie Sweetener</p>
             <p className='forsmall'>bottle of 500 pellets</p>
             <p className='forsmall'>MRP <label className='leb'>12% off</label></p>
             <p>₹249</p>
            </GridItem>

             <GridItem w='100%' className='grid_first'>
                <img src='https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/fud0ky8qdz1mupsc58ze.jpg' alt=''/>
                <br>
                </br>
                <p className='head'>So Sweet Stevia Sugar Free Tablet</p>
                <p className='forsmall'>Packet of 100 tablets</p>
                <p className='forsmall'>MRP <label className='leb'>2% off</label></p>
                <p>₹117</p>
            </GridItem>

             <GridItem w='100%' className='grid_first'>
                <img className='sugerfree'
                src='https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/cropped/d8wetugtajdasve7gg0u.jpg' 
                alt='' />
                <br>
                </br>
                <p className='head'>Sugar Free Natural Low Calorie Sweetener...</p>
                <p className='forsmall'>bottle of 500 pellets</p>
                <p className='forsmall'>MRP <label className='leb'>12% off</label></p>
                <p>₹264</p>
            </GridItem>

             <GridItem w='100%' className='grid_first'>
                <img className='sugerfree'
                src='https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/kuhv7g7ouhb8jwhvsgmk.jpg' alt='' />
                <br>
                </br>
                <p className='head'>So Sweet Xylitol Power Natural Sweetener</p>
                <p className='forsmall'>Packet of 250gm Pouch</p>
                <p className='forsmall'>MRP <label className='leb'>7% off</label></p>
                <p>₹324</p>    
            </GridItem>

            <GridItem w='100%' className='grid_first'>
                <img src='https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/cropped/tqblkrwqqefunrkiut4r.jpg' alt='' />
                <br>
                </br>
                <p className='head'>Zindagi Stevia Tablet</p>
                <p className='forsmall'>bottle of 100 tablets</p>
                <p className='forsmall'>MRP <label className='leb'>9% off</label></p>
                <p>₹149</p>
            </GridItem>

            <GridItem w='100%' className='grid_first'>
                <img className='monokfruit'
                src='https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/jadahxgbfiupbmy8sxve.jpg' 
                alt='' />
                <br>
                </br>
                <p className='head'>Lakanto Monkfruit Sweetener with...</p>
                <p className='forsmall'>packet of 200 gm Granules</p>
                <p className='forsmall'>MRP <label className='leb'>7% off</label></p>
                <p>₹488</p>
            </GridItem>

            <GridItem w='100%' className='grid_first'>
                <img className='monokfruit'
                src='https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/lybhdtfz2jccygh5lgpw.jpg' alt='' />
                <p className='head'>Alma Combo Pack of Sugarfree 650 Tablet...</p>
                <p className='forsmall'>Combo pack of 2 bottles</p>
                <p className='forsmall'>MRP <label className='leb'>13% off</label></p>
                <p>₹849</p>   
            </GridItem>
             </Grid>
        </Box>

        <Box>
            <Flex className='flex1'
            minWidth='max-content' 
            alignItems='center' 
            gap='2' 
            padding='20px'
            // border='1px solid red'
            >
             <Box p='2'>
             <p className='featured'>Turmeric | supplement of the week</p>
            </Box>
           <Spacer />
            <Button className='btn' colorScheme='red' size='sm'>See all</Button>
            </Flex>
        </Box>
        <Box className='div_desease'>
             <Grid templateColumns='repeat(7, 1fr)' gap={4}>
             <GridItem w='100%' className='grid_first'>
             <img className='monokfruit'
             src='https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/iyfn5hupleaimrrggwla.jpg'alt='' />
             <br>
            </br>
             <p className='head'>1mg Turmeric Curcumin 95% with Piperine...</p>
             <p className='forsmall'>bottle of 30 capsules</p>
             <p className='forsmall'>MRP <label className='leb'>61% off</label></p>
             <p>₹262</p>
            </GridItem>

             <GridItem w='100%' className='grid_first'>
                <img className='green'
                src='https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/cropped/yruespmkwvxpe55vyf5z.png' alt=''/>
                <br>
                </br>
                <p className='head'>TurmaBoost Turmeric Curcumin and Piperine...</p>
                <p className='forsmall'>box of 10 capsules</p>
                <p className='forsmall'>MRP <label className='leb'>20% off</label></p>
                <p>₹143</p>
            </GridItem>

             <GridItem w='100%' className='grid_first'>
                <img className='green'
                src='https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/qynblyiamauuzxoexzud.jpg' 
                alt='' />
                <br>
                </br>
                <p className='head'>1mg Turmeric Drops Piperine</p>
                <p className='forsmall'>bottle of 30 ml Drop</p>
                <p className='forsmall'>MRP <label className='leb'>50% off</label></p>
                <p>₹172</p>
            </GridItem>

             <GridItem w='100%' className='grid_first'>
                <img className='tulsi'
                src='https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/hqfwqhwguio3ptffeqkk.jpg' alt='' />
                <br>
                </br>
                <p className='head'>Organic India Tulsi Ginger Turmeric Tea</p>
                <p className='forsmall'>box of 25 tea bags</p>
                <p className='forsmall'>MRP <label className='leb'>9% off</label></p>
                <p>₹153</p>    
            </GridItem>

            <GridItem w='100%' className='grid_first'>
                <img className='tulsi'
                src='https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/msx0fzjqylqmvgjzhson.jpg' alt='' />
                <br>
                </br>
                <p className='head'>Simply Herbal Pure Turmeric Curcumin &...</p>
                <p className='forsmall'>bottle of 600 capsules</p>
                <p className='forsmall'>MRP <label className='leb'>61% off</label></p>
                <p>₹782</p>
            </GridItem>

            <GridItem w='100%' className='grid_first'>
                <img className='green'
                src='https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/cropped/dd1qdy6ezoauep8tk4or.jpg' 
                alt='' />
                <br>
                </br>
                <p className='head'>Alqunus Nano Curcumin</p>
                <p className='forsmall'>bottle of 100 ml Oral Liquid </p>
                <p className='forsmall'>MRP <label className='leb'>12% off</label></p>
                <p>₹1584</p>
            </GridItem>

            <GridItem w='100%' className='grid_first'>
                <img className='monokfruit'
                src='https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/cropped/nbrq3ciikm0fgphiyujz.jpg' alt='' />
                <br>
                </br>
                <p className='head'>Inlife Curcumin C3 complex(95%...)</p>
                <p className='forsmall'>bottle of 60 capsules</p>
                <p className='forsmall'>MRP <label className='leb'>50% off</label></p>
                <p>₹650</p>   
            </GridItem>
             </Grid>
        </Box>

        <Box>
            <Flex className='flex1'
            minWidth='max-content' 
            alignItems='center' 
            gap='2' 
            padding='20px'
            // border='1px solid red'
            >
             <Box p='2'>
                <Flex>
             <p className='featured'>In the spotlight</p>
             <button className='add'>Ad</button>
             </Flex>
            </Box>
            </Flex>
        </Box>

        <Box className='div_desease'>
             <Grid templateColumns='repeat(7, 1fr)' gap={4}>
             <GridItem w='100%' className='grid_first'>

            <img className='spray'
             src='https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/ln4v2q81w52dueusp3w7.jpg'alt='' />
             <br>
            </br>
             <p className='head'>Pee Safe Toilet Seat Sanitizer Spray...</p>
             <p className='forsmall'>bottle of 75 ml Spray</p>
             <Box className='starbox'>
            <Flex gap='2'>
            <button className='starbtn'>4.2<StarIcon className='star'/></button>
            <p className='forsmall'>181 ratings</p>
            </Flex>
             </Box>      
             <p className='forsmall'>MRP <label className='leb'>9% off</label></p>
             <p>₹164</p>
            </GridItem>

             <GridItem w='100%' className='grid_first'>
                <img className='green'
                src='https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/2795309f864548cc9aea91bdf6672145.jpg' alt=''/>
                <br>
                </br>
                <p className='head'>Dettol Floral Multi-Use Skin & Surface Wipes</p>
                <p className='forsmall'>packet of 80 wipes</p>
             <Box className='starbox'>
               <Flex gap='2'>
               <button className='starbtn'>4.6<StarIcon className='star'/></button>
               <p className='forsmall'>252 ratings</p>
               </Flex>
             </Box>
                <p className='forsmall'>MRP <label className='leb'>10% off</label></p>
                <p>₹197</p>
            </GridItem>

             <GridItem w='100%' className='grid_first'>
                <img className='spray'
                src='https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/tlvslmhbzlyqvay1elun.jpg' 
                alt='' />
                <br>
                </br>
                <p className='head'>ORSL Liquid Apple</p>
                <p className='forsmall'>packet of 200 ml Liquid</p>
            <Box className='starbox'>
               <Flex gap='2'>
               <button className='starbtn'>4.6<StarIcon className='star'/></button>
               <p className='forsmall'>268 ratings</p>
               </Flex>
            </Box>
                <p className='forsmall'>MRP <label className='leb'>9% off</label></p>
                <p>₹38</p>
            </GridItem>

             <GridItem w='100%' className='grid_first'>
                <img className='tulsi'
                src='https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/yko0eapceyqyjom9ns9i.jpg' alt='' />
                <br>
                </br>
                <p className='head'>Zandu Shilajit Capsule</p>
                <p className='forsmall'>bottle of 60 capsule</p>
            <Box className='starbox'>
                <Flex gap='2'>
                <button className='starbtn'>3.7<StarIcon className='star'/></button>
                <p className='forsmall'>59 ratings</p>
               </Flex>
            </Box>
                <p className='forsmall'>MRP <label className='leb'>35% off</label></p>
                <p>₹324</p>    
            </GridItem>

            <GridItem w='100%' className='grid_first'>
                <img className='tulsi'
                src='https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/qxzyfrwwwt4njxy6eip2.jpg' alt='' />
                <br>
                </br>
                <p className='head'>OneTouch Ultra Test Strip</p>
                <p className='forsmall'>box of 50 test Strips</p>
                <Box className='starbox'>
                <Flex gap='2'>
                <button className='starbtn'>4.4<StarIcon className='star'/></button>
                <p className='forsmall'>721 ratings</p>
                </Flex>
               </Box>
                <p className='forsmall'>MRP <label className='leb'>4% off</label></p>
                <p>₹1387</p>
            </GridItem>

            <GridItem w='100%' className='grid_first'>
                <img className='green'
                src='https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/tvcdippjx7lfdl2weulr.jpg' 
                alt='' />
                <br>
                </br>
                <br />
                <p className='head'>Dettol Liquid Handwash Refill Original</p>
                <p className='forsmall'>packet of 1500 ml Liquid</p>
                <Box className='starbox'>
                <Flex gap='2'>
                <button className='starbtn'>4.5<StarIcon className='star'/></button>
                <p className='forsmall'>1759 ratings</p>
                </Flex>
               </Box>
                <p className='forsmall'>MRP <label className='leb'>7% off</label></p>
                <p>₹194</p>
            </GridItem>

            <GridItem w='100%' className='grid_first'>
                <img className='amla'
                src='https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/cg2dihaxqpbzjpbqjvvg.jpg' alt='' />
                <br>
                </br>
                <p className='head'>Baidyanath Vansaar Amla Juice Boosts...</p>
                <p className='forsmall'>bottle of 1lt juice</p>
                <Box className='starbox'>
                <Flex gap='2'>
                <button className='starbtn'>4.4<StarIcon className='star'/></button>
                <p className='forsmall'>180 ratings</p>
                </Flex>
               </Box>
                <p className='forsmall'>MRP <label className='leb'>23% off</label></p>
                <p>₹185</p>   
            </GridItem>
             </Grid>
        </Box>

        <Box>
            <Flex className='flex1'
            minWidth='max-content' 
            alignItems='center' 
            gap='2' 
            padding='20px'
            // border='1px solid red'
            >
             <Box p='2'>
                <Flex>
             <p className='featured'>Baby Care</p>
             </Flex>
            </Box>
            </Flex>
        </Box>

        <Box className='div_desease'>
             <Grid templateColumns='repeat(7, 1fr)' gap={4}>
             <GridItem w='100%' className='grid_first'>
             <img src='https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/887a6ad5-010a-4eff-96f4-a7c8d715140d.webp'alt='' />
             <p>Baby and Infant Food</p>
            </GridItem>

             <GridItem w='100%' className='grid_first'>
                <img src='https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/ac6bcf1c-7742-4a89-adad-f12c467efd69.webp' alt=''/>
                <p>Bath Essentials</p>
            </GridItem>

             <GridItem w='100%' className='grid_first'>
                <img src='https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/54ef2e82-9e5c-4707-b746-3330529c535e.webp' alt='' />
                <p>Diapers, wipes & more</p>
            </GridItem>

             <GridItem w='100%' className='grid_first'>
                <img src='https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/08d4d980-de5b-4ae2-858d-49e448089141.webp' alt='' />
                <p>Baby Skin Care</p>
                </GridItem>
            <GridItem w='100%' className='grid_first'>
                <img src='https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/a604c2aa-efef-47b7-8a33-a70ae18abac0.webp' alt='' />
                <p>Gift Packs & Combos</p>
            </GridItem>

            <GridItem w='100%' className='grid_first'>
                <img src='https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/930f6400-ee42-408a-ab5e-edda6c745c80.webp' alt='' />
                <p>Oral Health</p>
            </GridItem>

            <GridItem w='100%' className='grid_first'>
                <img src='https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/aaa6f701-d37c-45af-a68c-36c00fd8f0cb.webp' alt='' />
                <p>Baby Proofing</p>
            </GridItem>
             </Grid>

        </Box>

          

    </Box>   
    )
}