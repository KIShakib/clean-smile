import React from 'react';

const DashBoardPage = () => {
    return (
        <div className="flex flex-wrap bg-neutral w-full ">
            <div className="mt-4 w-full lg:w-6/12 xl:w-3/12 px-5 mb-4">
                <div className="relative flex flex-col min-w-0 break-words bg-white rounded mb-3 xl:mb-0 shadow-lg">
                    <div className="flex-auto p-4">
                        <div className="flex flex-wrap">
                            <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                                <h5 className="text-blueGray-400 uppercase font-bold text-xs"> Traffic</h5>
                                <span className="font-semibold text-xl text-blueGray-700">334,100</span>
                            </div>
                            <div className="relative w-auto pl-4 flex-initial">
                                <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full  bg-red-500">
                                    <i className="fas fa-chart-bar"></i>
                                </div>
                            </div>
                        </div>
                        <p className="text-sm text-blueGray-400 mt-4">
                            <span className="text-emerald-500 mr-2"><i className="fas fa-arrow-up"></i> 2,99% </span>
                            <span className="whitespace-nowrap"> Since last month </span></p>
                    </div>
                </div>
            </div>

            <div className=" mt-4 w-full lg:w-6/12 xl:w-3/12 px-5">
                <div className="relative flex flex-col min-w-0 break-words bg-white rounded mb-4 xl:mb-0 shadow-lg">
                    <div className="flex-auto p-4">
                        <div className="flex flex-wrap">
                            <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                                <h5 className="text-blueGray-400 uppercase font-bold text-xs">New users</h5>
                                <span className="font-semibold text-xl text-blueGray-700">2,999</span>
                            </div>
                            <div className="relative w-auto pl-4 flex-initial">
                                <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full  bg-pink-500">
                                    <i className="fas fa-chart-pie"></i>
                                </div>
                            </div>
                        </div>
                        <p className="text-sm text-blueGray-400 mt-4">
                            <span className="text-red-500 mr-2"><i className="fas fa-arrow-down"></i> 4,01%</span>
                            <span className="whitespace-nowrap"> Since last week </span></p>
                    </div>
                </div>
            </div>

            <div className="mt-4 w-full lg:w-6/12 xl:w-3/12 px-5">
                <div className="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
                    <div className="flex-auto p-4">
                        <div className="flex flex-wrap">
                            <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                                <h5 className="text-blueGray-400 uppercase font-bold text-xs">Sales</h5>
                                <span className="font-semibold text-xl text-blueGray-700">901</span>
                            </div>
                            <div className="relative w-auto pl-4 flex-initial">
                                <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full  bg-lightBlue-500">
                                    <i className="fas fa-users"></i>
                                </div>
                            </div>
                        </div>
                        <p className="text-sm text-blueGray-400 mt-4">
                            <span className="text-red-500 mr-2"><i className="fas fa-arrow-down"></i> 1,25% </span>
                            <span className="whitespace-nowrap"> Since yesterday </span></p>
                    </div>
                </div>
            </div>

            <div className="mt-4 w-full lg:w-6/12 xl:w-3/12 px-5">
                <div className="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
                    <div className="flex-auto p-4">
                        <div className="flex flex-wrap">
                            <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                                <h5 className="text-blueGray-400 uppercase font-bold text-xs">Performance</h5>
                                <span className="font-semibold text-xl text-blueGray-700">51.02% </span>
                            </div>
                            <div className="relative w-auto pl-4 flex-initial">
                                <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full  bg-emerald-500">
                                    <i className="fas fa-percent"></i>
                                </div>
                            </div>
                        </div>
                        <p className="text-sm text-blueGray-400 mt-4">
                            <span className="text-emerald-500 mr-2"><i className="fas fa-arrow-up"></i> 12% </span>
                            <span className="whitespace-nowrap"> Since last mounth </span></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashBoardPage;