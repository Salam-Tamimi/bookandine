import { useState } from "react";
import { Button, Form, Input } from "reactstrap";
import Stars from "./stars";
export default function ReviewForm() {
  const [reviews, setReviews] = useState("");
  const [value, setValue] = useState("");
  const [star, setStar] = useState();
  const onChange = (e) => {
    setReviews(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setValue(reviews + " with " + star + " star ");
  };

  return (
    <div className="form-container">
      <Stars setStar={setStar} />
      <Form onSubmit={onSubmit}>
        <Input
          className="form-control"
          type="text"
          placeholder="Enter you review"
          value={reviews}
          onChange={onChange}
        />
        <br></br>
        <Button type="submit" className="btn btn-primary">
          Submit
        </Button>
        <div>{value}</div>
      </Form>
    </div>
  );
}