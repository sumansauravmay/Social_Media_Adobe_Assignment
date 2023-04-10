import React, { useState } from 'react';
import axios from "axios";
import { useToast } from '@chakra-ui/react'
import {
    Container,
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
    Textarea,
  } from '@chakra-ui/react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Post = () => {
  const toast = useToast();
const [content,setContent]=useState("")

let token=JSON.parse(localStorage.getItem("token"))

console.log(token)
const handlePostNew=()=>{
  let payload={
    content
  }
  if(content==="")
  {
    toast({
      title: 'Please fill the details carefully',
      description: "email or password or both are empty",
      status: 'error',
      duration: 9000,
      isClosable: true,
    })
  }
  else{
    axios.post("https://crimson-coyote-gear.cyclic.app/post",payload,{ 
      headers: {
      "Authorization": token
    }})
    .then((res)=>{
      console.log(res.data)
      window.location.reload()
      toast({
        title: 'Posted Successfully',
        description: "Congratulations",
        status: 'success',
        duration: 9000,
        isClosable: true,
      })
      
    })
  }
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
                  <Heading>Post Your Thought</Heading>
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
                        <FormLabel>Text</FormLabel>
                        <Textarea value={content} onChange={(e)=>setContent(e.target.value)}
                          borderColor="gray.300"
                          _hover={{
                            borderRadius: 'gray.300',
                          }}
                          placeholder="Max Length 300"
                        />
                      </FormControl>
                      <FormControl id="name" float="right">
                        <Button onClick={handlePostNew}
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

export default Post