import { useState } from "react";

export default function usePageFunctions() {
  const [textSelect, setTextSelect] = useState("mega_sena");
  const [selectEvent, setSelectEvent] = useState(false);

  const handleOpenSelect = () => setSelectEvent((open) => !open);
  function handleChangeSelect(text: string) {
    setSelectEvent(false);
    setTextSelect(text);
  }

  return {
    handleChangeSelect,
    handleOpenSelect,
    selectEvent,
    textSelect,
  };
}
