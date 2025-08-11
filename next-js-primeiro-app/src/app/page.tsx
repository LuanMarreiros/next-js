'use client'

import useGoTo from "@/services/router";

export default function Home() {
  function useGoToNextPage() {
    useGoTo("/teste");
  }

  return <button onClick={useGoToNextPage}>Avançar tela</button>;
}
