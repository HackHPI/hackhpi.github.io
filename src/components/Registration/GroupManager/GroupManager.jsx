import {
  Box,
  Button,
  Divider,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";

export function GroupManager(props) {
  return (
    <Grid item md={12} xs={12}>
      <Box sx={{ pt: 5, pb: 5 }}>
        <TextField
          fullWidth
          label={"Enter team name (e.g. chalk-increase-vague)"}
        />
        <Divider sx={{ pt: 2, pb: 2 }}> or </Divider>
        <LoadingButton variant={"outlined"} color={"primary"} onClick={props.onReset}>
          Create new Team
        </LoadingButton>
      </Box>
    </Grid>
  );
}
