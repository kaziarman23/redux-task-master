import { Dialog } from "@headlessui/react";

function Modal({ isOpen, setIsOpen }) {
  
  
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
        onClose={() => setIsOpen(false)} // Close the modal on click
      >
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Dialog.Panel className="w-full max-w-md rounded-xl bg-white/5 p-6 backdrop-blur-2xl duration-300 ease-out">
              <Dialog.Title
                as="h3"
                className="text-base font-medium text-white"
              >
                Payment successful
              </Dialog.Title>
              <p className="mt-2 text-sm text-white/50">
                Your payment has been successfully submitted. We’ve sent you an
                email with all of the details of your order.
              </p>
              <div className="mt-4">
                <button
                  className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm font-semibold text-white shadow-inner shadow-white/10 focus:outline-none hover:bg-gray-600"
                  onClick={() => setIsOpen(false)}
                >
                  Got it, thanks!
                </button>
              </div>
            </Dialog.Panel>
          </div>
        </div>
      </Dialog>
    </>
  );
}

export default Modal;
