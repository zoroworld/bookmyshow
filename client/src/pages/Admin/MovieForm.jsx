import { Modal } from "antd";

function MovieForm({ isModalOpen, setIsModalOpen }) {
  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div>
        <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
          
        </Modal>
      </div>
    </>
  );
}

export default MovieForm;
