interface ButtonProps {
  handler: Function;
  text: string;
}

export default function Button({ handler, text }: ButtonProps) {
  return (
    <div className="w-full h-auto flex px-4 justify-end items-center">
      <button
        className="bg-[#EC6169] px-4 py-1 rounded-md text-xs text-white font-semibold cursor-pointer tracking-wide"
        onClick={() => handler()}
      >
        {text}
      </button>
    </div>
  );
}
