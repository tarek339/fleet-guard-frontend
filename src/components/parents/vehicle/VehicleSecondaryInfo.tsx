import { differenceInDays } from "date-fns";
import { colors } from "../../../assets/themes/colors/colors";
import { FlexColumn, HeaderSmall } from "../..";
import { main } from "../../../assets/themes/styles/card";
import { IVehicleSecondaryInfo } from "../../../types/interfaces/components/interfaces";

const VehicleSecondaryInfo = ({ nextHU, nextSP }: IVehicleSecondaryInfo) => {
  const leftDaysHU = differenceInDays(new Date(nextHU), new Date());
  const leftDaysSP = differenceInDays(new Date(nextSP), new Date());

  const notification = [
    {
      text: {
        main: `The next main examination is in ${leftDaysHU} days.`,
        alert: `The main examination is ${leftDaysHU} days overdue!`,
      },
    },
    {
      text: {
        main: `The next saftey examination is in ${leftDaysSP} days.`,
        alert: `The saftey examination is ${leftDaysSP} days overdue!`,
      },
    },
  ];

  const colorType =
    leftDaysHU > 31 && leftDaysHU < 91
      ? colors.color.warning
      : leftDaysHU <= 30
      ? "#f44336"
      : "";

  const colorCode =
    leftDaysSP > 30 && leftDaysSP < 91
      ? colors.color.warning
      : leftDaysSP <= 30
      ? "#f44336"
      : "";

  return (
    <FlexColumn gap="10px" style={{ textAlign: "center" }}>
      <HeaderSmall title={"Notification"} />
      <>
        {leftDaysHU > 90 && leftDaysSP > 90 ? (
          <span
            style={{ ...main, color: colors.color.success, fontWeight: 400 }}
          >
            The next examinations are due in more than 90 days.
          </span>
        ) : (
          notification.map((noti, index) => {
            return (
              <FlexColumn key={index} gap="20px">
                <>
                  {leftDaysHU < 91 && index === 0 && (
                    <span
                      style={{ ...main, color: colorType, fontWeight: 400 }}
                    >
                      {leftDaysHU > 0 && leftDaysHU < 91
                        ? noti.text.main
                        : leftDaysHU < 0
                        ? noti.text.alert
                        : null}
                    </span>
                  )}
                  {leftDaysSP < 91 && index === notification.length - 1 && (
                    <span
                      style={{ ...main, color: colorCode, fontWeight: 400 }}
                    >
                      {leftDaysSP > 0 && leftDaysSP < 91
                        ? noti.text.main
                        : leftDaysSP < 0
                        ? noti.text.alert
                        : null}
                    </span>
                  )}
                </>
              </FlexColumn>
            );
          })
        )}
      </>
    </FlexColumn>
  );
};

export default VehicleSecondaryInfo;
