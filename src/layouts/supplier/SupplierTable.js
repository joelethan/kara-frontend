import React, { useState, useContext, useEffect } from "react";
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
import { primaryColor } from "../../constants/api";

function SupplierTable() {
  const {
    usersState: {
      users: { loading, supply },
    },
  } = useContext(GlobalContext);

  const onClick = (id) => {
    console.log("onClick", id);
  };

  const [show, setShow] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [itemId, setItemId] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(8);
  const [searchText, setSearchText] = useState("");

  const handleShowDt = () => setShow(true);
  const handleCloseDt = () => setShow(false);
  const handleShowNew = () => setShowNew(true);
  const handleCloseNew = () => setShowNew(false);

  // Searched Suppliers
  const foundItems = supply.filter((item) => {
    return (
      item.nameOfSupplier.toLowerCase().search(searchText.toLowerCase()) !==
        -1 ||
      item.status.toLowerCase().search(searchText.toLowerCase()) !== -1 ||
      item.email.toLowerCase().search(searchText.toLowerCase()) !== -1
    );
  });

  const getSupply = (id) => {
    return foundItems.find((item) => item._id === id);
  };

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = foundItems.slice(indexOfFirstPost, indexOfLastPost);

  // Change Page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const onChange = (e, { value }) => {
    setSearchText(value.trim().replace(/" "/g, ""));
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [searchText]);

  return (
    <>
      <Menu secondary>
        <Menu.Item>
          <Button
            primary
            onClick={handleShowNew}
            style={{ backgroundColor: primaryColor }}
          >
            Receive Stock
          </Button>
        </Menu.Item>
        <Menu.Item position="right">
          <Input icon="search" placeholder="Search..." onChange={onChange} />
        </Menu.Item>
      </Menu>

      <Modal
        size="lg"
        show={showNew}
        onHide={handleCloseNew}
        backdrop="static"
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Supplier Infomation
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <NewSupplier close={handleCloseNew} />
        </Modal.Body>
      </Modal>
      <Container>
        {loading ? (
          <Placeholder>
            <Placeholder.Header image>
              <Placeholder.Line />
            </Placeholder.Header>
            <Placeholder.Paragraph>
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
                  <Table.HeaderCell>Status</Table.HeaderCell>
                </Table.Row>
              </Table.Header>

              <Table.Body>
                {!!foundItems.length &&
                  currentPosts.map((element) => {
                    return (
                      <Table.Row
                        onClick={() => {
                          onClick(element._id);
                          setItemId(element._id);
                          handleShowDt();
                        }}
                        key={element._id + "supplier"}
                      >
                        <Table.Cell>{element.nameOfSupplier}</Table.Cell>
                        <Table.Cell>{element.address}</Table.Cell>
                        <Table.Cell>{element.email}</Table.Cell>
                        <Table.Cell>{element.contact}</Table.Cell>
                        <Table.Cell>{element.status}</Table.Cell>
                      </Table.Row>
                    );
                  })}
              </Table.Body>
            </Table>
            <Pagination
              postsPerPage={postsPerPage}
              totalPosts={foundItems.length}
              paginate={paginate}
            />
          </>
        )}

        <Modal
          size="lg"
          show={show}
          onHide={handleCloseDt}
          aria-labelledby="example-modal-sizes-title-lg"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">
              Supplier Details
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <SupplierDetails item={getSupply(itemId)} />
          </Modal.Body>
        </Modal>
      </Container>
    </>
  );
}

export default SupplierTable;
