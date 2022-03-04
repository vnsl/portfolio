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
      <Button type="primary" onClick={showModal}>
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
        <h2>Links:</h2>
        {project.Links.map(link => 
          <div className='ModalLinks'>
            <h3>{link.label}:</h3>
            <p>{ link.url}</p>
          </div>
        )}
        <div className='ModalImages'>
          {project.Images.map(image => 
              <img src={image} alt={image}/>
          )}
        </div>
        {/* <img src={require("../../assets/images/projects/background1.JPG")} alt="aasd" /> */}
      </Modal>
    </>
  );
};

export default CustomModal;