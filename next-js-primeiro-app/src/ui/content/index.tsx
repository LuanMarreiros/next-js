import { UIData } from "@/utils/intefaces/ui-data";
import React from "react";

type Content = {
  content: {
    uiData: UIData;
    requestStatusOk: boolean;
  };
};

export default function UIContent(content: Content) {
  const { uiData, requestStatusOk } = content.content;

  if (requestStatusOk) {
    return (
      <div>
        <h1>Requisicao ok</h1>
        <span>{uiData.status}</span>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Requisicao nâo ok</h1>
      </div>
    );
  }
}
