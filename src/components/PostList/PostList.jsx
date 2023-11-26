import React, { useState, useEffect } from 'react';
import { useGetPostsQuery } from '../../api/api';
import { Link } from 'react-router-dom';
import styles from './PostList.module.css';
import {
  Heading,
  Avatar,
  Box,
  Center,
  Text,
  Button,
  useColorModeValue,
} from '@chakra-ui/react'
import { Spinner } from '@chakra-ui/react'
const PostList = () => {
  const { data: posts } = useGetPostsQuery();
  const [visiblePosts, setVisiblePosts] = useState(8); 
  const [loading, setLoading] = useState(false);
  const handleScroll = () => {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight - 100 && !loading) {
      setLoading(true);
      setTimeout(() => {
        setVisiblePosts((prevVisiblePosts) => prevVisiblePosts + 8); 
        setLoading(false);
      }, 1000);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <div >
      <div className={styles.list}>
      {posts?.slice(0, visiblePosts).map((post) => (
        <Center key={post.id} py={6} br={15}>
      <Box
        maxW={'320px'}
        w={'full'}
        boxShadow={'2xl'}
        rounded={'lg'}
        p={6}
        textAlign={'center'}>
        <Avatar
          size={'xl'}
          src={
            'https://boringavatars.com/f3ffd2-bff1ce-82bda7-6e837c-2e0527'
          }
          mb={4}
          pos={'relative'}
          _after={{
            content: '""',
            w: 4,
            h: 4,
            bg: 'green.300',
            border: '2px solid white',
            rounded: 'full',
            pos: 'absolute',
            bottom: 0,
            right: 3,
          }}
        />
        <Heading fontSize={'2xl'} fontFamily={'body'} height={8} overflow={'hidden'}>
        {post.title}
        </Heading>
       
        <Text
          textAlign={'justify'}
          mb={4}
          color={useColorModeValue('gray.700', 'gray.400')}
          px={3}>
{post.body.slice(0, 100)}...        
        </Text>
          <Link to={`/posts/${post.id}`}>  
          <Button
            flex={1}
            fontSize={'sm'}
            rounded={'full'}
            bg={'blue.400'}
            color={'white'}
            boxShadow={
              '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
            }
            _hover={{
              bg: 'blue.500',
            }}
            _focus={{
              bg: 'blue.500',
            }}>
            просмотр
          </Button> </Link>
      </Box>
    </Center>
      ))}   
</div>
{loading && visiblePosts < posts.length && <div className={styles.spinner}> <Spinner
  thickness='4px'
  speed='0.65s'
  emptyColor='gray.200'
  color='blue.500'
  size='xl'
/> </div>}
    </div>
  );
};

export default PostList;
