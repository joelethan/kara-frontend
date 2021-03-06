import React, { useContext, useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { Container, Placeholder, Table } from "semantic-ui-react";
import { GlobalContext } from "../../context/Provider";
import Pagination from "../../helpers/Pagination";
import CustomerDetails from "./clientDetails";

function MyTable({ searchText }) {
  const {
    usersState: {
      users: { loading, data, measurements },
    },
  } = useContext(GlobalContext);

  const [show, setShow] = useState(false);
  const [itemId, setItemId] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchText]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Get Users with measurements
  let clients = data.filter((item) => {
    return measurements ? JSON.stringify(measurements).includes(item._id) : [];
  });

  // Searched Clients
  const foundClients = clients.filter((item) => {
    return (
      (item.firstName &&
        item.firstName.toLowerCase().search(searchText.toLowerCase()) !== -1) ||
      (item.lastName &&
        item.lastName.toLowerCase().search(searchText.toLowerCase()) !== -1) ||
      (item.address &&
        item.address.toLowerCase().search(searchText.toLowerCase()) !== -1)
    );
  });

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentClients = foundClients.slice(indexOfFirstPost, indexOfLastPost);

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
          <Table selectable striped unstackable color="brown" size="small">
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
                currentClients.map((element) => (
                  <Table.Row
                    onClick={() => {
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
            totalPosts={foundClients.length}
            paginate={paginate}
          />
        </>
      )}
      <Modal backdrop="static" size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Client Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Woohoo, you're reading this text in a modal! */}
          <Container style={{ padding: "1rem" }}>
            <CustomerDetails close={handleClose} itemId={itemId} />
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
