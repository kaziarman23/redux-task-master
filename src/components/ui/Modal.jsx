import { Dialog } from "@headlessui/react";

function Modal({ isOpen, setIsOpen, title, children }) {
  // toggling button
  if (!isOpen) {
    return setIsOpen(false);
  } else {
    setIsOpen(true);
  }

  return (
    <>
      <Dialog
        open={isOpen}
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={() => setIsOpen(false)}
      >
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Dialog.Panel className="w-full max-w-md rounded-xl bg-white/5 p-6 backdrop-blur-2xl duration-300 ease-out">
              <Dialog.Title
                as="h3"
                className="text-base font-bold text-black text-center"
              >
                {title}
              </Dialog.Title>
              {children}
            </Dialog.Panel>
          </div>
        </div>
      </Dialog>
    </>
  );
}

export default Modal;
