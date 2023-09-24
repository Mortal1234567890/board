import React from "react";
import { BsFillBarChartFill } from 'react-icons/bs'
import { BiSignal1, BiSignal2 } from 'react-icons/bi'
import { AiFillWarning } from 'react-icons/ai'
import { TbAntennaBars1 } from 'react-icons/tb'
import { RiBardFill } from 'react-icons/ri';
import { useSelector } from "react-redux";
import { DiCodeigniter } from "react-icons/di";
import { AiOutlinePlus } from "react-icons/ai";
import "./Board.css";
import Card from "../Card/Card";

const DashView = () => {
    const { selectedData, user } = useSelector(
        (state) => state.SelectDataReducer
    );

    return (
        selectedData && (
            <div className="BoardContainer" style={{ justifyContent: "space-evenly" }}>
                {selectedData.map((elem, index) => {
                    return (
                        <>
                            <div key={index} className="BoardCardContainer">
                                <div className="BoardCardHeading flex-sb">
                                    <div className="leftView">
                                        {!user ? (
                                            elem[index]?.title == 'High' ? <BsFillBarChartFill /> : elem[index]?.title == 'Low' ? <BiSignal1 /> : elem[index]?.title == 'Medium' ? <BiSignal2 /> : elem[index]?.title == 'Urgent' ? <AiFillWarning /> : elem[index]?.title == 'No priority' ? <TbAntennaBars1 /> : <RiBardFill />
                                        ) : (
                                            <>
                                                <div
                                                    className="imageContainer relative"
                                                    style={{ width: "15px", height: "15px", display: 'inline-block' }}
                                                >
                                                    <img
                                                        style={{
                                                            width: "100%",
                                                            height: "100%",
                                                            borderRadius: "50%",
                                                        }}
                                                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
                                                        alt="UserImage"
                                                    />
                                                </div>
                                            </>
                                        )}
                                        <span>
                                            {" "}
                                            {elem[index]?.title} {elem[index]?.value?.length}
                                        </span>
                                    </div>
                                    <div className="rightView">
                                        <AiOutlinePlus />{" "}
                                        <span style={{ letterSpacing: "2px" }}>...</span>
                                    </div>
                                </div>
                                <div className="BoardList flex-gap-10">
                                    {elem[index]?.value?.map((elem, ind) => {
                                        return (
                                            <Card id={elem.id} title={elem.title} tag={elem.tag} />
                                        );
                                    })}
                                </div>
                            </div>
                        </>
                    );
                })}
            </div>
        )
    );
};

export default DashView;
