import { Alert, AlertDescription, AlertIcon, AlertTitle, Box, Button, Card, CardBody, CardFooter, CardHeader, Center, CloseButton, Divider, Heading, Image, Stack, StackDivider, Text, useDisclosure } from "@chakra-ui/react"
import { useSelector } from "react-redux"
import './address.css'
function CompExample() {
    const {
      isOpen: isVisible,
      onClose,
      onOpen,
    } = useDisclosure({ defaultIsOpen: false })
  
    return isVisible ? (
      <Alert status='success'>
        <AlertIcon />
        <Box>
          <AlertTitle>Success!</AlertTitle>
          <AlertDescription>
            Your Product orderes Successfully
          </AlertDescription>
        </Box>
        <CloseButton
          alignSelf='flex-start'
          position='relative'
          right={-1}
          top={-1}
          onClick={onClose}
        />
      </Alert>
    ) : (
      <Button  variant='solid' colorScheme='pink' onClick={onOpen}>Pay</Button>
    )
  }
const Payment=()=>{
    const product=useSelector((state)=>{
        return state.productReducer.product
    })
    console.log(product)
    return <div className="maindiv2">
   
    <div>
    <Card margin="10px"
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
>
  <Image
    objectFit='cover'
    maxW={{ base: '100%', sm: '200px' }}
    src={product.image}
    alt='produc image'
  />

  <Stack>
    <CardBody>
      <Heading size='md'>{product.brand}</Heading>

      <Text py='2'>
        {product.name}
      </Text>
     <Text>Size: Free Size Qty: 1</Text>
     <Text> {product.dis_price}</Text>
     
    
    </CardBody>

    <CardFooter>
    <Center height='50px'>
  <Divider orientation='vertical' />
</Center>

     <Text size='sm'>Delivery Adderess: A-Block,Green Society,NewDelhi-110082</Text>
      
    </CardFooter>

  </Stack>
  
</Card>
<Divider orientation='horizontal' />
<Text>Supplier : AlexVyan Brothers Pvt Ltd        Free Delivery</Text>
<Divider orientation='horizontal' />
        {/* <h2>Product Details</h2>
        <img src={product.image}/>
        <p>{product.dis_price}</p>
       */}
    </div>
    <div>
    <Card margin='10px' >
  <CardHeader>
    <Heading size='md'>Price Details</Heading>
  </CardHeader>

  <CardBody>
    <Stack divider={<StackDivider />} spacing='4'>
    <Text size='xs' textTransform='uppercase'>
         Total Product Price    :{product.dis_price}    
        </Text>
        <Text size='xs' textTransform='uppercase'>
         Order Total            :{product.dis_price}
        </Text>
    </Stack>
    {/* <Button onClick={()=>{alert("Ordee Placed Successfull")}} variant='solid' colorScheme='pink'>
       Pay
      </Button> */}
      {CompExample()}
  </CardBody>
</Card>
    </div>
</div>
}
export default Payment;