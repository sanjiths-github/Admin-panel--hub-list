import React from 'react';
import './Table.css';

const FixedHeaderTable = () => {
  const rows = [
    { date: "2024-11-25", userId: "U123", deviceId: "D456", cycles: 12, amount: 201 },
    { date: "2024-11-24", userId: "U789", deviceId: "D101", cycles: 17, amount: 800 },
    { date: "2024-11-24", userId: "U789", deviceId: "D101", cycles: 17, amount: 200 },
    { date: "2024-11-24", userId: "U789", deviceId: "D101", cycles: 11, amount: 300 },
    { date: "2024-11-24", userId: "U789", deviceId: "D101", cycles: 13, amount: 510 },
    { date: "2024-11-24", userId: "U789", deviceId: "D101", cycles: 17, amount: 650 },
    { date: "2024-11-24", userId: "U789", deviceId: "D101", cycles: 19, amount: 2489 },
    { date: "2024-11-24", userId: "U789", deviceId: "D101", cycles: 18, amount: 200 },
    { date: "2024-11-24", userId: "U789", deviceId: "D101", cycles: 18, amount: 200 },
    { date: "2024-11-24", userId: "U789", deviceId: "D101", cycles: 15, amount: 200 },
    { date: "2024-11-24", userId: "U789", deviceId: "D101", cycles: 15, amount: 200 },
    { date: "2024-11-24", userId: "U789", deviceId: "D101", cycles: 15, amount: 200 },
    { date: "2024-11-25", userId: "U123", deviceId: "D456", cycles: 12, amount: 150 },
    { date: "2024-11-24", userId: "U789", deviceId: "D101", cycles: 15, amount: 200 },
    { date: "2024-11-24", userId: "U789", deviceId: "D101", cycles: 15, amount: 200 },
    { date: "2024-11-24", userId: "U789", deviceId: "D101", cycles: 15, amount: 200 },
    { date: "2024-11-24", userId: "U789", deviceId: "D101", cycles: 15, amount: 200 },
    { date: "2024-11-24", userId: "U789", deviceId: "D101", cycles: 15, amount: 200 },
    { date: "2024-11-24", userId: "U789", deviceId: "D101", cycles: 15, amount: 200 },
    { date: "2024-11-24", userId: "U789", deviceId: "D101", cycles: 15, amount: 200 },
    { date: "2024-11-24", userId: "U789", deviceId: "D101", cycles: 15, amount: 200 },
    { date: "2024-11-24", userId: "U789", deviceId: "D101", cycles: 15, amount: 200 },
    { date: "2024-11-24", userId: "U789", deviceId: "D101", cycles: 15, amount: 200 },
    { date: "2024-11-24", userId: "U789", deviceId: "D101", cycles: 15, amount: 200 },

  ];

  const totalAmount = rows.reduce((sum, row) => sum + row.amount, 0);

  return (
    <div className="table-container">
      <table className="fixed-header-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>User ID</th>
            <th>Device ID</th>
            <th>Cycles</th>
            <th>Amount (₹)</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              <td>{row.date}</td>
              <td>{row.userId}</td>
              <td>{row.deviceId}</td>
              <td>{row.cycles}</td>
              <td>{row.amount}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="4" style={{ textAlign: "right", fontWeight: "bold" }}>Total Amount : </td>
            <td style={{ fontWeight: "bold" }}>₹ {totalAmount}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};


export default FixedHeaderTable;
