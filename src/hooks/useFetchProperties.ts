import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { ICompany } from "../types/interfaces/properties";
import { useDispatches, useNavigation } from ".";

const useFetchProperties = () => {
  const [companies, setCompanies] = useState<ICompany[]>([]);

  const { id } = useParams();
  const {
    dispatchTruck,
    dispatchDriver,
    dispatchTrailer,
    dispatchDrivers,
    dispatchTrailers,
    dispatchTrucks,
  } = useDispatches();
  const { navigate } = useNavigation();

  const fetchProperties = async () => {
    const res = await axios.get(`company/${id}/fetch-properties`);
    dispatchDrivers(res.data.drivers);
    dispatchTrucks(res.data.trucks);
    dispatchTrailers(res.data.trailers);
  };

  const fetchData = async () => {
    const res = await axios.get("/company/fetch-companies");
    setCompanies(res.data.companies);
  };

  const getSingleDriver = async (driverId: string) => {
    const res = await axios.get(`/driver/driver-profile/${driverId}`);
    dispatchDriver(res.data);
    navigate(`/driver-profile/${driverId}`);
  };
  const getDriverProfile = async () => {
    const res = await axios.get(`/driver/driver-profile/${id}`);
    dispatchDriver(res.data);
  };

  const getSingleTruck = async (truckId: string) => {
    const res = await axios.get(`/truck/truck-profile/${truckId}`);
    dispatchTruck(res.data);
    navigate(`/truck-profile/${truckId}`);
  };
  const getTruckProfile = async () => {
    const res = await axios.get(`/truck/truck-profile/${id}`);
    dispatchTruck(res.data);
  };

  const getSingleTrailer = async (trailerId: string) => {
    const res = await axios.get(`/trailer/trailer-profile/${trailerId}`);
    dispatchTrailer(res.data);
    navigate(`/trailer-profile/${trailerId}`);
  };
  const getTrailerProfile = async () => {
    const res = await axios.get(`/trailer/trailer-profile/${id}`);
    dispatchTrailer(res.data);
  };

  return {
    fetchProperties,
    fetchData,
    getSingleTruck,
    getSingleDriver,
    getSingleTrailer,
    getTruckProfile,
    getTrailerProfile,
    getDriverProfile,
    companies,
  };
};

export default useFetchProperties;
