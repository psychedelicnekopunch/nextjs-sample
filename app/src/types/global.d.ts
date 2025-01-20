declare class Chart {
	constructor(target: HTMLElement, option: object)
}

type DayJS = {
	format: () => string
}

declare function dayjs(): DayJS
