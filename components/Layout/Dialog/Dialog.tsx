import { useDialogContext } from "./DialogContext";

type Props = {
  children: React.ReactNode;
};

const Dialog = ({ children }: Props) => {
  const { isOpen } = useDialogContext();

  if (isOpen) {
    return (
      <div className="backdrop-blur-lg bg-stone-300/30 grow shrink basis-0 p-4 flex-row justify-center items-center gap-6 flex top-0 left-0 absolute w-screen h-screen">
        {children}
      </div>
    );
  }

  return null;
};

export default Dialog;
