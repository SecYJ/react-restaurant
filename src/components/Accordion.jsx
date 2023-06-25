import { useEffect } from "react";
import { useRef } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import useToggle from "../hooks/useToggle";

const Accordion = ({ question, answer }) => {
    const answerRef = useRef();
    const [isOpen, setIsOpen] = useToggle(false);

    useEffect(() => {
        if (!isOpen) {
            answerRef.current.style.maxHeight = "0px";
            return;
        }
        const { scrollHeight } = answerRef.current;
        answerRef.current.style.maxHeight = `${scrollHeight}px`;
    }, [isOpen]);

    return (
        <li>
            <div
                className="flex cursor-pointer justify-between bg-primary py-4 px-6"
                onClick={() => setIsOpen()}
            >
                <p className="text-lg text-white">{question}</p>
                <button type="button">
                    {isOpen ? (
                        <AiOutlineMinus color="#fff" />
                    ) : (
                        <AiOutlinePlus color="#fff" />
                    )}
                </button>
            </div>
            <div
                className="overflow-hidden text-base transition-all duration-300"
                ref={answerRef}
            >
                <div className="p-6">{answer}</div>
            </div>
        </li>
    );
};
export default Accordion;
