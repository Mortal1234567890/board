import React from "react";

const Buffer = () => {

    return (
        <div
            style={{
                width: "100vw",
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                gap: "5px",
            }}
        >
            {/* Display the loading animation only if isLoading is true */}

            <div className="custom-loader">
                <div className="circle circle-1"></div>
                <div className="circle circle-2"></div>
                <div className="circle circle-3"></div>
            </div>

            <span
                style={{
                    color: "green",
                    fontWeight: "bolder",
                    letterSpacing: "2px",
                }}
            >
                QuickSell
            </span>
        </div>
    );
};

export default Buffer;
