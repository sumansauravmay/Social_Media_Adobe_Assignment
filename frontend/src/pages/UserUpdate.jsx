import React, { useState } from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import axios from "axios";
import { useToast } from '@chakra-ui/react'
import {
    Container,Input,
    Flex,
    Box,
    Heading,
    Text,
    Button,
    VStack,
    Wrap,
    WrapItem,
    FormControl,
    FormLabel,
  } from '@chakra-ui/react';
const UserUpdate = () => {
  const [name,setName]=useState("");
  const toast = useToast();

  let token=JSON.parse(localStorage.getItem("token"))
  let userid=JSON.parse(localStorage.getItem("userid"));
  // let username=JSON.parse(localStorage.getItem("username"));


const handleNewName=(userid)=>{
  const payload={name}
  axios.patch(`https://crimson-coyote-gear.cyclic.app/update_user/${userid}`,payload,{
    headers:{
      "Authorization":token
    }
  })
 .then((res)=>{
  window.location.reload()
  toast({
    title: 'Name successfully',
    description: "You can check it in database",
    status: 'success',
    duration: 9000,
    isClosable: true,
  })
  // localStorage.setItem("username",JSON.stringify(username))
  // console.log(res)
 })
}


  return (
    <>
    <Navbar/>

    <Container bg="#9DC4FB" maxW="full" mt={0} centerContent overflow="hidden">
      <Flex>
        <Box
          bg="#02054B"
          color="white"
          borderRadius="lg"
          m={{ sm: 4, md: 16, lg: 10 }}
          p={{ sm: 5, md: 5, lg: 16 }}>
          <Box p={4}>
            <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
              <WrapItem>
                <Box>
                  <Heading>Update Your Name</Heading>
                  <Text mt={{ sm: 3, md: 3, lg: 5 }} color="gray.500">
                    Text Your Idea Free
                  </Text>
                   
                </Box>
              </WrapItem>
              <WrapItem>
                <Box bg="white" borderRadius="lg">
                  <Box m={8} color="#0B0E3F">
                    <VStack spacing={5}>
                
                      <FormControl id="name">
                        <FormLabel>Updated Name</FormLabel>
                       
                        <Input 
                        value={name} onChange={(e)=>setName(e.target.value)}
                        type="text" placeholder='Enter Name'/>

                      </FormControl>
                      <FormControl id="name" float="right">
                        <Button 
                        onClick={()=>handleNewName(userid)}
                          variant="solid"
                          bg="#0D74FF"
                          color="white"
                          _hover={{}}>
                          Post
                        </Button>
                      </FormControl>
                    </VStack>
                  </Box>
                </Box>
              </WrapItem>
            </Wrap>
          </Box>
        </Box>
      </Flex>
    </Container>

    <Footer/>
    </>
  )
}

export default UserUpdate