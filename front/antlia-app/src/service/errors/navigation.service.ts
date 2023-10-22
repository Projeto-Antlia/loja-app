import { createRef } from "react";

export const navigationRef = createRef();

export function goToLogin() {
  navigationRef?.current.navigate("Rest");
}

export function navigate(name, params) {
  navigationRef?.current.navigate(name, params);
}