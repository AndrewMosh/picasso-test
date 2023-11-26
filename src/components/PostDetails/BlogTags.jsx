import React from 'react';
import { HStack, Tag } from '@chakra-ui/react';

const BlogTags = React.memo(({ marginTop = 0, tags }) => {
  return (
    <HStack spacing={2} marginTop={marginTop}>
      {tags.map((tag) => (
        <Tag size="md" variant="solid" colorScheme="blue" key={tag}>
          {tag}
        </Tag>
      ))}
    </HStack>
  );
});

export default BlogTags;
