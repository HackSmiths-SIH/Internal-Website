import { cn } from "@/lib/utils";
import ChatInterface from "@/my_components/chat-interface/ChatInterface";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";


export const DocViewLayout = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl gap-4 md:auto-rows-[18rem] md:grid-cols-6",
        className,
      )}
      // style={{ gridTemplateColumns: "repeat(auto-fit, minmax(8rem, 1fr))" }}
    >
      {children}
    </div>
  );
};

export const DocViewLayoutItem = ({
    id,
    name,
    sex,
    age,
    img,
    currentCondition,
    bloodGroup,
    medicalHistorySummary,
    currentSymptomsSummary,
    assistiveDiagnosis,
    reportsList,
    doctorsList,
  }: {
      id?: string;
      name?: string;
      sex?: string;
      age?: string;
      img?: string;
      currentCondition?: string;
      bloodGroup?: string;
      medicalHistorySummary?: string;
      currentSymptomsSummary?: string;
      assistiveDiagnosis?: string;
      reportsList?: any;
      doctorsList?: any;
  }) => {
  
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <div
      className={cn(
        "group/bento row-span-1 flex cursor-pointer flex-col justify-between space-y-4 overflow-clip rounded-xl border border-transparent bg-white p-0 shadow-input transition duration-200 hover:shadow-xl dark:border-white/[0.2] dark:bg-black dark:shadow-none",
      )}
      onClick={onOpen}
    >
      <div className="z-10 mt-0 pl-4 pt-4 font-bold text-[--fixed-bg-color]">
        {name}
      </div>
      <div className="relative -top-6 w-[30rem] transition duration-200 group-hover/bento:translate-x-2">
        <img
          src={img}
          alt=""
          className="-z-10 -ml-3 -mt-16 h-[19rem] md:w-[rem]"
        />
        <div className="z-10 -mt-20 pl-4 font-sans font-bold text-[--fixed-bg-color] dark:text-neutral-200">
          {sex}
        </div>
        <div className="z-10 pl-4 font-sans text-xs font-normal text-[--fixed-bg-color] dark:text-neutral-300">
          {age}
        </div>
      </div>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="3xl" closeButton={<button className="sn-close-button  ml-auto mr-4 ">✖</button>}>
      
        <ModalContent>
          {(onClose) => (
            <>
              {/* <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader> */}
              <ModalBody>
                {/* <ChatInterface name={name} img={img} /> */}
              </ModalBody>
              {/* <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter> */}
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};
