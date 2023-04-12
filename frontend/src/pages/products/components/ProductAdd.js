import React, { useState } from "react";
import {
  TextField,
  Grid,
  Paper,
  Typography,
  Button,
  Input,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";

function ProductAdd() {
  const [formData, setFormData] = useState({
    image: null,
    title: "",
    subTitle: "",
    product: "",
    price: "",
    discount: "",
    city: "",
    description: "",
    code: "",
    hashTag: "",
    technology: "",
  });
  const history = useHistory();

  const onClickBack = () => {
    history.push("/app/products");
  };

  const onClickSave = () => {
    history.push("/app/products");
  };

  const handleFileSelect = (event) => {
    setFormData({
      ...formData,
      image: URL.createObjectURL(event.target.files[0]),
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
          Create Product
        </Typography>

        <form noValidate autoComplete="off">
          <Grid container spacing={1} alignItems="center">
            <Grid item lg={3} md={6} xs={12}>
              <Typography variant="h6">Image</Typography>
            </Grid>

            <Grid item lg={3} md={6} xs={12}>
              <Input type="file" onChange={handleFileSelect} />

              {formData.image && (
                <img src={formData.image} alt="Uploaded" width={250} />
              )}
            </Grid>
          </Grid>

          <Grid container spacing={1} alignItems="center">
            <Grid item lg={3} md={6} xs={12}>
              <Typography variant="h6">Title</Typography>
            </Grid>

            <Grid item lg={3} md={6} xs={12}>
              <TextField
                fullWidth
                variant="outlined"
                value={formData.title}
                onChange={(event) =>
                  setFormData({ ...formData, title: event.target.value })
                }
              />
            </Grid>
          </Grid>

          <Grid container spacing={1} alignItems="center">
            <Grid item lg={3} md={6} xs={12}>
              <Typography variant="h6">Sub Title</Typography>
            </Grid>

            <Grid item lg={3} md={6} xs={12}>
              <TextField
                fullWidth
                variant="outlined"
                value={formData.subTitle}
                onChange={(event) =>
                  setFormData({ ...formData, subTitle: event.target.value })
                }
              />
            </Grid>
          </Grid>

          <Grid container spacing={1} alignItems="center">
            <Grid item lg={3} md={6} xs={12}>
              <Typography variant="h6">Product</Typography>
            </Grid>

            <Grid item lg={3} md={6} xs={12}>
              <TextField
                fullWidth
                variant="outlined"
                value={formData.product}
                onChange={(event) =>
                  setFormData({ ...formData, product: event.target.value })
                }
              />
            </Grid>
          </Grid>
          <Grid container spacing={1} alignItems="center">
            <Grid item lg={3} md={6} xs={12}>
              <Typography variant="h6">Price</Typography>
            </Grid>

            <Grid item lg={3} md={6} xs={12}>
              <TextField
                fullWidth
                variant="outlined"
                value={formData.price}
                onChange={(event) =>
                  setFormData({ ...formData, price: event.target.value })
                }
              />
            </Grid>
          </Grid>
          <Grid container spacing={1} alignItems="center">
            <Grid item lg={3} md={6} xs={12}>
              <Typography variant="h6">Discount</Typography>
            </Grid>

            <Grid item lg={3} md={6} xs={12}>
              <TextField
                fullWidth
                variant="outlined"
                value={formData.discount}
                onChange={(event) =>
                  setFormData({ ...formData, discount: event.target.value })
                }
              />
            </Grid>
          </Grid>
          <Grid container spacing={1} alignItems="center">
            <Grid item lg={3} md={6} xs={12}>
              <Typography variant="h6">City</Typography>
            </Grid>

            <Grid item lg={3} md={6} xs={12}>
              <TextField
                fullWidth
                variant="outlined"
                value={formData.city}
                onChange={(event) =>
                  setFormData({ ...formData, city: event.target.value })
                }
              />
            </Grid>
          </Grid>
          <Grid container spacing={1} alignItems="center">
            <Grid item lg={3} md={6} xs={12}>
              <Typography variant="h6">Description</Typography>
            </Grid>

            <Grid item lg={3} md={6} xs={12}>
              <TextField
                fullWidth
                variant="outlined"
                value={formData.description}
                onChange={(event) =>
                  setFormData({ ...formData, description: event.target.value })
                }
              />
            </Grid>
          </Grid>

          <Grid container spacing={1} alignItems="center">
            <Grid item lg={3} md={6} xs={12}>
              <Typography variant="h6">Code</Typography>
            </Grid>

            <Grid item lg={3} md={6} xs={12}>
              <TextField
                fullWidth
                variant="outlined"
                value={formData.code}
                onChange={(event) =>
                  setFormData({ ...formData, code: event.target.value })
                }
              />
            </Grid>
          </Grid>

          <Grid container spacing={1} alignItems="center">
            <Grid item lg={3} md={6} xs={12}>
              <Typography variant="h6">Hash Tag</Typography>
            </Grid>

            <Grid item lg={3} md={6} xs={12}>
              <TextField
                fullWidth
                variant="outlined"
                value={formData.hashTag}
                onChange={(event) =>
                  setFormData({ ...formData, hashTag: event.target.value })
                }
              />
            </Grid>
          </Grid>

          <Grid container spacing={1} alignItems="center">
            <Grid item lg={3} md={6} xs={12}>
              <Typography variant="h6">Technology</Typography>
            </Grid>

            <Grid item lg={3} md={6} xs={12}>
              <TextField
                fullWidth
                variant="outlined"
                value={formData.technology}
                onChange={(event) =>
                  setFormData({ ...formData, technology: event.target.value })
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

export default ProductAdd;
