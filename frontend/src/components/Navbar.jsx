import React from 'react';
import { Link,useNavigate } from 'react-router-dom';
import {
    Box,Heading,
    Flex,
    Avatar,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useColorModeValue,
    Stack,
    useColorMode,
    Center,useToast,
  } from '@chakra-ui/react';
  import { MoonIcon, SunIcon } from '@chakra-ui/icons';

const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const navigate=useNavigate();
    const toast = useToast();
   
    let token=JSON.parse(localStorage.getItem("token"))
   
    //logout
    const handleLogout=()=>{
      localStorage.removeItem("token")
      toast({
        title: 'Logout Successfull',
        description: "You are redirectd to Login Page",
        status: 'success',
        duration: 9000,
        isClosable: true,
      })
      navigate("/login")
    }

    //allpost
    const hanldeallPost=()=>{
if(token){
  navigate("/allpost")
}
else{
  toast({
    title: 'Login First',
    description: "You are redirectd to Login Page",
    status: 'success',
    duration: 9000,
    isClosable: true,
  })
  navigate("/login")
}
    }

    //new Post
    const hanldeallPost2=()=>{
      if(token){
        navigate("/post")
      }
      else{
        toast({
          title: 'Login First',
          description: "You are redirectd to Login Page",
          status: 'success',
          duration: 9000,
          isClosable: true,
        })
        navigate("/login")
      }
          }


    return (
      <>
        <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
          <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
           
            <Heading w={40} onClick={hanldeallPost2} cursor={'pointer'}>
            {/* <Link to="/post"> */}
            New Post
                {/* </Link> */}
                </Heading>

                <Heading w={40} onClick={hanldeallPost} cursor={'pointer'}>
            All Post
                </Heading>
            
            <Flex alignItems={'center'}>
              <Stack direction={'row'} spacing={7}>
                <Button onClick={toggleColorMode}>
                  {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                </Button>
  
                <Menu>
                  <MenuButton
                    as={Button}
                    rounded={'full'}
                    // variant={'link'}
                    cursor={'pointer'}
                    minW={0}>
                    <Avatar
                      size={'sm'}
                      src={'https://avatars.githubusercontent.com/u/101393663?v=4'}
                    />
                  </MenuButton>
                  <MenuList alignItems={'center'}>
                    <br />
                    <Center>
                      <Avatar
                        size={'2xl'}
                        src={'https://avatars.githubusercontent.com/u/101393663?v=4'}
                      />
                    </Center>
                    <br />
                    <Center>
                      <p>UserName</p>
                    </Center>
                    <br />
                    <MenuDivider />

                    <MenuItem>
                    <Link to="/">
                Sign Up
                </Link>
                    </MenuItem>

                    <MenuItem>
                    <Link to="/login">
                Log In
                </Link>
                    </MenuItem>

                    <MenuItem>
                    Update Name
                    </MenuItem>

                    <MenuItem onClick={handleLogout}> 
                Logout
                    </MenuItem>

                    <MenuItem>
                    Delete Account
                    </MenuItem>

                  </MenuList>
                </Menu>
              </Stack>
            </Flex>
          </Flex>
        </Box>
      </>
    );
}

export default Navbar