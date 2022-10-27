import React from "react";

function Payment({ formData, setFormData }) {
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

    <div className="text-slate-800">
      <div className="mb-4">
        <label for="payment" className="text-base">
          Bukti Pembayaran
        </label>
        <div className="mb-8">
          <input id="payment" type="file" name="file" className="sr-only" />
          <label for="file" className="relative flex h-[145px] justify-center items-center rounded-md border border-dashed py-8 text-center">
            <div>
              <span className="mb-2 block text-base font-semibold"> Drop files here </span>
              <span className="mb-2 block text-sm"> Or </span>
              <span className="inline-flex rounded-md border py-1 px-7 text-base cursor-pointer"> Browse </span>
            </div>
          </label>
          <p className="text-sm text-slate-400">Silahkan upload bukti pembayaran dan konfirmasi atas pembayaran tersebut.</p>
        </div>
      </div>
    </div>
  );
}

export default Payment;
