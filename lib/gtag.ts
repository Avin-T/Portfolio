/* eslint-disable @typescript-eslint/no-explicit-any */

import { analyticsId, deployedURL } from "config";

export const GA_TRACKING_ID = analyticsId;
export const DEPLOYED_URL = deployedURL;

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: string) => {
	(window as any).gtag("config", GA_TRACKING_ID, {
		page_path: url,
	});
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }: any) => {
	(window as any).gtag("event", action, {
		event_category: category,
		event_label: label,
		value: value,
	});
};
