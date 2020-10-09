import React, { useEffect, useContext, useState } from "react";
import ReceiptContainer from "../../containers/ReceiptContainer";
import getOrder from "../../context/actions/users/getOrder";
import { GlobalContext } from "../../context/Provider";
import { Modal, Container } from "react-bootstrap";
import Pagination from "../../helpers/Pagination";
import { Table, Menu, Input } from "semantic-ui-react";
import OrderDetails from "./OrderDetails";
import NewOrder from "./NewOrder";
import moment from "moment";
import Navbar from "../Navbar";

const OrdersDue = ({ orderInit, Id }) => {
  const {
    usersDispatch,
    usersState: {
      users: { data: users },
    },
    usersState: {
      orders: { data: orderData },
    },
  } = useContext(GlobalContext);

  useEffect(() => {
    getOrder()(usersDispatch);
  }, []);

  let items = [];

  for (const item of orderData) {
    let diffDays = parseInt(
      (new Date(item.dueDate) - new Date(Date.now())) / (1000 * 60 * 60 * 24),
      10
    );
    if (diffDays <= 2 && diffDays >= 0) {
      items.push(item);
    }
  }

  const getClient = (id) => {
    return users.find((item) => item._id === id);
  };

  const getOrdr = (orders, id) => {
    return orders.find((item) => item._id === id);
  };

  const [currentPage, setCurrentPage] = useState(1);
  const [itemId, setItemId] = useState(null);
  const [postsPerPage] = useState(5);
  const [show, setShow] = useState(false);
  const [showNew, setShowNew] = useState(!!orderInit);
  const [reShow, setReShow] = useState(false);
  const [receiptData, setReceiptData] = useState({});
  const [searchText, setSearchText] = useState("");

  // Searched Orders
  const foundClients = items.filter((item) => {
    return (
      item.clientName.toLowerCase().search(searchText.toLowerCase()) !== -1 ||
      item.status.toLowerCase().search(searchText.toLowerCase()) !== -1 ||
      // item.status.toLowerCase().search(!"completed") !== -1 ||
      item.assignedTailor.toLowerCase().search(searchText.toLowerCase()) !== -1
    );
  });

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = foundClients.slice(indexOfFirstPost, indexOfLastPost);

  // Change Page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleReShow = () => setReShow(true);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  // const handleShowNew = () => setShowNew(true);
  const handleCloseNew = () => setShowNew(false);

  const onSearch = (e, { value }) => {
    setSearchText(value.trim().replace(/" "/g, ""));
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [searchText]);

  return (
    <>
      <Navbar />
      <Container>
        <Menu secondary>
          <Menu.Item position="right">
            <Input icon="search" placeholder="search..." onChange={onSearch} />
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
              Order Details
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <NewOrder close={handleCloseNew} Id={Id} />
          </Modal.Body>
          <Modal.Footer>
            {/* <Button className="ui negative primary button">Cancel</Button>

          <Button className="primary" onClick={handleCloseNew}>
            Add Order
          </Button> */}
          </Modal.Footer>
        </Modal>

        <Table unstackable color="brown">
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Customer Name</Table.HeaderCell>
              <Table.HeaderCell> Assigned Tailor</Table.HeaderCell>
              <Table.HeaderCell> Order Date</Table.HeaderCell>
              <Table.HeaderCell>Order Status </Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {!!currentPosts.length &&
              currentPosts.map((element) => (
                <Table.Row
                  onClick={() => {
                    setItemId(element._id);

                    setReceiptData({
                      id: getOrdr(currentPosts, element._id)._id,
                      invoice_no: currentPosts.indexOf(element) + 1,
                      balance: "$2,283.74",
                      company: getOrdr(currentPosts, element._id).clientName,
                      email: getClient(
                        getOrdr(currentPosts, element._id).clientId
                      )
                        ? getClient(getOrdr(currentPosts, element._id).clientId)
                            .email
                        : "",
                      phone: getClient(
                        getOrdr(currentPosts, element._id).clientId
                      )
                        ? getClient(getOrdr(currentPosts, element._id).clientId)
                            .contact
                        : "",
                      address: getClient(
                        getOrdr(currentPosts, element._id).clientId
                      )
                        ? getClient(getOrdr(currentPosts, element._id).clientId)
                            .address
                        : "",
                      trans_date: getOrdr(currentPosts, element._id).data,
                      due_date: getOrdr(currentPosts, element._id).data,
                      items: getOrdr(currentPosts, element._id).orderDetails,
                    });

                    handleShow();
                  }}
                  key={element._id + "client"}
                >
                  <Table.Cell>{element.clientName}</Table.Cell>
                  <Table.Cell>{element.assignedTailor}</Table.Cell>
                  <Table.Cell>{moment(element.date).format("LLLL")}</Table.Cell>
                  <Table.Cell>{element.status}</Table.Cell>
                </Table.Row>
              ))}
          </Table.Body>
        </Table>
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={foundClients.length}
          paginate={paginate}
        />

        {/* Order Details */}

        <Modal
          size="lg"
          show={show}
          onHide={handleClose}
          aria-labelledby="example-modal-sizes-title-lg"
        >
          <Modal.Header closeButton>
            <Modal.Title>Order Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <OrderDetails
              setReceipt={handleReShow}
              item={getOrdr(currentPosts, itemId)}
            />
          </Modal.Body>
        </Modal>

        {/* Receipt Modal */}

        <Modal
          size="lg"
          show={reShow}
          onHide={() => setReShow(false)}
          aria-labelledby="example-modal-sizes-title-lg"
        >
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>
            <ReceiptContainer details={receiptData} />
          </Modal.Body>
        </Modal>
      </Container>
    </>
  );
};

export default OrdersDue;
