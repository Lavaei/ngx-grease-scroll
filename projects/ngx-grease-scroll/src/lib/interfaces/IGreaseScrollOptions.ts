import {EasingType} from "../types/EasingType";

export interface IGreaseScrollOptions
{
  duration: number;
  offset: number;
  easing: EasingType;
  callbackBefore: (element: HTMLElement) => void;
  callbackAfter: (element:HTMLElement) => void;
  containerID: string;
  middleAlign: boolean;
}
