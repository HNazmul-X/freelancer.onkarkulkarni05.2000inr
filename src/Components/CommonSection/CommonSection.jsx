import React from 'react';

const CommonSection = ({className,Container}) => {
    return (
        <section className={className} id="commonsection">
            <div className={`${Container?"container":""}`}>
                <div className="row">
                    
                </div>
            </div>
        </section>
    );
};

export default CommonSection;