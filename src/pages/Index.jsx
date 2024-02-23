import { Box, Container, Flex, Heading, Text, VStack, SimpleGrid, Image, AspectRatio, Button, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, Link } from "@chakra-ui/react";
import { FaBookOpen, FaMapMarkedAlt, FaPlay, FaTimes } from "react-icons/fa";

const Index = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Container maxW="container.xl" p={0}>
      <Box textAlign="center" fontSize="xl">
        <Flex minH="100vh" py={20} direction="column" align="center" justify="center" bgImage="https://images.unsplash.com/photo-1516410529446-2c777cb7366d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx6b21iaWUlMjBiYWNrZ3JvdW5kfGVufDB8fHx8MTcwODcyNzk1OXww&ixlib=rb-4.0.3&q=80&w=1080" bgSize="cover" bgPos="center" bgRepeat="no-repeat">
          <Heading as="h1" size="4xl" fontWeight="bold" color="white" textShadow="2px 2px #000000">
            Welcome to the Project Zomboid Hub
          </Heading>
          <Text mt={4} color="gray.300" maxWidth="lg" fontSize="lg">
            Your ultimate guide to survival in the world of Project Zomboid. Find tips, tricks, maps, and interesting facts to improve your gameplay.
          </Text>
          <Button leftIcon={<FaPlay />} colorScheme="green" variant="solid" size="lg" mt={10} onClick={onOpen}>
            Watch Trailer
          </Button>
        </Flex>

        {/* Guides Section */}
        <VStack spacing={8} my={10}>
          <Heading as="h2" size="2xl">
            Game Guides
          </Heading>
          <SimpleGrid columns={[1, null, 3]} spacing={10}>
            {/* Placeholder for guide articles */}
            {[1, 2, 3].map((guide) => (
              <Box key={guide} p={5} shadow="md" borderWidth="1px" borderColor="gray.200" borderRadius="md" bg="white">
                <Heading fontSize="xl">Guide {guide}</Heading>
                <Text mt={4}>Your essential guide to getting started in Project Zomboid...</Text>
                <Button leftIcon={<FaBookOpen />} colorScheme="blue" variant="link" mt={2}>
                  Read More
                </Button>
              </Box>
            ))}
          </SimpleGrid>
        </VStack>

        {/* Maps Section */}
        <Box bg="gray.100" py={10}>
          <VStack spacing={8}>
            <Heading as="h2" size="2xl">
              Maps Collection
            </Heading>
            <SimpleGrid columns={[1, null, 2]} spacing={10}>
              <AspectRatio ratio={16 / 9} w="100%">
                <Image src="https://images.unsplash.com/photo-1577086664693-894d8405334a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxQcm9qZWN0JTIwWm9tYm9pZCUyME1hcHxlbnwwfHx8fDE3MDg3Mjc5NTl8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Project Zomboid Map" objectFit="cover" />
              </AspectRatio>
              <Box>
                <Text fontSize="lg">Explore detailed maps of the Project Zomboid world, find key locations and plan your strategy to survive.</Text>
                <Button leftIcon={<FaMapMarkedAlt />} colorScheme="teal" variant="solid" mt={4}>
                  View Maps
                </Button>
              </Box>
            </SimpleGrid>
          </VStack>
        </Box>

        {/* Footer */}
        <Box py={6} textAlign="center" borderTopWidth="1px" borderColor="gray.200">
          <Text>© 2023 Project Zomboid Hub. All rights reserved.</Text>
          <Link color="teal.500" href="#">
            Terms of Service
          </Link>
        </Box>
      </Box>

      {/* Modal for Trailer */}
      <Modal isOpen={isOpen} onClose={onClose} size="4xl" isCentered motionPreset="slideInBottom">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Game Trailer</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <AspectRatio ratio={16 / 9}>
              <iframe title="Project Zomboid Trailer" src="https://www.youtube.com/embed/?" allowFullScreen />
            </AspectRatio>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Container>
  );
};

export default Index;
