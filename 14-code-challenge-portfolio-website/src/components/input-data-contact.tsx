import { useTheme } from "@/context/theme-context";

export default function InputDataContact() {
  const { isDark } = useTheme();

  return (
    <main>
      <input
        className={`w-full px-4 py-2 border ${
          isDark
            ? "bg-gray-700 border-gray-600 focus:ring-blue-400 placeholder:to-white"
            : "bg-gray-50 border-gray-300 focus:ring-blue-500 placeholder:to-black"
        } `}
      />
    </main>
  );
}
