import { InlineIcon } from "@iconify/react";
import { useState } from "react";

export const randomString = (count) => {
    const letter = "abcdefghijklmnopqrstuvwxyz__ABCDEFGHIJKLMNOPQRSTUVXYZ__";
    let randomString = "";
    for (let i = 0; i < count; i++) {
        const randomStringNumber = Math.floor(1 + Math.random() * (letter.length - 1));
        randomString += letter.substring(randomStringNumber, randomStringNumber + 1);
    }
    console.log(randomString);
    return randomString;
};

export const PilatesCard = () => {
    const [isShow, setIsShow] = useState(true);

    return isShow ? (
        <div className="pilates-card text-center">
            <div className="card-wrapper  p-2 p-md-3 p-lg-4">
                <h5 className="mt-2 theme-seconday text event">EVENT</h5>
                <h1 className="">1:1 PILATES</h1>
                <h3 className="mb-5">100일 챌린지</h3>
                <h6>2021.05.01(토) ~ 2021.08.08(일)</h6>
                <p className="m-0 small fw-light">2021.04.30(목) 23시 59분까지 예약 접수 완료 시</p>
                <button className="btn theme-gd-btn text-light mt-4 w-75">자세히 보기</button>
                <div className="bottom-bar">
                    <div className="row">
                        <div className="col-6 text-start">
                            <input type="checkbox" name="" className="" id="" />
                        </div>
                        <div className="col-6 ">
                            <p className="m-0 d-inline-block">오늘 하루 열지 않음</p>
                        </div>
                    </div>
                </div>
                <InlineIcon onClick={()=> setIsShow(!isShow)} icon="la:times" className="times-icon" />
            </div>
        </div>
    ) : null;
};
