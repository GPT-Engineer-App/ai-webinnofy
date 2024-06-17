import { Container, Text, VStack, Heading, Button, Box, Flex, Image } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Index = () => {
  return (
    <Container centerContent maxW="container.xl" py={10}>
      {/* Hero Section */}
      <Box as="section" w="full" mb={10}>
        <Flex direction={{ base: "column", md: "row" }} align="center" justify="space-between">
          <VStack align="start" spacing={4} maxW="lg">
            <Heading as="h1" size="2xl" color="brand.700">AI Agents That Transform Your Business</Heading>
            <Text fontSize="lg">
              Harness the power of AI to create exceptional customer experiences. Automate conversations, personalize interactions, and gain valuable insights with Webinnofy.
            </Text>
            <Button as={RouterLink} to="/features" colorScheme="blue" size="lg">Learn More</Button>
          </VStack>
          <Box maxW="md" mt={{ base: 6, md: 0 }}>
            <video width="100%" autoPlay loop muted>
              <source src="/path-to-your-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </Box>
        </Flex>
      </Box>

      {/* Benefits Showcase */}
      <Box as="section" w="full" mb={10}>
        <Heading as="h2" size="xl" color="brand.700" mb={6}>Key Benefits</Heading>
        <Flex direction={{ base: "column", md: "row" }} justify="space-between">
          <VStack align="start" spacing={4} maxW="sm">
            <Image src="/images/benefit1.jpg" alt="Benefit 1" />
            <Text fontSize="lg" fontWeight="bold">Increased Efficiency</Text>
            <Text>Automate repetitive tasks and free up your team to focus on what matters most.</Text>
          </VStack>
          <VStack align="start" spacing={4} maxW="sm">
            <Image src="/images/benefit2.jpg" alt="Benefit 2" />
            <Text fontSize="lg" fontWeight="bold">Improved Customer Satisfaction</Text>
            <Text>Provide 24/7 support and personalized interactions to delight your customers.</Text>
          </VStack>
          <VStack align="start" spacing={4} maxW="sm">
            <Image src="/images/benefit3.jpg" alt="Benefit 3" />
            <Text fontSize="lg" fontWeight="bold">Higher Sales</Text>
            <Text>Leverage AI to identify opportunities and drive revenue growth.</Text>
          </VStack>
        </Flex>
      </Box>

      {/* Features Overview */}
      <Box as="section" w="full" mb={10}>
        <Heading as="h2" size="xl" color="brand.700" mb={6}>Core Features</Heading>
        <Flex direction={{ base: "column", md: "row" }} justify="space-between">
          <VStack align="start" spacing={4} maxW="sm">
            <Image src="/images/feature1.jpg" alt="Feature 1" />
            <Text fontSize="lg" fontWeight="bold">Feature 1</Text>
            <Text>Clear description of feature 1 and its benefits.</Text>
          </VStack>
          <VStack align="start" spacing={4} maxW="sm">
            <Image src="/images/feature2.jpg" alt="Feature 2" />
            <Text fontSize="lg" fontWeight="bold">Feature 2</Text>
            <Text>Clear description of feature 2 and its benefits.</Text>
          </VStack>
          <VStack align="start" spacing={4} maxW="sm">
            <Image src="/images/feature3.jpg" alt="Feature 3" />
            <Text fontSize="lg" fontWeight="bold">Feature 3</Text>
            <Text>Clear description of feature 3 and its benefits.</Text>
          </VStack>
        </Flex>
      </Box>

      {/* Pricing and Plans */}
      <Box as="section" w="full" mb={10}>
        <Heading as="h2" size="xl" color="brand.700" mb={6}>Pricing and Plans</Heading>
        <Flex direction={{ base: "column", md: "row" }} justify="space-between">
          <VStack align="start" spacing={4} maxW="sm">
            <Heading as="h3" size="lg">Basic Plan</Heading>
            <Text fontSize="lg">$599 one-time purchase</Text>
            <Text>Includes 10 AI agents for customer support.</Text>
            <Button colorScheme="blue">Buy Now</Button>
          </VStack>
          <VStack align="start" spacing={4} maxW="sm">
            <Heading as="h3" size="lg">Pro Plan</Heading>
            <Text fontSize="lg">$7999 one-time purchase</Text>
            <Text>Includes 100 AI agents for various business roles.</Text>
            <Button colorScheme="blue">Buy Now</Button>
          </VStack>
        </Flex>
      </Box>

      {/* Testimonials and Case Studies */}
      <Box as="section" w="full" mb={10}>
        <Heading as="h2" size="xl" color="brand.700" mb={6}>Testimonials and Case Studies</Heading>
        <Flex direction={{ base: "column", md: "row" }} justify="space-between">
          <VStack align="start" spacing={4} maxW="sm">
            <Text fontSize="lg" fontWeight="bold">Customer 1</Text>
            <Text>"Webinnofy has transformed our customer support process. Our customers are happier than ever!"</Text>
          </VStack>
          <VStack align="start" spacing={4} maxW="sm">
            <Text fontSize="lg" fontWeight="bold">Customer 2</Text>
            <Text>"The AI agents are incredibly efficient and have helped us increase our sales by 20%."</Text>
          </VStack>
          <VStack align="start" spacing={4} maxW="sm">
            <Text fontSize="lg" fontWeight="bold">Customer 3</Text>
            <Text>"We love how easy it is to customize the AI agents to fit our specific needs."</Text>
          </VStack>
        </Flex>
      </Box>

      {/* Call to Action */}
      <Box as="section" w="full" mb={10}>
        <Flex direction="column" align="center">
          <Heading as="h2" size="xl" color="brand.700" mb={6}>Ready to Transform Your Business?</Heading>
          <Button as={RouterLink} to="/contact" colorScheme="blue" size="lg">Request a Demo</Button>
        </Flex>
      </Box>
    </Container>
  );
};

export default Index;