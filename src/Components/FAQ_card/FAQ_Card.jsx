import { InlineIcon } from "@iconify/react";
import React, { useState } from "react";
import { randomString } from "../../Util/Utils";

const FaqCard = ({data}) => {
    let id = randomString(5);
    const [isActive, setIsActive] = useState(false)
    const { question,  answer } = data;

    return (
        <>
            <div id="faq-card" className={`${isActive ? "active" : ""}`}>
                <div onClick={() => setIsActive(!isActive)} class="faq-label">
                    <a class="w-100" data-bs-toggle="collapse" href={`#${id}`} role="button" aria-expanded="false" aria-controls="collapseExample">
                       <InlineIcon className="bullet-point-icon" icon="akar-icons:circle-fill"/> {question}
                    <InlineIcon className="icon" icon={`akar-icons:chevron-${isActive?"up":"down"}`} />
                    </a>
                </div>
                <div class="collapse" id={id}>
                    <div class="p-4 answer pl-5">{answer}</div>
                </div>
            </div>
        </>
    );
};

export default FaqCard;
