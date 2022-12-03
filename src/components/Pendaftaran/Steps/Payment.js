import React from "react";
import { message, Upload } from "antd";
import { InboxOutlined } from "@ant-design/icons";

function Payment() {
  // Upload Image
  const { Dragger } = Upload;
  const props = {
    name: "file",
    multiple: true,
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    onChange(info) {
      const { status } = info.file;
      if (status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (status === "done") {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log("Dropped files", e.dataTransfer.files);
    },
  };

  return (
    <>
      <div className="text-slate-800">
        <div className="mb-4">
          <label for="payment" className="text-base">
            Bukti Pembayaran
          </label>
          <div className="mb-3">
            <Dragger {...props} id="payment">
              <div className="p-4">
                <p className="ant-upload-drag-icon text-cyan-500">
                  <InboxOutlined />
                </p>
                <p className="ant-upload-text">Click or drag file to this area to upload</p>
              </div>
            </Dragger>
            <p className="text-sm text-slate-400">Silahkan upload bukti pembayaran dan konfirmasi atas pembayaran tersebut.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Payment;
