import { Button, Result } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <>
      <Result
        status="404"
        title="404"
        subTitle="Sorry, page not found."
        extra={
          <Link to="/">
            <Button type="primary">Back Home</Button>
          </Link>
        }
      />
    </>
  );
};

export default ErrorPage;
