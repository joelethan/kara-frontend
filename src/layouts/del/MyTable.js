import React, { useState, useContext } from "react";
import { Table, Container, Placeholder } from "semantic-ui-react";
import { Modal } from "react-bootstrap";
import CustomerDetails from "./clientDetails";
import Pagination from "../../helpers/Pagination";
import { GlobalContext } from "../../context/Provider";

function MyTable() {
  const {
    usersState: {
      users: { loading, data, measurements },
    },
  } = useContext(GlobalContext);

  const onClick = (id) => {
    console.log("onClick", id);
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [itemId, setItemId] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);

  // Get Users with measurements
  let clients = data.filter((item) => {
    return measurements ? JSON.stringify(measurements).includes(item._id) : [];
  });

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = clients.slice(indexOfFirstPost, indexOfLastPost);

  // Change Page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <Container>
      {loading ? (
        <Placeholder>
          <Placeholder.Header image>
            <Placeholder.Line />
            <Placeholder.Line />
          </Placeholder.Header>
          <Placeholder.Paragraph>
            <Placeholder.Line />
            <Placeholder.Line />
            <Placeholder.Line />
            <Placeholder.Line />
          </Placeholder.Paragraph>
        </Placeholder>
      ) : (
        <>
          <Table selectable striped unstackable color="blue" size="small">
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Customer Name</Table.HeaderCell>
                <Table.HeaderCell>Physical Address</Table.HeaderCell>
                <Table.HeaderCell>Email Address</Table.HeaderCell>
                <Table.HeaderCell>Contact Number</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {!!clients.length &&
                currentPosts.map((element) => (
                  <Table.Row
                    onClick={() => {
                      onClick(element._id);
                      setItemId(element);
                      handleShow();
                    }}
                    key={element._id + "client"}
                  >
                    <Table.Cell>
                      {element.firstName} {element.lastName}
                    </Table.Cell>
                    <Table.Cell>{element.address}</Table.Cell>
                    <Table.Cell>{element.email}</Table.Cell>
                    <Table.Cell>{element.contact}</Table.Cell>
                  </Table.Row>
                ))}
            </Table.Body>
          </Table>
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={clients.length}
            paginate={paginate}
          />
        </>
      )}
      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Client Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Woohoo, you're reading this text in a modal! */}
          <Container style={{ padding: "1rem" }}>
            <CustomerDetails itemId={itemId} />
          </Container>
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer> */}
      </Modal>
    </Container>
  );
}

export default MyTable;
