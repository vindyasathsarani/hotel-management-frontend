const bookings = [
  {
    bookingId: 101,
    userEmail: "john.doe@example.com",
    startDate: "2024-12-01",
    endDate: "2024-12-10",
    status: "Pending",
    roomId: 301,
    customerName: "John Doe",
    phoneNumber: "+1234567890",
    paymentStatus: "Paid",
    totalAmount: 1500.0,
    createdAt: "2024-11-25T10:00:00Z",
    updatedAt: "2024-11-26T12:30:00Z",
  },
  {
    bookingId: 102,
    userEmail: "jane.smith@example.com",
    startDate: "2024-12-05",
    endDate: "2024-12-12",
    status: "Approved",
    roomId: 302,
    customerName: "Jane Smith",
    phoneNumber: "+0987654321",
    paymentStatus: "Pending",
    totalAmount: 2000.0,
    createdAt: "2024-11-24T15:00:00Z",
    updatedAt: "2024-11-26T10:00:00Z",
  },
  {
    bookingId: 103,
    userEmail: "michael.brown@example.com",
    startDate: "2024-12-08",
    endDate: "2024-12-15",
    status: "Cancelled",
    roomId: 303,
    customerName: "Michael Brown",
    phoneNumber: "+1122334455",
    paymentStatus: "Refunded",
    totalAmount: 1800.0,
    createdAt: "2024-11-23T14:00:00Z",
    updatedAt: "2024-11-26T08:00:00Z",
  },
];

export default function AdminBooking() {
  return (
    <div className="w-full">
      <table className="border-collapse border border-gray-300 w-full text-left">
        <thead>
          <tr className="bg-blue-400 text-white">
            <th className="border border-gray-300 px-4 py-2">Booking ID</th>
            <th className="border border-gray-300 px-4 py-2">Email</th>
            <th className="border border-gray-300 px-4 py-2">Start Date</th>
            <th className="border border-gray-300 px-4 py-2">End Date</th>
            <th className="border border-gray-300 px-4 py-2">Status</th>
          </tr>
        </thead>
        <tbody>
  {bookings.map((booking, index) => {
    return (
      <tr key={index}>
        <td>{booking.bookingId}</td>
        <td>{booking.userEmail}</td>
        <td>{new Date(booking.startDate).toDateString()}</td>
        <td>{new Date(booking.endDate).toDateString()}</td>
        <td>{booking.status}</td>
      </tr>
    );
  })}
</tbody>

      </table>
    </div>
  );
}
