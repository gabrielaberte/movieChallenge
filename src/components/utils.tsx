import React from "react";

const px2vw = (size: number, width = 1440) => `${(size / width) * 100}vw`;

const px2vh = (size: number, width = 1440) => `${(size / width) * 100}vw`;


export {px2vw, px2vh};