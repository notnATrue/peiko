export interface IAddNews {
	title: string;
	description: string;
	tags?: string[];
}

export interface IUpdateNews {
	id: string;
	title?: string;
	description?: string;
	tags?: string[];
}

export interface IFindOneNews {
	id: string;
}

export interface IDeleteNews {
	id: string;
}