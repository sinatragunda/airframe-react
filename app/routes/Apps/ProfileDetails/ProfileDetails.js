import React ,{useContext} from "react";
import { faker } from "@faker-js/faker";
import { Link } from "react-router-dom";
import ClientDataContext from "../../../containers/client/ClientDataContext";

import {
  Container,
  Row,
  Col,
  CardHeader,
  DropdownToggle,
  DropdownItem,
  DropdownMenu,
  UncontrolledButtonDropdown,
  Card,
  ButtonGroup,
  Button,
  CardBody,
  CardFooter,
  CardGroup,
  Table,
  TabPane,
  Badge,
  Nav,
  NavItem,
  UncontrolledTabs,
} from "./../../../components";
import { HeaderMain } from "../../components/HeaderMain";

import { Profile } from "../../components/Profile";
import { ProfileOverviewCard } from "../../components/Profile/ProfileOverviewCard";
import { DlRowContacts } from "../../components/Profile/DlRowContacts";
import { DlRowAddress } from "../../components/Profile/DlRowAddress";
import { ChatLeft } from "../../components/Chat/ChatLeft";
import { ChatRight } from "../../components/Chat/ChatRight";
import { ChatCardFooter } from "../../components/Chat/ChatCardFooter";
import { TrTableMessages } from "./components/TrTableMessages";
import { TimelineDefault } from "../../components/Timeline/TimelineDefault";



const ProfileDetails = ({title}) =>{

  let clientData = useContext(ClientDataContext);

  return(
      <React.Fragment>
        <Container>
          <HeaderMain title={title} className="mb-5 mt-4" />
          {/* START Content */}
          <Row>
            <Col lg={4}>
              <Card>
                <CardBody>
                  <Profile clientData = {clientData} />
                  
                  <Row className="mt-3">
                    <Col sm={6} md={6}>
                      <Button
                        color="primary"
                        block
                        tag={Link}
                        to="/apps/new-email"
                        className="mb-3 mb-lg-0"
                      >
                        Message
                      </Button>
                    </Col>
                    <Col sm={6} md={6}>
                      <Button
                        color="secondary"
                        outline
                        block
                        tag={Link}
                        to="/apps/profile-edit"
                      >
                        Edit
                      </Button>
                    </Col>
                  </Row>

                  <div className="mt-4 mb-2">
                    <span className="small">Tags</span>
                  </div>
                  <div className="text-left mb-4">
                    <Badge pill color="secondary" className="mr-1">
                      {clientData.tags}
                    </Badge>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col lg={8}>
              <UncontrolledTabs initialActiveTabId="overview">
                {/* START Pills Nav */}
                <Nav pills className="mb-4 flex-column flex-md-row mt-4 mt-lg-0">
                  <NavItem>
                    <UncontrolledTabs.NavLink tabId="overview">
                      Overview
                    </UncontrolledTabs.NavLink>
                  </NavItem>
                  <NavItem>
                    <UncontrolledTabs.NavLink tabId="detailContact">
                      Information
                    </UncontrolledTabs.NavLink>
                  </NavItem>
                  <NavItem>
                    <UncontrolledTabs.NavLink tabId="task">
                      Task
                    </UncontrolledTabs.NavLink>
                  </NavItem>
                  <NavItem>
                    <UncontrolledTabs.NavLink tabId="messages">
                      Messages{" "}
                      <Badge pill color="secondary" className="ml-2">
                        5
                      </Badge>
                    </UncontrolledTabs.NavLink>
                  </NavItem>
                </Nav>
                {/* END Pills Nav */}
                <UncontrolledTabs.TabContent>
                  <TabPane tabId="overview">
                    <CardGroup className="mb-5">
                      <Card body>
                        <ProfileOverviewCard
                          title="Views"
                          badgeColor="primary"
                          badgeTitle="Monthly"
                          value="6.200"
                          valueTitle="Total Views"
                          footerTitle="Last Month"
                          footerTitleClassName="text-success"
                          footerIcon="caret-up"
                          footerValue="23%"
                        />
                      </Card>
                      <Card body>
                        <ProfileOverviewCard
                          title="Orders"
                          badgeColor="info"
                          badgeTitle="Annual"
                          value="75.938"
                          valueTitle="New Orders"
                          footerTitle="Last Annual"
                          footerTitleClassName="text-danger"
                          footerIcon="caret-down"
                          footerValue="96%"
                        />
                      </Card>
                      <Card body>
                        <ProfileOverviewCard
                          title="Visits"
                          badgeColor="secondary"
                          badgeTitle="Today"
                          value="75.938"
                          valueTitle="Total Visits"
                          footerTitle="Yesterday"
                          footerTitleClassName="text-success"
                          footerIcon="caret-up"
                          footerValue="40%"
                        />
                      </Card>
                    </CardGroup>
                  </TabPane>

                  <TabPane tabId="detailContact">
                    <Card body>
                      <div className="mb-2">
                        <span className="small">Information</span>
                      </div>
                      <DlRowContacts
                        clientData = {clientData}
                        leftSideClassName="text-lg-right"
                        rightSideClassName="text-inverse"
                      />
                      <div className="mt-4 mb-2">
                        <span className="small">Address</span>
                      </div>
                      <DlRowAddress
                        leftSideClassName="text-lg-right"
                        rightSideClassName="text-inverse"
                      />
                      </Card>
                  </TabPane>
                  <TabPane tabId="task">
                    <Card>
                      <CardHeader className="d-flex bg-white bb-0">
                        <h6 className="align-self-center mb-0">
                          Chat with Romaine Weber
                        </h6>
                        <UncontrolledButtonDropdown className="align-self-center ml-auto">
                          <DropdownToggle color="link" size="sm">
                            <i className="fa fa-gear"></i>
                            <i className="fa fa-angle-down ml-2" />
                          </DropdownToggle>
                          <DropdownMenu right>
                            <DropdownItem>
                              <i className="fa fa-fw fa-comment mr-2"></i>
                              Private Message
                            </DropdownItem>
                            <DropdownItem>
                              <i className="fa fa-fw fa-search mr-2"></i>
                              Search this Thread
                            </DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem>
                              <i className="fa fa-fw fa-ban mr-2"></i>
                              Block this User
                            </DropdownItem>
                          </DropdownMenu>
                        </UncontrolledButtonDropdown>
                      </CardHeader>
                      <CardBody>
                        <ChatLeft cardClassName="bg-gray-300 b-0 text-dark" />
                        <ChatRight cardClassName="text-dark" />
                        <ChatLeft cardClassName="bg-gray-300 b-0 text-dark" />
                        <div className="mt-4 mb-3 text-center">
                          <span className="small">Yesterday</span>
                        </div>
                        <ChatRight cardClassName="text-dark" />
                      </CardBody>
                      <CardFooter>
                        <ChatCardFooter />
                      </CardFooter>
                    </Card>
                  </TabPane>
                  <TabPane tabId="messages">
                    <Card>
                      <CardBody className="d-flex">
                        <ButtonGroup size="sm">
                          <Button color="secondary" outline active>
                            Inbox
                          </Button>
                          <Button color="secondary" outline>
                            Archive
                          </Button>
                        </ButtonGroup>
                        <span className="ml-auto">
                          Showing 1 to 10 of 57 entries
                        </span>
                      </CardBody>
                      {/* START Table */}
                      <Table className="mb-0" hover responsive>
                        <thead>
                          <tr>
                            <th className="bt-0">From</th>
                            <th className="bt-0">Subject</th>
                            <th className="bt-0 text-right">Date</th>
                          </tr>
                        </thead>
                        <tbody>
                          <TrTableMessages />
                          <TrTableMessages />
                          <TrTableMessages />
                          <TrTableMessages />
                          <TrTableMessages />
                          <TrTableMessages />
                          <TrTableMessages />
                          <TrTableMessages />
                          <TrTableMessages />
                        </tbody>
                      </Table>
                      {/* END Table */}
                      <CardFooter className="d-flex">
                        <ButtonGroup size="sm">
                          <Button color="secondary" outline>
                            <i className="fa fa-fw fa-angle-left"></i>
                          </Button>
                          <Button color="secondary" outline>
                            <i className="fa fa-fw fa-angle-right"></i>
                          </Button>
                        </ButtonGroup>
                        <span className="ml-auto align-self-center">
                          Showing 1 to 10 of 57 entries
                        </span>
                      </CardFooter>
                    </Card>
                  </TabPane>
                </UncontrolledTabs.TabContent>
              </UncontrolledTabs>
            </Col>
          </Row>
          {/* END Content */}
        </Container>
      </React.Fragment>
  )
}


ProfileDetails.defaultProps = {
  title : "Client Details"
}

export default ProfileDetails;
