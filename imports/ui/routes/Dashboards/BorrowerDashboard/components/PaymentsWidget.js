import React from 'react';
import { Container, Row, Col, CardBody, Table } from 'reactstrap';
import { Link } from 'react-router-dom'
import { Card, CardTitle } from '../../../../components/styled-components/Card';
import DateRangePicker from "../../../../components/DatePicker/DateRangePickerWrapper";

const PaymentsWidget = () => {
  return (
    <Card className="m-t-10 m-b-30">
      <Container>
        <Row>
          <Col xs={12}>
            <CardBody>
              <CardTitle>
                Payments
                <Link to={'/invoices'} className="pull-right">MY INVOICES</Link>
              </CardTitle>
              <Table responsive className="custom">
                <thead>
                  <tr>
                    <th><i className="fa fa-refresh"></i> INVESTMENTS</th>
                    <th>Paid-in Period<br/><span style={{'textDecoration': 'underline'}}>10-10-2017 - 11-10-2017</span></th>
                    <th>Awaiting Dues</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Principal</strong></td>
                    <td>10,500,000.00</td>
                    <td>500,000.00</td>
                  </tr>
                  <tr>
                    <td><strong>Rate</strong></td>
                    <td>500,000.00</td>
                    <td>20,000.00</td>
                  </tr>
                  <tr>
                    <td><strong>Penalties</strong></td>
                    <td>3,000.00</td>
                    <td>2,000.00</td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <td>Totals</td>
                    <td>11,023,000.00</td>
                    <td>113,000.00</td>
                  </tr>
                </tfoot>
              </Table>
              <hr />
              <p>
                <img src="./img/icons/alarm.png" width={18} alt="alaram"/>
                <span className="p-l-10">Coming payments amounts in 7 days = -10,000,000.00</span>
                <a href="#" className="pull-right">SEE THESE INVOICES</a>
              </p>
            </CardBody>
          </Col>
        </Row>
      </Container>
    </Card>
  );
};

export default PaymentsWidget;
