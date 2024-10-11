import arrowR from "../assets/arrow_right.svg";
import arrowL from "../assets/arrow_left.svg";

interface Props {
  users: User[];
  page: number;
  loading: boolean;
  handlePages: (page:number) => void;
}

const Pagination = ({ users, page, loading, handlePages }:Props) => {
  return (
    <>
      {users.length > 0 && (
        <div className='flex justify-center gap-2 my-8'>
          <button
            className='group hover:bg-[#16dc91] rounded-2xl transition duration-200 w-[114px] h-[44px]'
            onClick={() => handlePages(page - 1)}
            disabled={page === 1}
          >
            <p className={`text-md text-[#363636] font-semibold`}>
              <img
                src={arrowL}
                alt='arrow left'
                className='mr-2 mb-[2px] inline-block transition-transform group-hover:-translate-x-1 motion-reduce:transform-none'
              />
              Prev
            </p>
          </button>

          {loading && <div className='lds-dual-ring-btn'></div>}

          <button
            className='group hover:bg-[#16dc91] rounded-2xl transition duration-200 w-[114px] h-[44px]'
            onClick={() => handlePages(page + 1)}
          >
            <p className={`text-md text-[#363636] font-semibold`}>
              Next
              <img
                src={arrowR}
                alt='arrow right'
                className='ml-2 mb-[2px] inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none'
              />
            </p>
          </button>
        </div>
      )}
    </>
  );
};

export default Pagination;
