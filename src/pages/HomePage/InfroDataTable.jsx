import React from 'react';

const InfroDataTable = () => {
    return (
        <section id="info-data-table">
            <div className="container info">
                <div className="info-heading">
                    <h2>제품 사양</h2>
                </div>
                <div className="row w-100 info-row">
                    <div className="col-md-6">
                        <div className="info-contant d-flex">
                            <button>제품 사양</button>
                            <p>43인치(109cm) Full HD</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className=" info-contant col d-flex">
                            <button>사이즈</button>
                            <p>1700mm*600mm(전신거울)</p>
                        </div>
                    </div>
                </div>
                <div className="row info-row">
                    <div className="col-md-6">
                        <div className="info-contant d-flex">
                            <button>프로세서</button>
                            <p>Quad core RK3288 chipset 1.8Ghz</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className=" info-contant col d-flex">
                            <button>운영체제</button>
                            <p>안드로이드 7.1</p>
                        </div>
                    </div>
                </div>
                <div className="row info-row">
                    <div className="col-md-6">
                        <div className="info-contant d-flex">
                            <button>네트워크</button>
                            <p>블루투스 지원</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className=" info-contant col d-flex">
                            <button>카메라</button>
                            <p>200만화소</p>
                        </div>
                    </div>
                </div>
                <div className="row info-row">
                    <div className="col-md-6">
                        <div className="info-contant d-flex">
                            <button>옵션 선택</button>
                            <p>스탠드형 / 벽부형</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InfroDataTable;