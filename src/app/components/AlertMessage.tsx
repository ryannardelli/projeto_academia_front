import React from "react";

interface AlertMessageProps {
  icon: React.ReactNode;
  title: string;
  message: string;
  extra?: string;
  bgColor?: string;
  textColor?: string;
}

const AlertMessage: React.FC<AlertMessageProps> = ({
  icon,
  title,
  message,
  extra,
  bgColor = "bg-blue-500",
  textColor = "text-white",
}) => {
  return (
    <div className={`${bgColor} ${textColor} p-6 rounded-lg shadow-lg flex items-start space-x-4 my-8 m-4`}>
      <div className="flex-shrink-0">
        {icon}
      </div>
      <div>
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-lg">{message}</p>
        {extra && <p className="text-lg mt-2">{extra}</p>}
      </div>
    </div>
  );
};

export default AlertMessage;
