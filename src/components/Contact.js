import { EmailIcon } from '@chakra-ui/icons';
import {
  Button,
  Center,
  CircularProgress,
  Container,
  Divider,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Textarea,
} from '@chakra-ui/react';
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';

const Contact = () => {
  const form = useRef();
  const [isLoading, setisLoading] = useState(false);

  const sendEmail = e => {
    e.preventDefault();
    setisLoading(true);

    console.log('in sendEmail');

    emailjs
      .sendForm(
        'service_pd12b26',
        'template_em90tck',
        form.current,
        'YCXHrQuLTRhx96v_w'
      )
      .then(
        result => {
          setisLoading(false);
          alert('Message sent!');
        },
        error => {
          setisLoading(false);
          alert(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <Container
      p={8}
      borderWidth={1}
      borderRadius={8}
      boxShadow="lg"
      id="contact"
      my={4}
    >
      <Heading as="h2" mb={6} align="center">
        Contact Me
      </Heading>
      <Divider my={7} />
      <form ref={form} onSubmit={sendEmail}>
        <FormControl mb={3} isRequired>
          <FormLabel>Your Name</FormLabel>
          <Input type={'text'} name="name" placeholder="John Doe" />
        </FormControl>
        <FormControl mb={3} isRequired>
          <FormLabel>Email</FormLabel>
          <Input type={'email'} name="email" placeholder="test@email.com" />
        </FormControl>
        <FormControl mb={6} isRequired>
          <FormLabel>Message</FormLabel>
          <Textarea name="message" placeholder="Say Hi!" />
        </FormControl>
        <Center>
          <Button type="submit" rightIcon={<EmailIcon />} colorScheme="teal">
            {isLoading ? (
              <CircularProgress isIndeterminate size="24px" color="teal" />
            ) : (
              'Send Message'
            )}
          </Button>
        </Center>
      </form>
    </Container>
  );
};

export default Contact;
