import { User } from "../types";

interface UserListProps {
  filteredUsers: User[];
}

const UserList = ({ filteredUsers }:UserListProps) => {
  return (
    <div className='flex flex-col md:flex-row flex-wrap'>
      {filteredUsers.map((user) => (
        <div
          key={user.email}
          className='flex w-full pt-10 px-12 md:px-10 gap-2 md:w-1/2 lg:md:w-1/3 lg:px-0'
        >
          <img
            className='rounded-[10px] md:w-[128px] md:h-[128px] object-cover'
            src={user.picture.large}
            alt={`${user.name.first} ${user.name.last}`}
          />
          <div className='ml-2 flex flex-col gap-[5px] text-[#1D1B20] text-sm'>
            <h3 className='font-nunitos text-2xl text-[#65558F]'>
              {user.name.first} {user.name.last}
            </h3>
            <p>{user.location.country}</p>
            <p>{user.gender === "male" ? "Masculino" : "Femenino"}</p>
            <p>{user.dob.age} años</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserList;
