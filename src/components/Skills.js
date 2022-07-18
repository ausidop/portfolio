import { Container, Grid, GridItem } from '@chakra-ui/react';
import { skills } from '../data';

const Skills = () => {
  return (
    <Container id="skills">
      <Grid templateColumns="repeat(4, 1fr)">
        {skills.map((skill) => {
          return <GridItem textAlign="center">{skill.text}</GridItem>;
        })}
      </Grid>
    </Container>
  );
};

export default Skills;
