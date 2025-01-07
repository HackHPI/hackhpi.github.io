import {Box, Button, Divider, Grid, TextField, Typography} from "@mui/material";

export function GroupManager(props) {
  return (
      <Grid
          item
          md={12}
          xs={12}
      >
          <TextField fullWidth label={"Enter group name here"}>

          </TextField>

          <Divider> or </Divider>

          <Button variant={"outlined"} color={"secondary"}>Create new Group</Button>

      <Typography variant="body2" color="textSecondary" gutterBottom>
        Enter your group code here or generate a new one.
      </Typography>
      </Grid>
  );
}
