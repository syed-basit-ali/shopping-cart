import React, { useState } from "react";
import {
  TextField,
  Grid,
  Paper,
  Typography,
  Button,
  Input,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormLabel,
  Avatar,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";

function UserAdd() {
  const [formData, setFormData] = useState({
    avatar: null,
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    userType: "",
    password: "",
  });
  const history = useHistory();

  const onClickBack = () => {
    history.push("/app/user");
  };

  const onClickSave = () => {
    history.push("/app/user");
  };

  const handleButtonClick = () => {
    document.getElementById("imageInput").click();
  };

  const handleFileSelect = (event) => {
    setFormData({
      ...formData,
      avatar: URL.createObjectURL(event.target.files[0]),
    });
  };

  return (
    <>
      <Paper style={{ padding: 20 }}>
        <Button
          variant="contained"
          size="medium"
          color="secondary"
          onClick={onClickBack}
        >
          Back
        </Button>
      </Paper>
      <Paper style={{ padding: 20, marginTop: 20 }}>
        <Typography variant="h3" style={{ marginBottom: 20 }}>
          Create User
        </Typography>

        <form noValidate autoComplete="off">
          <Grid container spacing={3} alignItems="center">
            <Grid item>
              <Avatar
                src={formData.avatar}
                alt="Upload Image"
                style={{
                  width: "100px",
                  height: "100px",
                  fontSize: "50px",
                }}
              />
            </Grid>

            <Grid item lg={3} md={6} xs={12}>
              <Input
                id="imageInput"
                type="file"
                style={{ display: "none" }}
                onChange={handleFileSelect}
              />

              <Button
                variant="contained"
                size="small"
                color="primary"
                onClick={handleButtonClick}
              >
                Upload Image
              </Button>
            </Grid>
          </Grid>

          <br></br>

          <Grid container spacing={2} alignItems="center">
            <Grid item lg={12} md={12} xs={12}>
              <TextField
                fullWidth
                variant="outlined"
                label="First Name"
                value={formData.firstName}
                onChange={(event) =>
                  setFormData({ ...formData, firstName: event.target.value })
                }
              />
            </Grid>

            <Grid item lg={12} md={12} xs={12}>
              <TextField
                fullWidth
                label="Last Name"
                variant="outlined"
                value={formData.lastName}
                onChange={(event) =>
                  setFormData({ ...formData, lastName: event.target.value })
                }
              />
            </Grid>

            <Grid item lg={12} md={12} xs={12}>
              <TextField
                fullWidth
                label="Phone Number"
                variant="outlined"
                value={formData.phoneNumber}
                onChange={(event) =>
                  setFormData({ ...formData, phoneNumber: event.target.value })
                }
              />
            </Grid>

            <Grid item lg={12} md={12} xs={12}>
              <TextField
                fullWidth
                label="Email"
                variant="outlined"
                value={formData.email}
                onChange={(event) =>
                  setFormData({ ...formData, email: event.target.value })
                }
              />
            </Grid>

            <Grid item lg={12} md={12} xs={12}>
              <FormLabel>Role</FormLabel>

              <RadioGroup
                row
                value={formData.userType}
                onChange={(event) =>
                  setFormData({ ...formData, userType: event.target.value })
                }
              >
                <FormControlLabel
                  value="admin"
                  control={<Radio />}
                  label="Admin"
                />
                <FormControlLabel
                  value="user"
                  control={<Radio />}
                  label="User"
                />
              </RadioGroup>
            </Grid>

            <Grid item lg={12} md={12} xs={12}>
              <TextField
                fullWidth
                label="Password"
                variant="outlined"
                value={formData.password}
                onChange={(event) =>
                  setFormData({ ...formData, password: event.target.value })
                }
              />
            </Grid>
          </Grid>

          <Button
            variant="contained"
            size="large"
            color="primary"
            style={{ marginTop: 20 }}
            onClick={onClickSave}
          >
            Save
          </Button>
        </form>
      </Paper>
    </>
  );
}

export default UserAdd;
