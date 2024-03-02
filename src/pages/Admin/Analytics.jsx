import React, { useState, useEffect } from "react";
import LineChartAnalytics from "../../components/admin/BarChartAnalytics";
import CountUpAnimation from "../../components/CountUpAnimation";
import TimeframeSelector from "../../components/admin/TimeframeSelector";
import { formTitleParser, dateParse } from "../../helpers/formParser";
import { useAdminApiCallFunctions } from "../../helpers/customHooks/AdminApiCallFunctions";
import DoughnutChartAnalytics from "../../components/admin/DoughnutChartAnalytics";

const Analytics = () => {
  const { getAnalytics } = useAdminApiCallFunctions();
  const [selectedOption, setSelectedOption] = useState("today");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const [analytics, setAnalytics] = useState({});

  const getAnalyticsAsync = async (period, startDate, endDate) => {
    setAnalytics(await getAnalytics(period, startDate, endDate));
  };

  useEffect(() => {
    getAnalyticsAsync(
      selectedOption,
      startDate.toISOString(),
      endDate.toISOString()
    );
  }, [selectedOption, startDate, endDate]);

  return (
    <React.Fragment>
      {Object.keys(analytics).length !== 0 && (
        <div className="flex flex-col items-start lg:items-center gap-4 w-full">
          <h1 className="font-medium text-xl sm:text-3xl pb-2">Analytics</h1>
          <span className="w-24 h-4 border-black text-[#ff2b2b] border-t-2 pb-4" />
          <div className="w-screen relative left-[-2rem] sm:left-0 px-2 flex flex-col items-center gap-8 sm:w-full lg:px-8">
            <TimeframeSelector
              selectedOption={selectedOption}
              setSelectedOption={setSelectedOption}
              setStartDate={setStartDate}
              setEndDate={setEndDate}
            />

            <div className="flex flex-col items-center text-center">
              <p className="font-semibold text-sm lg:text-base px-8">
                Here are your analytics for{" "}
                {selectedOption === "custom"
                  ? `${dateParse(startDate).split(" at ")[0]} to ${
                      dateParse(endDate).split(" at ")[0]
                    }`
                  : formTitleParser(selectedOption)}
              </p>
              <p className="font-bold text-base lg:text-lg mt-4">
                Total Revenue
              </p>
              <h1
                className={`font-bold text-3xl lg:text-5xl mb-4 ${
                  analytics.totalRevenue < 0 ? "text-red-500" : "text-green-500"
                }`}
              >
                $
                <CountUpAnimation
                  start={0}
                  end={analytics.totalRevenue}
                  duration={3000}
                  isMoney={true}
                />
              </h1>
              <p className="font-semibold text-sm lg:text-base">Total Gain</p>
              <h1 className="font-bold text-2xl lg:text-4xl">
                $
                <CountUpAnimation
                  start={0}
                  end={analytics.totalGain}
                  duration={3000}
                  isMoney={true}
                />
              </h1>
              <p className="font-semibold text-sm lg:text-base">Total Loss</p>
              <h1 className="font-bold text-2xl lg:text-4xl">
                $
                <CountUpAnimation
                  start={0}
                  end={analytics.totalLoss}
                  duration={3000}
                  isMoney={true}
                />
              </h1>
            </div>
            <LineChartAnalytics
              values={[
                analytics.revenueGainPerPeriod,
                analytics.revenueLossPerPeriod,
              ]}
              periodLabel={analytics.periodLabel}
              label={["Total Gain (USD)", "Total Loss (USD)"]}
              backgroundColor={["#E4A0F7", "#ff2b1b"]}
            />
            <div className="flex flex-col items-center">
              <p className="font-semibold text-sm lg:text-base">
                Total Amount of Units Sold
              </p>
              <h1 className="font-bold text-2xl lg:text-4xl">
                <CountUpAnimation
                  start={0}
                  end={analytics.totalUnitsSold}
                  duration={3000}
                />
              </h1>
              <p className="font-semibold text-sm lg:text-base">
                Total Amount of Units Refunded
              </p>
              <h1 className="font-bold text-2xl lg:text-4xl">
                <CountUpAnimation
                  start={0}
                  end={analytics.totalUnitsRefunded}
                  duration={3000}
                />
              </h1>
            </div>
            <DoughnutChartAnalytics
              values={[
                analytics.totalUnitsSold,
                analytics.totalUnitsRefunded,
              ]}
              periodLabel={["Amount Of Units Sold", "Amount Of Units Refunded"]}
              label={"Number of Units"}
              backgroundColor={["#E4A0F7", "#ff2b1b"]}
            />
            <LineChartAnalytics
              values={[
                analytics.totalUnitsSoldPerPeriod,
                analytics.unitsRefundedAmountPerPeriod,
              ]}
              periodLabel={analytics.periodLabel}
              label={["Amount Of Units Sold", "Amount Of Units Refunded"]}
              backgroundColor={["#E4A0F7", "#ff2b1b"]}
            />
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default Analytics;
