import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const TimeframeSelector = ({
  selectedOption,
  setSelectedOption,
  setStartDate,
  setEndDate,
}) => {
  const [startDateHolder, setStartDateHolder] = useState(new Date())
  const [endDateHolder, setEndDateHolder] = useState(new Date())

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
    // Reset date pickers when changing options
    setStartDate(new Date());
    setEndDate(new Date());
  };

  const handleDatePicker = (date, isStart) => {
    if (isStart) {
      date.setHours(0, 0, 0, 0);
      //const utcString = date.toUTCString();
      setStartDateHolder(date);
    } else {
      date.setHours(23, 59, 59, 999);
      //const utcString = date.toUTCString();
      setEndDateHolder(date);
    }
  };

  const submitDatePicker = () => {
    setStartDate(startDateHolder)
    setEndDate(endDateHolder)
  }

  return (
    <div className="flex flex-col items-start md:items-center text-sm lg:text-base px-8 sm:px-0">
      <div className="flex items-center gap-2">
        <p>Choose the timeframe for your analytics:</p>
        <select
          className="px-2 py-1 border border-gray-300 rounded-md"
          value={selectedOption}
          onChange={handleOptionChange}
        >
          <option value="today">Today</option>
          <option value="yesterday">Yesterday</option>
          <option value="theLastSevenDays">Last 7 Days</option>
          <option value="theLastFourWeeks">Last 4 Weeks</option>
          <option value="theLastThreeMonths">Last 3 Months</option>
          <option value="theLastSixMonths">Last 6 Months</option>
          <option value="theLastTwelveMonths">Last 12 Months</option>
          <option value="custom">Custom</option>
        </select>
      </div>

      {selectedOption === "custom" && (
        <div className="mt-4 flex flex-col md:flex-row gap-4 items-start md:items-end">
          <div className="grid">
            <p>Start Date</p>
            <DatePicker
              selected={startDateHolder}
              onChange={(date) => {
                handleDatePicker(date, true);
              }}
              selectsStart
              startDate={startDateHolder}
              endDate={endDateHolder}
              maxDate={endDateHolder}
              className="p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="grid">
            <p>End Date</p>
            <DatePicker
              selected={endDateHolder}
              onChange={(date) => {
                handleDatePicker(date, false);
              }}
              selectsEnd
              startDate={startDateHolder}
              endDate={endDateHolder}
              minDate={startDateHolder}
              maxDate={new Date()}
              className="p-2 border border-gray-300 rounded-md"
            />
          </div>
          <button onClick={() => {submitDatePicker()}} className="btn btn-main p-2">Submit</button>
        </div>
      )}
    </div>
  );
};

export default TimeframeSelector;
