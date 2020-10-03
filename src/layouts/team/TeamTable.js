import React, { useState, useEffect } from "react";
import { Table, Container, Placeholder } from "semantic-ui-react";
import Pagination from "../../helpers/Pagination";
import { Modal } from "react-bootstrap";
import MemberDetails from "./MemberDetails";

function TeamTable({
  state: {
    users: { loading, error, data },
  },
  searchText,
}) {
  const onClick = (id) => {
    console.log("onClick", id);
  };

  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const [itemId, setItemId] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);

  // Choosing the Staff
  let staff = data.filter(
    (item) => item.role !== "supplier" && item.role !== "client"
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [searchText]);

  // Search through Staff
  const foundClients = staff.filter((item) => {
    return (
      item.firstName.toLowerCase().search(searchText.toLowerCase()) !== -1 ||
      item.lastName.toLowerCase().search(searchText.toLowerCase()) !== -1 ||
      item.address.toLowerCase().search(searchText.toLowerCase()) !== -1
    );
  });

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = foundClients.slice(indexOfFirstPost, indexOfLastPost);

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
            {!!foundClients.length &&
              currentPosts.map((element) => (
                <Table.Row
                  onClick={() => {
                    onClick(element._id);
                    setItemId(element._id);
                    handleShow();
                  }}
                  key={element._id + "team"}
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
      )}
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={foundClients.length}
        paginate={paginate}
      />

      <Modal
        size="lg"
        show={show}
        onHide={handleClose}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Large Modal
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <MemberDetails staff={staff} id={itemId} />
        </Modal.Body>
      </Modal>
    </Container>
  );
}

export default TeamTable;
