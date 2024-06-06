import InvoiceTable from "./components/invoiceTable/invoiceTable";
import "./App.css";
import "./components/invoiceTable/invoiceTable.css";
function App() {
  const items = [
    {
      itemName: "Paperclips",
      itemQuantity: "1000",
      itemUnitPrice: "0.01",
      itemCost: "10"
    },
    {
      itemName: "Staples",
      itemQuantity: "500",
      itemUnitPrice: "0.02",
      itemCost: "10"
    },
  ];
  return (
    <>
      <div className="appContainer">
        <div className="tableConatiner">
          <InvoiceTable
            invoiceNumber="12151"
            invoiceDate="18 March 2024"
            payToname="Acme Billing Co."
            payToaddress="123 Main St."
            payTocity="GUNTUR"
            payTopincode="123456"
            customerName="Rama Raju"
            customerAddress="321 Willow Way"
            customerCity="Southeast Urban"
            customerState="MA"
            customerPincode="54321"
            items={items}
          ></InvoiceTable>
        </div>
      </div>
    </>
  );
}

export default App;
