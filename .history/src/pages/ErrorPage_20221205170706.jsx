import { Button, Result } from "antd";
import React from "react";

const ErrorPage = () => {
  return (
    <>
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the kontolss meet the heunceut"
        extra={<Button type="primary">Back Home</Button>}
      />
    </>
  );
};

export default ErrorPage;
