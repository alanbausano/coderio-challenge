import React from "react";
import { DataView } from "primereact/dataview";

interface CardsProps {
  timezone: string;
  datetime: string;
}

// const renderGridItem = (timezone, datetime) => {
//   return (
//     <div className="col-12 md:col-4">
//       <div className="product-grid-item card">
//         <div className="product-grid-item-content">
//           <div className="product-name">{timezone}</div>
//           <div className="product-description">{datetime}</div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const itemTemplate = (timezone) => {
//   if (!timezone) {
//     return "There are no timezones added yet, search for one";
//   }
//   if (timezone) {
//     return renderGridItem;
//   }
// };

export const Cards: React.FC<CardsProps> = ({ timezone, datetime }) => {
  return (
    <div>
      <DataView 
      // value={timezones} 
      // itemTemplate={itemTemplate}
       />
    </div>
  );
};
