import Image from "next/image";
import React from "react";
import { Link } from "react-router-dom";
import {
    desserts,
    starters, 
    maincourse,
    local,
    tandoori
  } from "../public/index";

const Categories = () => {
  return (
    <div className="categories">
      {/* category page breakdown */}
      {/* column-1 */}
      <div className="col">
        <div className="row">
          <Image
            src={desserts}
            alt=""
            srcset=""
            width={100}
                height={100}
          />
          <button>
            <Link className="link" to="/products/4">
              Sale
            </Link>
          </button>
        </div>
        <div className="row">
          <Image
            src={maincourse}
            alt=""
            width={100}
                height={100}
          />
          <button>
            <Link className="link" to="/products/1">
              Women
            </Link>
          </button>
        </div>
      </div>

      {/* column-2 */}
      <div className="col">
        {/* row3 */}
        <div className="row">
          <Image
            src={starters}
            alt=""
            srcset=""
            width={100}
            height={100}
          />
          <button>
            <Link className="link" to="/products/5">
              New Season
            </Link>
          </button>
        </div>
      </div>

      {/* column-3 */}
      <div className="col col-l">
        <div className="row">
          <div className="col">
            <div className="row">
              <Image
                src={local}
                alt=""
                srcset=""
                width={100}
                height={100}
              />
              <button>
                <Link className="link" to="/products/2">
                  Men
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <Image
            src={tandoori}
            alt=""
            srcset=""
            width={100}
            height={100}
          />
          <button>
            <Link className="link" to="/products/6">
              Accessories
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Categories;
