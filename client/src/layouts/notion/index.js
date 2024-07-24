/**
=========================================================
* Work Trial - v2.1.0
=========================================================

* Product Page: https://micheal-akinbebije-portfolio.vercel.appproduct/material-dashboard-react
* Copyright 2022 Micheal Newton (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useState, useEffect } from "react";



// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Work Trial components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";


// Work Trial example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";

// Data
import authorsTableData from "layouts/tables/data/authorsTableData";
import projectsTableData from "layouts/tables/data/projectsTableData";
import generalService from "../../services/general-service";

// @mui material components
import Icon from "@mui/material/Icon";

// Work Trial components
// import MDBox from "components/MDBox";
// import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDProgress from "components/MDProgress";

// Images
// import LogoAsana from "assets/images/small-logos/logo-asana.svg";
// import logoGithub from "assets/images/small-logos/github.svg";
// import logoAtlassian from "assets/images/small-logos/logo-atlassian.svg";
import logoSlack from "assets/images/small-logos/Notion-logo.svg";
// import logoSpotify from "assets/images/small-logos/logo-spotify.svg";
import logoInvesion from "assets/images/small-logos/logo-invision.svg";

const Notion = () => {
  const { columns, rows } = authorsTableData();
  const { columns: pColumns, rows: pRows } = projectsTableData();
  const [Messages, setMessage] = useState([]);



  useEffect(() => {
    console.log("messages", Messages)
    const getMessages = async () => {
      const response = await generalService.getAllNotions();
     
      // if (response.data.id == 1) {
      //   setIsDemo(process.env.REACT_APP_IS_DEMO === "true");
      // // }
      setMessage(response);
    };
    getMessages()
      .catch(console.error);
  }, []);
  console.log("fghj", Messages)


  const Project = ({ image, name }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="sm" variant="rounded" />
      <MDTypography display="block" variant="button" fontWeight="medium" ml={1} lineHeight={1}>
        {name}
      </MDTypography>
    </MDBox>
  );

  const Progress = ({ color, value }) => (
    <MDBox display="flex" alignItems="center">
      <MDTypography variant="caption" color="text" fontWeight="medium">
        {value}%
      </MDTypography>
      <MDBox ml={0.5} width="9rem">
        <MDProgress variant="gradient" color={color} value={value} />
      </MDBox>
    </MDBox>
  );

  let rows2 = []
  const renderMessages = Messages.map((message) => {
    console.log(rows2)
    return rows2.push({
      project: <Project image={logoSlack} name="Notion" />,
      budget: (
        <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
          {message['notionId']}
        </MDTypography>
      ),
      status: (
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          {message['status']}
        </MDTypography>
      ),
      priority: (
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
        {message['priority']}
     </MDTypography>
      ),
      created_time: (
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
        {message['created_time']}
     </MDTypography>
      ),
      last_edited_time: (
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
        {message['last_edited_time']}
     </MDTypography>
      ),
      action: (
        <MDTypography component="a" href="#" color="text">
          <Icon>more_vert</Icon>
        </MDTypography>
      )
    })
  })


  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>

          <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
              >
                <MDTypography variant="h6" color="white">
                  Slack Messages
                </MDTypography>
              </MDBox>
              <MDBox pt={3}>
                <DataTable

                  table={{
                    columns: [
                      { Header: "Project", accessor: "project", width: "10%", align: "left" },
                      { Header: "NotionId", accessor: "budget", align: "left" },
                      { Header: "Status", accessor: "status", align: "center" },
                      { Header: "Priority", accessor: "priority", align: "center" },
                      { Header: "Created_time", accessor: "created_time", align: "center" },
                      { Header: "Last_edited_time", accessor: "last_edited_time", align: "center" },
                      { Header: "Action", accessor: "action", align: "center" },
                    ],
                    rows: rows2 
                  }}
                  isSorted={false}
                  entriesPerPage={false}
                  showTotalEntries={false}
                  noEndBorder
                />

              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Notion;
