import { Button, Modal } from 'antd';
import React, { useState } from 'react';

const ViewDetails: React.FC = () => {
 
  const [modal2Visible, setModal2Visible] = useState(false);

  return (
    <>
      
      <Button type="primary" onClick={() => setModal2Visible(true)}>
        View Details
      </Button>
      <Modal
        title="Vertically centered modal dialog"
        centered
        visible={modal2Visible}
        onOk={() => setModal2Visible(false)}
        onCancel={() => setModal2Visible(false)}
        footer={null}
      >
        <p>some contents...</p>
        <p>some contents...</p>
        <p>some contents...</p>
      </Modal>
    </>
  );
};

export default ViewDetails;