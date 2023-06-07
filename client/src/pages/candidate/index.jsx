import React, { useState } from "react";
import Layouts from "@/layouts/Layouts";
//
import { Space, Button, Table, Tag, Layout, Select } from "antd";

// const columns = [
//   {
//     title: "שם מלא",
//     dataIndex: "name",
//     key: "name",
//     render: (text) => <a>{text}</a>,
//   },
//   {
//     title: "Age",
//     dataIndex: "age",
//     key: "age",
//   },
//   {
//     title: "Address",
//     dataIndex: "address",
//     key: "address",
//   },
//   // {
//   //   title: "Tags",
//   //   key: "tags",
//   //   dataIndex: "tags",
//   //   render: (_, { tags }) => (
//   //     <>
//   //       {tags.map((tag) => {
//   //         let color = tag.length > 5 ? "geekblue" : "green";
//   //         if (tag === "loser") {
//   //           color = "volcano";
//   //         }
//   //         return (
//   //           <Tag color={color} key={tag}>
//   //             {tag.toUpperCase()}
//   //           </Tag>
//   //         );
//   //       })}
//   //     </>
//   //   ),
//   // },
//   {
//     title: "Action",
//     key: "action",
//     render: (_, record) => (
//       <Space size="middle">
//         <a>Invite {record.name}</a>
//         <a>Delete</a>
//       </Space>
//     ),
//   },
// ];

// // Data From DB
// const data = [
//   {
//     key: "1",
//     name: "ברק טוויטו",
//     age: 32,
//     address: 'נתיבות צה"ל 19',
//     // tags: ["nice", "developer"],
//   },
//   {
//     key: "2",
//     name: "עמי גינת",
//     age: 42,
//     address: "מבועים חרצית 507",
//     // tags: ["loser"],
//   },
//   {
//     key: "3",
//     name: "איתי טוויטו",
//     age: 22,
//     address: 'נתיבות צה"ל 19',
//     // tags: ["cool", "teacher"],
//   },
// ];

// Table
// const columns = [
//   {
//     title: "שם מלא",
//     dataIndex: "name",
//   },
//   {
//     title: "Age",
//     dataIndex: "age",
//   },
//   {
//     title: "Address",
//     dataIndex: "address",
//   },
// ];
// const data = [];
// for (let i = 1; i <= 46; i++) {
//   data.push({
//     key: i,
//     name: `Edward King ${i}`,
//     age: 32,
//     address: `London, Park Lane no. ${i}`,
//   });
// }

import TableDemo from "./_components/_table";

const index = () => {
  return (
    // <Layouts>
    <Layout
      style={{
        minHeight: "100%",
        minWidth: "100%",
        borderRadius: "20px",
      }}
    >
      <h1 className="font-bold text-2xl ml-auto px-4 my-6 border-r-[5px] border-r-[#0092ff]">
        רשימת מעומדים
      </h1>
      <br />

      <TableDemo />
    </Layout>
    // </Layouts>
  );
};

export default index;
