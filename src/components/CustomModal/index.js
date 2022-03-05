import React, { useState } from 'react';
import { Modal, Button } from 'antd';

import './index.scss';

function CustomModal({project}) {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Button className='ButtonModal' type="primary" onClick={showModal}>
        Show Info
      </Button>
      <Modal className='Modal' title={project.Title} visible={isModalVisible}
        footer={[
          <Button key="close" onClick={handleCancel}>
            Close
          </Button>
        ]} onCancel={handleCancel}>
        <h2>Description:</h2>
        <p>{project.Description}</p>
        {project.Links.map(link =>
            <div key={project.Title+link.url} className='ModalLinks'>
              <h3>{link.label}: &nbsp;</h3>
              {link.url === "Enterprise GitHub" ? <p href={link.url}>{link.url}</p> : <a href={link.url}>{link.url}</a>}
              {/* <a href={link.url}>{link.url}</a> */}
            </div>
        )}
        <div className='ModalImages'>
          {project.Images.map(image => 
              <img key={project.Title+image} src={image} alt={image}/>
          )}
        </div>
      </Modal>
    </>
  );
};

export default CustomModal;