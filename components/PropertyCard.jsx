import React from "react";
import Image from "next/image";
import { FaBed, FaBath, FaRulerCombined, FaMoneyBill, FaMapMarker } from 'react-icons/fa';
import Link from "next/link";


const PropertyCard = () => {
  return (
    <div className="rounded-xl shadow-md relative">
      <Image
        src="/images/properties/a1.jpg"
        alt=""
        className="w-full h-auto rounded-t-xl"
        width={0}
        height={0}
        sizes="100vw"
      />
      <div className="p-4">
        <div className="text-left md:text-center lg:text-left mb-6">
          <div className="text-gray-600">Apartment</div>
          <h3 className="text-xl font-bold">Boston Commons Retreat</h3>
        </div>
        <h3 className="absolute top-[10px] right-[10px] bg-white px-4 py-2 rounded-lg text-blue-500 font-bold text-right md:text-center lg:text-right">
          {}
        </h3>

        <div className="flex justify-center gap-4 text-gray-500 mb-4">
          <p>
            <FaBed className="inline mr-2" /> 3Beds
            <span className="md:hidden lg:inline">Beds</span>
          </p>
          <p>
            <FaBath className="inline mr-2" /> 2Baths
            <span className="md:hidden lg:inline">Baths</span>
          </p>
          <p>
            <FaRulerCombined className="inline mr-2" />
            1,500 sqft
            <span className="md:hidden lg:inline">sqft</span>
          </p>
        </div>

        <div className="flex justify-center gap-4 text-green-900 text-sm mb-4">
            <p className="flex items-center">
              <FaMoneyBill className="inline mr-2" />
              Nightly
            </p>

            <p className="flex items-center">
              <FaMoneyBill className="inline mr-2" />
              Weekly
            </p>

            <p className="flex items-center">
              <FaMoneyBill className="inline mr-2" />
              Monthly
            </p>
        </div>

        <div className="border border-gray-100 mb-5"></div>

        <div className="flex flex-col lg:flex-row justify-between mb-4">
          <div className="flex align-middle gap-2 mb-4 lg:mb-0">
            <FaMapMarker className="text-orange-700 mt-1" />
            <span className="text-orange-700">
              Boston MA
            </span>
          </div>
          <Link
            href={`/properties`}
            className="h-[36px] bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-center text-sm"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
