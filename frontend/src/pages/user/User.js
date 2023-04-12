import React from "react";
import PageTitle from "../../components/PageTitle/PageTitle";
import { Button, Chip, Grid, IconButton } from "@material-ui/core";
import MUIDataTable from "mui-datatables";
import mock from "../dashboard/mock";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import DeleteOutlinedIcon from "@material-ui/icons/DeleteOutlined";
import { useHistory } from "react-router-dom";

function User() {
  const history = useHistory();
  const tableArray = mock.table;

  const handleEdit = (id) => {};

  const handleDelete = (id) => {};

  const onClickNewUser = () => {
    history.push("/app/users/add");
  };

  return (
    <>
      <PageTitle
        title="User"
        button={
          <Button
            variant="contained"
            size="medium"
            color="secondary"
            onClick={onClickNewUser}
          >
            New User
          </Button>
        }
      />

      <Grid container spacing={4}>
        <Grid item xs={12}>
          <MUIDataTable
            title="User List"
            data={tableArray}
            columns={[
              {
                name: "id",
                label: "Id",
                options: {
                  filter: false,
                  sort: true,
                  display: false,
                },
              },
              {
                name: "image",
                label: "Image",
                options: {
                  filter: false,
                  sort: false,
                  display: true,
                },
              },
              {
                name: "name",
                label: "Name",
                options: {
                  filter: false,
                  sort: false,
                  display: true,
                },
              },
              {
                name: "product",
                label: "Product",
                options: {
                  filter: false,
                  sort: false,
                  display: true,
                },
              },
              {
                name: "price",
                label: "Price",
                options: {
                  filter: true,
                  sort: true,
                  display: true,
                },
              },
              {
                name: "city",
                label: "City",
              },
              {
                name: "date",
                label: "Date",
                options: {
                  filter: true,
                  sort: true,
                  display: true,
                },
              },
              {
                name: "status",
                label: "Status",
                options: {
                  filter: true,
                  sort: true,
                  display: true,
                  customBodyRender: (value, tableMeta, updateValue) => {
                    return <Chip label={value} color="primary" />;
                  },
                },
              },
              {
                name: "actions",
                label: "Actions",
                options: {
                  filter: false,
                  sort: false,
                  empty: true,
                  customBodyRender: (value, tableMeta, updateValue) => {
                    return (
                      <div>
                        <IconButton
                          color="primary"
                          onClick={() => handleEdit(tableMeta.rowIndex)}
                        >
                          <EditOutlinedIcon />
                        </IconButton>
                        <IconButton
                          color="secondary"
                          onClick={() => handleDelete(tableMeta.rowIndex)}
                        >
                          <DeleteOutlinedIcon />
                        </IconButton>
                      </div>
                    );
                  },
                },
              },
            ]}
            options={{
              filterType: "checkbox",
            }}
          />
        </Grid>
      </Grid>
    </>
  );
}

export default User;
