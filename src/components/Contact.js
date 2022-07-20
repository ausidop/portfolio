import { Button, Container, Divider, FormControl, FormLabel, Heading, Input, Textarea } from "@chakra-ui/react"

const Contact = () => {
  return (
    <Container>
      <Divider my={7}/>
      <Heading as='h2' mb={6} align='center'>Contact Me</Heading>
      

      <FormControl align='center' isRequired>
        <FormLabel>Name</FormLabel>
        <Input type={'text'} name="name" placeholder='Your Full Name'/>
        <FormLabel>Email</FormLabel>
        <Input type={'email'} name="email" placeholder='Your Email' />
        <FormLabel>Message</FormLabel>
        <Textarea name="message" placeholder="Your Message"/>
        <Button colorScheme="teal" mt={4}>Send Message</Button>

      </FormControl>
      
    </Container>
  )
}

export default Contact