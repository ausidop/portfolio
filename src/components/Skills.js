import { Container, Grid, GridItem } from '@chakra-ui/react';
import { skills } from '../data';

const Skills = () => {
  return (
    <Container id="skills">
      <Grid templateColumns="repeat(3, 1fr)">
        {skills.map((skill) => {
          return <GridItem align="center" p={3}>{skill.icon}</GridItem>;
        })} 
      </Grid>
    </Container>
  );
};

export default Skills;
