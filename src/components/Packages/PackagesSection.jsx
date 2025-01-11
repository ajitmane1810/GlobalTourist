import React from "react";
import packagesData from './packagesData.jsx';
import PackageItem from './PackageItem.jsx';



const PackagesSection = () => {
  return (
    <div className="py-16 px-10 md:px-44 bg-gray-50">
      <div className="container pt-10 pb-3 ">
        <div className="text-center mb-3 pb-3">
          <h6 className="text-primary uppercase mb-2" style={{ letterSpacing: "5px" }}>
            Packages
          </h6>
          <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">Perfect Tour Packages</h1>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {packagesData.map((pkg, index) => (
            <PackageItem key={index} {...pkg} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PackagesSection;
