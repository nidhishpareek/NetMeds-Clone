import { Box, Button, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const ErrorPage = () => {
    const navigateToHome = useNavigate();
    const goToHome = () => {
        navigateToHome('/')
    }
    return (
        <Box display={"flex"} justifyContent="center" alignItems="center" mt="100px">
            <Image src='https://www.netmeds.com/assets/gloryweb/images/404.png' />
            <Box textAlign={"center"}>
                <Text as="p" fontSize={"16px"}>It looks like you are lost</Text>
                <Text fontSize="12px" color="#6f7284">The page you are looking for no longer exist.<br />
                    Don’t stress, we have a way out for you</Text>
                <Button onClick={goToHome} _hover={{ bgColor: '#24aeb1' }} bgColor="#24aeb1" w="209px" borderRadius="3px" color="white" fontSize="14px" m="10px">GO TO HOME</Button>
            </Box>
        </Box >
    )
}

export default ErrorPage