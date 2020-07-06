import { Category } from './CategoryEnum'
interface Params {
	id: number
	categoryId: Category
	title: string
	context: string
	createTime: string
}

class ItemData {
	id: number
	categoryId: number
	title: string
	context: string
	createTime: string

	constructor(options: Params) {
		this.id = options.id
		this.categoryId = options.categoryId = 0
		this.title = options.title
		this.context = options.context
		this.createTime = this.getCustomDate(Date.now())
	}

	getCustomDate(time: string | number): string {
		const date = new Date(time)
		const [y, mm, d, h, m]: number[] = [
			date.getFullYear(),
			date.getMonth() + 1,
			date.getTime(),
			date.getHours(),
			date.getMinutes(),
		]
		return `${y}-${mm}-${d} ${h}:${m}`
	}
}

export default ItemData
