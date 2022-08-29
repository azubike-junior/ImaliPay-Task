import React from "react";

interface BtnProp {
    child: string
    type?: string
    className?: string
    onClick?: any
}

export default function Button({child, type, onClick,className}: BtnProp) {
  return <div onClick={onClick} className={className}>{child}</div>;
}
