import {
  Box,
  Button,
  Divider,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { useMemo, useState } from "react";
import { GroupRest } from "../../../rest/GroupRest";

export function GroupManager(props) {
  const [loadingNewTeam, setLoadingNewTeam] = useState(false);
  const [fetchingExistingTeam, setFetchingExistingTeam] = useState(false);
  const [group, setGroup] = useState(false);
  const [groupInput, setGroupInput] = useState("");
  const [groupInputError, setGroupInputError] = useState(false);
  const groupRest = useMemo(() => new GroupRest(), []);

  function createNewGroup() {
    setLoadingNewTeam(true);
    setGroupInputError(false)
    groupRest.createGroup(props.eventId).then((response) => {
      setLoadingNewTeam(false);
      setGroup(response.data);
    });
  }

  function getGroup() {
    setFetchingExistingTeam(true);
      setGroupInputError(false)
    groupRest
      .getGroup(props.eventId, groupInput)
      .then((response) => {
        setFetchingExistingTeam(false);
        setGroup(response.data);
      })
      .catch((error) => {
        setFetchingExistingTeam(false);
        setGroupInput("");
        setGroupInputError(true);
      });
  }

  function renderGroupSelection() {
    return (
      <Box sx={{ pt: 5, pb: 5 }}>
        <Stack direction="row" spacing={2}>
          <TextField
            fullWidth
            label={"Enter team name (e.g. chalk-increase-vague)"}
            value={groupInput}
            onChange={(event) => setGroupInput(event.target.value)}
            error={groupInputError}
            helperText={
              groupInputError ? "Did not find specified group" : undefined
            }
          />
          <LoadingButton
            variant={"outlined"}
            disabled={loadingNewTeam}
            loading={fetchingExistingTeam}
            onClick={getGroup}
          >
            Join
          </LoadingButton>
        </Stack>
        <Divider sx={{ pt: 2, pb: 2 }}> or </Divider>
        <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
          <LoadingButton
            variant={"outlined"}
            color={"primary"}
            onClick={createNewGroup}
            loading={loadingNewTeam}
            disabled={fetchingExistingTeam}
          >
            Create new Team
          </LoadingButton>
        </Box>
      </Box>
    );
  }

  function renderGroup() {
    return (
      <Box sx={{ pt: 5, pb: 5 }}>
        <Typography gutterBottom>You are assigned to the group</Typography>
        <Typography sx={{ fontWeight: 800, pb: 3 }} variant={"h5"}>
          {group.phrase}
        </Typography>
        <Button variant="outlined" onClick={() => setGroup(null)}>
          Reset Group
        </Button>

        <Typography sx={{ pt: 4 }}>
          share this name to your team members
        </Typography>
        <Typography color={"text.secondary"}>
          This is not your actual team name at the event
        </Typography>
      </Box>
    );
  }

  return (
    <Grid item md={12} xs={12}>
      {group ? renderGroup() : renderGroupSelection()}
    </Grid>
  );
}
