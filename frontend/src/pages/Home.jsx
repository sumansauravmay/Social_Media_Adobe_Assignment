import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';
import axios from "axios";
import {AiFillDelete } from "react-icons/ai";
import {
    Box,
    Heading,
    Link,
    Image,
    Text,
    HStack,
    Tag,
    Container,
    Button,
  } from '@chakra-ui/react';
  
  let token=JSON.parse(localStorage.getItem("token"))
  
 
  
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

const [data,setData]=useState([]);

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
        alert("post deleted successfullt")
        window.location.reload()
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
                  <BlogAuthor name="created at" date={item.createdAt} />
                  <br/>

                  <Button bg={'green.400'}>Edit</Button>
                  <br/>
                  <Button onClick={()=>handleDelete(item._id)} bg={'green.400'}>Delete</Button>
                </Box>
              </Box>  
            ))
        }
       
      </Container>
      <Footer/>
      </>
    );
  };
  
  export default Home;