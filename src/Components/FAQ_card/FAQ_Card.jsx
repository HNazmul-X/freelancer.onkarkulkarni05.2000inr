import { InlineIcon } from "@iconify/react";
import React from "react";
import { randomString } from "../../Util/Utils";

const FaqCard = () => {

    let id = randomString(5)

    return (
        <>
            <div class="faq-label">
                <a class="btn btn-primary w-100" data-bs-toggle="collapse" href={`#${id}`} role="button" aria-expanded="false" aria-controls="collapseExample">
                    Link with href
                </a>
                <InlineIcon icon="akar-icons:chevron-up" />
            </div>
            <div class="collapse" id={id}>
                <div class="card card-body">Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.</div>
            </div>
        </>
    );
};

export default FaqCard;
