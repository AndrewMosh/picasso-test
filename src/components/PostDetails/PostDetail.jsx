// components/PostDetail.js
import React from 'react';
import { useGetPostByIdQuery } from '../../api/api';
import { useParams, Link } from 'react-router-dom';
import {
  Box,
  Heading,
  Image,
  Text,
  useColorModeValue,
  Container,
Button,

} from '@chakra-ui/react'
import { Spinner } from '@chakra-ui/react';
import  styles from '../PostList/PostList.module.css'
import BlogAuthor from '../PostDetails/BlogAuthor';
import BlogTags from '../PostDetails/BlogTags';
import Error from '../Error/Error';
const PostDetail = () => {
  const { postId } = useParams();
  const { data: post,error } = useGetPostByIdQuery(postId);
  if (error) {
    return <div><Error /></div>;
  }
 
  return (
    <div>
    {post ?  <Container key={post.id} maxW={'7xl'} p="12">
 <Link to="/picasso-test/">
        <Button mb={5}>Back</Button>
      </Link>
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
            <Box textDecoration="none" _hover={{ textDecoration: 'none' }}>
              <Image
                borderRadius="lg"
                src={
                  'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80'
                }
                alt="some good alt text"
                objectFit="contain"
              />
            </Box>
          </Box>
          <Box zIndex="1" width="100%" position="absolute" height="100%">
            <Box
              bgGradient={useColorModeValue(
                'radial(orange.600 1px, transparent 1px)',
                'radial(orange.300 1px, transparent 1px)',
              )}
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
          <BlogTags tags={['Frontend', 'IT']} />
          <Heading marginTop="1">
            <Text textDecoration="none" _hover={{ textDecoration: 'none' }}>
            {post?.title}
            </Text>
          </Heading>
          <Text
            as="p"
            marginTop="2"
            color={useColorModeValue('gray.700', 'gray.200')}
            fontSize="lg">
           {post?.body}
          </Text>
          <BlogAuthor name="Andrew Mosh" date={new Date('2021-04-06T19:01:27Z')} />
        </Box>
      </Box>
    </Container>  :<div className={styles.spinner+" "+styles.forPage}> <Spinner
  thickness='4px'
  speed='0.65s'
  emptyColor='gray.200'
  color='blue.500'
  size='xl'
/> </div>    
    }
    </div>
  )
};

export default PostDetail;







