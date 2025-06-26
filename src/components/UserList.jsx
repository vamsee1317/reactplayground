// import axios from 'axios';
// import React, { useState, useEffect } from 'react';

// export default function UserList() {
//   const [users, setUsers] = useState([]);
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(true);

// //   useEffect(() => {
// //     // Simulate network delay using setTimeout
// //     setTimeout(() => {
// //       fetch('https://dummyjson.com/users')
// //         .then((res) => res.json())
// //         .then((data) => {
// //           setUsers(data.users);
// //           setLoading(false);
// //         });
// //     }, 1500); // 1.5 second delay
// //   }, []);

// // useEffect with Axios

//     useEffect(()=>{
//         axios.get("https://dmyjson.com/users")
//         .then((res)=>{
//             setUsers(res.data.users);
//             setLoading(false);
//             })
//         .catch((err) => setError("Failed to load users"))
//     }, [])

//   if (loading) {
//     return (
//       <div className="flex flex-col items-center justify-center h-screen">
//         <div className="w-16 h-16 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
//         <p className="mt-4 text-lg font-medium text-blue-600">Fetching users...</p>
//       </div>
//     );
//   }

//   return (
//     <div className="p-4">
//       <h1 className="text-2xl font-bold text-center mb-6">User Profiles</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {users.map((user) => (
//           <div
//             key={user.id}
//             className="bg-white rounded-2xl shadow-md p-4 flex flex-col items-center text-center hover:shadow-lg transition duration-300"
//           >
//             <img
//               src={user.image}
//               alt={`${user.firstName} ${user.lastName}`}
//               className="w-24 h-24 rounded-full object-cover mb-4"
//             />
//             <h2 className="text-lg font-semibold">{user.firstName} {user.lastName}</h2>
//             <p className="text-sm text-gray-500">{user.email}</p>
//             <p className="text-sm text-gray-500">{user.gender} | Age: {user.age}</p>
//             <p className="text-sm text-gray-500">City: {user.address.city}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }



import axios from 'axios';
import React, { useState, useEffect } from 'react';

export default function UserList() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const source = axios.CancelToken.source();

    const timeout = setTimeout(() => {
      source.cancel('Request timed out');
    }, 3000); // Cancel after 3 seconds

    axios.get('https://dummyjson.com/users', {
      cancelToken: source.token,
    })
      .then((res) => {
        clearTimeout(timeout); // Clear timeout if request succeeds
        setUsers(res.data.users);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        if (axios.isCancel(err)) {
          setError("Request timed out. Please try again.");
        } else {
          setError("Failed to load users.");
        }
      });

    // Cleanup on unmount
    return () => {
      clearTimeout(timeout);
      source.cancel();
    };
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="w-16 h-16 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
        <p className="mt-4 text-lg font-medium text-blue-600">Fetching users...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center h-screen text-center px-4">
        <p className="text-red-600 text-xl font-semibold mb-2">{error}</p>
        <button
          onClick={() => window.location.reload()}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-center mb-6">User Profiles</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {users.map((user) => (
          <div
            key={user.id}
            className="bg-white rounded-2xl shadow-md p-4 flex flex-col items-center text-center hover:shadow-lg transition duration-300"
          >
            <img
              src={user.image}
              alt={`${user.firstName} ${user.lastName}`}
              className="w-24 h-24 rounded-full object-cover mb-4"
            />
            <h2 className="text-lg font-semibold">{user.firstName} {user.lastName}</h2>
            <p className="text-sm text-gray-500">{user.email}</p>
            <p className="text-sm text-gray-500">{user.gender} | Age: {user.age}</p>
            <p className="text-sm text-gray-500">City: {user.address.city}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

