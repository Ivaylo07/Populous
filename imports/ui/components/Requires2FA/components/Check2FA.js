import React from 'react';
import { Row, Col } from 'reactstrap';
import { withRouter } from 'react-router-dom';

import Button from '../../styled-components/Button';
import { Small } from '../../styled-components/Typography/headers';

const bgStyles = {
  background: 'rgba(0, 0, 0, 0.4)',
  bottom: '0',
  left: '0',
  position: 'fixed',
  right: '0',
  top: '0'
};

const mainStyles = {
  background: '#fff',
  position: 'relative',
  transform: 'translate(0)',
  WebkitTransform: 'translate(0)',
  transition: 'transform .3s ease-out,-webkit-transform .3s ease-out',
  maxWidth: '500px',
  width: 'auto'
};

const Check2FA = ({ match, show, verify, onCancel, moveTwoFAState }) => {
  if (match.params.token) {
    moveTwoFAState(match.params.token);
    return null;
  } else if (!show) {
    return null;
  }

  return (
    <div style={bgStyles}>
      <div style={mainStyles} className="modal-dialog custom">
        <div className="modal-content">
          <form
            className="form"
            onSubmit={e => {
              e.preventDefault();
              verify(e.target.code.value);
            }}
          >
            <div className="modal-header">
              <h4 className="modal-title">2-factor Authentication is enabled</h4>
              <button
                type="button"
                className="close"
                style={{ cursor: 'pointer' }}
                aria-label="Close"
                onClick={onCancel}
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <Row>
                <Col sm={9} xs={8}>
                  <p>
                    Please enter the 6-digit code generated by the authentication app on your
                    device.
                  </p>
                  <div className="form-group m-t-10">
                    <label>
                      <small>Authentication code</small>
                    </label>
                    <input
                      className="form-control"
                      placeholder=""
                      type="text"
                      name="code"
                      maxLength="6"
                    />
                    <Small opacity="0.7" className="pull-right m-t-5">
                      Example: 123456
                    </Small>
                  </div>
                </Col>
                <Col sm={3} xs={4} className="text-center">
                  <img
                    src="./img/img-2FA-device.png"
                    className="m-t-30"
                    alt="2FA Setup Device"
                    width={60}
                  />
                </Col>
              </Row>
            </div>
            <div className="modal-footer justify-content-center">
              <Row>
                <Col sm={12} xs={12} className="text-center">
                  <Button primary>Finish</Button>
                </Col>
                <Col sm={12} xs={12} className="text-center m-t-10">
                  <a href="/reset-2-fa">I'm not able to log in with 2FA</a>
                </Col>
              </Row>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Check2FA;
