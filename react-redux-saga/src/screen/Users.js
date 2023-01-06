import React, { useState, Fragment, useEffect } from "react";
import { Spin, Modal, Button } from "antd";
import { connect } from "react-redux";
import { getImage, addition } from "../store/actions";

const Images = (props) => {
  const [perPage, setPerPage] = useState(5);
  const [search, setSearch] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imageSelected, setImageSelected] = useState({});

  useEffect(() => {
    props.addition({ page: 1, per_page: perPage, query: search });
    props.getImage();
  }, [perPage, search]);

  const handlePerPage = () => {
    setPerPage(perPage + 5);
  };

  const showModal = (image) => {
    setIsModalOpen(true);
    setImageSelected(image);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  return (
    <Fragment>
      <input
        placeholder="search"
        onChange={handleSearch}
        style={{ margin: "10px" }}
      />

      {props?.data?.map((image) => {
        return (
          <div style={{ padding: "2px" }} key={image?.id}>
            <img src={image?.urls?.regular} width={100} height={100} />

            <Button onClick={() => showModal(image)}>Show</Button>
          </div>
        );
      })}

      {props?.data.length < 5 ? null : (
        <Button type="primary" danger onClick={handlePerPage}>
          Load more
        </Button>
      )}

      <Modal
        title={imageSelected?.user?.name}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img src={imageSelected?.urls?.small_s3} />
        </div>
      </Modal>
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    data: state.store.images,
    loading: state.store.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getImage: () => dispatch(getImage()),
    addition: (data) => dispatch(addition(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Images);
