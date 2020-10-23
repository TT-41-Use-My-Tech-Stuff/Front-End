import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import styled from "styled-components";

const initialValues = {
  item_name: "",
  item_description: "",
  category: "",
  rate: 0,
  img_url: ""
};
const DeviceForm = () => {
  const [values, setValues] = useState(initialValues);
  const history = useHistory();
  const { id } = useParams();
  const idy = parseInt(id);
  useEffect(() => {
    axiosWithAuth()
      .get(`/api/rentals/${id}`)
      .then((res) => {
        setValues(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  console.log(values);
  const handleChanges = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .put(`/api/rentals/edit/${id}`, values)
      .then((res) => {
        setValues(res.data);
        history.push(`/devicelist`);
      });
  };
  return (
    <>
      <Styledh2>Update a Post</Styledh2>
      <FormDiv className="form">
        <StyledForm onSubmit={handleSubmit}>
          <StyledInput
            type="text"
            name="item_name"
            value={values.item_name}
            onChange={handleChanges}
            placeholder="Title"
          />
          <StyledInput
            type="text"
            name="item_description"
            value={values.item_description}
            onChange={handleChanges}
            placeholder="Category"
          />
          <StyledInput
            type="text"
            name="category"
            value={values.category}
            onChange={handleChanges}
            placeholder="Author"
          />
          <StyledInput
            type="number"
            name="rate"
            value={values.rate}
            onChange={handleChanges}
            placeholder="Rating"
          />
          <StyledInput
            type="text"
            name="img_url"
            value={values.post_text}
            onChange={handleChanges}
            placeholder="Text"
          />
          <StyledSubmit>UPDATE</StyledSubmit>
        </StyledForm>
      </FormDiv>
    </>
  );
};

const Styledh2 = styled.h2`
  text-align: center;
  font-size: 2rem;
  font-family: "Maven Pro", sans-serif;
`;

const FormDiv = styled.div`
  display: flex;
  background-color: #f7f7f7;
  width: 100vw;

  padding: 3vh 0vh 5vh 5vw;
  text-align: left;
  font-family: "Maven Pro", sans-serif;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-content: center;
`;
const StyledInput = styled.input`
  padding: 1rem 18rem 1rem 0.5rem;
  width: 100%;
  margin-bottom: 1vh;
  border-radius: 5px;
`;

const StyledSubmit = styled.button`
  width: 10vw;
  color: white;
  background-color: #044a53;
  padding: 1rem 0rem;
  text-align: center;
  border-radius: 5px;
  margin-left: 5vw;
`;

export default DeviceForm;
