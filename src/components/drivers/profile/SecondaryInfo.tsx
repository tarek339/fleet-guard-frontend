import { FlexColumn, HeaderSmall } from "../..";
import { main } from "../../../assets/themes/styles/card";
import { differenceInDays } from "date-fns";
import { useSelectors } from "../../../hooks";
import { colors } from "../../../assets/themes/colors/colors";

const driverLic = "driver's license";
const codeNum = "driver's code number";
const cardNum = "driver's card number";

const SecondaryInfo = () => {
  const { driver } = useSelectors();

  const leftDaysType = differenceInDays(
    new Date(driver.typeValidU),
    new Date()
  );
  const leftDaysCode = differenceInDays(
    new Date(driver.codeNumValidU),
    new Date()
  );
  const leftDaysCard = differenceInDays(
    new Date(driver.driverCardNumValidU),
    new Date()
  );

  const notification = [
    {
      text: {
        main: `The ${driverLic} expires within ${leftDaysType} days on.`,
        alert: `The ${driverLic} renewal has been long overdue for ${leftDaysType} days!`,
      },
    },
    {
      text: {
        main: `The ${codeNum} expires within ${leftDaysCode} days on.`,
        alert: `The ${codeNum} renewal has been long overdue for ${leftDaysCode} days!`,
      },
    },
    {
      text: {
        main: `The ${cardNum} expires within ${leftDaysCard} days on.`,
        alert: `The ${cardNum} renewal has been long overdue for ${leftDaysCard} days!`,
      },
    },
  ];

  const colorType =
    leftDaysType > 31 && leftDaysType < 91
      ? colors.color.warning
      : leftDaysType <= 30
      ? "#f44336"
      : "";

  const colorCode =
    leftDaysCode > 30 && leftDaysCode < 91
      ? colors.color.warning
      : leftDaysCode <= 30
      ? "#f44336"
      : "";

  const colorCard =
    leftDaysCard > 30 && leftDaysCard < 91
      ? colors.color.warning
      : leftDaysCard <= 30
      ? "#f44336"
      : "";

  return (
    <FlexColumn gap="10px" style={{ textAlign: "center" }}>
      <HeaderSmall title={"Notification"} />
      <>
        {leftDaysType > 90 && leftDaysCode > 90 && leftDaysCard > 90 ? (
          <span
            style={{ ...main, color: colors.color.success, fontWeight: 400 }}
          >
            All documents are valid for more than 90 days.
          </span>
        ) : (
          notification.map((noti, index) => {
            return (
              <FlexColumn key={index} gap="20px">
                <>
                  {leftDaysType < 91 && index === 0 && (
                    <span
                      style={{ ...main, color: colorType, fontWeight: 400 }}
                    >
                      {leftDaysType > 0 && leftDaysType < 91
                        ? noti.text.main
                        : leftDaysType < 0
                        ? noti.text.alert
                        : null}
                    </span>
                  )}
                  {leftDaysCode < 91 && index === 1 && (
                    <span
                      style={{ ...main, color: colorCode, fontWeight: 400 }}
                    >
                      {leftDaysCode > 0 && leftDaysCode < 91
                        ? noti.text.main
                        : leftDaysCode < 0
                        ? noti.text.alert
                        : null}
                    </span>
                  )}
                  {leftDaysCard < 91 && index === 2 && (
                    <span
                      style={{ ...main, color: colorCard, fontWeight: 400 }}
                    >
                      {leftDaysCard > 0 && leftDaysCard < 91
                        ? noti.text.main
                        : leftDaysCard < 0
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

export default SecondaryInfo;
