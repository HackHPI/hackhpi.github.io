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
import { useEffect, useMemo, useState } from "react";
import { GroupRest } from "../../../rest/GroupRest";

export function GroupManager(props) {
  const [loadingNewTeam, setLoadingNewTeam] = useState(false);
  const [fetchingExistingTeam, setFetchingExistingTeam] = useState(false);
  const [group, setGroup] = useState(props.value || false);
  const [groupInput, setGroupInput] = useState("");
  const [groupInputError, setGroupInputError] = useState(false);
  const [groupName, setGroupName] = useState("");
  const groupRest = useMemo(() => new GroupRest(), []);

  function createNewGroup() {
    setLoadingNewTeam(true);
    setGroupInputError(false);
    groupRest
      .createGroup(props.eventId, groupName)
      .then((response) => {
        setLoadingNewTeam(false);
        setGroup(response.data);
      })
      .catch((err) => {
        console.error(err);
        setLoadingNewTeam(false);
      });
  }

  function getGroup() {
    setFetchingExistingTeam(true);
    setGroupInputError(false);
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

  useEffect(() => {
    props.onGroupChange(group);
  }, [group]);

  function renderGroupSelection() {
    return (
      <Box sx={{ pt: 5, pb: 5 }}>
        <Stack direction="row" spacing={2}>
          <TextField
            fullWidth
            label={"Enter team identification (e.g. chalk-increase-vague)"}
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
        <Typography variant={"body2"} color={"text.disabled"} pt={1}>
          Identifier given by the group creator
        </Typography>
        <Divider sx={{ pt: 2, pb: 2 }}> or </Divider>
        <Stack direction="row" spacing={2}>
          <TextField
            fullWidth
            label={"Enter team name (e.g. Carbon Coders)"}
            value={groupName}
            onChange={(event) => setGroupName(event.target.value)}
            disabled={fetchingExistingTeam}
          />
          <LoadingButton
            sx={{ flexWrap: "nowrap" }}
            width={"100px"}
            variant={"outlined"}
            color={"primary"}
            onClick={createNewGroup}
            loading={loadingNewTeam}
            disabled={
              fetchingExistingTeam ||
              groupName.length < 3 ||
              groupName.length > 30
            }
          >
            Create
          </LoadingButton>
        </Stack>
        <Typography variant={"body2"} color={"text.disabled"} pt={1}>
          This will be your team name at the event
        </Typography>
      </Box>
    );
  }

  function renderGroup() {
    return (
      <Box sx={{ pt: 5, pb: 5 }}>
        <Typography gutterBottom>
          You are assigned to the group with identifier
        </Typography>
        <Typography sx={{ fontWeight: 800, pb: 3 }} variant={"h5"}>
          {group.phrase}
        </Typography>
        <Button variant="outlined" onClick={() => setGroup(null)}>
          Reset Group
        </Button>

        <Typography sx={{ pt: 4 }}>
          share this identifier to your team members
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
