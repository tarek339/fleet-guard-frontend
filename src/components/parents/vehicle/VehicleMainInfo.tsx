import { CardButton, FlexColumn, FlexRow, HeaderSmall } from "../..";
import { useDispatches, useNavigation } from "../../../hooks";
import { differenceInDays } from "date-fns";
import { main } from "../../../assets/themes/styles/card";
import { MdEmail } from "react-icons/md";
import { FaWhatsappSquare } from "react-icons/fa";
import DividerVertical from "../../DividerVertical";
import dayjs from "dayjs";
import { colors } from "../../../assets/themes/colors/colors";
import axios from "axios";
import { useParams } from "react-router-dom";
import { IVehicleMainInfo } from "../../../types/interfaces/components/interfaces";

const VehicleMainInfo = ({
  nextHU,
  nextSP,
  reqUrl,
  pathTo,
  dispatch,
  type,
  brand,
  weight,
  nextTachograph,
}: IVehicleMainInfo) => {
  const { openModal } = useDispatches();
  const { id } = useParams();
  const { navigate } = useNavigation();

  const editTrailer = async () => {
    const res = await axios.get(`/${reqUrl}/${id}`);
    dispatch(res.data);
    navigate(`/${pathTo}/${id}`);
  };

  const path = window.location.pathname === `/truck-profile/${id}`;

  const vehicleInfo = [
    {
      valid: nextHU,
    },
    {
      valid: nextSP,
    },
    {
      valid: path ? nextTachograph : null,
    },
  ];

  const leftDaysHU = differenceInDays(new Date(nextHU), new Date());
  const leftDaysSP = differenceInDays(new Date(nextSP), new Date());
  const leftDaysTacho = differenceInDays(new Date(nextTachograph!), new Date());

  const colorHU =
    leftDaysHU > 31 && leftDaysHU < 91
      ? colors.color.warning
      : leftDaysHU <= 30
      ? "#f44336"
      : colors.color.success;

  const colorSP =
    leftDaysSP > 30 && leftDaysSP < 91
      ? colors.color.warning
      : leftDaysSP <= 30
      ? "#f44336"
      : colors.color.success;

  const colorTacho =
    leftDaysTacho > 30 && leftDaysTacho < 91
      ? colors.color.warning
      : leftDaysTacho <= 30
      ? "#f44336"
      : colors.color.success;

  const companyString = localStorage.getItem("company");
  const company = JSON.parse(companyString!);
  const email = company.email;
  const phone = company.phone;

  return (
    <FlexRow gap="80px">
      <FlexColumn gap="10px">
        <HeaderSmall title={"Contact back office"} />
        <FlexColumn gap="15px">
          <span style={main}>
            <a className="whatsapp" href={`https://wa.me/${phone}`}>
              <FlexRow gap="5px" style={{ alignItems: "center" }}>
                <FaWhatsappSquare />
                <>{phone}</>
              </FlexRow>
            </a>
          </span>

          <span style={main}>
            <a className="mail" href={`mailto:${email}`}>
              <FlexRow gap="5px" style={{ alignItems: "center" }}>
                <MdEmail />
                <>{email}</>
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
            }}>
            <CardButton title={"edit"} onClick={editTrailer} />
            <CardButton title={"delete"} onClick={openModal} />
          </FlexRow>
        </FlexColumn>
      </FlexColumn>

      <FlexColumn>
        <DividerVertical />
      </FlexColumn>

      <FlexRow gap="80px">
        <FlexColumn gap="10px">
          <HeaderSmall title={"Vehicle data"} />
          <FlexRow gap="20px">
            <FlexColumn gap="15px">
              <span style={main}>Brand:</span>
              <span style={main}>Type:</span>
              <span style={main}>Weight:</span>
            </FlexColumn>
            <FlexColumn gap="15px">
              <span style={main}>{brand}</span>
              <span style={main}>{type}</span>
              <span style={main}>{weight}</span>
            </FlexColumn>
          </FlexRow>
        </FlexColumn>

        <FlexColumn gap="10px">
          <HeaderSmall title={"Appointments"} />
          <FlexRow gap="20px">
            <FlexColumn gap="15px">
              <span style={main}>Main inspection:</span>
              <span style={main}>Saftey inspection:</span>
              <span style={main}>{path ? "Tacho inspection:" : null}</span>
            </FlexColumn>
            <FlexColumn gap="15px">
              <>
                {vehicleInfo.map((info, index) => {
                  return (
                    <FlexRow
                      key={index}
                      gap="15px"
                      style={{
                        justifyContent: "space-between",
                        fontWeight: 400,
                      }}>
                      <span
                        style={{
                          ...main,
                          color:
                            index === 0
                              ? colorHU
                              : index === 1
                              ? colorSP
                              : colorTacho,
                        }}>
                        {!path && index === 2
                          ? null
                          : dayjs(info.valid).format("MM.YYYY")}
                      </span>
                    </FlexRow>
                  );
                })}
              </>
            </FlexColumn>
          </FlexRow>
        </FlexColumn>
      </FlexRow>
    </FlexRow>
  );
};

export default VehicleMainInfo;
