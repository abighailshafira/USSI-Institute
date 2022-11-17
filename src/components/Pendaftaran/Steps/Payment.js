import React from "react";
import { InboxOutlined } from "@ant-design/icons";
import { Divider, message, Upload } from "antd";

function Payment({ formData, setFormData }) {
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
    // <div className="other-info-container">
    //   <input
    //     type="text"
    //     placeholder="Nationality..."
    //     value={formData.nationality}
    //     onChange={(e) => {
    //       setFormData({ ...formData, nationality: e.target.value });
    //     }}
    //   />
    //   <input
    //     type="text"
    //     placeholder="Other..."
    //     value={formData.other}
    //     onChange={(e) => {
    //       setFormData({ ...formData, other: e.target.value });
    //     }}
    //   />
    // </div>

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
    // <div className="text-slate-800">
    //   <div className="mb-4">
    //     <label for="payment" className="text-base">
    //       Bukti Pembayaran
    //     </label>
    //     <div className="mb-8">
    //       <input id="payment" type="file" name="file" className="sr-only" />
    //       <label for="file" className="relative flex h-[145px] justify-center items-center rounded-md border border-dashed py-8 text-center">
    //         <div>
    //           <span className="mb-2 block text-base font-semibold"> Drop files here </span>
    //           <span className="mb-2 block text-sm"> Or </span>
    //           <span className="inline-flex rounded-md border py-1 px-7 text-base cursor-pointer"> Browse </span>
    //         </div>
    //       </label>
    //       <p className="text-sm text-slate-400">Silahkan upload bukti pembayaran dan konfirmasi atas pembayaran tersebut.</p>
    //     </div>
    //   </div>
    // </div>
  );
}

export default Payment;
