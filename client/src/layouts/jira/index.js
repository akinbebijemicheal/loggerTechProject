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
import logoSlack from "assets/images/small-logos/logo-jira.svg";
// import logoSpotify from "assets/images/small-logos/logo-spotify.svg";
import logoInvesion from "assets/images/small-logos/logo-invision.svg";

const Jira = () => {
  const { columns, rows } = authorsTableData();
  const { columns: pColumns, rows: pRows } = projectsTableData();
  const [Messages, setMessage] = useState([]);



  useEffect(() => {
    console.log("messages", Messages)
    const getMessages = async () => {
      const response = await generalService.getAllJiraIssues();
     
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
      project: <Project image={logoSlack} name="Jira" />,
      jiraid: (
        <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
          {message['jiraId']}
        </MDTypography>
      ),
      assigneeEmail: (
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          {message['assigneeEmail']}
        </MDTypography>
      ),
      assigneeName: (
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          {message['assigneeName']}
        </MDTypography>
      ),
      summary: (
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          {message['summary']}
        </MDTypography>
      ),
      priority: (
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
           {message['priority']}
        </MDTypography>
      ),
      status: (
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
        {message['status']}
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
                      { Header: "Project", accessor: "project", width: "20%", align: "left" },
                      { Header: "Jira Id", accessor: "jiraid", align: "left" },
                      { Header: "Assignee Email", accessor: "assigneeEmail", align: "center" },
                      { Header: "Assignee Name", accessor: "assigneeName", align: "center" },
                      { Header: "Summary", accessor: "summary", align: "center" },
                      { Header: "Priority", accessor: "priority", align: "center" },
                      { Header: "Status", accessor: "status", align: "center" },
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

export default Jira;
