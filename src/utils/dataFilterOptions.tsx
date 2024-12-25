import LabelOption from "@/modules/hotel/FilterHotel/LabelOption/LabelOption";
import { IFilterOptions } from "@/types/type";
import _ from "lodash";

export const amenity: IFilterOptions[] = [
  {
    label: <LabelOption text="Chỗ đỗ xe" count={119} />,
    value: "parking-lot",
  },
  {
    label: <LabelOption text="Nhà hàng" count={27} />,
    value: "restaurant",
  },
  {
    label: <LabelOption text="Cho phép mang theo vật nuôi" count={52} />,
    value: "allow-pet",
  },
  {
    label: <LabelOption text="Dịch vụ phòng" count={60} />,
    value: "service-room",
  },
  {
    label: <LabelOption text="Lễ tân 24h" count={71} />,
    value: "full-time",
  },
  {
    label: <LabelOption text="Trung tâm tập thể dục" count={3} />,
    value: "center-exercise",
  },
  {
    label: <LabelOption text="Phòng không hút thuốc" count={77} />,
    value: "no-smoke",
  },
  {
    label: <LabelOption text="Xe đưa đón sân bay" count={57} />,
    value: "taxi-airport",
  },
  {
    label: <LabelOption text="Phòng gia đình" count={66} />,
    value: "room-private",
  },
  {
    label: <LabelOption text="Trung tâm spa & chăm sóc sức khỏe" count={7} />,
    value: "service-health",
  },
  {
    label: <LabelOption text="Wifi miễn phí" count={116} />,
    value: "wifi",
  },
  {
    label: <LabelOption text="Chỉ dành cho người lớn" count={2} />,
    value: "only-adult",
  },
  {
    label: <LabelOption text="Trạm sạc xe điện" count={4} />,
    value: "charge",
  },
  {
    label: <LabelOption text="Lối vào cho người đi xe lăn" count={7} />,
    value: "walkway",
  },
  {
    label: <LabelOption text="Hồ bơi" count={14} />,
    value: "pool",
  },
];

export const point: IFilterOptions[] = [
  {
    label: <LabelOption text="Tuyệt hảo: 9 điểm trở lên" count={31} />,
    value: "A",
  },
  {
    label: <LabelOption text="Rất tốt: 8 điểm trở lên" count={76} />,
    value: "B",
  },
  {
    label: <LabelOption text="Tốt: 7 điểm trở lên" count={94} />,
    value: "C",
  },
  {
    label: <LabelOption text="Dễ chịu: 6 điểm trở lên" count={101} />,
    value: "D",
  },
];

export const checkCommonValue = (array: string[], options: string[]) => {
  const checkValues = _.intersection(options, array);
  return checkValues.length > 0;
};
