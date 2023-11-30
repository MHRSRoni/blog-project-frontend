





const DTable = () => {
    return (
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Blog Title</th>
              <th className="py-2 px-4 border-b">Likes/Dislikes</th>
              <th className="py-2 px-4 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* Row 1 */}
            <tr>
              <td className="py-2 px-4 border-b">React Basics</td>
              <td className="py-2 px-4 border-b" style={{ verticalAlign: 'middle' }}>Likes: 10 | Dislikes: 2</td>
              <td className="py-2 px-4 border-b" style={{ verticalAlign: 'middle' }}>
                <button
                  className="mr-2 bg-red-500 text-white px-2 py-1 rounded"
                  onClick={() => console.log("Delete blog with id 1")}
                >
                  Delete
                </button>
                <button
                  className="bg-blue-500 text-white px-2 py-1 rounded"
                  onClick={() => console.log("Edit blog with id 1")}
                >
                  Edit
                </button>
              </td>
            </tr>

            {/* Row 2 */}
            <tr>
              <td className="py-2 px-4 border-b">JavaScript Fundamentals</td>
              <td className="py-2 px-4 border-b" style={{ verticalAlign: 'middle' }}>Likes: 15 | Dislikes: 3</td>
              <td className="py-2 px-4 border-b" style={{ verticalAlign: 'middle' }}>
                <button
                  className="mr-2 bg-red-500 text-white px-2 py-1 rounded"
                  onClick={() => console.log("Delete blog with id 2")}
                >
                  Delete
                </button>
                <button
                  className="bg-blue-500 text-white px-2 py-1 rounded"
                  onClick={() => console.log("Edit blog with id 2")}
                >
                  Edit
                </button>
              </td>
            </tr>
    
            {/* Row 3 */}
            <tr>
              <td className="py-2 px-4 border-b">React Basics</td>
              <td className="py-2 px-4 border-b" style={{ verticalAlign: 'middle' }}>Likes: 10 | Dislikes: 2</td>
              <td className="py-2 px-4 border-b" style={{ verticalAlign: 'middle' }}>
                <button
                  className="mr-2 bg-red-500 text-white px-2 py-1 rounded"
                  onClick={() => console.log("Delete blog with id 1")}
                >
                  Delete
                </button>
                <button
                  className="bg-blue-500 text-white px-2 py-1 rounded"
                  onClick={() => console.log("Edit blog with id 1")}
                >
                  Edit
                </button>
              </td>
            </tr>

            {/* Row 4 */}
            <tr>
              <td className="py-2 px-4 border-b">JavaScript Fundamentals</td>
              <td className="py-2 px-4 border-b" style={{ verticalAlign: 'middle' }}>Likes: 15 | Dislikes: 3</td>
              <td className="py-2 px-4 border-b" style={{ verticalAlign: 'middle' }}>
                <button
                  className="mr-2 bg-red-500 text-white px-2 py-1 rounded"
                  onClick={() => console.log("Delete blog with id 2")}
                >
                  Delete
                </button>
                <button
                  className="bg-blue-500 text-white px-2 py-1 rounded"
                  onClick={() => console.log("Edit blog with id 2")}
                >
                  Edit
                </button>
              </td>
            </tr>
    
            {/* Row 5 */}
            <tr>
              <td className="py-2 px-4 border-b">React Basics</td>
              <td className="py-2 px-4 border-b" style={{ verticalAlign: 'middle' }}>Likes: 10 | Dislikes: 2</td>
              <td className="py-2 px-4 border-b" style={{ verticalAlign: 'middle' }}>
                <button
                  className="mr-2 bg-red-500 text-white px-2 py-1 rounded"
                  onClick={() => console.log("Delete blog with id 1")}
                >
                  Delete
                </button>
                <button
                  className="bg-blue-500 text-white px-2 py-1 rounded"
                  onClick={() => console.log("Edit blog with id 1")}
                >
                  Edit
                </button>
              </td>
            </tr>

            {/* Row 6 */}
            <tr>
              <td className="py-2 px-4 border-b">JavaScript Fundamentals</td>
              <td className="py-2 px-4 border-b" style={{ verticalAlign: 'middle' }}>Likes: 15 | Dislikes: 3</td>
              <td className="py-2 px-4 border-b" style={{ verticalAlign: 'middle' }}>
                <button
                  className="mr-2 bg-red-500 text-white px-2 py-1 rounded"
                  onClick={() => console.log("Delete blog with id 2")}
                >
                  Delete
                </button>
                <button
                  className="bg-blue-500 text-white px-2 py-1 rounded"
                  onClick={() => console.log("Edit blog with id 2")}
                >
                  Edit
                </button>
              </td>
            </tr>

        
          </tbody>
        </table>
      );
};




export default DTable;
