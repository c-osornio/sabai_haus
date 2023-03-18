import Link from "next/link";
import React, { useState } from "react";
import Select from "react-select";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
function Banner3() {
  const [startDate1, setStartDate1] = useState(false);
  const [startDate2, setStartDate2] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedOption2, setSelectedOption2] = useState(null);

  const options = [
    { value: "1 Guest", label: "1 Guest" },
    { value: "2 Guests", label: "2 Guests" },
    { value: "3 Guests", label: "3 Guests" },
    { value: "4 Guests", label: "4 Guests" },
    { value: "5 Guests", label: "5 Guests" },
    { value: "6 Guests", label: "6 Guests" },
  ];
  const roomOptions = [
    { value: "Listing 1", label: "Listing 1" },
    { value: "Listing 2", label: "Listing 2" }
    // { value: "Room 3", label: "Room 3" },
    // { value: "Room 4", label: "Room 4" },
    // { value: "Room 5", label: "Room 5" },
  ];
  const customStyles = {
    menu: (provided, state) => ({
      ...provided,
      width: state.selectProps.width,
      borderBottom: "1px dotted pink",
      color: state.selectProps.menuColor,
      padding: 5,
      zIndex: 2,
    }),
    control: (provided) => ({
      ...provided,
      height: 16,
      width: "100%",
      maxWidth: "450px",
      marginTop: "-5px",
      border: "0px solid red",
      fontSize: 15,
      fontWeight: "500",
      backgroundColor: "#fff",
      outline: "none",
      boxShadow: "none",
    }),
    placeholder: (provided) => ({
      ...provided,
      color: "#1c171d",
    }),

    dropdownIndicator: (provided) => ({
      ...provided,
      color: "#3CAA9F",
    }),
  };
  return (
    <div className="hero-style3">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 d-flex justify-content-center align-items-center px-0">
            <div className="hero-left">
              <div className="hero-content">
                <h4>Find your perfect home away from home</h4>
                <h1>Live like a local</h1>
                <div className="hero-facility d-flex align-items-center justify-content-center">
                  {/* <div className="single-facility">
                    <div className="icon">
                      <img src="assets/images/icons/restaurant33.svg" alt="" />
                    </div>
                    <div className="content">
                      <h5>
                        <Link href="/hotel-facilities">
                          <a>Restaurant</a>
                        </Link>
                      </h5>
                    </div>
                  </div> */}
                  <div className="single-facility">
                    <div className="icon">
                      <img src="assets/images/icons/spa33.svg" alt="" />
                    </div>
                    <div className="content">
                      <h5>
                        <Link href="/hotel-facilities">
                          <a>Spa</a>
                        </Link>
                      </h5>
                    </div>
                  </div>
                  <div className="single-facility">
                    <div className="icon">
                      <img src="assets/images/icons/treadmill33.svg" alt="" />
                    </div>
                    <div className="content">
                      <h5>
                        <Link href="/hotel-facilities">
                          <a>Gym</a>
                        </Link>
                      </h5>
                    </div>
                  </div>
                  <div className="single-facility">
                    <div className="icon">
                      <img
                        src="assets/images/icons/game-controller33.svg"
                        alt=""
                      />
                    </div>
                    <div className="content">
                      <h5>
                        <Link href="/hotel-facilities">
                          <a>Gaming</a>
                        </Link>
                      </h5>
                    </div>
                  </div>
                  <div className="single-facility">
                    <div className="icon">
                      <img src="assets/images/icons/pool33.svg" alt="" />
                    </div>
                    <div className="content">
                      <h5>
                        <Link href="/hotel-facilities">
                          <a>Pool</a>
                        </Link>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="multi-main-searchber">
                <div className="row align-items-center">
                  <div className="col-lg-9">
                    <div className="row gx-0 gy-4">
                      <div className="col-lg-3 col-md-6">
                        <div className="searchbox-input date-picker-input">
                          <ReactDatePicker
                            selected={startDate1}
                            onChange={(date) => setStartDate1(date)}
                            placeholderText="Check In"
                            className="claender"
                            
                          />
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-6">
                        <div className="searchbox-input date-picker-input">
                          <ReactDatePicker
                            selected={startDate2}
                            onChange={(date) => setStartDate2(date)}
                            placeholderText="Check Out"
                            className="claender"
                          />
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-6">
                        <div className="searchbox-input two persons">
                          <Select
                            theme={(theme) => ({
                              ...theme,
                              borderRadius: 0,
                              padding: 0,
                              colors: {
                                ...theme.colors,
                                primary25: "#f6f6f6",
                                primary: "#3CAA9F",
                              },
                            })}
                            styles={customStyles}
                            components={{
                              IndicatorSeparator: () => null,
                            }}
                            width="230px"
                            menuColor="#333"
                            defaultValue={selectedOption}
                            options={options}
                            placeholder="Guests"
                          />
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-6">
                        <div className="searchbox-input two rooms">
                          <Select
                            theme={(theme) => ({
                              ...theme,
                              borderRadius: 0,
                              padding: 0,
                              colors: {
                                ...theme.colors,
                                primary25: "#f6f6f6",
                                primary: "#3CAA9F",
                              },
                              zIndex: 10,
                            })}
                            styles={customStyles}
                            components={{
                              IndicatorSeparator: () => null,
                            }}
                            width="230px"
                            menuColor="#333"
                            defaultValue={selectedOption2}
                            options={roomOptions}
                            placeholder="Listings"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 px-0 d-flex justify-content-lg-end justify-content-center">
                    <div className="main-form-submit">
                      <Link href="/room-suits1">
                        <a className="btn--primary4 eg-btn">Find Now</a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 px-0">
            <div className="banner-img">
              <img
                className="img-fluid"
                src="assets/images/bg/haus1/listing1-front.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner3;
