import { Container, Text, VStack, Heading, Button, Box, Flex, Image } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <Container centerContent maxW="container.xl" py={10}>
      {/* Hero Section */}
      <Box as="section" w="full" mb={10}>
        <Flex direction={{ base: "column", md: "row" }} align="center" justify="space-between">
          <VStack align="start" spacing={4} maxW="lg">
            <Heading as="h1" size="2xl" color="brand.700">Everything App for Your Teams</Heading>
            <Text fontSize="lg">
              Help your team collaborate, communicate, and manage tasks efficiently with Webinnofy.
            </Text>
            <Button as={RouterLink} to="/features" colorScheme="orange" size="lg">Get Started</Button>
          </VStack>
          <Box maxW="md" mt={{ base: 6, md: 0 }}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Image src="/images/abstract-visual.jpg" alt="Abstract Visual" />
            </motion.div>
          </Box>
        </Flex>
      </Box>

      {/* Productivity Section */}
      <Box as="section" w="full" mb={10}>
        <Heading as="h2" size="xl" color="brand.700" mb={6}>Unmatched Productivity</Heading>
        <Flex direction={{ base: "column", md: "row" }} justify="space-between">
          <VStack align="start" spacing={4} maxW="sm">
            <Image src="/images/benefit1.jpg" alt="Benefit 1" />
            <Text fontSize="lg" fontWeight="bold">Task Management</Text>
            <Text>Keep track of tasks and deadlines with ease.</Text>
          </VStack>
          <VStack align="start" spacing={4} maxW="sm">
            <Image src="/images/benefit2.jpg" alt="Benefit 2" />
            <Text fontSize="lg" fontWeight="bold">Real-time Collaboration</Text>
            <Text>Collaborate with your team in real-time.</Text>
          </VStack>
          <VStack align="start" spacing={4} maxW="sm">
            <Image src="/images/benefit3.jpg" alt="Benefit 3" />
            <Text fontSize="lg" fontWeight="bold">Notifications</Text>
            <Text>Stay updated with instant notifications.</Text>
          </VStack>
        </Flex>
      </Box>

      {/* Collaboration Section */}
      <Box as="section" w="full" mb={10}>
        <Heading as="h2" size="xl" color="brand.700" mb={6}>Work Together. Like in the Office.</Heading>
        <Flex direction={{ base: "column", md: "row" }} justify="space-between">
          <VStack align="start" spacing={4} maxW="sm">
            <Text fontSize="lg" fontWeight="bold">Customize Workspaces</Text>
            <Text>Tailor your workspace to fit your team's needs.</Text>
          </VStack>
          <VStack align="start" spacing={4} maxW="sm">
            <Text fontSize="lg" fontWeight="bold">Audio and Video Calls</Text>
            <Text>Communicate effectively with built-in audio and video calls.</Text>
          </VStack>
          <VStack align="start" spacing={4} maxW="sm">
            <Text fontSize="lg" fontWeight="bold">Invite Guests</Text>
            <Text>Collaborate with external partners and clients.</Text>
          </VStack>
        </Flex>
      </Box>

      {/* Integration Section */}
      <Box as="section" w="full" mb={10}>
        <Heading as="h2" size="xl" color="brand.700" mb={6}>Sync with GitHub. Both ways.</Heading>
        <Flex direction={{ base: "column", md: "row" }} justify="space-between">
          <VStack align="start" spacing={4} maxW="sm">
            <Text fontSize="lg" fontWeight="bold">Two-way Synchronization</Text>
            <Text>Keep your tasks and code in sync.</Text>
          </VStack>
          <VStack align="start" spacing={4} maxW="sm">
            <Text fontSize="lg" fontWeight="bold">Private Tasks</Text>
            <Text>Manage private tasks securely.</Text>
          </VStack>
          <VStack align="start" spacing={4} maxW="sm">
            <Text fontSize="lg" fontWeight="bold">Multiple Repositories</Text>
            <Text>Work with multiple repositories seamlessly.</Text>
          </VStack>
        </Flex>
      </Box>

      {/* MetaBrain Section */}
      <Box as="section" w="full" mb={10}>
        <Heading as="h2" size="xl" color="brand.700" mb={6}>Webinnofy MetaBrain</Heading>
        <Text fontSize="lg">
          Webinnofy offers a wide range of features to create and manage your project efficiently. With a suite of collaboration tools and seamless integrations, Webinnofy is your ultimate productivity partner.
        </Text>
        <Text fontSize="lg">
          Collaborate in real-time, share documents, and manage tasks effortlessly. Webinnofy MetaBrain ensures your team stays connected and productive.
        </Text>
      </Box>

      {/* Call to Action */}
      <Box as="section" w="full" mb={10}>
        <Flex direction="column" align="center">
          <Heading as="h2" size="xl" color="brand.700" mb={6}>Join the Movement</Heading>
          <Button as={RouterLink} to="/contact" colorScheme="orange" size="lg">Get Started</Button>
        </Flex>
      </Box>
    </Container>
  );
};

export default Index;