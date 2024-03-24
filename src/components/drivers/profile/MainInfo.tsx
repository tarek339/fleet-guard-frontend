import dayjs from "dayjs";
import { CardButton, FlexColumn, FlexRow, HeaderSmall } from "../..";
import { main } from "../../../assets/themes/styles/card";
import { useDispatches, useSelectors } from "../../../hooks";
import DividerVertical from "../../DividerVertical";
import { IMainInfo } from "../../../types/interfaces/components/interfaces";
import { differenceInDays } from "date-fns";
import { colors } from "../../../assets/themes/colors/colors";
import { FaWhatsappSquare } from "../../icons/index";

const MainInfo = ({ onEdit }: IMainInfo) => {
  const { driver } = useSelectors();
  const { openModal } = useDispatches();

  const licenseInfo = [
    {
      name: driver.licenseType,
      valid: driver.typeValidU,
    },
    {
      name: driver.codeNum,
      valid: driver.codeNumValidU,
    },
    {
      name: driver.driverCardNum,
      valid: driver.driverCardNumValidU,
    },
  ];

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

  const colorType =
    leftDaysType > 31 && leftDaysType < 91
      ? colors.color.warning
      : leftDaysType <= 30
      ? "#f44336"
      : colors.color.success;

  const colorCode =
    leftDaysCode > 30 && leftDaysCode < 91
      ? colors.color.warning
      : leftDaysCode <= 30
      ? "#f44336"
      : colors.color.success;

  const colorCard =
    leftDaysCard > 30 && leftDaysCard < 91
      ? colors.color.warning
      : leftDaysCard <= 30
      ? "#f44336"
      : colors.color.success;

  return (
    <FlexRow gap="100px">
      <FlexColumn gap="10px">
        <HeaderSmall title={"Contact data"} />
        <FlexColumn gap="15px">
          <span style={main}>
            <a
              className="whatsapp"
              href={`https://wa.me/${driver.phoneNumber}`}
            >
              <FlexRow gap="5px" style={{ alignItems: "center" }}>
                <FaWhatsappSquare />
                <>{driver.phoneNumber}</>
              </FlexRow>
            </a>
          </span>

          <FlexColumn>
            <DividerVertical />
          </FlexColumn>

          <FlexRow
            gap="20px"
            style={{
              paddingTop: "10px",
            }}
          >
            <CardButton title={"edit"} onClick={onEdit} />
            <CardButton title={"delete"} onClick={openModal} />
          </FlexRow>
        </FlexColumn>
      </FlexColumn>

      <FlexColumn>
        <DividerVertical />
      </FlexColumn>

      <FlexColumn gap="10px">
        <HeaderSmall title={"License data"} />
        <FlexRow gap="20px">
          <FlexColumn gap="15px">
            <span style={main}>License number:</span>
            <span style={main}>License type:</span>
            <span style={main}>Code number:</span>
            <span style={main}>Driver card number:</span>
          </FlexColumn>
          <FlexColumn gap="15px">
            <span style={main}>{driver.licenseNum}</span>
            <>
              {licenseInfo.map((info, index) => {
                return (
                  <FlexRow
                    key={index}
                    gap="15px"
                    style={{
                      justifyContent: "space-between",
                      fontWeight: 400,
                    }}
                  >
                    <span
                      style={{
                        ...main,
                        letterSpacing: 1.2,
                        color:
                          index === 0
                            ? colorType
                            : index === 1
                            ? colorCode
                            : colorCard,
                      }}
                    >
                      {info.name}
                    </span>
                    <span
                      style={{
                        ...main,
                        color:
                          index === 0
                            ? colorType
                            : index === 1
                            ? colorCode
                            : colorCard,
                      }}
                    >
                      {dayjs(info.valid).format("DD.MM.YYYY")}
                    </span>
                  </FlexRow>
                );
              })}
            </>
          </FlexColumn>
        </FlexRow>
      </FlexColumn>
    </FlexRow>
  );
};

export default MainInfo;
