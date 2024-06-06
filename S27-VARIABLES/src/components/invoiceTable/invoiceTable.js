import React from "react";
import "./invoiceTable.css";

function InvoiceTable(props) {
  let invoiceNumber = props.invoiceNumber;
  let invoiceDate = props.invoiceDate;
  let payToname = props.payToname;
  let payToaddress = props.payToaddress;
  let payTocity = props.payTocity;
  let payTopincode = props.payTopincode;
  let customerName = props.customerName;
  let customerAddress = props.customerAddress;
  let customerCity = props.customerCity;
  let customerState = props.customerState;
  let customerPincode = props.customerPincode;
  let { items } = props;
  let subtotal = items.reduce(
    (acc, item) => acc + parseFloat(item.itemCost),
    0
  );
  let tax = subtotal * 0.08; 
  let grandTotal = subtotal + tax;

  return (
    <>
      <h1>Invoice Table</h1>
      <hr />

      <table className="invoiceTable">
        {/* Table caption */}
        <caption>Invoice #{invoiceNumber}</caption>

        {/* Table header */}
        <thead>
          <tr>
            {/* First row of header */}
            <th colSpan="3">Invoice #{invoiceNumber}</th>
            <th>{invoiceDate}</th>
          </tr>
          {/* Second row of header */}
          <tr>
            <td colSpan="2">
              <strong>Pay to:</strong>
              <br />
              {payToname}
              <br />
              {payToaddress}
              <br />
              {payTocity}, PINCODE: {payTopincode}
            </td>
            <td colSpan="2">
              <strong>Customer:</strong>
              <br />
              {customerName}
              <br />
              {customerAddress}
              <br />
              {customerCity}, {customerState} {customerPincode}
            </td>
          </tr>
        </thead>

        <tbody>
          <tr>
            <th>Name of the Items</th>
            <th>Qty.</th>
            <th>@</th>
            <th>Cost</th>
          </tr>
          {/* Rendering rows for each item */}
          {items.map((item, index) => (
            <tr key={index}>
              <td>{item.itemName}</td>
              <td>{item.itemQuantity}</td>
              <td>{item.itemUnitPrice}</td>
              <td>{item.itemCost}</td>
            </tr>
          ))}
        </tbody>
        {/* Table footer */}
        <tfoot>
          <tr>
            <th colSpan="3">Subtotal</th>
            <td>{subtotal}</td>
          </tr>
          <tr>
            <th colSpan="2">Tax</th>
            <td>8%</td>
            <td>{tax}</td>
          </tr>
          <tr>
            <th colSpan="3">Grand Total</th>
            <td>$ {grandTotal}</td>
          </tr>
        </tfoot>
      </table>
    </>
  );
}

export default InvoiceTable;
