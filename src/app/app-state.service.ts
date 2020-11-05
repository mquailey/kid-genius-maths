import { InjectionToken } from "@angular/core";

export let APP_STATE = new InjectionToken<AppState>("app.state");

export interface AppState {
	data: Map<string, Object>;
}

export const BaseAppState: AppState = {
	data: new Map()
};