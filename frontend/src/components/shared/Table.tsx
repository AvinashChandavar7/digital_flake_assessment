import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Model from './Modal';

export interface Product {
  id?: number;
  Name?: string;
  Mobile?: string;
  Email?: string;
  Role?: string;
  RoleName?: string;
  Status?: string;
}

export interface TableColumn {
  label: string;
  accessor: keyof Product;
}

export interface TableProps {
  data: Product[];
  columns: TableColumn[];
}

const Table: React.FC<TableProps> = ({ data, columns }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleToggleModal = () => {
    setIsModalOpen(!isModalOpen); // Toggle the state
  };

  return (
    <div className="relative overflow-x-auto font-poppins">
      <table className="w-full text-sm text-left">

        <thead className="text-xs  text-black uppercase bg-[#FFF8B7]">
          <tr className=''>
            {columns.map((column, index) => (
              <th key={index} className="px-6 py-3">
                <div className="flex items-center justify-start gap-4">
                  <span>{column.label}</span>
                  <img src="/assets/sort.svg" alt="sort" />
                </div>
              </th>
            ))}
            <th className="px-6 py-3">Action</th>
          </tr>
        </thead>

        <tbody className="bg-[#F2F2F2]">
          {data.map((product) => (
            <>
              <tr className='h-[10px]'></tr>

              <tr key={product.id} className="my-2 border-b ">

                {columns.map((column, index) => (
                  <td key={index} className={`px-6  py-4 ${column.accessor === "Status" ? (product.Status === "Active" ? "text-green-500" : "text-red-500") : ""}`}>
                    {product[column.accessor]}
                  </td>
                ))}

                <td className="flex gap-2 px-6 py-4">
                  <Link to={`/update-role/${product.id}`}>
                    <img src="/assets/edit.svg" alt="Edit" />
                  </Link>
                  <img src="/assets/delete.svg" alt="Delete" onClick={handleToggleModal} />
                  <Model title="Delete" isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
                </td>
              </tr>
            </>
          ))}
        </tbody>

      </table>
    </div>
  );
};

export default Table;
