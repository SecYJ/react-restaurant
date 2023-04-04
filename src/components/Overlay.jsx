const Overlay = ({ children, onClose }) => {
    return (
        <div className="relative z-10" role="dialog" aria-modal="true">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            <div className="fixed inset-0 overflow-hidden">
                <div
                    className="absolute inset-0 overflow-hidden"
                    onClick={onClose}
                />
                {children}
            </div>
        </div>
    );
};

export default Overlay;
