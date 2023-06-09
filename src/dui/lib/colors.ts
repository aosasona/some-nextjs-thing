const defaultColors = {
  gray: {
    "100": "#F7FAFC",
    "200": "#EDF2F7",
    "300": "#E2E8F0",
    "400": "#CBD5E0",
    "500": "#A0AEC0",
    "600": "#718096",
    "700": "#4A5568",
    "800": "#2D3748",
    "900": "#1A202C",
  },
  coolGray: {
    "100": "#F5F7FA",
    "200": "#E4E7EB",
    "300": "#CBD2D9",
    "400": "#9AA5B1",
    "500": "#7B8794",
    "600": "#616E7C",
    "700": "#52606D",
    "800": "#3E4C59",
    "900": "#323F4B",
  },
  blueGray: {
    "100": "#F1F5F9",
    "200": "#E2E8F0",
    "300": "#CFD8E3",
    "400": "#97A6BA",
    "500": "#64748B",
    "600": "#475569",
    "700": "#334155",
    "800": "#1E293B",
    "900": "#0F172A",
  },
  dark: {
    "100": "#E5E5E5",
    "200": "#D4D4D4",
    "300": "#A3A3A3",
    "400": "#737373",
    "500": "#525252",
    "600": "#404040",
    "700": "#262626",
    "800": "#171717",
    "900": "#0B0B0B",
  },
  red: {
    "100": "#FFF5F5",
    "200": "#FED7D7",
    "300": "#FEB2B2",
    "400": "#FC8181",
    "500": "#F56565",
    "600": "#E53E3E",
    "700": "#C53030",
    "800": "#9B2C2C",
    "900": "#742A2A",
  },
  blue: {
    "100": "#DBEAFE",
    "200": "#BFDBFE",
    "300": "#93C5FD",
    "400": "#60A5FA",
    "500": "#3B82F6",
    "600": "#2563EB",
    "700": "#1D4ED8",
    "800": "#1E40AF",
    "900": "#1E3A8A",
  },
  green: {
    "100": "#F0FFF4",
    "200": "#C6F6D5",
    "300": "#9AE6B4",
    "400": "#68D391",
    "500": "#48BB78",
    "600": "#38A169",
    "700": "#2F855A",
    "800": "#276749",
    "900": "#22543D",
  },
  cyan: {
    "100": "#ECFEFF",
    "200": "#CFFAFE",
    "300": "#A5F3FC",
    "400": "#67E8F9",
    "500": "#22D3EE",
    "600": "#06B6D4",
    "700": "#0891B2",
    "800": "#0E7490",
    "900": "#155E75",
  },
  teal: {
    "100": "#F0FDFA",
    "200": "#CCFBF1",
    "300": "#99F6E4",
    "400": "#5EEAD4",
    "500": "#2DD4BF",
    "600": "#14B8A6",
    "700": "#0D9488",
    "800": "#0F766E",
    "900": "#115E59",
  },
  emerald: {
    "100": "#ECFDF5",
    "200": "#D1FAE5",
    "300": "#A7F3D0",
    "400": "#6EE7B7",
    "500": "#34D399",
    "600": "#10B981",
    "700": "#059669",
    "800": "#047857",
    "900": "#065F46",
  },
  yellow: {
    "100": "#FFFFF0",
    "200": "#FEFCBF",
    "300": "#FAF089",
    "400": "#F6E05E",
    "500": "#ECC94B",
    "600": "#D69E2E",
    "700": "#B7791F",
    "800": "#975A16",
    "900": "#744210",
  },
  orange: {
    "100": "#FFFAF0",
    "200": "#FEEBC8",
    "300": "#FBD38D",
    "400": "#F6AD55",
    "500": "#ED8936",
    "600": "#DD6B20",
    "700": "#C05621",
    "800": "#9C4221",
    "900": "#7B341E",
  },
  amber: {
    "100": "#FFFBEB",
    "200": "#FEF3C7",
    "300": "#FDE68A",
    "400": "#FCD34D",
    "500": "#FBBF24",
    "600": "#F59E0B",
    "700": "#D97706",
    "800": "#B45309",
    "900": "#92400E",
  },
  purple: {
    "100": "#F5F3FF",
    "200": "#EDE9FE",
    "300": "#DDD6FE",
    "400": "#C4B5FD",
    "500": "#A78BFA",
    "600": "#8B5CF6",
    "700": "#7C3AED",
    "800": "#6D28D9",
    "900": "#5B21B6",
  },
  violet: {
    "100": "#F5F3FF",
    "200": "#EDE9FE",
    "300": "#DDD6FE",
    "400": "#C4B5FD",
    "500": "#A78BFA",
    "600": "#8B5CF6",
    "700": "#7C3AED",
    "800": "#6D28D9",
    "900": "#5B21B6",
  },
  indigo: {
    "100": "#E0E7FF",
    "200": "#C7D2FE",
    "300": "#A5B4FC",
    "400": "#818CF8",
    "500": "#6366F1",
    "600": "#4F46E5",
    "700": "#4338CA",
    "800": "#3730A3",
    "900": "#312E81",
  },
  rose: {
    "100": "#FFF1F2",
    "200": "#FFE4E6",
    "300": "#FECDD3",
    "400": "#FDA4AF",
    "500": "#FB7185",
    "600": "#F43F5E",
    "700": "#E11D48",
    "800": "#BE123C",
    "900": "#9F1239",
  },
  pink: {
    "100": "#FFF5F7",
    "200": "#FED7E2",
    "300": "#FBB6CE",
    "400": "#F687B3",
    "500": "#ED64A6",
    "600": "#D53F8C",
    "700": "#B83280",
    "800": "#97266D",
    "900": "#702459",
  },
  fuchsia: {
    "100": "#FDF4FF",
    "200": "#FAE8FF",
    "300": "#F5D0FE",
    "400": "#F0ABFC",
    "500": "#E879F9",
    "600": "#D946EF",
    "700": "#C026D3",
    "800": "#A21CAF",
    "900": "#86198F",
  },
};

export default defaultColors;
