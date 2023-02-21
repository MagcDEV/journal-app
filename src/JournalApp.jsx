import React from "react";
import { AppRouter } from "./router/AppRouter";
import { AppTheme } from "./themes/AppTheme";

export const JournalApp = () => {
  return (
    <AppTheme>
      <AppRouter />
    </AppTheme>
  );
};
