"use client";

import fetchData from "@/services/data";
import { UIData } from "@/utils/intefaces/ui-data";
import { useEffect, useState } from "react";

export default function BuildUI() {
  const [uiData, setUiData] = useState({} as UIData);
  const [requestStatusOk, setRequestStatus] = useState(false);

  useEffect(() => {
    const request = fetchData();

    request.then((response) => {
      if (response.ok) {
        setRequestStatus(true);
      }
      response.json().then((data) => {
        setUiData(data);
      });
    });
  }, []);

  return {
    uiData,
    requestStatusOk,
  };
}
