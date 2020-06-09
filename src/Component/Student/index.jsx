import React from "react";
import { Image, Grid } from "semantic-ui-react";
const Student = () => {
  return (
    <Grid celled>
      <Grid.Row>
        <Grid.Column width={3}>
          <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
        </Grid.Column>
        <Grid.Column width={13}>
          <Image src="https://react.semantic-ui.com/images/wireframe/centered-paragraph.png" />
        </Grid.Column>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column width={3}>
          <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
        </Grid.Column>
        <Grid.Column width={10}>
          <Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
        </Grid.Column>
        <Grid.Column width={3}>
          <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default Student;
