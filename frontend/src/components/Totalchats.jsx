function Totalchats({ messages = [], room = '', users = [] }) {
    console.log(users);

    return (
        <div className="px-4">
            
            <p className="text-gray-200 text-md font-semibold py-2">
                Currently, we have <span className="text-[#35FFEB]">{users.length}</span> users in <span className="text-[#35FFEB] capitalize">{room}</span> group
            </p>
            <p className="text-[#35FFEB] text-lg font-semibold py-2">User List</p>
            {users.length > 0 ? (
                users.map((user) => (
                    <div key={user.name} className="bg-[#1B1E21] p-4 my-2 shadow-sm shadow-slate-600">
                        <p className="text-gray-200 text-md font-semibold capitalize">{user.name}</p>
                    </div>
                ))
            ) : (
                <p className="text-gray-400 text-md">No users in this room</p>
            )}
        </div>
    );
}

export default Totalchats;
