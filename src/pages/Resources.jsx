import { Box, Heading, Text, VStack, Link } from "@chakra-ui/react";

const Resources = () => (
  <Box p={4}>
    <VStack spacing={4} align="start">
      <Heading as="h2" size="xl" color="brand.700">Resources</Heading>
      <Text fontSize="lg">
        Explore valuable content such as blog posts, case studies, white papers, and FAQs.
      </Text>
      <VStack align="start" spacing={4}>
        <Link href="/path-to-blog-post" color="blue.500">Blog Post 1</Link>
        <Link href="/path-to-case-study" color="blue.500">Case Study 1</Link>
        <Link href="/path-to-white-paper" color="blue.500">White Paper 1</Link>
        <Link href="/path-to-faq" color="blue.500">FAQ 1</Link>
      </VStack>
    </VStack>
  </Box>
);

export default Resources;