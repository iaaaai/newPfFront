import { FlattenSimpleInterpolation } from "styled-components";

export const mediaQuery = {
  superMin: (style: FlattenSimpleInterpolation): string => `@media screen and (max-width: 320px) {${style.join("")}}`,
  underMin: (style: FlattenSimpleInterpolation): string => `@media screen and (max-width: 374px) {${style.join("")}}`,
  underSp: (style: FlattenSimpleInterpolation): string => `@media screen and (max-width: 428px) {${style.join("")}}`,
  overSp: (style: FlattenSimpleInterpolation): string => `@media screen and (min-width: 429px) {${style.join("")}}`,
  underTablet: (style: FlattenSimpleInterpolation): string => `@media screen and (max-width: 768px) {${style.join("")}}`,
  overTablet: (style: FlattenSimpleInterpolation): string => `@media screen and (min-width: 769px) {${style.join("")}}`,
  underMinpc: (style: FlattenSimpleInterpolation): string => `@media screen and (min-width: 1023px) {${style.join("")}}`,
  overMinpc: (style: FlattenSimpleInterpolation): string => `@media screen and (min-width: 1024px) {${style.join("")}}`,
};
