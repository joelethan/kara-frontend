import React, { useState, useContext } from "react";
import {
  Table,
  Container,
  Placeholder,
  Menu,
  Button,
  Input,
} from "semantic-ui-react";
import Pagination from "../../helpers/Pagination";
import { Modal } from "react-bootstrap";
import { GlobalContext } from "../../context/Provider";
import SupplierDetails from "./SupplierDetails";
import NewSupplier from "./NewSupplier";

function SupplierTable() {
  const {
    usersState: {
      users: { loading, data, supply },
    },
  } = useContext(GlobalContext);

  const onClick = (id) => {
    console.log("onClick", id);
  };

  const [show, setShow] = useState(false);
  const [showNew, setShowNew] = useState(false);

  const handleShowDt = () => setShow(true);
  const handleCloseDt = () => setShow(false);
  const handleShowNew = () => setShowNew(true);
  const handleCloseNew = () => setShowNew(false);

  const [itemId, setItemId] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);

  // Choosing the Supplier
  let supplier = data.filter((item) => {
    return JSON.stringify(supply).includes(item._id);
  });

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = supplier.slice(indexOfFirstPost, indexOfLastPost);

  // Change Page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <Menu secondary>
        <Menu.Item>
          <Button primary onClick={handleShowNew}>
            New Supplier
          </Button>
        </Menu.Item>
        <Menu.Item>
          <Button primary onClick={handleShowNew}>
            Receive Stock
          </Button>
        </Menu.Item>
        <Menu.Item position="right">
          <Input icon="search" placeholder="Search..." />
        </Menu.Item>
      </Menu>

      <Modal
        size="lg"
        show={showNew}
        onHide={handleCloseNew}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Large Modal
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <NewSupplier />
        </Modal.Body>
      </Modal>
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
              {!!supplier.length &&
                currentPosts.map((element) => (
                  <Table.Row
                    onClick={() => {
                      onClick(element._id);
                      setItemId(element._id);
                      handleShowDt();
                    }}
                    key={element._id + "supplier"}
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
          totalPosts={supplier.length}
          paginate={paginate}
        />

        <Modal
          size="lg"
          show={show}
          onHide={handleCloseDt}
          aria-labelledby="example-modal-sizes-title-lg"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">
              Large Modal
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <SupplierDetails id={itemId} />
          </Modal.Body>
        </Modal>
      </Container>
    </>
  );
}

export default SupplierTable;
