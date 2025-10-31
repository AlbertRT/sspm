import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export type Services = {
	title: string;
	desc: string;
	details: {
		category: string;
		items: string[];
	}[];
};