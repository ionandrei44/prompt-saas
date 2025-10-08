import { useState } from "react";
import { Select, SelectItem } from "@heroui/react";
import { CalendarBlankIcon } from "@phosphor-icons/react";
import { theme } from "../../styles/theme";

const DateRangePicker = () => {
  const [selectedRange, setSelectedRange] = useState("7d");

  const ranges = [
    { value: "7d", label: "Last 7 days" },
    { value: "30d", label: "Last 30 days" },
    { value: "90d", label: "Last 90 days" },
    { value: "1y", label: "Last year" },
  ];

  return (
    <Select
      selectedKeys={[selectedRange]}
      onSelectionChange={(keys) => {
        const value = Array.from(keys)[0] as string;
        setSelectedRange(value);
      }}
      size="sm"
      variant="bordered"
      className="w-48 focus:outline-none"
      disableAnimation={false}
      startContent={
        <CalendarBlankIcon
          size={18}
          weight="regular"
          style={{ color: theme.colors.text.primary }}
        />
      }
      classNames={{
        trigger:
          "bg-[#1a2332] border-white/10 data-[hover=true]:border-white/30 data-[focus=true]:border-white/30 data-[open=true]:border-white/30 outline-none",
        value: "!text-white",
        innerWrapper: "text-white",
        selectorIcon: "text-white",
        popoverContent: "bg-[#1a2332] border-white/10",
        listbox: "bg-[#1a2332] gap-2 p-2",
      }}
      popoverProps={{
        classNames: {
          content: "bg-[#1a2332] border border-white/10 backdrop-blur-md",
        },
      }}
      listboxProps={{
        itemClasses: {
          base: [
            "!text-white",
            "rounded-md",
            "mb-1",
            "data-[hover=true]:bg-white/10",
            "data-[hover=true]:!text-white",
            "data-[selectable=true]:focus:bg-white/10",
            "data-[selectable=true]:focus:!text-white",
            "data-[selected=true]:bg-white/10",
            "data-[selected=true]:!text-white",
          ],
          title: "!text-white",
        },
      }}
      aria-label="Date range"
    >
      {ranges.map((range) => (
        <SelectItem key={range.value}>{range.label}</SelectItem>
      ))}
    </Select>
  );
};

export default DateRangePicker;
