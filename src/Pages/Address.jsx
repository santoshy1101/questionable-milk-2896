import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import { Card,StackDivider,Stack,Box, CardHeader,Heading, CardBody, CardFooter, Text, Editable, EditablePreview, EditableInput, Button } from '@chakra-ui/react'
import './address.css'


const Address=()=>{
 
    const product=useSelector((state)=>{
        return state.productReducer.product
    })
    const {dis_price}=product
    // console.log(product)
    return <div className="maindiv">
        <div className="left">
        <Card bg='purple.50' >
  <CardHeader>
    <Heading size='md'>Enter Delivery Adderess</Heading>
  </CardHeader>

  <CardBody>
    <Stack divider={<StackDivider />} spacing='4'>
     
      <Box>
        <Heading size='xs' textTransform='uppercase'>
         Enter Address
        </Heading>
        
<Editable defaultValue='A-Block,Green Society,NewDelhi-110082'>
  <EditablePreview />
  <EditableInput />
</Editable>
<Link to="/checkout/payment">
           <Button marginTop="20px" colorScheme='pink'>Delivery to address</Button>
          </Link> 
      </Box>
    </Stack>
  </CardBody>
</Card>
        </div>
        <hr/>
        <div>
        <Card  >
  <CardHeader>
    <Heading size='md'>Price Details</Heading>
  </CardHeader>

  <CardBody>
    <Stack divider={<StackDivider />} spacing='4'>
    <Text size='xs' textTransform='uppercase'>
         Total Product Price    :{dis_price}    
        </Text>
        <Text size='xs' textTransform='uppercase'>
         Order Total            :{dis_price}
        </Text>
    </Stack>
  </CardBody>
</Card>
        </div>
    </div>
}
export default Address