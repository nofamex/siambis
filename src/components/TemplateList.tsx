import { MdEdit } from "react-icons/md";
import { GiClick } from "react-icons/gi";

export default function TemplateList() {
  return (
    <div className="w-full h-1/5 bg-white border-2 border-red-400 rounded-xl flex justify-between px-4">
      <div className="w-2/3 h-full flex items-center">
        <p>Manpro</p>
      </div>
      <div className="w-1/3 h-full py-1 flex justify-between space-x-2.5">
        <button className="w-1/2 bg-red-400 px-1 rounded-md cursor-pointer flex justify-center items-center text-white">
          <MdEdit />
        </button>
        <button className="w-1/2 bg-red-400 px-1 rounded-md cursor-pointer flex justify-center items-center text-white">
          <GiClick />
        </button>
      </div>
    </div>
  );
}
