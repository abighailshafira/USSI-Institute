import * as React from 'react';


const UserTable = () => {
  return <>    <section className="pb-24 pt-36">
  <div className="container">
    <table className="w-full border text-center">
      <thead className="">
        <tr>
          <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 border-r">#</th>
          <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 border-r">First</th>
          <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 border-r">Last</th>
          <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4">Handle</th>
          <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4">Handle</th>
          <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4">Handle</th>
          <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4">Handle</th>
        </tr>
      </thead>
      <tbody>
        <tr className="border-t-[1px]">
          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r">1</td>
          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">Mark</td>
          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">Otto</td>
          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">@mdo</td>
        </tr>
        <tr className="bg-white border-b-2">
          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r">2</td>
          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">Jacob</td>
          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">Thornton</td>
          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">@fat</td>
        </tr>
        <tr className="bg-white border-b-2">
          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r">3</td>
          <td colspan="2" className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center border-r">Larry the Bird</td>
          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">@twitter</td>
        </tr>
      </tbody>
    </table>
  </div>
</section>
</>;
};

export default UserTable;
