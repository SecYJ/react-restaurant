import React from "react";

const SectionContainer = ({ children, className }) => {
    return (
        <section className={`container py-6 md:py-10 lg:py-16 ${className}`}>
            {children}
        </section>
    );
};

export default SectionContainer;
