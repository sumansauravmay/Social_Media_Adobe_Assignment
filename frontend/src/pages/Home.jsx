import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';
import axios from "axios";
import {AiFillLike,AiFillDislike } from "react-icons/ai";
import { useToast } from '@chakra-ui/react';
import {
    Box,Flex, Modal, ModalOverlay,
    ModalContent, ModalHeader, ModalBody, ModalCloseButton,VStack,
    Heading,Textarea,
    Link,
    Image,
    Text,
    HStack,
    Container,
    Button,
  } from '@chakra-ui/react';
  
  // let token=JSON.parse(localStorage.getItem("token"))
  
 
  
  export const BlogAuthor = (props) => {
    return (
      <HStack marginTop="2" spacing="2" display="flex" alignItems="center">
        <Image
          borderRadius="full"
          boxSize="40px"
          src="https://100k-faces.glitch.me/random-image"
          alt={`Avatar of ${props.name}`}
        />
        <Text fontWeight="medium">{props.name}</Text>
        <Text>—</Text>
        <Text>{props.date}</Text>
      </HStack>
    );
  };
  
  const Home = () => {
    const toast = useToast();
    const [content,setContent]=useState("")
const [data,setData]=useState([]);
const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTitle, setSelectedTitle] = useState(null);

    let token=JSON.parse(localStorage.getItem("token"))

    const getData=()=>{
      return axios.get("https://sore-blue-marlin-suit.cyclic.app/",{
        headers: {
          "Authorization": token
        }
      })

    }
useEffect(()=>{
    getData()
    .then((res)=>{
        console.log(res.data)
        setData(res.data)
    })
},[])

//delete
const handleDelete=(_id)=>{
    axios.delete(`https://sore-blue-marlin-suit.cyclic.app/delete/${_id}`,{
        headers:{
            "Authorization":token
        }
    })
    .then((res)=>{
        window.location.reload()
        toast({
          title: 'Post Deleted successfully',
          description: "You are redirectd to all posts",
          status: 'success',
          duration: 9000,
          isClosable: true,
        })
    })
    
}

//update title
const handleEdit=(_id)=>{
  const task = data.find((item) => item._id === _id);
  setSelectedTitle(task);
  setIsModalOpen(true);
}


const handleupdatefunc=(_id)=>{
  let payload={
      content
  }
  axios.patch(`https://sore-blue-marlin-suit.cyclic.app/update/${_id}`,payload,{
    headers:{
        "Authorization":token
    }
})
  .then((res)=>{
    window.location.reload()
    toast({
      title: 'Post edited successfully',
      description: "You are redirectd to all posts",
      status: 'success',
      duration: 9000,
      isClosable: true,
    })
      console.log(res)
  })
  
}



    return (
        <>
        <Navbar/>
      <Container maxW={'7xl'} p="12">
        <Heading as="h1">Stories by Users</Heading>
        {
            data.map((item)=>(
                <Box
                marginTop={{ base: '1', sm: '5' }}
                display="flex"
                flexDirection={{ base: 'column', sm: 'row' }}
                justifyContent="space-between">
                <Box
                  display="flex"
                  flex="1"
                  marginRight="3"
                  position="relative"
                  alignItems="center">
                  <Box
                    width={{ base: '100%', sm: '85%' }}
                    zIndex="2"
                    marginLeft={{ base: '0', sm: '5%' }}
                    marginTop="5%">
                    <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
                      <Image
                        borderRadius="lg"
                        src={
                          'https://www.adobe.com/content/dam/offers-homepage/us/en/homepage/twitter_adobe.png'
                        }
                        alt="some good alt text"
                        objectFit="contain"
                      />
                    </Link>
                  </Box>
                  <Box zIndex="1" width="100%" position="absolute" height="100%">
                    <Box
                      backgroundSize="20px 20px"
                      opacity="0.4"
                      height="100%"
                    />
                  </Box>
                </Box>
                <Box
                  display="flex"
                  flex="1"
                  flexDirection="column"
                  justifyContent="center"
                  marginTop={{ base: '3', sm: '0' }}>
                 
                  <Text
                    as="p"
                    marginTop="2"
                    fontSize="lg">
                    {item.content}
                  </Text>
                  <BlogAuthor name="Updated at" date={item.updatedAt} />
                  <br/>

                  <Button bg={'green.400'} onClick={()=>handleEdit(item._id)}>Edit</Button>
                  <br/>
                  <Button onClick={()=>handleDelete(item._id)} bg={'green.400'}>Delete</Button>
                  <br/>
                  <Flex gap="20px" cursor={'pointer'}>
                    <Box fontSize={30}>
                    <AiFillLike/>
                    </Box>
                  
                  <Box fontSize={30}>
                  <AiFillDislike/>
                  </Box>
                  
                  </Flex>
                  
                </Box>
              </Box>  
            ))
        }
       

       {selectedTitle && (
          <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Update Post</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Box>

                <Flex
    align="center"
    justify="center"
    id="contact">
    <Box
      borderRadius="lg"
      m={{ base: 5, md: 16, lg: 10 }}
      p={{ base: 5, lg: 16 }}>
            <Box
           
              borderRadius="lg"
              p={8}
              shadow="base">
              <VStack spacing={5}>
              <Textarea value={content} onChange={(e)=>setContent(e.target.value)}
                          borderColor="gray.300" w="200px"
                          _hover={{
                            borderRadius: 'gray.300',
                          }}
                          placeholder="Max Length 300"
                        />

  <Button
                  colorScheme="blue"
                  bg="blue.400"
                  color="white"
                  _hover={{
                    bg: 'blue.500',
                  }} 
                 onClick={()=>handleupdatefunc(selectedTitle._id)}
                  >
                 Update Post
                </Button>
              </VStack>
            </Box>
         
      </Box>
  </Flex>
                </Box>
              </ModalBody>
            </ModalContent>
          </Modal>
        )}



      </Container>
      <Footer/>
      </>
    );
  };
  
  export default Home;