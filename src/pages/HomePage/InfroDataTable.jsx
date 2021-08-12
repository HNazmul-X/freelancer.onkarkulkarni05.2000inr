import React from "react";

const InfroDataTable = () => {
    return (
        <section id="info-data-table">
            <div className="container">
                <div className="title text-center">
                    <h1>제품 사양</h1>
                </div>
            </div>
            <div className="container">
                <div className="row table-container">
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-md-3 key">해상도</div>
                            <div className="col-md-9 value">43인치(109cm) Full HD</div>
                        </div>
                        <div className="row">
                            <div className="col-md-3 key">프로세서</div>
                            <div className="col-md-9 value">Quad core RK3288 chipset 1.8Ghz</div>
                        </div>
                        <div className="row">
                            <div className="col-md-3 key">네트워크</div>
                            <div className="col-md-9 value">블루투스 지원</div>
                        </div>
                        <div className="row">
                            <div className="col-md-3 key">옵션 선택</div>
                            <div className="col-md-9 value">스탠드형 / 벽부형</div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-md-3 key">사이즈</div>
                            <div className="col-md-9 value">1700mm*600mm(전신거울)</div>
                        </div>
                        <div className="row">
                            <div className="col-md-3 key">운영체제</div>
                            <div className="col-md-9 value">안드로이드 7.1</div>
                        </div>
                        <div className="row">
                            <div className="col-md-3 key">카메라</div>
                            <div className="col-md-9 value">200만화소</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InfroDataTable;
