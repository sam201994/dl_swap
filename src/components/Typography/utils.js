export function calculateFontSize(type) {
  switch (type) {
    case "p1":
      return "24px";
    case "p2":
      return "16px";
    case "p3":
      return "15px";
    case "p4":
      return "14px";
    case "p5":
      return "14px";
    default:
      return "10px";
  }
}

export function calculateLineHeight(type) {
  switch (type) {
    case "p1":
      return "42px";
    case "p2":
      return "20.8px";
    case "p3":
      return "18.97px";
    case "p4":
      return "24px";
    case "p5":
      return "18px";
    default:
      return "10px";
  }
}

export function calculateFontWeight(type) {
  switch (type) {
    case "p1":
      return "500";

    case "p2":
      return "700";

    case "p3":
    case "p4":
    case "p5":
      return "450";
    default:
      return "450";
  }
}

export function calculateFontColor(fontColor) {
  switch (fontColor) {
    case "primary":
      return "white";
    case "secondary":
      return "#637488";
    default:
      return "white";
  }
}
