import { GrFormClose } from "react-icons/gr";
import Button from "./Button";

interface TaskAdderProps {
  closeHandler: any;
}

export default function TaskAdder({ closeHandler }: TaskAdderProps) {
  return (
    <div className="w-full h-full bg-white rounded-lg p-3 space-y-1.5">
      <div className="w-full text-lg font-bold cursor-pointer flex justify-end">
        <GrFormClose onClick={closeHandler} />
      </div>
      <div className="w-full h-3/4">
        <div className="w-full h-1/3 flex justify-center items-center px-4">
          <input
            type="text"
            className="w-full h-2/3 border-2 rounded-lg p-2 text-xs"
            placeholder="Judul template kamu..."
          />
        </div>
        <div className="w-full h-2/3 flex justify-center items-center px-4">
          <textarea
            className="w-full h-full border-2 rounded-lg p-2 text-xs resize-none"
            placeholder="Isi template kamu disini..."
          />
        </div>
      </div>
      <div className="w-full text-lg flex justify-end">
        <Button handler={() => {}} text={"SIMPAN"} />
      </div>
    </div>
  );
}
