import React, { type ReactNode } from "react";

interface WidgetProps {
  children: ReactNode;
  title?: string;
}

const Widget: React.FC<WidgetProps> = ({ children, title }) => (
  <div className="overflow-hidden rounded-lg bg-gray-900 shadow">
    <div className="px-4 py-5 sm:p-6 w-full h-full">
      {title && <h2 className="text-xl font-bold text-white mb-4">{title}</h2>}
      {children}
    </div>
  </div>
);

export default Widget;