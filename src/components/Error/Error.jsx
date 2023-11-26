import { Box, Flex, Heading, Text, Button } from '@chakra-ui/react'
import { CloseIcon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom'
const Error=()=>{ 
  return (
    <Box textAlign="center" py={10} px={6}>
      <Box display="inline-block">
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          bg={'red.500'}
          rounded={'50px'}
          w={'55px'}
          h={'55px'}
          textAlign="center">
          <CloseIcon boxSize={'20px'} color={'white'} />
        </Flex>
      </Box>
      <Heading as="h2" size="xl" mt={6} mb={2}>
       Ошибка
      </Heading>
      <Text color={'gray.500'}>
      Ошибка при загрузке поста или такой пост не существует
      </Text>
      <Link to="/">
      <Button colorScheme="red" mt={4}>
        назад
      </Button>
      </Link>
    </Box>
  )
}
export default Error