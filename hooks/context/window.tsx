import { createContext } from "react";
import { WindowContextType } from "../../types/context/window";

export const WindowContext = createContext<WindowContextType | null>(null);

export const WindowContextProvider = ({
  device,
  children,
}: {
  device: string;
  children: React.ReactNode;
}) => {
  return (
    <WindowContext.Provider
      value={{
        device,
      }}
    >
      {children}
    </WindowContext.Provider>
  );
};
